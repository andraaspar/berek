module berek.jquery {
	export interface IAJAXCompleteFunction {
		(event: IEvent, jqXHR: IXHR, ajaxOptions: IAJAXSettings);
	}
}