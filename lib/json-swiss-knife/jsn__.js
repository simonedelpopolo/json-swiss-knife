import { array_, string_ } from 'oftypes'

export const jsn__ = {
    
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
