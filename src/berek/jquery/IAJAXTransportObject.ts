/// <reference path='IAJAXTransportCompleteFunction.ts'/>

module berek.jquery {
	export interface IAJAXTransportObject {
		send(headers: any, completeCallback: IAJAXTransportCompleteFunction);
		abort();
	}
}