import json_swiss_knife from '../json_swiss_knife.js'
import { parse } from '../../index.js'
import { object_, string_ } from 'oftypes'

/**
 * @type {symbol}
 */
export const is_jsonSymbol = Symbol( 'The function is_json(Buffer|string):boolean' )
export const is_json = Object.defineProperty( json_swiss_knife, is_jsonSymbol, {
    enumerable: true,
    configurable: false,
    writable: false,
    
    /**
     * Given a string or Buffer it will return a boolean, true if it is a JSON string false otherwise.
     *
     * @param {string | Buffer} string - .
     * @returns {Promise | PromiseFulfilledResult<boolean> | PromiseRejectedResult<string>}
     */
    value: async function is_json( string ) {
        
        let is_string
        
        if( Buffer.isBuffer( string ) === true )
            is_string = string.toString( 'utf-8' )
        
        else if ( await string_( string ) === true )
            is_string = string
        
        else
            is_string = false
        
        let parsed
        if( typeof is_string !== 'boolean' ){
            
            parsed = await parse( is_string )
            if( await object_( parsed ) === true )
                parsed = true
            
        }
        
        return new Promise( ( resolve, reject ) => {
            
            if( is_string === false )
                reject( `only string or Buffer are accepted type for \`string\` argument. Given type: ${ typeof string }` )
            
            if( parsed !== true )
                resolve( false )
            
            resolve( true )
        } )
    },
} )
