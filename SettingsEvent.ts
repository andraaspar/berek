import { IEventHandler } from 'illa/IEventHandler'
import { IllaEvent } from 'illa/IllaEvent'

export class SettingsEvent extends IllaEvent {
	
	constructor(type: string, target: IEventHandler, private key: string) {
		super(type, target)
	}
	
	getKey() { return this.key }
}