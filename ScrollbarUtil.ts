import { Axis2D } from 'illa/Axis2D'
import jQuery from 'jquery-ts'

export class ScrollbarUtil {
	private box: jQuery.IInstance
	private defaultWidth = NaN
	private defaultHeight = NaN
	
	constructor(box?: jQuery.IInstance, size = 1000) {
		if (box) {
			this.box = box
		} else {
			this.box = jQuery('<div>')
		}
		this.box.css({
			position: 'absolute',
			top: -size - 1 + 'px',
			left: '0',
			width: size + 'px',
			height: size + 'px',
			overflow: 'scroll'
		})
		this.box.prependTo('body')
	}

	getDefaultSize(axis: Axis2D): number {
		var result = NaN

		if (isNaN(this.defaultWidth)) {
			var boxElement = <HTMLElement>this.box[0]
			this.defaultWidth = Math.ceil(boxElement.offsetWidth - boxElement.clientWidth)
			this.defaultHeight = Math.ceil(boxElement.offsetHeight - boxElement.clientHeight)
		}

		switch (axis) {
			case Axis2D.X:
				result = this.defaultWidth
				break
			case Axis2D.Y:
				result = this.defaultHeight
				break
		}

		return result
	}

	clearDefaultSizeCache() {
		// Only the width is checked
		this.defaultWidth = NaN
	}

	static getIsVisibleOn(jq: jQuery.IInstance, axis: Axis2D): boolean {
		var elem = jq[0]
		if (!elem) return false
		var overflow = ''
		switch (axis) {
			case Axis2D.X:
				overflow = jq.css('overflow-x')
				break
			case Axis2D.Y:
				overflow = jq.css('overflow-y')
				break
		}
		switch (overflow) {
			case 'scroll': return true
			case 'auto':
				switch (axis) {
					case Axis2D.X: return elem.scrollWidth > jq.innerWidth()
					case Axis2D.Y: return elem.scrollHeight > jq.innerHeight()
				}
				break
		}
		return false
	}

	static getScroll(jq: jQuery.IInstance, axis: Axis2D): number {
		var result = NaN
		switch (axis) {
			case Axis2D.X:
				result = jq.scrollLeft()
				break
			case Axis2D.Y:
				result = jq.scrollTop()
				break
		}
		return result
	}

	static setScroll(jq: jQuery.IInstance, value: number, axis?: Axis2D): void {
		switch (axis) {
			default:
			case Axis2D.X:
				jq.scrollLeft(value)
				if (axis != null) break
			case Axis2D.Y:
				jq.scrollTop(value)
		}
	}
}