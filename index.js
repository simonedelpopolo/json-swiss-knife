import {
    is_json as i_j,
    is_jsonSymbol as i_js,
    parse as p,
    property_value as p_v,
    property_valueSymbol as p_vs,
    parseSymbol as ps
} from './lib/json-swiss-knife/exporter.js'

/**
 * Check if the given string is valid json syntax before to parse it and return an object.
 *
 * @param {Buffer|string} string - The given string.
 * @returns {Promise | PromiseFulfilledResult<object> | PromiseRejectedResult<string>}
 */
export async function parse( string ){
    
    return p[ ps ]( string ).then( obj => obj )
        .catch( error => error )
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
export async function property_value( array, obj= false ){
    
    return p_v[ p_vs ]( array, obj ).then( obj => obj )
        .catch( error => error )
}

/**
 * Given a string or Buffer it will return a boolean, true if it is a JSON string false otherwise.
 *
 * @param {string | Buffer} string - .
 */
export function is_json( string ){
    
    return i_j[ i_js ]( string )
}
