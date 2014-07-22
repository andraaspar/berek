module berek.jquery {
	export interface IAJAXPrefilterFunction {
		(options: IAJAXSettings, originalOptions: IAJAXSettings, jqXHR: IXHR);
	}
}