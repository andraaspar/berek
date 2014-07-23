module berek.jquery {
	export interface ILoadCompleteFunction {
		(responseText: string, textStatus: string, jqXHR: IXHR);
	}
}