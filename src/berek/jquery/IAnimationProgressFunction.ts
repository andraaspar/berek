/// <reference path='IPromise.ts'/>

module berek.jquery {
	export interface IAnimationProgressFunction {
		(animation: IPromise, progress: number, remainingMs: number): any;
	}
}