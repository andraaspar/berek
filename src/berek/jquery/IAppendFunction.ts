module berek.jquery {
	export interface IAppendFunctionString {
		(index: number, html: string): string;
	}
	export interface IAppendFunctionElement {
		(index: number, html: string): HTMLElement;
	}
	export interface IAppendFunctionIInstance {
		(index: number, html: string): IInstance;
	}
}