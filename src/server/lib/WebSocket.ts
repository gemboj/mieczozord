import Web from "./Web";

declare let require;

export default class SocketIO{
	constructor(webServer: Web){
		let io = require('socket.io')(webServer.server);

		io.on('connection', function(socket){
			console.log('a user connected');
		});
	}
}