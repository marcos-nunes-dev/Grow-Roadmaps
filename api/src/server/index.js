import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { execute, subscribe } from 'graphql';
import { formatError } from 'apollo-errors';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import helmet from 'helmet';
import http from 'http';
import cors from 'cors';
import passport from 'passport';

import auth from '../auth';
import schema from '../graphql';

import * as utils from './utils';

const dev =
  (process.env.NODE_ENV || 'development').toLowerCase() === 'development';

const start = options => {
  return new Promise((resolve, reject) => {
    if (!options.port) {
      reject(new Error('The server must specify a port!'));
    }

    //--------------------
    // Server startup

    const app = express();
    if (dev) app.use(morgan('dev'));
    app.use(helmet());
    app.use(cors());

    // --------------------
    // Parsers

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //--------------------
    // Auth

    app.use(
      auth({
        expressApp: app,
        passport: passport,
        secret: process.env.SESSION_SECRET,
      })
    );

    //--------------------
    // GraphQL

    const apolloServer = new ApolloServer({
      schema,
      context: ({ req: { user } }) => ({
        user,
      }),
      formatError,
    });
    apolloServer.applyMiddleware({ app });

    //--------------------
    // Route test

    app.get('/', (req, res) => {
      res.send('Grow Roadmaps');
      res.end();
    });

    // catch 404
    app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    // error handler
    app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = dev ? err : {};
      res.status(err.status || 500).send();
    });

    //--------------------
    // Awake!

    const server = http.createServer(app);
    const normalizedPort = utils.normalizePort(options.port);
    server.listen(normalizedPort, () => {
      new SubscriptionServer(
        {
          execute,
          subscribe,
          schema,
        },
        {
          server,
        }
      );
    });
    server.on('error', utils.onError);
    server.on('listening', () => {
      resolve(server);
    });
  });
};

export default { start };
