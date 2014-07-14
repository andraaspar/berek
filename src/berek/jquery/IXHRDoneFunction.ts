module berek.jquery {
	export interface IXHRDoneFunction {
		(data: any, textStatus: string, jqXHR: IXHR);
	}
}