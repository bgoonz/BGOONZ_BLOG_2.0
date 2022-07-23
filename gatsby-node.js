<<<<<<< HEAD
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules']
        }
    });
};
=======
// const path = require('path');
// 
// exports.onCreateWebpackConfig = ({
//     actions
// }) => {
//     actions.setWebpackConfig({
//         resolve: {
//             modules: [path.resolve(__dirname, 'src'), 'node_modules']
//         }
//     });
// };
>>>>>>> b7125f1492d9a7af3a4bbfce41456b8babde644d
