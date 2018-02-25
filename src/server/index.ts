import SocketIO from "./lib/socketio";

declare let require;
const web = require('../../web/web');
var server = web.start();

new SocketIO(server);