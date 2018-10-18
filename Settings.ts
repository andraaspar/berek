import { Filter } from './Filter';

export class Settings {

	private static settings: { [s: string]: object[] } = {}
	private static filters: Filter[] = []

	static read(key: string): object[] {
		var result = this.settings[key] || []
		this.settings[key] = []
		return result
	}

	static write(key: string, value: object) {
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
					if (settings[i]) {
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
