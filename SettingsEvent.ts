import Event from 'illa/Event';
import IEventHandler from 'illa/IEventHandler';

export class SettingsEvent extends Event {
	
	constructor(type: string, target: IEventHandler, private key: string) {
		super(type, target);
	}
	
	getKey() { return this.key }
}

export default SettingsEvent;