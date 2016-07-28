import IllaUnitTest from 'illa/UnitTest';
import jQuery from 'jquery-ts';

export class UnitTest extends IllaUnitTest {
	constructor(public printTarget: jQuery.IInstance) {
		super();
	}

	info(...r): void {
		if (this.printTarget) {
			var out = jQuery('<p>').text(r.join(' '));
			this.printTarget.append(out);
		} else {
			super.info.apply(this, r);
		}
	}

	warn(...r): void {
		if (this.printTarget) {
			var out = jQuery('<p>').text(r.join(' ')).prepend('<b>WARNING: </b>');
			this.printTarget.append(out);
		} else {
			super.warn.apply(this, r);
		}
	}
}

export default UnitTest;