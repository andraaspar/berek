/// <reference path='IPromise.ts'/>

module berek.jquery {
	export interface IAnimationDoneFunction {
		(animation: IPromise, jumpedToEnd: boolean): any;
	}
}