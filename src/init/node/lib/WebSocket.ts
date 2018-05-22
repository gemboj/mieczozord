import Web from "./Web";
import * as SocketIO from 'socket.io';
import PlayerTypeQuery from "../../common/messages/PlayerTypeQuery";
import PlayerType from "../../common/PlayerType";

export default class WebSocket{
	constructor(webServer: Web){
		let server: SocketIO.Server = SocketIO(webServer.server);

		server.on('connection', function(socket){
			console.log('a user connected');

			socket.on('test', function(m){
				console.log('test12');
				let typeQuery = new PlayerTypeQuery();
				typeQuery.playerType = PlayerType.CLIENT;
				socket.send(typeQuery);
			})
		});
	}
}