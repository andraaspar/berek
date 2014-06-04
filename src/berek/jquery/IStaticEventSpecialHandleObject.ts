/// <reference path='IEventHandler.ts'/>

module berek.jquery {
	export interface IStaticEventSpecialHandleObject {
		type: string;
		data;
		namespace: string;
		handler: IEventHandler;
		guid: number;
		selector: string;
	}
}