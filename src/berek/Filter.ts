/// <reference path='Settings.ts'/>

module berek {
	export abstract class Filter {
		
		constructor() {
			Settings.getInstance().addEventCallback(Settings.EVENT_WRITTEN, this.onSettingWritten, this);
			this.apply();
		}
		
		protected abstract getSettingsKey(): string;
		
		protected abstract useSetting(setting: any): void;
		
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
			var result = document.getElementById(id + '');
			if (result) return jQuery(result);
			else return null;
		}
	}
}