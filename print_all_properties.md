Print all properties of an element
---

```js
var element = $( '#element' )[ 0 ];
for( var propName in element ) {
	propValue = element[ propName ];
	console.log( propName, propValue );
}
```
