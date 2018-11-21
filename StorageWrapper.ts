import { StorageType } from './StorageType'
import { isBoolean } from 'illa/Type'

export class StorageWrapper {

	private storage: Storage | null
	private static isSupported: boolean[] = []

	constructor(private type: StorageType) {
		this.storage = this.getNativeStorage(type)
	}
	
	static getIsSupported(t: StorageType): boolean {
		if (!isBoolean(this.isSupported[t])) {
			var storageWrapper = new StorageWrapper(t)
			try {
				var itemName = 'berek_StorageUtil_test'
				var value = '1'
				storageWrapper.setItem(itemName, value)
				this.isSupported[t] = storageWrapper.getItem(itemName) === value
				storageWrapper.removeItem(itemName)
			} catch (e) {
				this.isSupported[t] = false
			}
		}
		return this.isSupported[t]
	}
	
	getNativeStorage(type: StorageType): Storage | null {
		var result: Storage | null = null
		try {
			switch (type) {
				case StorageType.LOCAL:
					result = window.localStorage
					break
				case StorageType.SESSION:
					result = window.sessionStorage
					break
			}
		} catch (e) {}
		return result
	}
	
	getKeys(): string[] {
		var result: string[] = []
		if (this.storage) {
			for (var i = 0, n = this.storage.length; i < n; i++) {
				let value = this.storage.key(i)
				if (value) result.push(value)
			}
		}
		return result
	}
	
	getItem(k: string): string | null {
		var result: string | null = null
		if (this.storage) {
			result = this.storage.getItem(k)
		}
		return result
	}
	
	setItem(k: string, v: string): boolean {
		var success = false
		if (this.storage) {
			try {
				this.storage.setItem(k, v)
				success = true
			} catch (e) {}
		}
		return success
	}
	
	removeItem(k: string): void {
		if (this.storage) {
			this.storage.removeItem(k)
		}
	}
	
	clear(type: StorageType): void {
		if (this.storage) {
			this.storage.clear()
		}
	}
	
	getType() { return this.type }
	getStorage() { return this.storage }
}