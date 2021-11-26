Deploy React App To Heroku Using Postgres & Express
===================================================

Heroku is an web application that makes deploying applications easy for a beginner.

------------------------------------------------------------------------

### Deploy React App To Heroku Using Postgres & Express

Heroku is an web application that makes deploying applications easy for a beginner.

Before you begin deploying, make sure to remove any `console.log`'s or `debugger`'s in any production code. You can search your entire project folder if you are using them anywhere.

You will set up Heroku to run on a production, not development, version of your application. When a Node.js application like yours is pushed up to Heroku, it is identified as a Node.js application because of the `package.json` file. It runs `npm install` automatically. Then, if there is a `heroku-postbuild` script in the `package.json` file, it will run that script. Afterwards, it will automatically run `npm start`.

In the following phases, you will configure your application to work in production, not just in development, and configure the `package.json` scripts for `install`, `heroku-postbuild` and `start` scripts to install, build your React application, and start the Express production server.

### Phase 1: Heroku Connection

If you haven’t created a Heroku account yet, create one <a href="https://signup.heroku.com/" class="markup--anchor markup--p-anchor">here</a>.

Add a new application in your <a href="https://dashboard.heroku.com/" class="markup--anchor markup--p-anchor">Heroku dashboard</a> named whatever you want. Under the “Resources” tab in your new application, click “Find more add-ons” and add the “Heroku Postgres” add-on with the free Hobby Dev setting.

In your terminal, install the <a href="https://devcenter.heroku.com/articles/heroku-command-line" class="markup--anchor markup--p-anchor">Heroku CLI</a>. Afterwards, login to Heroku in your terminal by running the following:

    heroku login

Add Heroku as a remote to your project’s git repository in the following command and replace `<name-of-Heroku-app>` with the name of the application you created in the <a href="https://dashboard.heroku.com/" class="markup--anchor markup--p-anchor">Heroku dashboard</a>.

    heroku git:remote -a <name-of-Heroku-app>

Next, you will set up your Express + React application to be deployable to Heroku.

### Phase 2: Setting up your Express + React application

Right now, your React application is on a different localhost port than your Express application. However, since your React application only consists of static files that don’t need to bundled continuously with changes in production, your Express application can serve the React assets in production too. These static files live in the `frontend/build` folder after running `npm run build` in the `frontend` folder.

Add the following changes into your `backend/routes.index.js` file.

At the root route, serve the React application’s static `index.html` file along with `XSRF-TOKEN` cookie. Then serve up all the React application's static files using the `express.static` middleware. Serve the `index.html` and set the `XSRF-TOKEN` cookie again on all routes that don't start in `/api`. You should already have this set up in `backend/routes/index.js` which should now look like this:

    // backend/routes/index.js
    const express = require('express');
    const router = express.Router();
    const apiRouter = require('./api');

    router.use('/api', apiRouter);

    // Static routes
    // Serve React build files in production
    if (process.env.NODE_ENV === 'production') {
      const path = require('path');
      // Serve the frontend's index.html file at the root route
      router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
          path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
      });

      // Serve the static assets in the frontend's build folder
      router.use(express.static(path.resolve("../frontend/build")));

      // Serve the frontend's index.html file at all other routes NOT starting with /api
      router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
          path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
      });
    }

    // Add a XSRF-TOKEN cookie in development
    if (process.env.NODE_ENV !== 'production') {
      router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.status(201).json({});
      });
    }

    module.exports = router;

Your Express backend’s `package.json` should include scripts to run the `sequelize` CLI commands.

The `backend/package.json`'s scripts should now look like this:

    "scripts": {
        "sequelize": "sequelize",
        "sequelize-cli": "sequelize-cli",
        "start": "per-env",
        "start:development": "nodemon -r dotenv/config ./bin/www",
        "start:production": "node ./bin/www"
      },

Initialize a `package.json` file at the very root of your project directory (outside of both the `backend` and `frontend` folders). The scripts defined in this `package.json` file will be run by Heroku, not the scripts defined in the `backend/package.json` or the `frontend/package.json`.

When Heroku runs `npm install`, it should install packages for both the `backend` and the `frontend`. Overwrite the `install` script in the root `package.json` with:

    npm --prefix backend install backend && npm --prefix frontend install frontend

This will run `npm install` in the `backend` folder then run `npm install` in the `frontend` folder.

Next, define a `heroku-postbuild` script that will run the `npm run build` command in the `frontend` folder. Remember, Heroku will automatically run this script after running `npm install`.

Define a `sequelize` script that will run `npm run sequelize` in the `backend` folder.

Finally, define a `start` that will run `npm start` in the \`backend folder.

The root `package.json`'s scripts should look like this:

    "scripts": {
        "heroku-postbuild": "npm run build --prefix frontend",
        "install": "npm --prefix backend install backend && npm --prefix frontend install frontend",
        "dev:backend": "npm install --prefix backend start",
        "dev:frontend": "npm install --prefix frontend start",
        "sequelize": "npm run --prefix backend sequelize",
        "sequelize-cli": "npm run --prefix backend sequelize-cli",
        "start": "npm start --prefix backend"
      },

The `dev:backend` and `dev:frontend` scripts are optional and will not be used for Heroku.

Finally, commit your changes.

### Phase 3: Deploy to Heroku

Once you’re finished setting this up, navigate to your application’s Heroku dashboard. Under “Settings” there is a section for “Config Vars”. Click the `Reveal Config Vars` button to see all your production environment variables. You should have a `DATABASE_URL` environment variable already from the Heroku Postgres add-on.

Add environment variables for `JWT_EXPIRES_IN` and `JWT_SECRET` and any other environment variables you need for production.

You can also set environment variables through the Heroku CLI you installed earlier in your terminal. See the docs for <a href="https://devcenter.heroku.com/articles/config-vars" class="markup--anchor markup--p-anchor">Setting Heroku Config Variables</a>.

Push your project to Heroku. Heroku only allows the `master` branch to be pushed. But, you can alias your branch to be named `master` when pushing to Heroku. For example, to push a branch called `login-branch` to `master` run:

    git push heroku login-branch:master

If you do want to push the `master` branch, just run:

    git push heroku master

You may want to make two applications on Heroku, the `master` branch site that should have working code only. And your `staging` site that you can use to test your work in progress code.

Now you need to migrate and seed your production database.

Using the Heroku CLI, you can run commands inside of your production application just like in development using the `heroku run` command.

For example to migrate the production database, run:

    heroku run npm run sequelize db:migrate

To seed the production database, run:

    heroku run npm run sequelize db:seed:all

Note: You can interact with your database this way as you’d like, but beware that `db:drop` cannot be run in the Heroku environment. If you want to drop and create the database, you need to remove and add back the "Heroku Postgres" add-on.

Another way to interact with the production application is by opening a bash shell through your terminal by running:

    heroku bash

In the opened shell, you can run things like `npm run sequelize db:migrate`.

Open your deployed site and check to see if you successfully deployed your Express + React application to Heroku!

If you see an `Application Error` or are experiencing different behavior than what you see in your local environment, check the logs by running:

    heroku logs

If you want to open a connection to the logs to continuously output to your terminal, then run:

    heroku logs --tail

The logs may clue you into why you are experiencing errors or different behavior.

#### If you found this guide helpful feel free to checkout my github/gists where I host similar content:

<a href="https://gist.github.com/bgoonz" class="markup--anchor markup--p-anchor">bgoonz’s gists · GitHub</a>

<a href="https://github.com/bgoonz" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://github.com/bgoonz"><strong>bgoonz — Overview</strong><br />
<em>Web Developer, Electrical Engineer JavaScript | CSS | Bootstrap | Python | React | Node.js | Express | Sequelize…</em>github.com</a><a href="https://github.com/bgoonz" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

### Alternate Instructions:

### Deploy MERN App To Heroku:

#### Source: <a href="https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb" class="markup--anchor markup--h4-anchor">Article</a>

### Discover More:

<a href="https://bgoonz-blog.netlify.app/" class="markup--anchor markup--mixtapeEmbed-anchor" title="https://bgoonz-blog.netlify.app/"><strong>Web-Dev-Hub</strong><br />
<em>Memoization, Tabulation, and Sorting Algorithms by Example Why is looking at runtime not a reliable method of…</em>bgoonz-blog.netlify.app</a><a href="https://bgoonz-blog.netlify.app/" class="js-mixtapeImage mixtapeImage u-ignoreBlock"></a>

By <a href="https://medium.com/@bryanguner" class="p-author h-card">Bryan Guner</a> on [March 5, 2021](https://medium.com/p/70b7ea807986).

<a href="https://medium.com/@bryanguner/deploy-react-app-to-heroku-using-postgres-express-70b7ea807986" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on August 31, 2021.
