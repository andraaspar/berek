/// <reference path='IPositionObject.ts'/>

module berek.jquery {
	export interface IOffsetFunction {
		(index: number, coords: IPositionObject): IPositionObject;
	}
}