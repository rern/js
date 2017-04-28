**getTextWidth**  
```js
// from - http://jsfiddle.net/eNzjZ/70/
/*
usage:
getTextWidth('string', '12pt fontname'));
*/
function getTextWidth(text, font) {
    // if given, use cached canvas for better performance
    // else, create new canvas
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return Math.ceil(metrics.width);
};
```
