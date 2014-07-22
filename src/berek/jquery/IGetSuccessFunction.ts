module berek.jquery {
	export interface IGetSuccessFunction {
		(data: any, textStatus: string, jqXHR: IXHR);
	}
}