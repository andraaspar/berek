/// <reference path='PointerCoordsContext.ts'/>
/// <reference path='PointerEventSource.ts'/>
/// <reference path='IPointerCoords.ts'/>

module berek {
	export class PointerUtil {

		static getCoords(e: jquery.IEvent, context = PointerCoordsContext.PAGE, coordID = 0): IPointerCoords {
			var result = { x: NaN, y: NaN };

			var coordSource;

			switch (this.getSource(e)) {
				case PointerEventSource.MOUSE:
					if (coordID == 0) coordSource = e;
					break;
				case PointerEventSource.TOUCH:
					coordSource = (<any>e.originalEvent).touches[coordID];
					break;
			}

			if (coordSource) {
				var contextPrefix = PointerCoordsContext[context].toLowerCase();
				result.x = coordSource[contextPrefix + 'X'];
				result.y = coordSource[contextPrefix + 'Y'];
			}

			return result;
		}

		static getSource(e: jquery.IEvent): PointerEventSource {
			if (e instanceof MouseEvent) {
				return PointerEventSource.MOUSE;
			} else if (illa.isFunction(illa.GLOBAL.TouchEvent) && e instanceof illa.GLOBAL.TouchEvent) {
				return PointerEventSource.TOUCH;
			}
			return PointerEventSource.OTHER;
		}

		static getCoordCount(e: jquery.IEvent): number {
			var result = 1;
			switch (this.getSource(e)) {
				case PointerEventSource.TOUCH:
					result = (<any>e.originalEvent).touches.length;
					break;
			}
			return result;
		}
	}
}