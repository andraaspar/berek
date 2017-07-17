import { Filter } from './Filter'
import { isUndefinedOrNull } from 'illa/Type'

export class Settings {

	private static settings: { [s: string]: any[] } = {}
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
		return this.applyFilters()
	}

	static async applyFilters() {
		for (let filter of this.filters) {
			try {
				let settings = Settings.read(filter.getSettingsKey())
				let results: Promise<any>[] = []
				for (var i = 0, n = settings.length; i < n; i++) {
					if (!isUndefinedOrNull(settings[i])) {
						try {
							let promise = filter.useSetting(settings[i])
							if (promise) results.push(promise)
						} catch (e) {
							console.error(e)
						}
					}
				}
				await Promise.all(results)
			} catch (e) {
				console.error(e)
			}
		}
	}

	static addFilters(...filters: Filter[]) {
		this.filters = this.filters.concat(filters)
		return this.applyFilters()
	}
}