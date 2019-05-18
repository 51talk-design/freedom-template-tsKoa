#!/usr/bin/env node

const UseKoaServer = require("freedom-routing-controllers");
/**
 * Module dependencies.
 */
const app = require('./init.js');
const debug = require('debug')('koa2:server');
const http = require('http');
var colors = require("colors");

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '9898');
// app.set('port', port);

/**
 * Create HTTP server.
 */
//var server = http.createServer(app.callback());
//var server = UseKoaServer.useKoaServer(app);
var server = app;

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log((`please access koa server http://localhost:${port}`).bold.green);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
