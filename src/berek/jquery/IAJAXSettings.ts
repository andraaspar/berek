/// <reference path='IAJAXSettingsBeforeSendFunction.ts'/>
/// <reference path='IAJAXSettingsCompleteFunction.ts'/>
/// <reference path='IAJAXSettingsContentsObject.ts'/>
/// <reference path='IAJAXSettingsDataFilterFunction.ts'/>
/// <reference path='IAJAXSettingsXHRFunction.ts'/>
/// <reference path='IXHRDoneFunction.ts'/>
/// <reference path='IXHRFailFunction.ts'/>

module berek.jquery {
	export interface IAJAXSettings {
		accepts?: Object;
		async?: boolean;
		beforeSend?: IAJAXSettingsBeforeSendFunction;
		cache?: boolean;
		complete?: IAJAXSettingsCompleteFunction;
		contents?: IAJAXSettingsContentsObject;
		contentType?: string;
		context?: Object;
		converters?: Object;
		crossDomain?: boolean;
		data?: any;
		dataFilter?: IAJAXSettingsDataFilterFunction;
		dataType?: string;
		error?: IXHRFailFunction;
		global?: boolean;
		headers?: Object;
		ifModified?: boolean;
		isLocal?: boolean;
		jsonp?: string;
		jsonpCallback?: any;
		mimeType?: string;
		password?: string;
		processData?: boolean;
		scriptCharset?: string;
		statusCode?: Object;
		success?: IXHRDoneFunction;
		timeout?: number;
		traditional?: boolean;
		type?: string;
		url?: string;
		username?: string;
		xhr?: IAJAXSettingsXHRFunction;
		xhrFields?: Object;
	}
}