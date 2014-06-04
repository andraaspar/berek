/// <reference path='IEventHandler.ts'/>

module berek.jquery {
	export interface IOnEventsObject {
		[s: string]: IEventHandler;
	}
}