/// <reference path='IAddClassFunction.ts'/>
/// <reference path='ICSSFunction.ts'/>
/// <reference path='ICSSObject.ts'/>
/// <reference path='ISizeFunction.ts'/>
/// <reference path='IAppendFunction.ts'/>
/// <reference path='ITextFunction.ts'/>

module berek.jquery {
	export interface IInstance {
		addClass(className: string): IInstance;
		addClass(fn: IAddClassFunction): IInstance;
		
		after(content: string, ...contents: string[]): IInstance;
		after(content: Element, ...contents: Element[]): IInstance;
		after(content: Element[], ...contents: Element[][]): IInstance;
		after(content: IInstance, ...contents: IInstance[]): IInstance;
		after(fn: IAppendFunctionString): IInstance;
		after(fn: IAppendFunctionElement): IInstance;
		after(fn: IAppendFunctionIInstance): IInstance;

		append(content: string, ...contents: string[]): IInstance;
		append(content: Element, ...contents: Element[]): IInstance;
		append(content: Element[], ...contents: Element[][]): IInstance;
		append(content: IInstance, ...contents: IInstance[]): IInstance;
		append(fn: IAppendFunctionString): IInstance;
		append(fn: IAppendFunctionElement): IInstance;
		append(fn: IAppendFunctionIInstance): IInstance;

		appendTo(target: string): IInstance;
		appendTo(target: Element): IInstance;
		appendTo(target: Element[]): IInstance;
		appendTo(target: IInstance): IInstance;
		
		before(content: string, ...contents: string[]): IInstance;
		before(content: Element, ...contents: Element[]): IInstance;
		before(content: Element[], ...contents: Element[][]): IInstance;
		before(content: IInstance, ...contents: IInstance[]): IInstance;
		before(fn: IAppendFunctionString): IInstance;
		before(fn: IAppendFunctionElement): IInstance;
		before(fn: IAppendFunctionIInstance): IInstance;

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
		
		insertAfter(target: string): IInstance;
		insertAfter(target: Element): IInstance;
		insertAfter(target: Element[]): IInstance;
		insertAfter(target: IInstance): IInstance;

		insertBefore(target: string): IInstance;
		insertBefore(target: Element): IInstance;
		insertBefore(target: Element[]): IInstance;
		insertBefore(target: IInstance): IInstance;

		prepend(content: string, ...contents: string[]): IInstance;
		prepend(content: Element, ...contents: Element[]): IInstance;
		prepend(content: Element[], ...contents: Element[][]): IInstance;
		prepend(content: IInstance, ...contents: IInstance[]): IInstance;
		prepend(fn: IAppendFunctionString): IInstance;
		prepend(fn: IAppendFunctionElement): IInstance;
		prepend(fn: IAppendFunctionIInstance): IInstance;

		prependTo(target: string): IInstance;
		prependTo(target: Element): IInstance;
		prependTo(target: Element[]): IInstance;
		prependTo(target: IInstance): IInstance;

		text(): string;
		text(text: string): IInstance;
		text(text: number): IInstance;
		text(text: boolean): IInstance;
		text(fn: ITextFunction): IInstance;
	}
}