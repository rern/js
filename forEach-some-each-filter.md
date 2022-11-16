```js
// clone json
var newjson = JSON.parse( JSON.stringify( {J:SON} ) );
// remove an element
delete json.key;

// get array of keys
var keys    = Object.keys( {J:SON} );
// get array of values
var values  = Object.values( {J:SON} );
// get array of key-value
Object.entries( {J:SON} );

// clone array
var newarray = [ARRAY].slice( 0 );
// remove elements with reset index
[ARRAY].splice( i, length );

// compare array
var equal = new Set( [ARRAY] ).size === [ARRAY].length;
```
### `forEach`
js: `( value, index )`
```js
[ARRAY].forEach( ( value, index ) => {
	var value = value;
	var index = index;
} );
```
js: `( [ key, value ] )`
```js
Object.entries( {J:SON} ).forEach( ( [ key, value ] ) => {
	var key   = key;
	var value = value;
} );
```
### `some`
js: `( value, index )` - return 1st matched only
```js
var ARRAY = [ARRAY];             // or
var ARRAY = $(DOM).toArray();  // or
var ARRAY = Object.keys( {J:SON} ); // or
var ARRAY = Object.values( {J:SON} );
var matched = ARRAY.some( ( value, index ) => {
	var value = value;
	var index = index;
	return value === 'value' // or: if ( BOOLEAN ) return true
	// no matched return false
} );
```
### `filter`
js: `( element, index )`
```js
[ARRAY].filter( ( element, index ) => {
	return index === 'value' // or: if ( BOOLEAN ) return true
} );
```
jquery: `( index, element )`
```js
$(DOM).filter( ( index, element ) => {
	var index = index;
	return $( element ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
### `each`
jquery: `( index, element )`
```js
$.each( [ARRAY], ( index, value ) => {
	var index = index;
	var value = value;
	// continue : return
	// break    : return false
} );
$.each( $(DOM), ( index, element ) => {
	var index = index;
	var element = $( element );
	// continue : return
	// break    : return false
} );
// alternative syntax
$(DOM).each( ( index, element ) => {
	var index = index;
	var element = $( element );
} );
```
jquery: `( key, value )`
```js
$.each( {J:SON}, ( key, value ) => {
	var key = key;
	var value = value;
} );
```
