get scrollbar width
---
javascript  
```js
var scrollDiv = document.createElement("div");
var scrollCss = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
scrollDiv.style.cssText = scrollCss;
document.body.appendChild(scrollDiv);

var scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

document.body.removeChild(scrollDiv);
```
