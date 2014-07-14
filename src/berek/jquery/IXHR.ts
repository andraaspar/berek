/// <reference path='IXHRAlwaysFunction.ts'/>
/// <reference path='IXHRDoneFunction.ts'/>
/// <reference path='IXHRFailFunction.ts'/>

module berek.jquery {
	export interface IXHR extends XMLHttpRequest, IPromise {
		overrideMimeType(value: string);



		done(fn: IXHRDoneFunction);



		fail(fn: IXHRFailFunction);



		always(fn: IXHRAlwaysFunction);



		then(doneFn: IXHRDoneFunction, failFn: IXHRFailFunction);
	}
}