/// <reference path='IAJAXTransportCompleteFunction.ts'/>

module berek.jquery {
	export interface IAJAXTransportObject {
		send(headers: Object, completeCallback: IAJAXTransportCompleteFunction);
		abort();
	}
}