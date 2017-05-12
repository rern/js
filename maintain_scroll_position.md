Maintain scroll position on screen rotate
---

```js
// get scroll position
var timeout = 400;
var positionTop = 0;
var scrollTimeout;
function getScrollTop() {
	$window.scroll( function () {
		// cancel previous 'scroll' within 'timeout'
		clearTimeout( scrollTimeout );
		scrollTimeout = setTimeout( function () {
			positionTop = $window.scrollTop();
		}, timeout );
	} );
};

getScrollTop();

var positionCurrent = 0;
// rotate ('orientationchange' always followed by 'resize')
window.addEventListener( 'orientationchange', function () {
	$window.off( 'scroll' ); // suppress new 'scroll'
	positionTop = positionCurrent; // update to new value
	setTimeout( function () {
		$window.scrollTop( positionCurrent );
	}, timeout );
} );

// resize
var resizeTimeout;
window.addEventListener( 'resize', function () {
	$window.off( 'scroll' ); // suppress new 'scroll'
	// cancel previous 'resize' within 'timeout'
	clearTimeout( resizeTimeout );
	resizeTimeout = setTimeout( function () {
		// re-enable 'scroll' after 'orientationchange' > 'resize'
		getScrollTop();
	}, timeout );
} );
```
