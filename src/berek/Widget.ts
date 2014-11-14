/// <reference path='../../lib/illa/EventHandler.ts'/>

/// <reference path='../../lib/jQuery.d.ts'/>

module berek {
	export class Widget extends illa.EventHandler {
		
		static JQUERY_DATA_KEY = 'berek_Widget';
		static EVENT_DESTROYED = 'berek_Widget_EVENT_DESTROYED';
		
		private jQuery: jQuery.IInstance;
		
		constructor(jq: jQuery.IInstance) {
			super();
			
			this.jQuery = jq;
			
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
		}

		getJQuery(): jQuery.IInstance {
			return this.jQuery;
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