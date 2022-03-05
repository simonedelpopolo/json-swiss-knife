import json_swiss_knife from '../json_swiss_knife.js'
import { string_buffer } from './functions/string_buffer.js'

const is_jsonSymbol = Symbol( 'Object [ json_swiss_knife.is_json ]' )
const is_json = Object.defineProperty( json_swiss_knife, is_jsonSymbol, {
    enumerable: true,
    configurable: false,
    writable: false,
    
    /**
     * Given a string or Buffer it will return a boolean, true if it is a JSON string false otherwise.
     *
     * @param {string | Buffer} string - The string argument to be checked.
     * @param {boolean=false} error - Default is set to false, if set to true will resolve with the error thrown by parse function.
     * @returns {Promise | PromiseFulfilledResult<boolean> | PromiseRejectedResult<string>}
     */
    value: async function is_json( string, error = false ) {
    
        const [ is_string, parsed ] = await string_buffer( string, 'is_json' )
        
        return new Promise( ( resolve, reject ) => {
            
            if( is_string === false )
                reject( `only string or Buffer are accepted type for \`string\` argument. Given type: ${ typeof string }` )
            
            if( error === true ){
                if( typeof parsed !== 'boolean' )
                    resolve( parsed )
            }
    
            if( parsed !== true )
                resolve( false )
            
            resolve( true )
        } )
    },
} )

export default is_json[ is_jsonSymbol ]
