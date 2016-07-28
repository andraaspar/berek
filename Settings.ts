import EventHandler from 'illa/EventHandler';
import SettingsEvent from './SettingsEvent';

export const EVENT_WRITTEN = 'berek.Settings.EVENT_WRITTEN';

export class Settings extends EventHandler {
	
	private static instance = new Settings();
	
	private settings: {[s: string]: any[]} = {};
	
	static getInstance() { return this.instance }
	
	static read(key: string): any[] {
		var result = this.instance.settings[key] || [];
		this.instance.settings[key] = [];
		return result;
	}
	
	static write(key: string, value: any): void {
		if (this.instance.settings[key]) {
			this.instance.settings[key].push(value);
		} else {
			this.instance.settings[key] = [value];
		}
		new SettingsEvent(EVENT_WRITTEN, this.instance, key).dispatch();
	}
}

export default Settings;