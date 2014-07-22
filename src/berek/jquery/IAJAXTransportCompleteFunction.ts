module berek.jquery {
	export interface IAJAXTransportCompleteFunction {
		(status: number, statusText: string, responses?: Object, headers?: string);
	}
}