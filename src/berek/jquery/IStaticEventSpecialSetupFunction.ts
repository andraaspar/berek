/// <reference path='IEventHandler.ts'/>

module berek.jquery {
	export interface IStaticEventSpecialSetupFunction {
		(data, namespaces: string[], eventHandler: IEventHandler): any;
	}
}