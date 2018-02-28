import Web from "./Web";
import * as SocketIO from 'socket.io';


export default class WebSocket{
	constructor(webServer: Web){
		let server: SocketIO.Server = SocketIO(webServer.server);

		server.on('connection', function(socket){
			console.log('a user connected');
		});
	}
}