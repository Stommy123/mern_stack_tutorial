export const isLoggedIn = _ => !!sessionStorage.getItem('sessionToken');
export const isArray = a => Object.prototype.toString.call(a) == "[object Array]";
export const isObject = item => !!(!isArray(item) && typeof item === "object" && item);
export const isString = item => typeof item === 'string';
export const isNumber = item => typeof item === 'number';
export const isFunction = func => typeof func === 'function';
export const isEmpty = item => {
  if (item && item.hasOwnProperty("length")) return !item.length;
	if (isObject(item)) return !Object.keys(item).length;
	return true;
}
export const isNull = item => item === null;
export const cloneDeep = item => JSON.parse(JSON.stringify(item));
export const compact = arr => Array.isArray(arr) ? arr.filter(e => e) : arr