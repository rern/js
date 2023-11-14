### Last.fm Scrobble Delete

- All
```js
jQuery( '.more-item--delete' ).each( ( i, el ) => el.click() );
```

- Select
```js
// add checkboxes
$ = jQuery.noConflict();
$( '.chartlist-play' ).before( '<input type="checkbox">' );

// select

// delete checked
$( '.chartlist-row' ).each( ( i, el ) => {
	if ( $( el ).find( 'input' ).prop( 'checked' ) ) $( el ).find( '.more-item--delete' ).click();
} );
```
