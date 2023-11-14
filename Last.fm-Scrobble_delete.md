### Last.fm - Delete all scrobbles

```js
// add checkboxes
$ = jQuery.noConflict();
$( '.chartlist-play' ).before( '<input type="checkbox">' );

// delete checked
$( '.chartlist-row' ).each( ( i, el ) => {
	if ( $( el ).find( 'input' ).prop( 'checked' ) ) $( el ).find( '.more-item--delete' ).click();
} );
```
