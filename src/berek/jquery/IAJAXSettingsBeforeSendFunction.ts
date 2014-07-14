module berek.jquery {
	export interface IAJAXSettingsBeforeSendFunction {
		(jqXHR: IXHR, settings: Object);
	}
}