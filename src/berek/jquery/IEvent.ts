module berek.jquery {
	export interface IEvent {
		isDefaultPrevented(): boolean;
		isPropagationStopped(): boolean;
		isImmediatePropagationStopped(): boolean;
		
		preventDefault(): void;
		stopPropagation(): void;
		stopImmediatePropagation(): void;
		
		target: HTMLElement;
		relatedTarget: HTMLElement;
		pageX: number;
		pageY: number;
		which: number;
		metaKey: boolean;
		
		altKey: boolean;
		bubbles: boolean;
		button: number;
		cancelable: boolean;
		charCode: number;
		clientX: number;
		clientY: number;
		ctrlKey: boolean;
		currentTarget: HTMLElement;
		data: any;
		detail: number;
		eventPhase: number;
		offsetX: number;
		offsetY: number;
		originalTarget: HTMLElement;
		prevValue: any;
		screenX: number;
		screenY: number;
		shiftKey: boolean;
		view: Window;
		
		originalEvent: Event;
		delegateTarget: HTMLElement;
		namespace: string;
		result: any;
		timeStamp: number;
		type: string;
	}
}