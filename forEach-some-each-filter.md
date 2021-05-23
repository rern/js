```js
// clone json
var newjson = JSON.parse( JSON.stringify( JSON ) );
// remove an element
delete json.key;
// get keys
var keys = Object.keys( JSON );
// get values
var values = Object.values( JSON );

// clone array
var newarray = ARRAY.slice( 0 );
// remove elements with reset index
ARRAY.splice( i, length );
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
## jquery: `$( ELEMENT ).toArray().some( ...` - return 1st matched element only
```js
$( ELEMENT ).toArray().some( function( element, index ) {
	var $element = element;
	var index = index;
	return $( el ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
## jquery: `[ARRAY]orOBJECT.filter( ...` - return all matched
```js
[ARRAY]orOBJECT.filter( function() {
	return $( this ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} ).hide();
```
## jquery: `$.each( [ARRAY]orOBJECT, ...`
```js
$.each( [ARRAY]orOBJECT, function( index-or-key, value ) {
	var index = index; // or: key = key
	var value = value;
	// continue - return
	// break - return false
} );
```
## jquery: `OBJECT.each( ...`
```js
OBJECT.each( function( [ index [, element ] ] ) {
	var index = index;
	var element = $( element ); // or: $( this )
	// continue - return
	// break - return false
} );
```
