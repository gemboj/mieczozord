console.log("Hello world!");

const web = require('./web/web');
var server = web.start();

const socket = require('./src/server/socket');
socket.start(server);