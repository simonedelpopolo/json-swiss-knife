import * as Module from 'module'
import { array_, object_, string_ } from 'oftypes'

const json_swiss_knife = Object.create( Module )

const type__ = {
    
    /**
     * It checks if the given argument has the right requested type.
     *
     * @param { any | Buffer} variable - The given variable to the string argument.
     * @returns {Promise|PromiseFulfilledResult<string>|PromiseRejectedResult<string>}
     */
    string_buffer: async ( variable ) => {
        
        let is_string
        
        if( Buffer.isBuffer( variable ) === true )
            is_string = variable.toString( 'utf-8' )
        
        else if ( await string_( variable ) === true )
            is_string = variable
        
        else
            is_string = false
        
        return new Promise( ( resolve, reject ) => {
            
            if( is_string === false )
                reject( false )
            
            resolve( is_string )
            
        } )
        
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

const parseSymbol = Symbol( 'The function parse(string|buffer):object' )
Object.defineProperty( json_swiss_knife, parseSymbol, {
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
    
        const type_check = await type__.string_buffer( string ).catch( error => error )
        
        return new Promise( ( resolve, reject ) => {
            
            if ( type_check === false )
                reject( `only string or Buffer are accepted type for \`string\` argument. Given type: ${ typeof string }` )
        
            try {
                resolve( JSON.parse( type_check ) )
            }
            catch ( error ) {
                reject( error.message )
            }
        } )
    }
} )

const property_valueSymbol = Symbol( 'The function property_value(array):string|object' )
Object.defineProperty( json_swiss_knife, property_valueSymbol, {
    enumerable: true,
    configurable: false,
    writable: false,
    
    /**
     * Given an array it will give back an JSON string object
     * where, the first entry of the array will be the property name of the object
     * and the second entry of the array will be the value of the property.
     * !The given array length must be multiple of two.
     *
     * @param {string[]|number[]} array - The give array.
     * @param {boolean=false} obj - If set to true it will give back an object instead of a json string.
     * @returns {Promise | PromiseFulfilledResult<|string|object> | PromiseRejectedResult<string>}
     */
    value: async function property_value( array, obj= false ) {
        
        let is_array
        is_array = await type__.array( array ).catch( error => error )
    
        return new Promise( ( resolve, reject ) => {
            
            let json
            let even = 0
            let property_value = []
            
            if( is_array === false )
                reject( `this method accept only Array. Given type: ${ typeof array }` )
            
            if ( is_array.length % 2 !== 0 )
                reject( 'this method accept only Array that have at least two entries or multiple of 2' )
            
            for ( const key in is_array ) {
        
                if ( even + parseInt( key ) % 2 === 0 )
                    property_value.push( Array.of( is_array[ parseInt( key ) ], is_array[ parseInt( key ) + 1 ] ) )
        
            }
    
            json = Object.fromEntries( property_value )
    
            resolve( obj === false ? JSON.stringify( json ) : json )
            
        } )
    },
} )

const isJsonSymbol = Symbol( 'The function is_json(Buffer|string):boolean' )

Object.defineProperty( json_swiss_knife, isJsonSymbol, {
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

Object.freeze( json_swiss_knife )

/**
 * Check if the given string is valid json syntax before to parse it and return an object.
 *
 * @param {Buffer|string} string - The given string.
 * @returns {Promise | PromiseFulfilledResult<object> | PromiseRejectedResult<string>}
 */
export async function parse( string ){
    
    return json_swiss_knife[ parseSymbol ]( string ).then( obj => obj )
        .catch( error => error )
}

/**
 * Given an array it will give back an JSON string object
 * where, the first entry of the array will be the property name of the object
 * and the second entry of the array will be the value of the property.
 * !The given array length must be multiple of two.
 *
 * @param {string[]|number[]} array - The give array.
 * @param {boolean=false} obj - If set to true it will give back an object instead of a json string.
 * @returns {Promise | PromiseFulfilledResult<string|object> | PromiseRejectedResult<string>}
 */
export async function property_value( array, obj= false ){
    
    return json_swiss_knife[ property_valueSymbol ]( array, obj ).then( obj => obj )
        .catch( error => error )
}

/**
 * Given a string or Buffer it will return a boolean, true if it is a JSON string false otherwise.
 *
 * @param {string | Buffer} string - .
 * @returns {Promise | PromiseFulfilledResult<boolean> | PromiseRejectedResult<string>}
 */
export async function is_json( string ){
    
    return json_swiss_knife[ isJsonSymbol ]( string ).then( boolean => boolean )
        .catch( error => error )
}
