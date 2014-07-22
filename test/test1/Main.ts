/// <reference path='../../lib/illa/_module.ts'/>
/// <reference path='../../lib/illa/ArrayUtil.ts'/>
/// <reference path='../../lib/illa/Log.ts'/>
/// <reference path='../../lib/illa/StringUtil.ts'/>
/// <reference path='../../lib/illa/Ticker.ts'/>

/// <reference path='../../src/berek/jquery/_module.ts'/>
/// <reference path='../../src/berek/ScrollbarUtil.ts'/>
/// <reference path='../../src/berek/UnitTest.ts'/>

module test1 {
	import jquery = berek.jquery;
	
	export class Main {
		unitTest: illa.UnitTest;
		ticker: illa.Ticker;

		constructor() {
			jquery.$(illa.bind(this.onDOMLoaded, this));
		}

		onDOMLoaded(): void {
			var u = this.unitTest = new berek.UnitTest(jquery.$('body'));
			u.info('Testing...');



			var scrollbarUtil = new berek.ScrollbarUtil();
			u.assert(illa.isNumber(scrollbarUtil.getDefaultSize(illa.Axis2D.X)), 'ScrollbarUtil.getDefaultSize 1');
			u.assert(illa.isNumber(scrollbarUtil.getDefaultSize(illa.Axis2D.Y)), 'ScrollbarUtil.getDefaultSize 2');
			u.assert(scrollbarUtil.getDefaultSize(illa.Axis2D.X) >= 0, 'ScrollbarUtil.getDefaultSize 3');
			u.assert(scrollbarUtil.getDefaultSize(illa.Axis2D.Y) >= 0, 'ScrollbarUtil.getDefaultSize 4');

			var scrolling = jquery.$('<div style="overflow-x: scroll; overflow-y: scroll">');
			var scrolling2 = jquery.$('<div style="overflow: scroll">');
			var nonScrolling = jquery.$('<div style="overflow-x: hidden; overflow-y: hidden">');
			var nonScrolling2 = jquery.$('<div style="overflow-x: visible; overflow-y: visible">');
			var nonScrolling3 = jquery.$('<div style="overflow: visible">');

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