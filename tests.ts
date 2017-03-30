import * as CookieUtil from './CookieUtil'
import * as DimensionsUtil from './DimensionsUtil'
import * as PointerUtil from './PointerUtil'

import { Axis2D } from 'illa/Axis2D'
import { Context } from './Context'
import { Filter } from './Filter'
import { ScrollbarUtil } from './ScrollbarUtil'
import { Settings } from './Settings'
import { StorageType } from './StorageType'
import { StorageWrapper } from './StorageWrapper'
import { Widget } from './Widget'
import { arrkup } from 'illa/Arrkup'
import { info } from 'illa/Log'
import jQuery from 'jquery-ts'

class TestFilter extends Filter {
	getSettingsKey(): string {
		return 'test'
	}
	useSetting(setting: any): Promise<any> {
		info(`Test filter got settings:`, setting)
		return Promise.resolve()
	}
}

class TestWidget extends Widget {
	initTestWidget(jq: jQuery.IInstance) {
		super.initWidget(jq)
		
		jq.html(arrkup(['div',
			`Hello World!`
		]))
	}
}

jQuery(() => {

	info(`Cookies are accepted:`, CookieUtil.getAreCookiesAccepted())
	info(`Body inner width:`, DimensionsUtil.getSize(jQuery('body'), Axis2D.X, Context.INNER))
	info(`Scrollbar width:`, new ScrollbarUtil().getDefaultSize(Axis2D.X))
	info(`Local storage supported:`, StorageWrapper.getIsSupported(StorageType.LOCAL))
	info(`Session storage supported:`, StorageWrapper.getIsSupported(StorageType.SESSION))
	
	Settings.write('test', { testFilterSettings: true })
	Settings.addFilters(new TestFilter()).then(() => info(`All filters applied!`))
	
	jQuery(document).on('pointerdown', (e: jQuery.IEvent) => {
		let coords = PointerUtil.getCoords(e)
		info(`Pointer down at ${coords.x}, ${coords.y}`)
	})
	
	let w = new TestWidget().initTestWidget(jQuery('body'))
})
