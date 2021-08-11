#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const importer = require('../src/importer');
const chalk = require('chalk');


let argv = yargs
    .usage('Usage: $0 --input-file=<input-file> --output-dir=<output-dir> --concurrency=<concurrency> --download-images=<download-images> --import-drafts=<import-drafts>')
    .example(
        '$0 -i medium-export.zip -o output/',
        'Convert export located in "medium-export.zip" into Stackbit readable format saved to "output/"'
    )
    .alias('input-file', 'i')
    .alias('output-dir', 'o')
    .alias('concurrency', 'c')
    .alias('download-images', 'd')
    .alias('import-drafts', 'r')
    .describe('input-file', 'medium export zip file')
    .describe('output-dir', 'target folder for the converted files')
    .describe('concurrency', 'number of posts to process in parallel')
    .describe('download-images', 'should images be downloaded')
    .describe('import-drafts', 'should drafts be imported')
    .default('concurrency', 1)
    .default('download-images', true)
    .default('import-drafts', true)
    .demandOption(['input-file', 'output-dir'])
    .wrap(null)
    .argv;

const inputFilename = argv['inputFile'];
const outputDir = argv['outputDir'];
const concurrency = argv['concurrency'];
const shouldDownloadImages = argv['downloadImages'] !== 'false';
const shouldImportDrafts = argv['importDrafts'] && argv['importDrafts'] !== 'false';

const contentDir = path.join(outputDir, 'content');
const postsDir = path.join(contentDir, 'posts');

const staticDir = path.join(outputDir, 'static');
const imagesDir = path.join(staticDir, 'images');

const dataDir = path.join(outputDir, 'data');
const dataFile = path.join(dataDir, 'data.json');

const originalDir = path.join(outputDir, 'original');

[outputDir, dataDir, staticDir, contentDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});

importer.doImport(inputFilename, postsDir, imagesDir, dataFile, originalDir, shouldDownloadImages, shouldImportDrafts, concurrency).then(() => {
    console.log(chalk.green.bold('Done importing'));
}).catch(error => {
    console.error(chalk.red(error.message));
});
