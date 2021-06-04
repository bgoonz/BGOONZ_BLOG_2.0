# REACT ENVIORMENT

First thing we need to do is setup our development environment and hook up React. Our end goal will be to get a basic message up on screen. Let's create a new directory and download the packages we need.

```text
mkdir starwars_api
cd starwars_api
npm init -y
npm install --save react react-dom redux react-redux redux-thunk
npm install --save-dev babel-core babel-preset-es2015 babel-preset-react webpack@2.1.0-beta.27 file-loader babel-loader webpack-dev-server@2.1.0-beta.11 react-hot-loader@3.0.0-beta.6
```

Now let's create our entrance file. Create a file at `src/app.js` and put the following in it.

```text
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

require('./index.html');

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>
      , container
    );
  });
}
```

We are displaying a central `App` component. So let's create it! Create a file at `src/components/App.js` and put the following in it.

```text
import React from 'react';

const App = () =>
  <div className='container'>
    <div className='row'>
      Hello, World!
    </div>
  </div>;

export default App;
```

We also need to create our `index.html` file that we are including in our `app.js` file. Create a file at `src/index.html` and put the following in it.

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Star Wars</title>

  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

  <style>
    h1 {
      font-size: 30px;
      font-weight: 200;
    }

    h2 {
      font-size: 22px;
      margin-top: 5px;
    }

    ul {
      padding-left: 15px;
    }
  </style>
</head>
<body>
  <div id="app-container"></div>
  <script src="app.bundle.js"></script>
</body>
</html>
```

This is a basic HTML page. We are including Bootstrap and its basic theme for some simple styles. We also are adding some styles in a `style` tag to help with the sizing of some elements. In the `body` , we are adding our container element and our main app bundle.

Now that we have all that setup, let's create a webpack config that we can use to build our project. Create a file in the root of your project called `webpack.config.js` and put the following in it.

```text
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
};
```

Here we are exporting our config object like normal. We point webpack to start at our `app.js` file and tell everything to output to a `build` directory. We run all HTML files though the file loader. This essentially just moves the file to our `build` directory. Also, we run our JS files through the babel loader to make sure they are transpiled to code that most browsers these days understand. Lastly, we are including a plugin that will give us pretty output in the console.

Let's create a `.babelrc` file to configure babel.

```text
{
  "presets": [
    ["es2015", { "modules": false }],
    "react"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```

Last thing. Let's create some npm scripts so that we don't need to remember the commands we need to run our application. Add the following scripts to your `package.json` file in the `scripts` section.
