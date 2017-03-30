import jQuery from 'jquery-ts'

export function getJQueryById(id: string): jQuery.IInstance {
	var result = document.getElementById(id + '')
	if (result) return jQuery(result)
	else return null
}