import PlayerType from "../PlayerType";
import {Message} from "network";

export default class PlayerTypeQuery extends Message{
	playerType: PlayerType;
}