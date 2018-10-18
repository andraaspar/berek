import jQuery from 'jquery-ts';
import { Axis } from './Axis';
import { Filter } from './Filter';
import * as PointerUtil from './PointerUtil';
import { ScrollbarUtil } from './ScrollbarUtil';
import { Settings } from './Settings';
import { Widget } from './Widget';


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
		
		jq.html(`<div>Hello World!</div>`)
	}
}

jQuery(() => {

	console.info(`Scrollbar width:`, new ScrollbarUtil().getDefaultSize(Axis.X))
	
	Settings.write('test', { testFilterSettings: true })
	Settings.addFilters(new TestFilter()).then(() => console.info(`All filters applied!`))
	
	jQuery(document).on('pointerdown', (e: jQuery.IEvent) => {
		let coords = PointerUtil.getCoords(e)
		console.info(`Pointer down at ${coords.x}, ${coords.y}`)
	})
	
	let w = new TestWidget().initTestWidget(jQuery('body'))
})
