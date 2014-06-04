/// <reference path='IEvent.ts'/>

module berek.jquery {
	export interface IEventConstructor {
		(src: string, props?: Object): IEvent;
		(src: IEvent, props?: Object): IEvent;
		(src: Event, props?: Object): IEvent;
	}
}