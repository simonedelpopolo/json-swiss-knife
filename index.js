import { is_json__, json_swiss_knife__, parse__, property_value__ } from './lib/exporter.js'

export const json_swiss_knife = json_swiss_knife__

/**
 * Given a string or Buffer it will return a boolean, true if it is a JSON string false otherwise.
 *
 * @param {string | Buffer} string - The string argument to be checked.
 * @param {boolean=false} error - Default is set to false, if set to true will resolve with the error thrown by parse function.
 * @returns {Promise | PromiseFulfilledResult<boolean> | PromiseRejectedResult<string>}
 */
export function is_json( string, error = false ){
    
    return is_json__( string, error )
}

/**
 * Check if the given string is valid json syntax before to parse it and return an object.
 *
 * @param {Buffer|string} string - The given string.
 * @returns {Promise | PromiseFulfilledResult<object> | PromiseRejectedResult<string>}
 */
export async function parse( string ){
    
    return parse__( string )
}

/**
 * Given an array it will give back an JSON string object
 * where, the first entry of the array will be the property name of the object
 * and the second entry of the array will be the value of the property.
 * The given array length must be multiple of two.
 *
 * @param {string[]|number[]} array - The give array.
 * @param {boolean=false} obj - If set to true it will give back an object instead of a json string.
 * @returns {Promise | PromiseFulfilledResult<string|object> | PromiseRejectedResult<string>}
 */
export function property_value( array, obj= false ){
    
    return property_value__( array, obj )
}

Object.freeze( json_swiss_knife )
