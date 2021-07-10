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

## js: `[ARRAY].forEach( ...`
```js
[ARRAY].forEach( function( value [, index ] ) {
	var value = value;
	var index = index;
} );
```
## js: `[ARRAY].some` - return 1st matched only
```js
[ARRAY].some( function( value [, index ] ) {
	var value = value;
	var index = index;
	return value === 'value' // or: if ( BOOLEAN ) return true
} );
```
## jquery+js: `$( DOM ).toArray().some( ...` - return 1st matched element only
```js
$( DOM ).toArray().some( function( element [, index ] ) {
	var $element = $( element );
	var index = index;
	return $( element ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
## jquery: `OBJECT.filter( ...` - return all matched
```js
OBJECT.filter( function( index ) {
	var index = index;
	return $( this ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} ).hide();
```
## jquery: `$.each( OBJECT, ...`
```js
$.each( [ARRAY], function( index, value ) {
	var index = index;
	var value = value; // or: value = this;
	// continue - return
	// break - return false
} );
$.each( {J:SON}, function( key, value ) {
	var key = key;
	var value = value; // or: value = this;
} );
$.each( $( DOM ), function( index, element ) {
	var index = index;
	var element = $( element ); // or: $( this )
} );
```
## jquery: `$( DOM ).each( ...`
```js
$( DOM ).each( function( index, element ) {
	var index = index;
	var element = $( element ); // or: $( this )
	// continue - return
	// break - return false
} );
```
