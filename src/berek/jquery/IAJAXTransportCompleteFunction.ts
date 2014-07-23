module berek.jquery {
	export interface IAJAXTransportCompleteFunction {
		(status: number, statusText: string, responses?: any, headers?: string);
	}
}