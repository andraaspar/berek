import { EVENT_WRITTEN } from './Settings'
import { Settings } from './Settings'
import { SettingsEvent } from './SettingsEvent'
import { isUndefinedOrNull } from 'illa/Type'
import jQuery from 'jquery-ts'

export abstract class Filter {
	
	constructor() {
		Settings.getInstance().addEventCallback(EVENT_WRITTEN, this.onSettingWritten, this)
		this.apply()
	}
	
	protected abstract getSettingsKey(): string
	
	protected abstract useSetting(setting: any): void
	
	apply(): void {
		var settings = Settings.read(this.getSettingsKey())
		for (var i = 0, n = settings.length; i < n; i++) {
			if (!isUndefinedOrNull(settings[i])) {
				this.useSetting(settings[i])
			}
		}
	}
	
	onSettingWritten(e: SettingsEvent): void {
		if (e.getKey() == this.getSettingsKey()) this.apply()
	}
	
	getJQueryById(id: string): jQuery.IInstance {
		var result = document.getElementById(id + '')
		if (result) return jQuery(result)
		else return null
	}
}