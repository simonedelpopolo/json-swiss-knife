import * as tttt from 'trythistrythat'
import { EventEmitter } from 'events'
import { deepStrictEqual, ok, rejects } from 'assert/strict'
import { is_json, json_swiss_knife, parse, property_value } from '../index.js'

export default async ( id ) => {
    
    const AssertionEvent = new EventEmitter()
    console.log( ' --------------------------------------------------------------------------' )
    console.log( '|               \x1b[33massertion started\x1b[0m', new Date(), '                |' )
    console.log( ' --------------------------------------------------------------------------' )
    AssertionEvent.on( 'end', () => {
        
        console.log( '___________________________________________________________________________' )
        console.log()
        console.log( ' --------------------------------------------------------------------------' )

        console.log( ' --------------------------------------------------------------------------' )
        
        console.log()
        console.log( '---------------------------------------------------------------------------' )
    } )
    
    const Assertions = {
        
        // The testing unit for function is_json
        assertion0 : async () => {
            
            let test_results
            
            console.log( '__________________________________________________________________________' )
            
            console.log( '\x1b[32mfunction is_json.', '\x1b[31massertion ->', 0, '\x1b[0m' )
            console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
            console.log( '    \x1b[32mfunction is_json rejects', '\x1b[31mstatement ->', 0, '\x1b[0m' )
            console.log( '    \x1b[32mfunction is_json returns false', '\x1b[31mstatement ->', 1, '\x1b[0m' )
            console.log( '    \x1b[32mfunction is_json rejects with error', '\x1b[31mstatement ->', 2, '\x1b[0m' )
            
            Assertions.assertion0.statement = {
                
                // St. function is_json rejects
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
                
                // St. function is_json returns false
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
                
                // St. function is_json rejects with error
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
        assertion1 : async () => {
            
            let test_results
            
            console.log( '___________________________________________________________________________' )
            
            console.log( '\x1b[32mfunction property_value.', '\x1b[31massertion ->', 1, '\x1b[0m' )
            console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
            console.log( '    \x1b[32mfunction property_value rejects', '\x1b[31mstatement ->', 0, '\x1b[0m' )
            console.log( '    \x1b[32mfunction property_value reject not `even` array argument', '\x1b[31mstatement ->', 1, '\x1b[0m' )
            console.log( '    \x1b[32mfunction property_value resolve with object', '\x1b[31mstatement ->', 2, '\x1b[0m' )
            console.log( '    \x1b[32mfunction property_value resolve with json string', '\x1b[31mstatement ->', 3, '\x1b[0m' )
            
            Assertions.assertion1.statement = {
                
                // St. function property_value rejects
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
                
                // St. function property_value reject not `even` array argument
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
                
                // St. function property_value resolve with object
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
                
                // St. function property_value resolve with json string
                '3' : async ( ) => {
                    console.log( '    \x1b[31m executing statement -> ', 3, '\x1b[0m\n' )
                    
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
        
        // The testing unit for function parse
        assertion2 : async () => {
            
            let test_results
            
            console.log( '___________________________________________________________________________' )
            
            console.log( '\x1b[32mfunction parse.', '\x1b[31massertion ->', 2, '\x1b[0m' )
            console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
            console.log( '    \x1b[32mfunction parse rejects', '\x1b[31mstatement ->', 0, '\x1b[0m' )
            console.log( '    \x1b[32mfunction parse resolve with object', '\x1b[31mstatement ->', 1, '\x1b[0m' )
            console.log( '    \x1b[32mfunction parse resolve with error', '\x1b[31mstatement ->', 2, '\x1b[0m' )
            console.log( '    \x1b[32mfunction parse resolve with object from Buffer', '\x1b[31mstatement ->', 3, '\x1b[0m' )
            
            Assertions.assertion2.statement = {
                
                // St. function parse rejects
                '0' : async ( ) => {
                    console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
                    
                    await rejects(
                        parse( { x:[ ] } ),
                        
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
                    
                    Assertions.assertion2.statement[ '0' ].message = 'test concluded'
                    
                    return test_results
                },
                
                // St. function parse resolve with object
                '1' : async ( ) => {
                    console.log( '    \x1b[31m executing statement -> ', 1, '\x1b[0m\n' )
                    
                    const jsonGiven = '{"-s":"hello folks!","-o":"/tmp/info__.txt"}'
                    
                    try{
                        test_results = await parse( jsonGiven )
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
                    
                    Assertions.assertion2.statement[ '1' ].message = 'test concluded'
                    Assertions.assertion2.statement[ '1' ].given_variable = `given json -> ${jsonGiven}`
                    
                    return test_results
                },
                
                // St. function parse resolve with error
                '2' : async ( ) => {
                    console.log( '    \x1b[31m executing statement -> ', 2, '\x1b[0m\n' )
                    
                    const jsonGiven = '{-s":"hello folks!","-o":"/tmp/info__.txt"}'
                    
                    try{
                        test_results = await parse( jsonGiven )
                        
                        deepStrictEqual( test_results,
                            'Unexpected number in JSON at position 1',
                            '\x1b[31msomething wrong\x1b[0m\n'
                        )
                    }catch ( error ) {
                        test_results = error.message
                    }
                    
                    Assertions.assertion2.statement[ '2' ].message = 'test concluded'
                    Assertions.assertion2.statement[ '2' ].given_variable = `given variable -> ${jsonGiven}`
                    
                    return test_results
                },
                
                // St. function parse resolve with json string
                '3' : async ( ) => {
                    console.log( '    \x1b[31m executing statement -> ', 3, '\x1b[0m\n' )
                    
                    const bufferGiven = Buffer.from( '{"-s":"hello folks!","-o":"/tmp/info__.txt"}' )
                    
                    try{
                        test_results = await parse( bufferGiven )
                        
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
                    
                    Assertions.assertion2.statement[ '3' ].message = 'test concluded'
                    Assertions.assertion2.statement[ '3' ].given_variable = `given variable -> Buffer.from(${bufferGiven})`
                    
                    return test_results
                },
                
            }
            
            console.log( '---------------------------------------------------------------------------' )
            const response0 = await Assertions.assertion2.statement[ '0' ]()
            console.log( '\x1b[32mfunction parse rejects', '\x1b[0m\n' )
            console.log( Assertions.assertion2.statement[ '0' ].message )
            console.log( 'returned response -> ',  response0 )
            
            console.log( '---------------------------------------------------------------------------' )
            const response1 = await Assertions.assertion2.statement[ '1' ]()
            console.log( '\x1b[32mfunction parse resolve with object', '\x1b[0m\n' )
            console.log( Assertions.assertion2.statement[ '1' ].message )
            console.log( Assertions.assertion2.statement[ '1' ].given_variable )
            console.log( 'returned response -> ',  response1 )
            
            console.log( '---------------------------------------------------------------------------' )
            const response2 = await Assertions.assertion2.statement[ '2' ]()
            console.log( '\x1b[32mfunction parse resolve with error', '\x1b[0m\n' )
            console.log( Assertions.assertion2.statement[ '2' ].message )
            console.log( Assertions.assertion2.statement[ '2' ].given_variable )
            console.log( 'returned response -> ',  response2 )
            
            console.log( '---------------------------------------------------------------------------' )
            const response3 = await Assertions.assertion2.statement[ '3' ]()
            console.log( '\x1b[32mfunction parse resolve with object from Buffer', '\x1b[0m\n' )
            console.log( Assertions.assertion2.statement[ '3' ].message )
            console.log( Assertions.assertion2.statement[ '3' ].given_variable )
            console.log( 'returned response -> ',  response3 )
        },
        
        // The testing unit for Module json_swiss_knife
        assertion3 : async () => {
            
            let test_results
            
            console.log( '__________________________________________________________________________' )
            
            console.log( '\x1b[32mModule json_swiss_knife.', '\x1b[31massertion ->', 3, '\x1b[0m' )
            console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
            console.log( '    \x1b[32mlisting all the functions', '\x1b[31mstatement ->', 1, '\x1b[0m' )
            
            Assertions.assertion3.statement = {
                
                // St. calling all the functions
                '0' : async ( ) => {
                    console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
                    
                    test_results = json_swiss_knife
                    
                    Assertions.assertion3.statement[ '0' ].message = 'test concluded'
                    
                    return test_results
                },
                
            }
            
            console.log( '---------------------------------------------------------------------------' )
            const response0 = await Assertions.assertion3.statement[ '0' ]()
            console.log( '\x1b[32mlisting all the functions', '\x1b[0m\n' )
            console.log( Assertions.assertion3.statement[ '0' ].message )
            console.log( 'returned response -> ',  response0 )
            
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
    
    tttt.end_test( id )
    
}


