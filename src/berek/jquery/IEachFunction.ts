module berek.jquery {
	export interface IEachFunction<T> {
		(index: number, element: T): any;
	}
}