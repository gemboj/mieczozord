import WebSocket from "./init/browser/lib/WebSocket";
import WebSocketFactory from "./init/browser/lib/WebSocketFactory";
import PlayerTypeQuery from "./init/common/messages/PlayerTypeQuery";
import PlayerType from "./init/common/PlayerType";

let socketFactory = new WebSocketFactory();
let webSocket = socketFactory.createReliableSocket();
webSocket.connect();

webSocket.registerEvent(PlayerTypeQuery, (data: PlayerTypeQuery) => {
	switch(data.playerType){
		case PlayerType.HOST:

			break;
		case PlayerType.CLIENT:

			break;
		default:
			console.log("invalid player type");
	}
});