/// <reference path='IAnimationOptions.ts'/>

module berek.jquery {
	export interface ITween {
		elem: HTMLElement;
		prop: string;
		easing: any;
		options: IAnimationOptions;
		start: number;
		end: number;
		unit: string;
	}
}