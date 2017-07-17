import { EventHandler } from 'illa/EventHandler'
import { bind } from 'illa/FunctionUtil'
import jQuery from 'jquery-ts'

export const JQUERY_DATA_KEY = 'berek_Widget'
export const EVENT_DESTROYED = 'berek_Widget_EVENT_DESTROYED'
export const PART_KEY = 'berek-widget-part'
export const PART_ATTR = 'data-' + PART_KEY

export class Widget extends EventHandler {

	private jQuery: jQuery.IInstance
	private isDestroyed = false

	initWidget(jq: jQuery.IInstance): void {
		this.jQuery = jq

		if (this.jQuery.data(JQUERY_DATA_KEY)) throw 'Widget binding conflict.'
		this.jQuery.data(JQUERY_DATA_KEY, this)
		if (!(EVENT_DESTROYED in jQuery.event.special)) {
			jQuery.event.special[EVENT_DESTROYED] = {
				remove: function(o) {
					if (o.handler) {
						o.handler(<any>null)
					}
				}
			}
		}

		this.jQuery.on(EVENT_DESTROYED, bind(this.onDestroyed, this))
	}

	getJQuery(): jQuery.IInstance {
		return this.jQuery
	}

	getIsDestroyed(): boolean {
		return this.isDestroyed
	}

	protected onDestroyed(e: jQuery.IEvent): void {
		this.isDestroyed = true
		this.removeAllEventCallbacks()
	}

	protected initParts(ancestor = this.jQuery): void {
		var partsJq = ancestor.find('[' + PART_ATTR + ']').addBack('[' + PART_ATTR + ']')
		for (var i = 0; i < partsJq.length; i++) {
			var partJq = partsJq.eq(i)
			var partName = partJq.attr(PART_ATTR)
			; (<any>this)[partName] = partJq
			partJq.removeAttr(PART_ATTR)
		}
	}

	static getFrom(source: jQuery.IInstance): Widget | null {
		var result: Widget | null = null
		if (source) {
			var stored = source.data(JQUERY_DATA_KEY)
			if (stored instanceof Widget) {
				result = <any>stored
			}
		}
		return result
	}
}