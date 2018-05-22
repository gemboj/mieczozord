import * as SocketIO from 'socket.io-client';
import Socket from "../../../network/Socket";
import Connectable from "../../../network/Connectable";

export default class WebSocket extends Socket{

	private webSocket;

	disconnect() {
	}


	connect(target?: Connectable) {
		this.webSocket = SocketIO();
		this.webSocket.on('message', (data) =>{
			console.log('PlayerTypeQuery');
			let a = 5;
		})

		this.webSocket.on('connect', () => {
			console.log('connected')
			this.send();
		})
	}


	send() {
		this.webSocket.emit('test', 'test');
	}
}