### Rotate canvas

```js
function canvasRotate( imageId, degree ) {
	var canvas = document.createElement( 'canvas' );
	var ctx = canvas.getContext( '2d' );
	
	var image = document.getElementById( imageId );
	var img = new Image();
	img.src = image.src;
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
	image.src = canvas.toDataURL( 'image/jpeg', 0.9 );
}
```
