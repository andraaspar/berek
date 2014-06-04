/// <reference path='IInstance.ts'/>
/// <reference path='IStaticEvent.ts'/>
/// <reference path='IEventConstructor.ts'/>

module berek.jquery {
	export interface IStatic {
		(selector: string, context?: HTMLElement): IInstance;
		(selector: string, context?: Document): IInstance;
		(selector: string, context?: IInstance): IInstance;
		(element: HTMLElement): IInstance;
		(elementArray: HTMLElement[]): IInstance;
		(object: Object): IInstance;
		(selection: IInstance): IInstance;
		(html: string, attributesOrOwnerDocument?: Object): IInstance;
		(callback: () => any): IInstance;
		
		holdReady(hold: boolean): void;
		
		noConflict(removeAll?: boolean): IStatic;
		
		event: IStaticEvent;
		
		Event: IEventConstructor;
	}
}