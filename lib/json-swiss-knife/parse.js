import { jsn__ } from './jsn__.js'
import json_swiss_knife from '../json_swiss_knife.js'

/**
 * @type {symbol}
 */
export const parseSymbol = Symbol( 'The function parse(string|buffer):object' )
export const parse = Object.defineProperty( json_swiss_knife, parseSymbol, {
    enumerable:true,
    configurable:false,
    writable: false,
    
    /**
     * Check if the given string is valid json syntax before to parse it and return an object.
     *
     * @param {Buffer|string} string - The given string.
     * @returns {Promise | PromiseFulfilledResult<object> | PromiseRejectedResult<string>}
     */
    value: async function parse( string ){
        
        const type_check = await jsn__.string_buffer( string )
        
        return new Promise( ( resolve, reject ) => {
            
            if ( type_check === false )
                reject( `only string or Buffer are accepted type for \`string\` argument. Given type: ${ typeof string }` )
            
            try {
                resolve( JSON.parse( type_check ) )
            }
            catch ( error ) {
                resolve( error.message )
            }
        } )
    }
} )
