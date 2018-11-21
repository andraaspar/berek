import { isUndefinedOrNull } from 'illa/Type'
import jQuery from 'jquery-ts'

export abstract class Filter {
	
	abstract getSettingsKey(): string
	
	abstract useSetting(setting: any): Promise<any>
}