# json-swiss-knife

> ℹ️ A small swiss-knife for json files and string. Error checking, and some useful functionalities to handle responses.

> ℹ️ Javascript ESM module.

___

## Index of Contents

- [Installation](#installation)

- [Functions &amp; Examples](#functions-amp-examples)

  - [Function parse(string)](#function-parsestring)
  - [Function property_value(array)](#function-property_valuearray)
  - [Function is_json(string)](#function-is_jsonstring)

___

### Installation

```shell
npm install json-swiss-knife
```

___

### Functions &amp; Examples

- #### Function parse(string)

```javascript
// parse json from plain string

import { parse } from 'json-swiss-knife'

const jsonObject = await parse( '{"goodMorning":"folks"}' )
console.log( jsonObject ) // { goodMorning: 'folks' }
```

```javascript
//  parse json from Buffer.from()

import { parse } from 'json-swiss-knife'

// you may load a json file with readFile instead, the below is just a working example

const jsonObject = await parse( Buffer.from('{"goodMorning":"folks"}') )
console.log( jsonObject ) // { goodMorning: 'folks' }
```

___

- #### Function property_value(array)

Given an array it will give back a JSON string or an object.  
where the first entry of the array will be the property name of the object and the second entry of the array will be the value of the property.  
> ⚠️ The given array length must be multiple of two.

```javascript
// return a json string

import { property_value } from 'json-swiss-knife'

const jsonString = await property_value( [ '--file',
    './path/to/file',
    '--json',
    'true',
    '-in-object',
    'true'
] )
console.log( jsonString ) // {"--file":"./path/to/file","--json":"true","-in-object":"true"}
```

```javascript
// return an object

import { property_value } from 'json-swiss-knife'

const object = await property_value( [ '--file',
    './path/to/file',
    '--json',
    'true',
    '-in-object',
    'true'
], true ) // set the object parameter for the function to true
console.log( object ) // { '--file': './path/to/file', '--json': 'true', '-in-object': 'true' }
```

___

#### Function is_json(string)

Given a string or Buffer it will return a boolean, true if is JSON string false otherwise

```javascript
// It checks if is json from plain string

import { is_json } from 'json-swiss-knife'

const isJson = await is_json( '{"goodMorning":"folks"}' )
console.log( isJson ) // true
```

```javascript
// It checks if is json from Buffer.from()

import { is_json } from 'json-swiss-knife'

// you may load a json file with readFile instead, the below is just a working example

const isJson = await is_json( Buffer.from('good morning folks') )
console.log( isJson ) // false
```
