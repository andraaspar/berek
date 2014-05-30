/// <reference path='IInstance.ts'/>

module berek.jquery {
	export interface IStatic {
		(selector: string, context?: Element): IInstance;
		(selector: string, context?: Document): IInstance;
		(selector: string, context?: IInstance): IInstance;
		(element: Element): IInstance;
		(elementArray: Element[]): IInstance;
		(object: Object): IInstance;
		(selection: IInstance): IInstance;
		(html: string, attributesOrOwnerDocument?: Object): IInstance;
		(callback: () => any): IInstance;
		
		holdReady(hold: boolean): void;
		
		noConflict(removeAll?: boolean): IStatic;
	}
}