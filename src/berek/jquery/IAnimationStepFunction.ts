/// <reference path='ITween.ts'/>

module berek.jquery {
	export interface IAnimationStepFunction {
		(now: number, tween: ITween): any;
	}
}