import jQuery from 'jquery-ts';
import Alignment from 'illa/Alignment';
import Axis from 'illa/Axis2D';
import End from 'illa/End';
import Context from './Context';

export function getSize(jq: jQuery.IInstance, axis: Axis, context = Context.PARENT): number {
	var result = NaN;

	switch (context) {
		case Context.INNER:
			switch (axis) {
				case Axis.X:
					result = jq.innerWidth();
					break;
				case Axis.Y:
					result = jq.innerHeight();
					break;
			}
			break;
		case Context.PARENT:
		case Context.PAGE:
			switch (axis) {
				case Axis.X:
					result = jq.outerWidth();
					break;
				case Axis.Y:
					result = jq.outerHeight();
					break;
			}
			break;
	}
	return result;
}

export function setSize(jq: jQuery.IInstance, v: number, a?: Axis, context = Context.PARENT): void {
	for (var axis = a || Axis.X, lastAxis = (a != null ? a : Axis.Y); axis <= lastAxis; axis++) {
		var value = v;
		switch (context) {
			case Context.PARENT:
			case Context.PAGE:
				var diff = value - getSize(jq, axis, context);
				value = getSize(jq, axis, Context.INNER) + diff;
				break;
		}
		if (isNaN(value) || !isFinite(value)) {
			value = 0;
		} else {
			value = Math.max(0, Math.round(value));
		}
		switch (axis) {
			case Axis.X:
				jq.width(value);
				break;
			case Axis.Y:
				jq.height(value);
				break;
		}
	}
}

export function getOffset(jq: jQuery.IInstance, axis: Axis, alignment = Alignment.START, context = Context.PARENT): number {
	var result = NaN;
	var offset: jQuery.IPositionObject;
	switch (context) {
		case Context.INNER:
			offset = { left: 0, top: 0 };
			break;
		case Context.PARENT:
			offset = jq.position();
			break;
		case Context.PAGE:
			offset = jq.offset();
			break;
	}
	switch (axis) {
		case Axis.X:
			result = offset.left;
			break;
		case Axis.Y:
			result = offset.top;
			break;
	}
	if (alignment != Alignment.START) {
		var size = getSize(jq, axis, context);
		if (alignment == Alignment.CENTER) {
			size = size / 2;
		}
		result += size;
	}
	return result;
}

export function setOffset(jq: jQuery.IInstance, v: number, a?: Axis, alignment = Alignment.START, context = Context.PARENT, preventNegative = false): void {
	for (var axis = a || Axis.X, lastAxis = (a != null ? a : Axis.Y); axis <= lastAxis; axis++) {
		var value = v;
		if (context == Context.PAGE) {
			var pageOffset = getOffset(jq, axis, Alignment.START, Context.PAGE);
			var currentOffset = getOffset(jq, axis);
			value -= pageOffset - currentOffset; // Page offset of parent
		} else if (context == Context.INNER) {
			value += getOffset(jq, axis); // Parent offset
		}
		if (alignment != Alignment.START) {
			var size = getSize(jq, axis, context);
			if (alignment == Alignment.CENTER) {
				size = size / 2;
			}
			value -= size;
		}
		if (isNaN(value) || !isFinite(value)) {
			value = 0;
		} else {
			value = Math.round(value);
			if (preventNegative) value = Math.max(0, value);
		}
		switch (axis) {
			case Axis.X:
				jq.css('left', value);
				break;
			case Axis.Y:
				jq.css('top', value);
				break;
		}
	}
}

export function getDirection(axis: Axis, end: End): string {
	switch (axis) {
		case Axis.X:
			switch (end) {
				case End.MIN:
					return 'left';
				case End.MAX:
					return 'right';
			}
			break;
		case Axis.Y:
			switch (end) {
				case End.MIN:
					return 'top';
				case End.MAX:
					return 'bottom';
			}
			break;
	}
	return '';
}

export function getCSSProperty(prefix: string, suffix: string, jq: jQuery.IInstance, axis: Axis, e?: End): number {
	var result = 0;
	for (var end = e || End.MIN, lastEnd = (e != null ? e : End.MAX); end <= lastEnd; end++) {
		result += parseInt(jq.css(prefix + '-' + getDirection(axis, end) + '-' + suffix));
	}
	return result;
}

export function setCSSProperty(prefix: string, suffix: string, jq: jQuery.IInstance, value: number, a?: Axis, e?: End): void {
	if (a == null && e == null) {
		jq.css(suffix ? prefix + '-' + suffix : prefix, value);
	} else {
		for (var axis = a || Axis.X, lastAxis = (a != null ? a : Axis.Y); axis <= lastAxis; axis++) {
			for (var end = e || End.MIN, lastEnd = (e != null ? e : End.MAX); end <= lastEnd; end++) {
				jq.css(prefix + '-' + getDirection(axis, end) + '-' + suffix, value);
			}
		}
	}
}

export function getPadding(jq: jQuery.IInstance, axis: Axis, e?: End): number {
	return getCSSProperty('padding', '', jq, axis, e);
}

export function setPadding(jq: jQuery.IInstance, value: number, a?: Axis, e?: End): void {
	setCSSProperty('padding', '', jq, value, a, e);
}

export function getBorder(jq: jQuery.IInstance, axis: Axis, e?: End): number {
	return getCSSProperty('border', 'width', jq, axis, e);
}

export function setBorder(jq: jQuery.IInstance, value: number, a?: Axis, e?: End): void {
	setCSSProperty('border', 'width', jq, value, a, e);
}

export function getMargin(jq: jQuery.IInstance, axis: Axis, e?: End): number {
	return getCSSProperty('margin', '', jq, axis, e);
}

export function setMargin(jq: jQuery.IInstance, value: number, a?: Axis, e?: End): void {
	setCSSProperty('margin', '', jq, value, a, e);
}