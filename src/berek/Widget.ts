/// <reference path='../../lib/illa/EventHandler.ts'/>

/// <reference path='../../lib/jQuery.d.ts'/>

module berek {
	export class Widget extends illa.EventHandler {
		
		static JQUERY_DATA_KEY = 'berek_Widget';
		static EVENT_DESTROYED = 'berek_Widget_EVENT_DESTROYED';
		static PART_KEY = 'berek-widget-part';
		static PART_ATTR = 'data-' + Widget.PART_KEY;
		
		private jQuery: jQuery.IInstance;
		private isDestroyed = false;
		
		initWidget(jq: jQuery.IInstance): void {
			this.jQuery = jq;
			
			if (this.jQuery.data(Widget.JQUERY_DATA_KEY)) throw 'Widget binding conflict.';
			this.jQuery.data(Widget.JQUERY_DATA_KEY, this);
			if (!(Widget.EVENT_DESTROYED in jQuery.event.special)) {
				jQuery.event.special[Widget.EVENT_DESTROYED] = {
					remove: function(o) {
						if (o.handler) {
							o.handler(null);
						}
					}
				};
			}
			
			this.jQuery.on(Widget.EVENT_DESTROYED, illa.bind(this.onDestroyed, this));
		}

		getJQuery(): jQuery.IInstance {
			return this.jQuery;
		}

		getIsDestroyed(): boolean {
			return this.isDestroyed;
		}
		
		protected onDestroyed(e: jQuery.IEvent): void {
			this.isDestroyed = true;
			this.removeAllEventCallbacks();
		}
		
		protected initParts(ancestor = this.jQuery): void {
			var partsJq = ancestor.find('[' + Widget.PART_ATTR + ']');
			for (var i = 0; i < partsJq.length; i++) {
				var partJq = partsJq.eq(i);
				var partName = partJq.data(Widget.PART_KEY) + '';
				this[partName] = partJq;
			}
		}

		static getFrom(source: jQuery.IInstance): Widget {
			var result: Widget = null;
			if (source) {
				var stored = source.data(Widget.JQUERY_DATA_KEY);
				if (stored instanceof Widget) {
					result = <any>stored;
				}
			}
			return result;
		}
	}
}