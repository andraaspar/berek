/// <reference path='IPromise.ts'/>

module berek.jquery {
	export interface IAnimationStartFunction {
		(animation: IPromise): any;
	}
}