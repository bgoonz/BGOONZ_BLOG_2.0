const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const pAll = require('p-all');
const axios = require('axios');
const chalk = require('chalk');

function downloadImage(url, outputFilePath) {
    console.log(chalk.gray('downloading image: ' + url));

    return axios({
        method: 'get',
        url: url,
        responseType: 'stream',
        timeout: 60 * 1000
    }).then(function (response) {
        response.data.pipe(fs.createWriteStream(outputFilePath));
        return new Promise((resolve, reject) => {
            response.data.on('end', () => {
                resolve({
                    url: url,
                    filename: path.parse(outputFilePath).base
                });
            });
            response.data.on('error', reject);
        });
    }).catch((err) => {
        // failure to download image is just a warning
        console.warn(err);
    });
}

function downloadAllImages(urls, outputDir) {
    console.log(chalk.gray('downloading images to ' + outputDir));
    
    const imageDownloads = urls.map((url) => {
        let filename = url.substring(url.lastIndexOf('/') + 1);
        const ext = path.extname(filename);
        if (_.isEmpty(ext) || ext === '.') {
            filename += '.jpg';
        }
        return () => downloadImage(url, path.join(outputDir, filename));
    });
    return pAll(imageDownloads, { concurrency: 1 });
}

module.exports = downloadAllImages;