module berek.jquery {
	export interface IAJAXSuccessFunction {
		(event: IEvent, jqXHR: IXHR, ajaxOptions: IAJAXSettings, data: any);
	}
}