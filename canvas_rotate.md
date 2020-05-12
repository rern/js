### Rotate canvas

```js
var img = new Image();
img.src = $( '#coverart' ).prop( 'src' );
var w = img.width;
var h = img.height;
var trw = w /2;
var trh = h /2;
var raddeg = Math.PI / 180;
var canvas = document.createElement( 'canvas' );
var ctx = canvas.getContext( '2d' );
$( 'body' ).prepend( canvas );

// 90
canvas.width = h;
canvas.height = w;
ctx.translate( trh, trw );
ctx.rotate( 90 * raddeg );
ctx.drawImage( img, -trw, -trh );

// 180
canvas.width = w;
canvas.height = h;
ctx.translate( trw, trh );
ctx.rotate( 180 * raddeg );
ctx.drawImage( img, -trw, -trh );

// 270
canvas.width = h;
canvas.height = w;
var ctx = canvas.getContext( '2d' );
ctx.translate( trh, trw );
ctx.rotate( 270 * raddeg );
ctx.drawImage( img, -trw, -trh );

// 0
canvas.width = w;
canvas.height = h;
ctx.translate( trw, trh );
ctx.rotate( 0 * raddeg );
ctx.drawImage( img, -trw, -trh );
```
