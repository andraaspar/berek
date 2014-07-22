/// <reference path='../../lib/illa/UnitTest.ts'/>

/// <reference path='jquery/_module.ts'/>

module berek {
	export class UnitTest extends illa.UnitTest {
		constructor(public printTarget: jquery.IInstance) {
			super();
		}

		info(...r): void {
			if (this.printTarget) {
				var out = jquery.$('<p>').text(r.join(' '));
				this.printTarget.append(out);
			} else {
				super.info.apply(this, r);
			}
		}

		warn(...r): void {
			if (this.printTarget) {
				var out = jquery.$('<p>').text(r.join(' ')).prepend('<b>WARNING: </b>');
				this.printTarget.append(out);
			} else {
				super.warn.apply(this, r);
			}
		}
	}
}