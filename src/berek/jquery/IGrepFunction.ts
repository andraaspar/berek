module berek.jquery {
	export interface IGrepFunction<T> {
		(elementOfArray: T, indexInArray: number): boolean;
	}
}