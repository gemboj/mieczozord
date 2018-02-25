declare let require;

export default class SocketIO{
	constructor(server){
		let io = require('socket.io')(server);

		io.on('connection', function(socket){
			console.log('a user connected');
		});
	}
}