### Rotate image with canvas
Actually rotate image data, not just for display.
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
	var radian = degree * Math.PI / 180;
	
	if ( degree === 90 || degree === 270 ) {
		canvas.width = h;
		canvas.height = w;
		ctx.translate( h / 2, w / 2 );
	} else {
		canvas.width = w;
		canvas.height = h;
		ctx.translate( w /2, h / 2 );
	}
	ctx.rotate( radian );
	ctx.drawImage( img, -w / 2, -h / 2 );
	image.src = canvas.toDataURL( 'image/jpeg', 1 );
}
```
