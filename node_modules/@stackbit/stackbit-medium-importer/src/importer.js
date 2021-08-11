const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const pAll = require('p-all');
const unzipper = require('unzipper');
const matter = require('gray-matter');
const chalk = require('chalk');

const Errors = require('./errors');
const Post = require('./model/post');
const Profile = require('./model/profile');
const downloadImages = require('./image-downloader');
const convertHtml = require('./converter');

function unzipInput(inputFilePath, outputDir) {
    return fs.createReadStream(inputFilePath)
        .pipe(unzipper.Extract({ path: outputDir }))
        .promise()
        .catch((err) => {
            console.error(err);
            throw Errors.InvalidZip;
        });
}

function processPost(postFilePath, outputDir, assetsDir, shouldDownloadImages, shouldImportDrafts) {
    console.log(chalk.bold('processing post ' + postFilePath));

    const post = new Post(fs.readFileSync(postFilePath));

    const fileName = path.parse(postFilePath).name;
    if (!shouldImportDrafts && fileName.startsWith('draft_')) {
        console.log('skipping draft: ' + fileName);
        return Promise.resolve();
    }

    const slug = fileName
        .substring(0, fileName.lastIndexOf('-'))
        .substring(fileName.indexOf('_') + 1)
        .replace(/-+$/, '')
        .substring(0, 200);
    const imagesDir = path.join(assetsDir, slug);

    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir);
    }

    const imageUrls = post.imageUrls;

    const downloadPromise = shouldDownloadImages 
        ? downloadImages(imageUrls, imagesDir)
        : Promise.resolve([]); 

    return downloadPromise.then((results) => {

        const images = results.filter(Boolean);
        const imageMap = new Map(images.map(item => [item.url, item.filename]));

        const thumbPath = _.isEmpty(images) 
            ? (_.isEmpty(imageUrls) ? null : imageUrls[0])
            : `images/${slug}/${images[0].filename}`;

        const bodyMarkdown = convertHtml(post.bodyHtml, slug, imageMap);

        const data = {
            template: 'post',
            title: post.title,
            date: post.publishDate || new Date()
        };

        if (post.subtitle) {
            data.subtitle = post.subtitle;
        }
        if (post.excerpt) {
            data.excerpt = post.excerpt;
        }
        if (thumbPath) {
            data.thumb_img_path = thumbPath;
        }
        if (post.splashImageUrl) {
            data.content_img_path = imageMap.has(post.splashImageUrl) 
                ? `images/${slug}/${imageMap.get(post.splashImageUrl)}`
                : post.splashImageUrl;
        }

        const outputFilename = path.join(outputDir, `${slug}.md`);
        const yamlContent = matter.stringify(bodyMarkdown, data);
        fs.writeFileSync(outputFilename, yamlContent);

        console.log('done with ' + outputFilename);
    });
}

function processPosts(inputDir, outputDir, assetsDir, concurrency, shouldDownloadImages, shouldImportDrafts) {
    if (!fs.existsSync(inputDir)) {
        throw Errors.EmptyInput;
    }
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir);
    }

    const postFiles = fs.readdirSync(inputDir);

    if (_.isEmpty(postFiles)) {
        throw Errors.EmptyInput;
    }

    return pAll(postFiles.map((filename) => {
        return () => processPost(path.join(inputDir, filename), outputDir, assetsDir, shouldDownloadImages, shouldImportDrafts);
    }), { concurrency: concurrency });
}

function processProfile(inputFile, dataFile, assetsDir) {
    console.log(chalk.bold('processing profile ' + inputFile));

    if (!fs.existsSync(inputFile)) {
        console.log('no profile file');
        return Promise.resolve();
    }

    const profile = new Profile(fs.readFileSync(inputFile));

    let data = {
        author: {},
        social: {}
    };

    if (profile.name) {
        data.author.name = profile.name;
    }
    if (profile.email) {
        data.author.email = profile.email;
    }
    if (profile.twitterUsername) {
        data.social.twitter = {
            username: profile.twitterUsername,
            url: `https://twitter.com/${profile.twitterUsername}`
        };
    }
    
    const avatarUrl = profile.avatarUrl;
    if (avatarUrl) {
        return downloadImages([avatarUrl], assetsDir).then((results) => {
            const filename = _.get(results, '[0].filename');
            if (filename) {
                fs.renameSync(
                    path.join(assetsDir, filename), 
                    path.join(assetsDir, 'avatar.png')
                );
                data.author.avatar = 'images/avatar.png';
                fs.writeFileSync(dataFile, JSON.stringify(data));
            }
        });
    }

    fs.writeFileSync(dataFile, JSON.stringify(data));

    return Promise.resolve();
}

function doImport(inputFilePath, postsDir, imagesDir, dataFile, originalDir, shouldDownloadImages=true, shouldImportDrafts=false, concurrency=1) {
    if (!fs.existsSync(inputFilePath)) {
        return Promise.reject(Errors.InputFileNotFound);
    }
    
    return unzipInput(inputFilePath, originalDir).then(() => {
        return processPosts(
            path.join(originalDir, 'posts'), 
            postsDir, 
            imagesDir,
            concurrency,
            shouldDownloadImages,
            shouldImportDrafts
        );
    }).then(() => {
        if (dataFile) {
            return processProfile(
                path.join(originalDir, 'profile/profile.html'),
                dataFile,
                imagesDir
            );
        }
    });
}

module.exports = {
    doImport
};