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
            }
            return null;
        }
    },
    webpack: (config, { webpack }) => {
        // Tell webpack to ignore watching content files in the content folder.
        // Otherwise webpack receompiles the app and refreshes the whole page.
        // Instead, the src/pages/[...slug].js uses the "withRemoteDataUpdates"
        // function to update the content on the page without refreshing the
        // whole page
        config.plugins.push(new webpack.WatchIgnorePlugin([/\/content\//]));
        return config;
    }
};
