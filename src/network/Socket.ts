import Connectable from "./Connectable";
import Message from "./messages/Message";

interface EventData{
	messageClass;
	callback;
}

export default abstract class Socket{
	private events:{[key:string]:EventData[]} = {};

	abstract send(data: Message);
	abstract connect(target?: Connectable);
	abstract disconnect();

	protected triggerEvent<T extends Message>(message: T){
		var events:EventData[] = this.events[message.constructor.name];
		events.forEach((event) => event.callback(message));
	}

	registerEvent<T extends Message>(clazz: {new (): T}, callback: (data: T) => void){
		var event:EventData[] = this.events[clazz.name];
		if(event === undefined){
			event = [];
		}

		event.push({messageClass: clazz, callback: callback});
		this.events[clazz.name] = event;
	}
}