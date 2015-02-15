/// <reference path='../../lib/illa/Event.ts'/>

module berek {
	export class SettingsEvent extends illa.Event {
		
		constructor(type: string, target: illa.IEventHandler, private key: string) {
			super(type, target);
		}
		
		getKey() { return this.key }
	}
}