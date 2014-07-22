/// <reference path='IAJAXSettings.ts'/>
/// <reference path='ICallbacks.ts'/>
/// <reference path='IDeferred.ts'/>
/// <reference path='IDeferredBeforeStartFunction.ts'/>
/// <reference path='IInstance.ts'/>
/// <reference path='IStaticEvent.ts'/>
/// <reference path='IEventConstructor.ts'/>

module berek.jquery {
	export interface IStatic {
		(selector: string, context?: HTMLElement): IInstance;
		(selector: string, context?: Document): IInstance;
		(selector: string, context?: IInstance): IInstance;
		(element: HTMLElement): IInstance;
		(elements: HTMLElement[]): IInstance;
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
		
		
		
		Callbacks(): ICallbacks;
		
		
		
		Deferred(beforeStart?: IDeferredBeforeStartFunction): IDeferred;
		
		
		
		when(deferred: IPromise, ...deferreds: IPromise[]): IPromise;
	}
}