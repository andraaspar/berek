module berek.jquery {
	export interface IAJAXErrorFunction {
		(event: IEvent, jqXHR: IXHR, ajaxOptions: IAJAXSettings, thrownError: string);
	}
}