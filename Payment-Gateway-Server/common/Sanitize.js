const isString = (value) => typeof value === 'string' && value.trim().length > 0 ? value.trim() : '';

const isBoolean = (value) => typeof value === 'boolean' && value === true;

const isArray = (value) => Array.isArray(value) ? value : [];

const isNumber = (value) => typeof value === 'number' && Number.isInteger(value) ? value : 0;

const isObject = (value) => typeof value === 'object' && value !== null && !Array.isArray(value) ? value : {};

export { isString, isBoolean, isArray, isNumber, isObject };