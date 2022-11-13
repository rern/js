```js
// clone json
var newjson = JSON.parse( JSON.stringify( {J:SON} ) );
// remove an element
delete json.key;
// get keys
var keys = Object.keys( {J:SON} );
// get values
var values = Object.values( {J:SON} );

// clone array
var newarray = [ARRAY].slice( 0 );
// remove elements with reset index
[ARRAY].splice( i, length );

// compare array
var equal = new Set( [ARRAY] ).size === [ARRAY].length;
```
### `forEach`
`( value, index )`
```js
[ARRAY].forEach( ( value, index ) => {
	var value = value;
	var index = index;
} );
```
### `some`
`( value, index )` - return 1st matched only
```js
var matched = [ARRAY].some( ( value, index ) => {
	var value = value;
	var index = index;
	return value === 'value' // or: if ( BOOLEAN ) return true
} );
// no matched return false

$( DOM ).toArray().some( ( element, index ) => {
	var $element = $( element );
	var index = index;
	return $( element ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
### `filter`
`( element, index )`
```js
[ARRAY].filter( ( element, index ) => {
	return index === 'value' // or: if ( BOOLEAN ) return true
} );
```
`( index, element )`
```js
$( DOM ).filter( ( index, element ) => {
	var index = index;
	return $( element ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
### `each`
`( index, element )`
```js
$.each( [ARRAY], ( index, value ) => {
	var index = index;
	var value = value;
	// continue : return
	// break    : return false
} );
$.each( $( DOM ), ( index, element ) => {
	var index = index;
	var element = $( element );
} );
$( DOM ).each( ( index, element ) => {
	var index = index;
	var element = $( element );
	// continue : return
	// break    : return false
} );
```
`( key, value )`
```js
$.each( {J:SON}, ( key, value ) => {
	var key = key;
	var value = value;
} );
```
