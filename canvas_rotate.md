### Rotate image with canvas
Actually rotate image data, not just css rotate for display.
```js
function canvasRotate( imageId, degree ) {
	var canvas = document.createElement( 'canvas' );
	var ctx = canvas.getContext( '2d' );
	
	var image = document.getElementById( imageId );
	var img = new Image();
	// if base64 image
	if ( image.src.slice( 0, 10 ) === 'data:image' ) {
		img.onload = function() {
			ctx.drawImage( image, 0, 0 );
		}
	}
	img.src = image.src;
	var w = img.width;
	var h = img.height;
	var cw = Math.round( w / 2 );
	var ch = Math.round( h / 2 );
	var radian = degree * Math.PI / 180;
	
	if ( degree === 90 || degree === 270 ) {
		canvas.width = h;
		canvas.height = w;
		ctx.translate( ch, cw );
	} else {
		canvas.width = w;
		canvas.height = h;
		ctx.translate( cw, ch );
	}
	ctx.rotate( radian );
	ctx.drawImage( img, -cw, -ch );
	image.src = canvas.toDataURL( 'image/jpeg', 1 );
}
```
