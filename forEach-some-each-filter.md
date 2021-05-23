```js
// clone json
var newjson = JSON.parse( JSON.stringify( JSON ) );
// remove an element
delete json.key;
// get keys
var keys = Object.keys( json );
// get values
var values = Object.values( json );

// clone array
var newarray = array.slice( 0 );
// remove elements with reset index
ARRAY.splice( i, length );
```

## js: `forEach` - array only
```js
ARRAY.forEach( function( value [, index ] ) {
	var value = value;
	var index = index;
} );
```
## js: `some` - array only - return 1st matched only
```js
ARRAY.some( function( value [, index ] ) {
	var value = value;
	var index = index;
	return $( this ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} );
```
## jquery: `$( element ).filter` - return all matched
```js
ARRAY orOBJECT.filter( function() {
	return $( this ).data( 'name' ) === 'value' // or: if ( BOOLEAN ) return true
} ).hide();
```
## jquery: `$.each` array or object
```js
$.each( ARRAYorOBJECT, function( index-or-key, value ) {
	var index = index; // or: key = key
	var value = value;
	// continue - return
	// break - return false
} );
```
## jquery: `$( element ).each` - object only
```js
OBJECT.each( function( [ index [, element ] ] ) {
	var index = index;
	var element = $( element ); // or: $( this )
	// continue - return
	// break - return false
} );
```
