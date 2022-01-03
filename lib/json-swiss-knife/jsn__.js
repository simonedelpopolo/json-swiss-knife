import { parse } from '../../index.js'
import { array_, object_, string_ } from 'oftypes'

/**
 * @type {{string_buffer: ((function((*|Buffer), string=): (Promise|PromiseFulfilledResult<string>|PromiseRejectedResult<string>))|*), array: (function(*): Promise<unknown>)}}
 * @private
 */
export const jsn__ = {
    
    /**
     * It checks if the given argument has the right requested type.
     *
     * @param { any | Buffer} variable - The given variable to the string argument.
     * @param {string} jsn_property - Default ise set to check the property parse, otherwise checks is_json.
     * @returns {Promise<string>|PromiseFulfilledResult<string|Buffer>|PromiseRejectedResult<string>}
     */
    string_buffer: async ( variable, jsn_property = 'parse' ) => {
        
        let is_string
        
        if( Buffer.isBuffer( variable ) === true )
            is_string = variable.toString( 'utf-8' )
        
        else if ( await string_( variable ) === true )
            is_string = variable
        
        else
            is_string = false
        
        // eslint-disable-next-line default-case
        switch ( jsn_property ){
            
            case 'parse':
                
                return new Promise( ( resolve ) => {
        
                    if( is_string === false )
                        resolve( false )
        
                    resolve( is_string )
                } )
            
            case 'is_json': {
                
                let parsed
                if ( typeof is_string !== 'boolean' ) {
        
                    parsed = await parse( is_string ).catch( error => error )
                    if ( await object_( parsed ) === true )
                        parsed = true
                }
                
                return new Promise( ( ( resolve ) => {
        
                    resolve( [ is_string, parsed ] )
                    
                } ) )
            }
        }
    },
    
    /**
     * It checks that the argument passed is an array.
     *
     * @param {any} variable - The given variable to the array argument.
     * @returns {Promise<void>}
     */
    array: async( variable ) => {
        
        let is_array
        if ( await array_( variable ) === true )
            is_array = variable
        else
            is_array = false
        
        return new Promise( ( ( resolve, reject ) => {
            
            if( is_array === false )
                reject( false )
            
            resolve( is_array )
        } ) )
    }
    
    
}
