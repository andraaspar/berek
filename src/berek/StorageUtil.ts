/// <reference path='StorageType.ts'/>

module berek {
	export class StorageUtil {
		
		static isStorageSupported(type: StorageType): boolean {
			var result = false;
			var storage = this.getStorage(type);
			if (storage) {
				try {
					var itemName = 'berek_StorageUtil_test';
					storage.setItem(itemName, '1');
					result = storage.getItem(itemName) === '1';
					storage.removeItem(itemName);
				} catch (e) {
					result = false;
				}
			}
			return result;
		}
		
		static getStorage(type: StorageType): Storage {
			var result: Storage;
			try {
				switch (type) {
					case StorageType.LOCAL:
						result = window.localStorage;
						break;
					case StorageType.SESSION:
						result = window.sessionStorage;
						break;
				}
			} catch (e) {}
			return result;
		}
		
		static getKey(type: StorageType, i: number): string {
			var result: string;
			var storage = this.getStorage(type);
			if (storage) {
				result = storage.key(i);
			}
			return result;
		}
		
		static getItem(type: StorageType, k: string): string {
			var result: string;
			var storage = this.getStorage(type);
			if (storage) {
				result = storage.getItem(k);
			}
			return result;
		}
		
		static setItem(type: StorageType, k: string, v: string): void {
			var storage = this.getStorage(type);
			if (storage) {
				try {
					storage.setItem(k, v);
				} catch (e) {}
			}
		}
		
		static removeItem(type: StorageType, k: string): void {
			var storage = this.getStorage(type);
			if (storage) {
				storage.removeItem(k);
			}
		}
		
		static clear(type: StorageType): void {
			var storage = this.getStorage(type);
			if (storage) {
				storage.clear();
			}
		}
	}
}