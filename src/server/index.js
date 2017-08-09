import express from 'express'
import session from 'express-session'

import compression from 'compression'
import mongoose from 'mongoose'
import connectMongo from 'connect-mongo'
import bodyParser from 'body-parser'
import path from 'path'
import passport from 'passport'

import React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import webpack from 'webpack'
import config from '../../webpack/webpack.config.dev'

import modas from './moda/routes'
import auth from './auth/routes'
import configurePassport from './auth/passport'
import secrets from './auth/secrets'
import fetchComponentData from './util/fetchData'

import configureStore from '../client/store'
import { createRoutes } from '../client/routes'
import serverConfig from './config'


const app = express();
const MongoStore = connectMongo(session)
const sess = {
  resave: true,
  saveUninitialized: true,
  secret: secrets.sessionSecret,
  proxy: false,
  name: "sessionId",
  cookie: {
    httpOnly: true,
    secure: false
  },
  store: new MongoStore({
    url: secrets.db,
    autoReconnect: true
  })
}

configurePassport(app, passport)

if (process.env.NODE_ENV === 'development') {
  config['entry'] = {
    app: [
      'react-hot-loader/patch',
      './src/client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  }
  config['output'] = {
    path: path.resolve(__dirname, '../../build'),
    filename: 'app.js',
    publicPath: 'http://localhost:8000/',
  }

  const compiler = webpack(config)

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  app.use(require("webpack-hot-middleware")(compiler))
}

mongoose.Promise = global.Promise;
mongoose.connect(serverConfig.mongoURL, {useMongoClient: true}, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  //if (process.env.NODE_ENV === 'development') dummyData();
});

app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session())

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use('/api', modas)
app.use('/auth', auth)

const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();

  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />
      </head>
      <body>
        <div id="root"><div>${html}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          ${process.env.NODE_ENV === 'production' ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

const store = configureStore()
const routes = createRoutes(store)

app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore();

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        const finalState = store.getState();

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState));
      })
      .catch((error) => next(error));
  });
});

app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`MODA Portal is running on port ${serverConfig.port}`); // eslint-disable-line
  }
});

export default app;
