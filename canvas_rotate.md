### Rotate canvas

```js
var canvas = document.createElement( 'canvas' );
var ctx = canvas.getContext( '2d' );
$( 'body' ).prepend( canvas );

function canvasRotate( degree ) {
	var img = new Image();
	img.src = $( '#coverart' ).prop( 'src' );
	var w = img.width;
	var h = img.height;
	var trw = w /2;
	var trh = h /2;
	var radian = degree * Math.PI / 180;
	
	if ( degree === 90 || degree === 270 ) {
		canvas.width = h;
		canvas.height = w;
		ctx.translate( trh, trw );
	} else {
		canvas.width = w;
		canvas.height = h;
		ctx.translate( trw, trh );
	}
	ctx.rotate( radian );
	ctx.drawImage( img, -trw, -trh );
}
```
