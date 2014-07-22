module berek.jquery {
	export interface IDeferred extends IPromise {
		always(callback: Function, ...callbacks: Function[]): IDeferred;
		always(callback: Function[], ...callbacks: Function[][]): IDeferred;
		
		done(callback: Function, ...callbacks: Function[]): IDeferred;
		done(callback: Function[], ...callbacks: Function[][]): IDeferred;
		
		fail(callback: Function, ...callbacks: Function[]): IDeferred;
		fail(callback: Function[], ...callbacks: Function[][]): IDeferred;
		
		
		
		notify(...args): IDeferred;
		
		reject(...args): IDeferred;
		
		resolve(...args): IDeferred;
		
		
		
		notifyWith(context: Object, args: any[]): IDeferred;
		
		rejectWith(context: Object, args: any[]): IDeferred;
		
		resolveWith(context: Object, args: any[]): IDeferred;
		
		
		
		progress(callback: Function): IDeferred;
		progress(callbacks: Function[]): IDeferred;
		
		
		
		promise(target?: Object): IPromise;
	}
}