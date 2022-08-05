<<<<<<< HEAD
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
=======
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
>>>>>>> f4594b19594599756372b62212ee4796747e0825
