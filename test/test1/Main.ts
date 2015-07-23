/// <reference path='../../lib/illa/_module.ts'/>
/// <reference path='../../lib/illa/ArrayUtil.ts'/>
/// <reference path='../../lib/illa/Log.ts'/>
/// <reference path='../../lib/illa/StringUtil.ts'/>
/// <reference path='../../lib/illa/Ticker.ts'/>

/// <reference path='../../lib/jQuery.d.ts'/>

/// <reference path='../../src/berek/CookieUtil.ts'/>
/// <reference path='../../src/berek/DimensionsUtil.ts'/>
/// <reference path='../../src/berek/Filter.ts'/>
/// <reference path='../../src/berek/PointerUtil.ts'/>
/// <reference path='../../src/berek/ScrollbarUtil.ts'/>
/// <reference path='../../src/berek/StorageWrapper.ts'/>
/// <reference path='../../src/berek/UnitTest.ts'/>
/// <reference path='../../src/berek/Widget.ts'/>

module test1 {
	
	export class Main {
		unitTest: illa.UnitTest;
		ticker: illa.Ticker;

		constructor() {
			jQuery(illa.bind(this.onDOMLoaded, this));
		}

		onDOMLoaded(): void {
			var u = this.unitTest = new berek.UnitTest(jQuery('body'));
			u.info('Testing...');



			var scrollbarUtil = new berek.ScrollbarUtil();
			u.assert(illa.isNumber(scrollbarUtil.getDefaultSize(illa.Axis2D.X)), 'ScrollbarUtil.getDefaultSize 1');
			u.assert(illa.isNumber(scrollbarUtil.getDefaultSize(illa.Axis2D.Y)), 'ScrollbarUtil.getDefaultSize 2');
			u.assert(scrollbarUtil.getDefaultSize(illa.Axis2D.X) >= 0, 'ScrollbarUtil.getDefaultSize 3');
			u.assert(scrollbarUtil.getDefaultSize(illa.Axis2D.Y) >= 0, 'ScrollbarUtil.getDefaultSize 4');

			var scrolling = jQuery('<div style="overflow-x: scroll; overflow-y: scroll">');
			var scrolling2 = jQuery('<div style="overflow: scroll">');
			var nonScrolling = jQuery('<div style="overflow-x: hidden; overflow-y: hidden">');
			var nonScrolling2 = jQuery('<div style="overflow-x: visible; overflow-y: visible">');
			var nonScrolling3 = jQuery('<div style="overflow: visible">');

			u.assert(berek.ScrollbarUtil.getIsVisibleOn(scrolling, illa.Axis2D.X), 'ScrollbarUtil.getIsVisibleOn 1');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(scrolling, illa.Axis2D.Y), 'ScrollbarUtil.getIsVisibleOn 2');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(nonScrolling, illa.Axis2D.X) === false, 'ScrollbarUtil.getIsVisibleOn 3');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(nonScrolling, illa.Axis2D.Y) === false, 'ScrollbarUtil.getIsVisibleOn 4');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(nonScrolling2, illa.Axis2D.X) === false, 'ScrollbarUtil.getIsVisibleOn 5');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(nonScrolling2, illa.Axis2D.Y) === false, 'ScrollbarUtil.getIsVisibleOn 6');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(scrolling2, illa.Axis2D.X), 'ScrollbarUtil.getIsVisibleOn 7');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(scrolling2, illa.Axis2D.Y), 'ScrollbarUtil.getIsVisibleOn 8');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(nonScrolling3, illa.Axis2D.X) === false, 'ScrollbarUtil.getIsVisibleOn 9');
			u.assert(berek.ScrollbarUtil.getIsVisibleOn(nonScrolling3, illa.Axis2D.Y) === false, 'ScrollbarUtil.getIsVisibleOn 10');
			
			(function() {
				var cookieKey = 'Árvíztűrő tükörfúrógép';
				var cookieValue = 'Lépegető exkavátor!';
				
				var cookieKeys = berek.CookieUtil.getKeys();
				if (cookieKeys.length > 0) {
					u.warn('Please clear cookies before running this test.');
				}
				
				u.assert(berek.CookieUtil.getAreCookiesAccepted(), 'CookieUtil.getAreCookiesAccepted 1');
	
				berek.CookieUtil.setItem(cookieKey, cookieValue);
				berek.CookieUtil.setItem(cookieValue, cookieKey);
				
				cookieKeys = berek.CookieUtil.getKeys();
				
				u.assert(cookieKeys.length === 2, 'CookieUtil.getKeys 1');
				u.assert(cookieKeys[0] === cookieKey, 'CookieUtil.getKeys 2');
				u.assert(cookieKeys[1] === cookieValue, 'CookieUtil.getKeys 3');
				
				u.assert(berek.CookieUtil.getItem(cookieKey) === cookieValue, 'CookieUtil.getItem 1');
				u.assert(berek.CookieUtil.getItem(cookieValue) === cookieKey, 'CookieUtil.getItem 2');
				
				berek.CookieUtil.removeItem(cookieKey);
				
				u.assert(berek.CookieUtil.getItem(cookieKey) === '', 'CookieUtil.getItem 3');
				u.assert(berek.CookieUtil.getItem(cookieValue) === cookieKey, 'CookieUtil.getItem 4');
				
				u.assert(berek.CookieUtil.getKeys().length === 1, 'CookieUtil.getKeys 4');
				
				berek.CookieUtil.removeItem(cookieValue);
				
				u.assert(berek.CookieUtil.getKeys().length === 0, 'CookieUtil.getKeys 5');
				
				u.assert(berek.CookieUtil.getItem(cookieValue) === '', 'CookieUtil.getItem 5');
			})();



			u.printStats();
		}
	}
}

var test1Main = new test1.Main();