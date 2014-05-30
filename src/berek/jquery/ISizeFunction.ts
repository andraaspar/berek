module berek.jquery {
	export interface ISizeFunctionNumber {
		(index: number, size: number): number;
	}
	export interface ISizeFunctionString {
		(index: number, size: number): string;
	}
}