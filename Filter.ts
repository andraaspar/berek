
export abstract class Filter {
	
	abstract getSettingsKey(): string
	
	abstract useSetting(setting: any): Promise<any>
}
