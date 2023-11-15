### Last.fm Scrobble Delete
```js
$ = jQuery.noConflict();
var $chartlist = $( '.chartlist' ).eq( 0 );
var $list      = $chartlist.find( 'tr' );
$chartlist.find( 'tbody' ).before( '&emsp;<input id="check" type="checkbox">&ensp;All&emsp;<a id="delete" class="btn-primary" style="cursor: pointer">Delete</a>' );
$list.prepend( '<input type="checkbox">' );
$( '#check' ).on( 'click', function() {
	$list.find( 'input' ).prop( 'checked', $( this ).prop( 'checked' ) );
} );
$( '#delete' ).on( 'click', () => {
	$list.each( ( i, el ) => {
		if ( $( el ).find( 'input' ).prop( 'checked' ) ) $( el ).find( '.more-item--delete' ).click();
	} );
} );
```
