/// <reference path='IEvent.ts'/>

module berek.jquery {
	export interface IEventHandler {
		(event: IEvent, ...rest): any;
	}
}