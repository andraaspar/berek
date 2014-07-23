/// <reference path='IEventHandler.ts'/>

module berek.jquery {
	export interface IStaticEventSpecialSetupFunction {
		(data: any, namespaces: string[], eventHandler: IEventHandler): any;
	}
}