## each

## js: `forEach` - array only
```js
arr.forEach( function( value [, index [, array ] ] ) {
	var value = value;
	var index = index;
	// array - 'arr'
	// this - var on each pass
}[, this ] );
```
## jquery: `$.each` array or object
```js
$.each( arr, function( index-or-key, value ) {
	var index-or-key = index-or-key;
	var value = value;
} );
```
## jquery: `$( element ).each` - object only
```js
$( element ).each( function( [ index [, element ] ] ) {
	var element = $( this );
	var index = index;
	var element = element;
} );
```
