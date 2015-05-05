/// <reference path='../../lib/illa/StringUtil.ts'/>

module berek {
	export class CookieUtil {
		
		private static areCookiesAccepted: boolean;
		
		static getAreCookiesAccepted(): boolean {
			if (illa.isUndefined(this.areCookiesAccepted)) {
				var key = 'berek_CookieUtil_test';
				var value = 'test';
				this.setItem(key, value);
				this.areCookiesAccepted = this.getItem(key) === value;
				if (this.areCookiesAccepted) this.removeItem(key);
			}
			return this.areCookiesAccepted;
		}
		
		static getCookies(): string[] {
			var result = illa.StringUtil.castNicely(document.cookie).split(/\s*;\s*/);
			if (result[0] == '') result.shift();
			return result;
		}
		
		static encodeKey(key: string): string {
			return encodeURIComponent(key).replace(/[()]/g, function(s: string): string { return s.charCodeAt(0).toString(16); });
		}
		
		static getItem(key: string): string {
			var result = '';
			var keyEncoded = this.encodeKey(key);
			var keyEncodedEscaped = illa.StringUtil.escapeRegExp(keyEncoded);
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
		
		static setItem(key: string, value: string, validForDays?: number, path = '', domain = '', isSecure = false): void {
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
		
		static removeItem(key: string, path = '', domain = ''): void {
			this.setItem(key, '', -1, path, domain);
		}
		
		static getKeys(): string[] {
			var result: string[] = [];
			var cookies = this.getCookies();
			for (var i = 0, n = cookies.length; i < n; i++) {
				var cookieArr = cookies[i].split('=');
				result.push(decodeURIComponent(cookieArr[0]));
			}
			return result;
		}
	}
}