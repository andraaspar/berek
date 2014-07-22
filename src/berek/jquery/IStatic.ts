/// <reference path='IAJAXSettings.ts'/>
/// <reference path='IAJAXPrefilterFunction.ts'/>
/// <reference path='IAJAXTransportHandler.ts'/>
/// <reference path='ICallbacks.ts'/>
/// <reference path='ICSSHooksObject.ts'/>
/// <reference path='IDeferred.ts'/>
/// <reference path='IDeferredBeforeStartFunction.ts'/>
/// <reference path='IEachFunction.ts'/>
/// <reference path='IEachPropertyFunction.ts'/>
/// <reference path='IEventConstructor.ts'/>
/// <reference path='IFXObject.ts'/>
/// <reference path='IGetSuccessFunction.ts'/>
/// <reference path='IGrepFunction.ts'/>
/// <reference path='IInstance.ts'/>
/// <reference path='IMapFunction.ts'/>
/// <reference path='IStaticEvent.ts'/>
/// <reference path='IXHR.ts'/>

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
		
		
		
		ajaxPrefilter(dataTypes: string, handler: IAJAXPrefilterFunction);
		ajaxPrefilter(handler: IAJAXPrefilterFunction);
		
		
		
		ajaxTransport(dataType: string, handler: IAJAXTransportHandler);
		
		
		
		ajaxSetup(options: IAJAXSettings);
		
		
		
		each<T>(array: T[], callback: IEachFunction<T>): T[];
		each<T>(object: T, callback: IEachPropertyFunction): T;
		
		
		
		Callbacks(): ICallbacks;
		
		
		
		Deferred(beforeStart?: IDeferredBeforeStartFunction): IDeferred;
		
		
		
		when(deferred: IPromise, ...deferreds: IPromise[]): IPromise;
		
		
		
		fn: IInstance;
		
		
		
		contains(container: HTMLElement, contained: HTMLElement): boolean;
		
		
		
		cssHooks: ICSSHooksObject;
		
		
		
		data<T>(element: HTMLElement, key: string, value: T): T;
		data(element: HTMLElement, key: string): any;
		data(element: HTMLElement): Object;
		
		
		
		dequeue(element: HTMLElement, queueName?: string);
		
		
		
		error(message: string);
		
		
		
		extend(deep: boolean, target: Object, object1: Object, ...objectN: Object[]): Object;
		extend(target: Object, ...objectN: Object[]): Object;
		
		
		
		fx: IFXObject;
		
		
		
		get(url: string, data?: string, success?: IGetSuccessFunction, dataType?: string): IXHR;
		get(url: string, data?: Object, success?: IGetSuccessFunction, dataType?: string): IXHR;
		
		
		
		getJSON(url: string, data?: string, success?: IGetSuccessFunction): IXHR;
		getJSON(url: string, data?: Object, success?: IGetSuccessFunction): IXHR;
		
		
		
		getScript(url: string, success?: IGetSuccessFunction): IXHR;
		
		
		
		globalEval(code: string);
		
		
		
		grep<T>(array: T[], fn: IGrepFunction<T>, invert?: boolean): T[];
		
		
		
		hasData(element: HTMLElement): boolean;
		
		
		
		inArray<T>(value: T, array: T[], fromIndex?: number): number;
		
		
		
		isArray(obj): boolean;
		
		isEmptyObject(obj): boolean;
		
		isFunction(obj): boolean;
		
		isNumeric(obj): boolean;
		
		isPlainObject(obj): boolean;
		
		isWindow(obj): boolean;
		
		isXMLDoc(obj): boolean;
		
		
		
		makeArray(obj: Object): any[];
		
		
		
		map<T, U>(array: T[], callback: IMapFunctionArray<T, U>): U[];
		map<T, U>(object: { [s: string]: T }, callback: IMapFunctionObject<T, U>): U[];
		
		
		
		merge<T>(first: T[], second: T[]): T[];
		
		
		
		noop();
		
		
		
		now(): number;
	}
}