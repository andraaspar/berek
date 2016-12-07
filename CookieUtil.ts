import { escapeRegExp, optionalString } from 'illa/StringUtil'

import { isUndefined } from 'illa/Type'

var areCookiesAccepted: boolean

export function getAreCookiesAccepted(): boolean {
	if (isUndefined(areCookiesAccepted)) {
		var key = 'berek_CookieUtil_test'
		var value = 'test'
		setCookie(key, value)
		areCookiesAccepted = getCookie(key) === value
		if (areCookiesAccepted) removeCookie(key)
	}
	return areCookiesAccepted
}

export function getCookies(): string[] {
	var result = optionalString(document.cookie).split(/\s*;\s*/)
	if (result[0] == '') result.shift()
	return result
}

export function encodeCookieKey(key: string): string {
	return encodeURIComponent(key).replace(/[()]/g, function(s: string): string { return s.charCodeAt(0).toString(16) })
}

export function getCookie(key: string): string {
	var result = ''
	var keyEncoded = encodeCookieKey(key)
	var keyEncodedEscaped = escapeRegExp(keyEncoded)
	var keyRe = new RegExp('^\\s*' + keyEncodedEscaped + '\\s*=')
	var cookies = getCookies()
	for (var i = 0, n = cookies.length; i < n; i++) {
		var cookieArr = cookies[i].split(keyRe)
		if (cookieArr.length > 1) {
			result = decodeURIComponent(cookieArr[1])
			break
		}
	}
	return result
}

export function setCookie(key: string, value: string, validForDays?: number, path = '', domain = '', isSecure = false): void {
	var cookie = encodeCookieKey(key) + '=' + encodeURIComponent(value)
	if (validForDays) {
		var expires = new Date()
		expires.setTime(expires.getTime() + validForDays * 1000 * 60 * 60 * 24)
		cookie += '; expires=' + expires.toUTCString()
	}
	if (path) cookie += '; path=' + path
	if (domain) cookie += '; domain=' + domain
	if (isSecure) cookie += '; secure'
	
	document.cookie = cookie
}

export function removeCookie(key: string, path = '', domain = ''): void {
	setCookie(key, '', -1, path, domain)
}

export function getCookieKeys(): string[] {
	var result: string[] = []
	var cookies = getCookies()
	for (var i = 0, n = cookies.length; i < n; i++) {
		var cookieArr = cookies[i].split('=')
		result.push(decodeURIComponent(cookieArr[0]))
	}
	return result
}