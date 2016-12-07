import { GLOBAL } from 'illa/GLOBAL'
import { IPointerCoords } from './IPointerCoords'
import { PointerCoordsContext } from './PointerCoordsContext'
import { PointerEventSource } from './PointerEventSource'

export function getCoords(e: jQuery.IEvent, context = PointerCoordsContext.PAGE, coordID = 0): IPointerCoords {
	var result = { x: NaN, y: NaN }

	var coordSource: any

	switch (getSource(e)) {
		case PointerEventSource.MOUSE:
			if (coordID == 0) coordSource = e
			break
		case PointerEventSource.TOUCH:
			coordSource = (<any>e.originalEvent).touches[coordID]
			break
	}

	if (coordSource) {
		var contextPrefix = PointerCoordsContext[context].toLowerCase()
		result.x = coordSource[contextPrefix + 'X']
		result.y = coordSource[contextPrefix + 'Y']
	}

	return result
}

export function getSource(e: jQuery.IEvent): PointerEventSource {
	if (GLOBAL.TouchEvent && e.originalEvent instanceof GLOBAL.TouchEvent) {
		return PointerEventSource.TOUCH
	} else if (GLOBAL.MouseEvent && e.originalEvent instanceof MouseEvent || // IE8 does not have MouseEvent
		e.type.indexOf('mouse') == 0 ||
		e.type.indexOf('click') != -1 ||
		e.type == 'contextmenu') {
		return PointerEventSource.MOUSE
	}
	return PointerEventSource.OTHER
}

export function getCoordCount(e: jQuery.IEvent): number {
	var result = 1
	switch (getSource(e)) {
		case PointerEventSource.TOUCH:
			result = (<any>e.originalEvent).touches.length
			break
	}
	return result
}