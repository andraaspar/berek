module berek.jquery {
	export interface IPromise {
		then: Function;
		done: Function;
		fail: Function;
		always: Function;
		pipe: Function;
		state: Function;
	}
}