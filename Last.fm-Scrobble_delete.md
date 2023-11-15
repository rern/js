### Last.fm Scrobble Delete
```js
$ = jQuery.noConflict();
$( '.chartlist-row' ).eq( 0 ).before( '&emsp;<input id="check" type="checkbox">&ensp;All&emsp;<a id="delete" class="btn-primary" style="cursor: pointer">Delete</a>' );
$( '.chartlist-play' ).before( '<input type="checkbox">' );
$( '#check' ).on( 'click', function() {
	$( '.chartlist-row input' ).prop( 'checked', $( this ).prop( 'checked' ) );
} );
$( '#delete' ).on( 'click', () => {
	$( '.chartlist-row' ).each( ( i, el ) => {
		if ( $( el ).find( 'input' ).prop( 'checked' ) ) $( el ).find( '.more-item--delete' ).click();
	} );
} );
```
