import { EVENT_WRITTEN } from './Settings'
import { Settings } from './Settings'
import { SettingsEvent } from './SettingsEvent'
import { error } from 'illa/Log'
import { isUndefinedOrNull } from 'illa/Type'
import jQuery from 'jquery-ts'

export abstract class Filter {
	
	constructor() {
		Settings.getEventBus().addEventCallback(EVENT_WRITTEN, this.onSettingWritten, this)
	}
	
	protected abstract getSettingsKey(): string
	
	protected abstract useSetting(setting: any): Promise<any>
	
	apply(): Promise<any> {
		var settings = Settings.read(this.getSettingsKey())
		let results: Promise<any>[] = []
		for (var i = 0, n = settings.length; i < n; i++) {
			if (!isUndefinedOrNull(settings[i])) {
				try {
					let promise = this.useSetting(settings[i])
					if (promise) results.push(promise)
				} catch (e) {
					error(e)
				}
			}
		}
		return Promise.all(results)
	}
	
	onSettingWritten(e: SettingsEvent) {
		if (e.getKey() == this.getSettingsKey()) return this.apply()
		else return Promise.resolve()
	}
	
	getJQueryById(id: string): jQuery.IInstance {
		var result = document.getElementById(id + '')
		if (result) return jQuery(result)
		else return null
	}
}