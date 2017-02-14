#!/usr/bin/env node

const http = require('http');
const path = require('path');

const app = require('./app');
const healthRoute = require('./healthcheck');

const server = http.createServer(app);
const port = process.env.PORT || '3000';

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`); // eslint-disable-line no-console
};

const mount = (expressApp, base, handler) => {
  if (base) {
    expressApp.use(base, handler);
  } else {
    expressApp.use(handler);
  }
};

const routerPath = process.argv[2];
const route = require(path.resolve(routerPath)); // eslint-disable-line import/no-dynamic-require

mount(app, process.env.MOUNT_PATH, route);
mount(app, process.env.MOUNT_PATH, healthRoute);

app.set('port', port);
server.listen(port);
server.on('listening', onListening);
