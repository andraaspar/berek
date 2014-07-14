module berek.jquery {
	export interface IXHRFailFunction {
		(jqXHR: IXHR, textStatus: string, errorThrown: any);
	}
}