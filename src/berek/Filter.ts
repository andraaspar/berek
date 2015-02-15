/// <reference path='Settings.ts'/>

module berek {
	export class Filter {
		
		constructor() {
			Settings.getInstance().addEventCallback(Settings.EVENT_WRITTEN, this.onSettingWritten, this);
			this.apply();
		}
		
		protected getSettingsKey(): string { throw 'Unimplemented.' }
		
		protected useSetting(setting: any): void { throw 'Unimplemented.' }
		
		apply(): void {
			var settings = Settings.read(this.getSettingsKey());
			for (var i = 0, n = settings.length; i < n; i++) {
				if (!illa.isUndefinedOrNull(settings[i])) {
					this.useSetting(settings[i]);
				}
			}
		}
		
		onSettingWritten(e: SettingsEvent): void {
			if (e.getKey() == this.getSettingsKey()) this.apply();
		}
		
		getJQueryById(id: string): jQuery.IInstance {
			return jQuery(document.getElementById(id + ''));
		}
	}
}