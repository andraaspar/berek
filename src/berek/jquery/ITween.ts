/// <reference path='IAnimationOptions.ts'/>

module berek.jquery {
	export interface ITween {
		elem: Element;
		prop: string;
		easing: any;
		options: IAnimationOptions;
		start: number;
		end: number;
		unit: string;
	}
}