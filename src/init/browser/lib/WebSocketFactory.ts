import Socket from "../../../network/Socket";
import WebSocket from "./WebSocket";

export default class WebSocketFactory{
	createReliableSocket(): Socket {
		return new WebSocket();
	}

	createUnreliableSocket(): Socket {
		return new WebSocket();
	}

}
