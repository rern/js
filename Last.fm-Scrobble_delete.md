### Last.fm Scrobble Delete
```js
$ = jQuery.noConflict();
$( '.chartlist-row' ).eq( 0 ).before( '&emsp;<input id="x" type="checkbox" checked>&emsp;<a id="xx" class="btn-primary" style="cursor: pointer">Delete</a>' );
$( '.chartlist-play' ).before( '<input type="checkbox" checked>' );
$( '#x' ).on( 'click', function() {
	console.log( $( this ).prop( 'checked' ) )
	$( '.chartlist-row input' ).prop( 'checked', $( this ).prop( 'checked' ) );
} );
$( '#xx' ).on( 'click', () => {
	$( '.chartlist-row' ).each( ( i, el ) => {
		if ( $( el ).find( 'input' ).prop( 'checked' ) ) $( el ).find( '.more-item--delete' ).click();
	} );
} );
```
