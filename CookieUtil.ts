import {
	castNicely,
	escapeRegExp,
} from 'illa/StringUtil';

import {
	isUndefined,
} from 'illa/Type';

var areCookiesAccepted: boolean;

export function getAreCookiesAccepted(): boolean {
	if (isUndefined(this.areCookiesAccepted)) {
		var key = 'berek_CookieUtil_test';
		var value = 'test';
		this.setItem(key, value);
		this.areCookiesAccepted = this.getItem(key) === value;
		if (this.areCookiesAccepted) this.removeItem(key);
	}
	return this.areCookiesAccepted;
}

export function getCookies(): string[] {
	var result = castNicely(document.cookie).split(/\s*;\s*/);
	if (result[0] == '') result.shift();
	return result;
}

export function encodeKey(key: string): string {
	return encodeURIComponent(key).replace(/[()]/g, function(s: string): string { return s.charCodeAt(0).toString(16); });
}

export function getItem(key: string): string {
	var result = '';
	var keyEncoded = this.encodeKey(key);
	var keyEncodedEscaped = escapeRegExp(keyEncoded);
	var keyRe = new RegExp('^\\s*' + keyEncodedEscaped + '\\s*=');
	var cookies = this.getCookies();
	for (var i = 0, n = cookies.length; i < n; i++) {
		var cookieArr = cookies[i].split(keyRe);
		if (cookieArr.length > 1) {
			result = decodeURIComponent(cookieArr[1]);
			break;
		}
	}
	return result;
}

export function setItem(key: string, value: string, validForDays?: number, path = '', domain = '', isSecure = false): void {
	var cookie = this.encodeKey(key) + '=' + encodeURIComponent(value);
	if (validForDays) {
		var expires = new Date();
		expires.setTime(expires.getTime() + validForDays * 1000 * 60 * 60 * 24);
		cookie += '; expires=' + expires.toUTCString();
	}
	if (path) cookie += '; path=' + path;
	if (domain) cookie += '; domain=' + domain;
	if (isSecure) cookie += '; secure';
	
	document.cookie = cookie;
}

export function removeItem(key: string, path = '', domain = ''): void {
	this.setItem(key, '', -1, path, domain);
}

export function getKeys(): string[] {
	var result: string[] = [];
	var cookies = this.getCookies();
	for (var i = 0, n = cookies.length; i < n; i++) {
		var cookieArr = cookies[i].split('=');
		result.push(decodeURIComponent(cookieArr[0]));
	}
	return result;
}