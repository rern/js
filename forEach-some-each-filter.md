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
## `forEach`
### `[ARRAY].forEach( ...`
```js
[ARRAY].forEach( function( value, index ) {
	var value = value;
	var index = index;
} );
```
## `some`
### `[ARRAY].some` - return 1st matched only
```js
var matched = [ARRAY].some( function( value, index ) {
	var value = value;
	var index = index;
	return value === 'value' // or: if ( BOOLEAN ) return true
} );
// no matched return false
```
### `$( DOM ).toArray().some( ...`
```js
$( DOM ).toArray().some( function( element, index ) {
	var $element = $( element );
	var index = index;
	return $( element ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
## `filter`
### `[ARRAY].filter( ...` - return all matched
```js
[ARRAY].filter( function( element, index ) {
	return index === 'value' // or: if ( BOOLEAN ) return true
} );
```
###  `$( DOM ).filter( ...` - return all matched
```js
$( DOM ).filter( function( index, element ) {
	var index = index;
	return $( element ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
## `each`
### `$.each( OBJECT ...` / `$( DOM ).each( ...`
```js
$.each( [ARRAY], function( index, value ) {
	var index = index;
	var value = value;
	// continue : return
	// break    : return false
} );
$.each( {J:SON}, function( key, value ) {
	var key = key;
	var value = value;
} );

$( DOM ).each( function( index, element ) {
	var index = index;
	var element = $( element );
	// continue : return
	// break    : return false
} );
$.each( $( DOM ), function( index, element ) {
	var index = index;
	var element = $( element );
} );
```
