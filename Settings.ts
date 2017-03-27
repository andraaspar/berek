import { EventHandler } from 'illa/EventHandler'
import { Filter } from './Filter'
import { SettingsEvent } from './SettingsEvent'
import { error } from 'illa/Log'

export const EVENT_WRITTEN = 'berek.Settings.EVENT_WRITTEN'

export class Settings {
	
	private static eventBus: EventHandler = new EventHandler()
	private static settings: {[s: string]: any[]} = {}
	private static filters: Filter[] = []
	
	static read(key: string): any[] {
		var result = this.settings[key] || []
		this.settings[key] = []
		return result
	}
	
	static write(key: string, value: any) {
		if (this.settings[key]) {
			this.settings[key].push(value)
		} else {
			this.settings[key] = [value]
		}
		return new SettingsEvent(EVENT_WRITTEN, this.eventBus, key).dispatch()
	}
	
	static async applyFilters() {
		for (let filter of this.filters) {
			try {
				await filter.apply()
			} catch (e) {
				error(e)
			}
		}
	}
	
	static getEventBus(): EventHandler {
		return this.eventBus
	}
	
	static addFilters(...filters: Filter[]) {
		this.filters = this.filters.concat(filters)
		return this.applyFilters()
	}
}