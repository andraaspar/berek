module berek.jquery {
	export interface IAttrFunctionString {
		(index: number, attr: string): string;
	}

	export interface IAttrFunctionNumber {
		(index: number, attr: string): number;
	}
}