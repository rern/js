### Last.fm Scrobble Delete
```js
$ = jQuery.noConflict();
$( '.chartlist tbody' ).before( '&emsp;<input id="check" type="checkbox">&ensp;All&emsp;<a id="delete" class="btn-primary" style="cursor: pointer">Delete</a>' );
$( '.chartlist tr' ).prepend( '<input type="checkbox">' );
$( '#check' ).on( 'click', function() {
	$( '.chartlist tr input' ).prop( 'checked', $( this ).prop( 'checked' ) );
} );
$( '#delete' ).on( 'click', () => {
	$( '.chartlist tr' ).each( ( i, el ) => {
		if ( $( el ).find( 'input' ).prop( 'checked' ) ) $( el ).find( '.more-item--delete' ).click();
	} );
} );
```
