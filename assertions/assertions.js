// A todo assertions and statements.
console.time( 'assertions finished ' )
import { EventEmitter } from 'events'
import { is_json } from '../index.js'
import { deepStrictEqual, ok, rejects } from 'assert/strict'

const AssertionEvent = new EventEmitter()

AssertionEvent.on( 'end', () => {
    console.log( '__________________________________________________________________________' )
    console.log()
    console.timeEnd( 'assertions finished ' )
} )

const Assertions = {
    
    assertion0 : async (  ) => {
        
        let test_results
        
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[32mfunction is_json.', '\x1b[31massertion ->', 0, '\x1b[0m' )
        console.log( '  \x1b[32mlisting statements' )
        console.log( '    function is_json rejects', '\x1b[31mstatement ->', 0, '\x1b[0m' )
        console.log( '    function is_json returns false', '\x1b[31mstatement ->', 1, '\x1b[0m' )
        
        Assertions.assertion0.statement = {
            
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
    
                await rejects(
                    is_json( [] ),
                    
                    ( error ) => {
                        test_results = error
                        
                        ok( error === 'only string or Buffer are accepted type for `string` argument. Given type: object' )
        
                        return true
                    }
                )
                
                Assertions.assertion0.statement[ '0' ].message = 'test concluded'
                
                return test_results
            },
    
            '1' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 1, '\x1b[0m\n' )
        
                const jsonString = '{""'
        
                try{
                    test_results = await is_json( jsonString )
                    deepStrictEqual( test_results, false, 'something wrong should be false' )
                }catch ( error ) {
                    test_results = error.message
                }
        
                Assertions.assertion0.statement[ '1' ].message = 'test concluded'
        
                return test_results
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion0.statement[ '0' ]()
        console.log( Assertions.assertion0.statement[ '0' ].message )
        console.log( 'returned response -> ',  response0 )
    
        console.log( '---------------------------------------------------------------------------' )
        const response1 = await Assertions.assertion0.statement[ '1' ]()
        console.log( Assertions.assertion0.statement[ '1' ].message )
        console.log( 'returned response -> ',  response1 )
        
    },
}

process.argv.splice( 0, 2 )

if(  process.argv.length > 0 ){
    
    await Assertions[ process.argv ]( 0 )
    AssertionEvent.emit( 'end' )
    
}else {
    
    for( const assertion in Assertions )
        await Assertions[ assertion ]()
    
    AssertionEvent.emit( 'end' )
}

