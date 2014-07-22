/// <reference path='IAJAXTransportObject.ts'/>

module berek.jquery {
	export interface IAJAXTransportHandler {
		(options: IAJAXSettings, originalOptions: IAJAXSettings, jqXHR: IXHR): IAJAXTransportObject;
	}
}