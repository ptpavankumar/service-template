#!/usr/bin/env node

const http = require('http');
const path = require('path');

const app = require('./app');

const server = http.createServer(app);
const port = process.env.PORT || '3000';

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
};

const mount = (expressApp, base, handler) => {
  if (base) {
    expressApp.use(base, handler);
  } else {
    expressApp.use(handler);
  }
};

const routerPath = process.argv[2];
console.log(process.argv);

console.log(path.resolve(routerPath));
const absolutePath = require(path.resolve(routerPath));

mount(app, process.env.MOUNT_PATH, absolutePath);

app.set('port', port);
server.listen(port);
server.on('listening', onListening);
