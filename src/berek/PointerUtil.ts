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
			if (illa.GLOBAL.TouchEvent && e.originalEvent instanceof illa.GLOBAL.TouchEvent) {
				return PointerEventSource.TOUCH;
			} else if (illa.GLOBAL.MouseEvent && e.originalEvent instanceof MouseEvent || // IE8 does not have MouseEvent
				e.type.indexOf('mouse') == 0 ||
				e.type.indexOf('click') != -1 ||
				e.type == 'contextmenu') {
				return PointerEventSource.MOUSE;
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