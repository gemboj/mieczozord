console.log("Hello world!");

const web = require('../../web/web');
var server = web.start();

const socket = require('./socket');
socket.start(server);