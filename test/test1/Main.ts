/// <reference path='../../lib/illa/_module.ts'/>
/// <reference path='../../lib/illa/ArrayUtil.ts'/>
/// <reference path='../../lib/illa/Log.ts'/>
/// <reference path='../../lib/illa/StringUtil.ts'/>
/// <reference path='../../lib/illa/Ticker.ts'/>

/// <reference path='../../lib/jQuery.d.ts'/>

/// <reference path='../../src/berek/DimensionsUtil.ts'/>
/// <reference path='../../src/berek/PointerUtil.ts'/>
/// <reference path='../../src/berek/ScrollbarUtil.ts'/>
/// <reference path='../../src/berek/UnitTest.ts'/>

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

			u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling, illa.Axis2D.X), 'ScrollbarUtil.isVisibleOn 1');
			u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling, illa.Axis2D.Y), 'ScrollbarUtil.isVisibleOn 2');
			u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling, illa.Axis2D.X) === false, 'ScrollbarUtil.isVisibleOn 3');
			u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling, illa.Axis2D.Y) === false, 'ScrollbarUtil.isVisibleOn 4');
			u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling2, illa.Axis2D.X) === false, 'ScrollbarUtil.isVisibleOn 5');
			u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling2, illa.Axis2D.Y) === false, 'ScrollbarUtil.isVisibleOn 6');
			u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling2, illa.Axis2D.X), 'ScrollbarUtil.isVisibleOn 7');
			u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling2, illa.Axis2D.Y), 'ScrollbarUtil.isVisibleOn 8');
			u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling3, illa.Axis2D.X) === false, 'ScrollbarUtil.isVisibleOn 9');
			u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling3, illa.Axis2D.Y) === false, 'ScrollbarUtil.isVisibleOn 10');



			u.printStats();
		}
	}
}

var test1Main = new test1.Main();