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
	return $( this ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
## jquery+js: `$( ELEMENT ).toArray().some( ...` - return 1st matched element only
```js
$( ELEMENT ).toArray().some( function( element, index ) {
	var $element = element;
	var index = index;
	return $( el ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
## jquery: `OBJECT.filter( ...` - return all matched
```js
OBJECT.filter( function() {
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
$.each( $( ELEMENT ), function( index, element ) {
	var index = index;
	var element = $( element ); // or: $( this )
} );
```
## jquery: `$( ELEMENT ).each( ...`
```js
$( ELEMENT ).each( function( index, element ) {
	var index = index;
	var element = $( element ); // or: $( this )
	// continue - return
	// break - return false
} );
```
