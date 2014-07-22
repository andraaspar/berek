/// <reference path='ICSSHookObject.ts'/>

module berek.jquery {
	export interface ICSSHooksObject {
		[s: string]: ICSSHookObject;
	}
}