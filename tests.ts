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
import jQuery from 'jquery-ts'

class TestFilter extends Filter {
	getSettingsKey(): string {
		return 'test'
	}
	useSetting(setting: any): Promise<any> {
		console.info(`Test filter got settings:`, setting)
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

	console.info(`Cookies are accepted:`, CookieUtil.getAreCookiesAccepted())
	console.info(`Body inner width:`, DimensionsUtil.getSize(jQuery('body'), Axis2D.X, Context.INNER))
	console.info(`Scrollbar width:`, new ScrollbarUtil().getDefaultSize(Axis2D.X))
	console.info(`Local storage supported:`, StorageWrapper.getIsSupported(StorageType.LOCAL))
	console.info(`Session storage supported:`, StorageWrapper.getIsSupported(StorageType.SESSION))
	
	Settings.write('test', { testFilterSettings: true })
	Settings.addFilters(new TestFilter()).then(() => console.info(`All filters applied!`))
	
	jQuery(document).on('pointerdown', (e: jQuery.IEvent) => {
		let coords = PointerUtil.getCoords(e)
		console.info(`Pointer down at ${coords.x}, ${coords.y}`)
	})
	
	let w = new TestWidget().initTestWidget(jQuery('body'))
})
