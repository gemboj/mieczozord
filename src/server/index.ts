import SocketIO from "./lib/WebSocket";
import Web from "./lib/Web";

let web = new Web();
new SocketIO(web);