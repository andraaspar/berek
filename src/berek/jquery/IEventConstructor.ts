/// <reference path='IEvent.ts'/>

module berek.jquery {
	export interface IEventConstructor {
		(src: string, props?: any): IEvent;
		(src: IEvent, props?: any): IEvent;
		(src: Event, props?: any): IEvent;
	}
}