/// <reference path='IAddClassFunction.ts'/>
/// <reference path='IAnimationOptions.ts'/>
/// <reference path='IAppendFunction.ts'/>
/// <reference path='IAttrFunction.ts'/>
/// <reference path='IClassToggleFunction.ts'/>
/// <reference path='ICSSFunction.ts'/>
/// <reference path='ICSSObject.ts'/>
/// <reference path='IHTMLFunction.ts'/>
/// <reference path='IIsFunction.ts'/>
/// <reference path='IOffsetFunction.ts'/>
/// <reference path='IOnEventsObject.ts'/>
/// <reference path='IPropFunction.ts'/>
/// <reference path='ISizeFunction.ts'/>
/// <reference path='ITextFunction.ts'/>
/// <reference path='IValFunction.ts'/>
/// <reference path='IWidthFunction.ts'/>

module berek.jquery {
	export interface IInstance {
		[s: number]: HTMLElement;
		length: number;
		
		
		
		hasClass(className: string): boolean;
		
		
		
		addClass(className: string): IInstance;
		addClass(fn: IAddClassFunction): IInstance;
		
		removeClass(className: string): IInstance;
		removeClass(fn: IAddClassFunction): IInstance;



		after(content: string, ...contents: string[]): IInstance;
		after(content: HTMLElement, ...contents: HTMLElement[]): IInstance;
		after(content: HTMLElement[], ...contents: HTMLElement[][]): IInstance;
		after(content: IInstance, ...contents: IInstance[]): IInstance;
		after(fn: IAppendFunctionString): IInstance;
		after(fn: IAppendFunctionElement): IInstance;
		after(fn: IAppendFunctionIInstance): IInstance;

		append(content: string, ...contents: string[]): IInstance;
		append(content: HTMLElement, ...contents: HTMLElement[]): IInstance;
		append(content: HTMLElement[], ...contents: HTMLElement[][]): IInstance;
		append(content: IInstance, ...contents: IInstance[]): IInstance;
		append(fn: IAppendFunctionString): IInstance;
		append(fn: IAppendFunctionElement): IInstance;
		append(fn: IAppendFunctionIInstance): IInstance;

		before(content: string, ...contents: string[]): IInstance;
		before(content: HTMLElement, ...contents: HTMLElement[]): IInstance;
		before(content: HTMLElement[], ...contents: HTMLElement[][]): IInstance;
		before(content: IInstance, ...contents: IInstance[]): IInstance;
		before(fn: IAppendFunctionString): IInstance;
		before(fn: IAppendFunctionElement): IInstance;
		before(fn: IAppendFunctionIInstance): IInstance;

		prepend(content: string, ...contents: string[]): IInstance;
		prepend(content: HTMLElement, ...contents: HTMLElement[]): IInstance;
		prepend(content: HTMLElement[], ...contents: HTMLElement[][]): IInstance;
		prepend(content: IInstance, ...contents: IInstance[]): IInstance;
		prepend(fn: IAppendFunctionString): IInstance;
		prepend(fn: IAppendFunctionElement): IInstance;
		prepend(fn: IAppendFunctionIInstance): IInstance;



		appendTo(target: string): IInstance;
		appendTo(target: HTMLElement): IInstance;
		appendTo(target: HTMLElement[]): IInstance;
		appendTo(target: IInstance): IInstance;

		insertAfter(target: string): IInstance;
		insertAfter(target: HTMLElement): IInstance;
		insertAfter(target: HTMLElement[]): IInstance;
		insertAfter(target: IInstance): IInstance;

		insertBefore(target: string): IInstance;
		insertBefore(target: HTMLElement): IInstance;
		insertBefore(target: HTMLElement[]): IInstance;
		insertBefore(target: IInstance): IInstance;

		prependTo(target: string): IInstance;
		prependTo(target: HTMLElement): IInstance;
		prependTo(target: HTMLElement[]): IInstance;
		prependTo(target: IInstance): IInstance;



		css(propertyName: string): string;
		css(propertyNames: string[]): ICSSObject;
		css(propertyName: string, value: string): IInstance;
		css(propertyName: string, value: number): IInstance;
		css(propertyName: string, fn: ICSSFunctionString): IInstance;
		css(propertyName: string, fn: ICSSFunctionNumber): IInstance;
		css(properties: ICSSObject): IInstance;



		innerWidth(): number;
		innerWidth(value: string): IInstance;
		innerWidth(value: number): IInstance;
		innerWidth(fn: ISizeFunctionNumber): IInstance;
		innerWidth(fn: ISizeFunctionString): IInstance;

		innerHeight(): number;
		innerHeight(value: string): IInstance;
		innerHeight(value: number): IInstance;
		innerHeight(fn: ISizeFunctionNumber): IInstance;
		innerHeight(fn: ISizeFunctionString): IInstance;



		next(selector?: string): IInstance;

		parent(selector?: string): IInstance;
		
		parents(selector?: string): IInstance;
		
		prev(selector?: string): IInstance;



		text(): string;
		text(text: string): IInstance;
		text(text: number): IInstance;
		text(text: boolean): IInstance;
		text(fn: ITextFunction): IInstance;
		
		
		
		html(): string;
		html(htmlString: string): IInstance;
		html(fn: IHTMLFunction): IInstance;
		
		
		
		data(key: string): any;
		data(key: string, value: any): IInstance;
		data(obj: Object): IInstance;
		data(): Object;
		
		
		
		on(events: string, handler: IEventHandler): IInstance;
		on(events: string, selectorOrData: any, handler: IEventHandler): IInstance;
		on(events: string, selector: string, data: any, handler: IEventHandler): IInstance;
		on(events: IOnEventsObject, selectorOrData?: any, data?: any): IInstance;
		
		
		
		off(events: string, handler?: IEventHandler): IInstance;
		off(events: string, selector: string, handler?: IEventHandler): IInstance;
		off(events: IOnEventsObject, selector?: string): IInstance;
		off(): IInstance;
		
		
		
		toggleClass(className: string, flag?: boolean): IInstance;
		toggleClass(fn: IClassToggleFunction, flag?: boolean): IInstance;
		toggleClass(flag?: boolean): IInstance;
		
		
		
		toggle(complete: Function): IInstance;
		toggle(duration: number, complete?: Function): IInstance;
		toggle(options: IAnimationOptions): IInstance;
		toggle(duration: number, easing?: string, complete?: Function): IInstance;
		toggle(flag?: boolean): IInstance;
		
		
		
		position(): IPositionObject;
		
		offset(): IPositionObject;
		offset(coordinates: IPositionObject): IInstance;
		offset(fn: IOffsetFunction): IInstance;
		
		
		
		detach(selector?: string): IInstance;
		
		remove(selector?: string): IInstance;
		
		
		
		closest(selector: string, context?: HTMLElement): IInstance;
		closest(selection: IInstance): IInstance;
		closest(selection: HTMLElement): IInstance;
		
		
		
		is(selector: string): boolean;
		is(fn: IIsFunction): boolean;
		is(selection: IInstance): boolean;
		is(element: HTMLElement): boolean;
		is(elements: HTMLElement[]): boolean;
		
		
		
		filter(selector: string): IInstance;
		filter(fn: IIsFunction): IInstance;
		filter(selection: IInstance): IInstance;
		filter(element: HTMLElement): IInstance;
		filter(elements: HTMLElement[]): IInstance;
		
		
		
		scrollLeft(): number;
		scrollLeft(value: number): IInstance;
		
		scrollTop(): number;
		scrollTop(value: number): IInstance;
		
		
		
		eq(index: number): IInstance;
		
		
		
		attr(attributeName: string): string;
		attr(attributeName: string, value: string): IInstance;
		attr(attributeName: string, value: number): IInstance;
		attr(attributes: Object): IInstance;
		attr(attributeName: string, fn: IAttrFunctionString): IInstance;
		attr(attributeName: string, fn: IAttrFunctionNumber): IInstance;
		
		
		
		prop(propertyName: string): any;
		prop(propertyName: string, value: any): IInstance;
		prop(properties: Object): IInstance;
		prop(propertyName: string, fn: IPropFunction): IInstance;
		
		
		
		removeAttr(attributeName: string): IInstance;
		
		removeProp(propertyName: string): IInstance;
		
		
		
		val(): any;
		val(value: string): IInstance;
		val(values: string[]): IInstance;
		val(fn: IValFunction): IInstance;
		
		
		
		trigger(eventType: string, extraParameters: any[]): IInstance;
		trigger(eventType: string, extraParameters?: Object): IInstance;
		trigger(event: IEvent, extraParameters: any[]): IInstance;
		trigger(event: IEvent, extraParameters?: Object): IInstance;
		
		
		
		triggerHandler(eventType: string, extraParameters?: any[]): any;
		
		
		
		find(selector: string): IInstance;
		find(selection: IInstance): IInstance;
		find(element: HTMLElement): IInstance;
		
		
		
		width(): number;
		width(value: number): IInstance;
		width(fn: IWidthFunctionNumber): IInstance;
		width(fn: IWidthFunctionString): IInstance;
		
		height(): number;
		height(value: number): IInstance;
		height(fn: IWidthFunctionNumber): IInstance;
		height(fn: IWidthFunctionString): IInstance;
		
		
		
		outerWidth(includeMargin?: boolean): number;
		
		outerHeight(includeMargin?: boolean): number;
		
		
		
		hide(options: IAnimationOptions): IInstance;
		hide(duration: number, easing: string, complete?: Function): IInstance;
		hide(duration?: number, complete?: Function): IInstance;
		
		show(options: IAnimationOptions): IInstance;
		show(duration: number, easing: string, complete?: Function): IInstance;
		show(duration?: number, complete?: Function): IInstance;
		
		
		
		focus(eventData: Object, handler: IEventHandler);
		focus(handler?: IEventHandler);
		
		
		
		index(selector: string): number;
		index(jq: IInstance): number;
		index(element?: HTMLElement): number;
		
		
		
		children(selector?: string): IInstance;
		
		
		
		stop(queue: string, clearQueue?: boolean, jumpToEnd?: boolean);
		stop(clearQueue?: boolean, jumpToEnd?: boolean);
	}
}