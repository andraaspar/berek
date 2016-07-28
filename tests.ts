import jQuery from 'jquery-ts';

import Axis from 'illa/Axis2D';
import Context from './Context';
import * as CookieUtil from './CookieUtil';
import * as DimensionsUtil from './DimensionsUtil';
import Filter from './Filter';
import IPointerCoords from './IPointerCoords';
import PointerCoordsContext from './PointerCoordsContext';
import PointerEventSource from './PointerEventSource';
import * as PointerUtil from './PointerUtil';
import ScrollbarUtil from './ScrollbarUtil';
import Settings from './Settings';
import SettingsEvent from './SettingsEvent';
import StorageType from './StorageType';
import StorageWrapper from './StorageWrapper';
import UnitTest from './UnitTest';
import Widget from './Widget';

var outJq = jQuery('<pre></pre>').appendTo('body');

function log(...args: any[]) {
	outJq.text(outJq.text() + args.join('') + '\n');
}

log(CookieUtil.getAreCookiesAccepted());
log(DimensionsUtil.getSize(jQuery('body'), Axis.X));