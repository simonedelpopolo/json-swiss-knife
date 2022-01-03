// A todo assertions and statements.
console.time( 'assertions finished ' )
import { EventEmitter } from 'events'
import { deepStrictEqual, ok, rejects } from 'assert/strict'
import { is_json, property_value } from '../index.js'

const AssertionEvent = new EventEmitter()

AssertionEvent.on( 'end', () => {
    console.log( '__________________________________________________________________________' )
    console.log()
    console.timeEnd( 'assertions finished ' )
} )

const Assertions = {
    
    // The testing unit for function is_json
    assertion0 : async (  ) => {
        
        let test_results
        
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[32mfunction is_json.', '\x1b[31massertion ->', 0, '\x1b[0m' )
        console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
        console.log( '    \x1b[32mfunction is_json rejects', '\x1b[31mstatement ->', 0, '\x1b[0m' )
        console.log( '    \x1b[32mfunction is_json returns false', '\x1b[31mstatement ->', 1, '\x1b[0m' )
        console.log( '    \x1b[32mfunction is_json rejects with error', '\x1b[31mstatement ->', 1, '\x1b[0m' )
        
        Assertions.assertion0.statement = {
            
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
    
                await rejects(
                    is_json( [] ),
                    
                    ( error ) => {
                        test_results = error
                        try{
                            ok(
                                error === 'only string or Buffer are accepted type for `string` argument. Given type: object',
                                '\x1b[31msomething wrong\x1b[0m\n'
                            )
                        }catch ( error_ok ) {
                            test_results = error_ok.message
                        }
        
                        return true
                    }
                )
                
                Assertions.assertion0.statement[ '0' ].message = 'test concluded'
                
                return test_results
            },
    
            '1' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 1, '\x1b[0m\n' )
        
                const jsonString = '{"":string}'
        
                try{
                    test_results = await is_json( jsonString ).catch( error => error )
                    deepStrictEqual( test_results,
                        false,
                        '\x1b[31msomething wrong should be \x1b[33mfalse\x1b[0m\n' )
                }catch ( error ) {
                    test_results = error.message
                }
        
                Assertions.assertion0.statement[ '1' ].message = 'test concluded'
                Assertions.assertion0.statement[ '1' ].given_variable = `given variable -> ${jsonString}`
        
                return test_results
            },
    
            '2' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 2, '\x1b[0m\n' )
        
                const jsonString = '{""}'
        
                try{
                    test_results = await is_json( jsonString, true ).catch( error => error )
                    deepStrictEqual( test_results,
                        'Unexpected token } in JSON at position 3',
                        '\x1b[31msomething wrong\x1b[0m\n'
                    )
                }catch ( error ) {
                    test_results = error.message
                }
        
                Assertions.assertion0.statement[ '2' ].message = 'test concluded'
                Assertions.assertion0.statement[ '2' ].given_variable = `given variable -> ${jsonString}`
        
                return test_results
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion0.statement[ '0' ]()
        console.log( '\x1b[32mfunction is_json rejects', '\x1b[0m\n' )
        console.log( Assertions.assertion0.statement[ '0' ].message )
        console.log( 'returned response -> ',  response0 )
    
        console.log( '---------------------------------------------------------------------------' )
        const response1 = await Assertions.assertion0.statement[ '1' ]()
        console.log( '\x1b[32mfunction is_json returns false', '\x1b[0m\n' )
        console.log( Assertions.assertion0.statement[ '1' ].message )
        console.log( Assertions.assertion0.statement[ '1' ].given_variable )
        console.log( 'returned response -> ',  response1 )
    
        console.log( '---------------------------------------------------------------------------' )
        const response2 = await Assertions.assertion0.statement[ '2' ]()
        console.log( '\x1b[32mfunction is_json rejects with error', '\x1b[0m\n' )
        console.log( Assertions.assertion0.statement[ '2' ].message )
        console.log( Assertions.assertion0.statement[ '2' ].given_variable )
        console.log( 'returned response -> ',  response2 )
        
    },
    
    // The testing unit for function property_value
    assertion1 : async (  ) => {
        
        let test_results
        
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[32mfunction property_value.', '\x1b[31massertion ->', 0, '\x1b[0m' )
        console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
        console.log( '    \x1b[32mfunction property_value rejects', '\x1b[31mstatement ->', 0, '\x1b[0m' )
        console.log( '    \x1b[32mfunction property_value reject not `even` array argument', '\x1b[31mstatement ->', 1, '\x1b[0m' )
        console.log( '    \x1b[32mfunction property_value resolve with object', '\x1b[31mstatement ->', 2, '\x1b[0m' )
        console.log( '    \x1b[32mfunction property_value resolve with json string', '\x1b[31mstatement ->', 3, '\x1b[0m' )
        
        Assertions.assertion1.statement = {
            
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
                
                await rejects(
                    property_value( { x:[ ] } ),
                    
                    ( error ) => {
                        
                        test_results = error
                        
                        try{
                            ok(
                                error === 'this method accept only Array. Given type: object',
                                '\x1b[31msomething wrong\x1b[0m\n'
                            )
                        }catch ( error_ok ) {
                            test_results = error_ok.message
                        }
                        
                        return true
                    }
                )
                
                Assertions.assertion1.statement[ '0' ].message = 'test concluded'
                
                return test_results
            },
            
            '1' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 1, '\x1b[0m\n' )
                
                const arrayGiven = [ 'hello', 'ciao', 'goodEvening' ]
                
                try{
                    test_results = await property_value( arrayGiven ).catch( error => error )
                    deepStrictEqual( test_results,
                        'this method accept only Array that have at least two entries or multiple of 2',
                        '\x1b[31msomething wrong\x1b[0m\n'
                    )
                }catch ( error ) {
                    test_results = error.message
                }
                
                Assertions.assertion1.statement[ '1' ].message = 'test concluded'
                Assertions.assertion1.statement[ '1' ].given_variable = `given array -> ${arrayGiven}`
                
                return test_results
            },
            
            '2' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 2, '\x1b[0m\n' )
    
                const arrayGiven = [ '-s', 'hello folks!', '-o', '/tmp/info__.txt' ]
                
                try{
                    test_results = await property_value( arrayGiven, true ).catch( error => error )
                    
                    deepStrictEqual( test_results,
                        {
                            '-s': 'hello folks!',
                            '-o': '/tmp/info__.txt'
                        },
                        '\x1b[31msomething wrong\x1b[0m\n'
                    )
                }catch ( error ) {
                    test_results = error.message
                }
                
                Assertions.assertion1.statement[ '2' ].message = 'test concluded'
                Assertions.assertion1.statement[ '2' ].given_variable = `given variable -> ${arrayGiven}`
                
                return test_results
            },
    
            '3' : async ( ) => {
                console.log( '    \x1b[31m executing statement -> ', 2, '\x1b[0m\n' )
        
                const arrayGiven = [ '-s', 'hello folks!', '-o', '/tmp/info__.txt' ]
        
                try{
                    test_results = await property_value( arrayGiven ).catch( error => error )
                    
                    deepStrictEqual( test_results,
                        '{"-s":"hello folks!","-o":"/tmp/info__.txt"}',
                        '\x1b[31msomething wrong\x1b[0m\n'
                    )
                }catch ( error ) {
                    test_results = error.message
                }
        
                Assertions.assertion1.statement[ '3' ].message = 'test concluded'
                Assertions.assertion1.statement[ '3' ].given_variable = `given variable -> ${arrayGiven}`
        
                return test_results
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion1.statement[ '0' ]()
        console.log( '\x1b[32mfunction property_value rejects', '\x1b[0m\n' )
        console.log( Assertions.assertion1.statement[ '0' ].message )
        console.log( 'returned response -> ',  response0 )
        
        console.log( '---------------------------------------------------------------------------' )
        const response1 = await Assertions.assertion1.statement[ '1' ]()
        console.log( '\x1b[32mfunction property_value reject not `even` array argument', '\x1b[0m\n' )
        console.log( Assertions.assertion1.statement[ '1' ].message )
        console.log( Assertions.assertion1.statement[ '1' ].given_variable )
        console.log( 'returned response -> ',  response1 )
        
        console.log( '---------------------------------------------------------------------------' )
        const response2 = await Assertions.assertion1.statement[ '2' ]()
        console.log( '\x1b[32mfunction property_value resolve with object', '\x1b[0m\n' )
        console.log( Assertions.assertion1.statement[ '2' ].message )
        console.log( Assertions.assertion1.statement[ '2' ].given_variable )
        console.log( 'returned response -> ',  response2 )
    
        console.log( '---------------------------------------------------------------------------' )
        const response3 = await Assertions.assertion1.statement[ '3' ]()
        console.log( '\x1b[32mfunction property_value resolve with json string', '\x1b[0m\n' )
        console.log( Assertions.assertion1.statement[ '3' ].message )
        console.log( Assertions.assertion1.statement[ '3' ].given_variable )
        console.log( 'returned response -> ',  response3 )
        
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

