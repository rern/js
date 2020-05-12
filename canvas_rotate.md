### Rotate canvas

```js
var img = new Image();
img.src = $( '#coverart' ).prop( 'src' );
var canvas = document.createElement( 'canvas' );
$( 'body' ).prepend( canvas );

// 90
canvas.width = img.height;
canvas.height = img.width;
var ctx = canvas.getContext( '2d' );
ctx.translate( canvas.width / 2, canvas.height / 2 );
ctx.rotate( 90 * Math.PI / 180 );
ctx.drawImage( img, -img.width / 2, -img.height / 2 );

// 180
canvas.width = img.width;
canvas.height = img.height;
ctx.translate( canvas.width / 2, canvas.height / 2 );
ctx.rotate( 180 * Math.PI / 180 );
ctx.drawImage( img, -img.width / 2, -img.height / 2 );

// 270
canvas.width = img.height;
canvas.height = img.width;
var ctx = canvas.getContext( '2d' );
ctx.translate( canvas.width / 2, canvas.height / 2 );
ctx.rotate( 270 * Math.PI / 180 );
ctx.drawImage( img, -img.width / 2, -img.height / 2 );

// 0
canvas.width = img.width;
canvas.height = img.height;
ctx.translate( canvas.width / 2, canvas.height / 2 );
ctx.rotate( 0 * Math.PI / 180 );
ctx.drawImage( img, -img.width / 2, -img.height / 2 );
```
