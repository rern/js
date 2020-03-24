## each
Blocking or syncronous - wait until loop finished then continue next lines

## js: `forEach` - array only
```js
arr.forEach( function( value [, index ] ) {
	var value = value;
	var index = index;
} );
```
## js: `some` - array only with break
```js
arr.some( function( value [, index ] ) {
	var value = value;
	var index = index;
	return true
} );
```

## jquery: `$.each` array or object
```js
$.each( arr, function( index-or-key, value ) {
	var index-or-key = index-or-key;
	var value = value;
	// continue - return
	// break - return false
} );
```
## jquery: `$( element ).each` - object only
```js
$( element ).each( function( [ index [, element ] ] ) {
	var element = $( this );
	var index = index;
	var element = element;
	// continue - return
	// break - return false
} );
```
## jquery: `$( element ).filter`
```js
$( element ).filter( function() {
	return $( this ).data( 'name' ) === 'value'
} ).hide();
```
