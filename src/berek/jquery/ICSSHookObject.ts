module berek.jquery {
	export interface ICSSHookObject {
		get(elem: HTMLElement, computed, extra);
		
		set(elem: HTMLElement, value: string);
		set(elem: HTMLElement, value: number);
	}
}