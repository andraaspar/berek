/// <reference path='IAJAXSettings.ts'/>
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
		
		ajax(url: string, settings?: IAJAXSettings): IXHR;
		ajax(settings?: IAJAXSettings): IXHR;
		
		each<T>(array: T[], callback: (index: number, value: T) => any): Object;
		each(object: Object, callback: (propertyName: string, value: any) => any): Object;
	}
}