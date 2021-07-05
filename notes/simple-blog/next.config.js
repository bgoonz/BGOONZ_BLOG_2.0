const path = require('path');
const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
    trailingSlash: true,
    devIndicators: {
        autoPrerender: false
    },
    sassOptions: {
        // scss files might import plain css files from the "public" folder:
        // @import "example.css";
        // the importer function rewrites path to these files relative to the scss file:
        // @import "../../public/assets/css/example.css";
        importer: (url, prev, done) => {
            if (/\.css$/i.test(url)) {

                return { file: path.join('../../public/css', url) };

           