**Extract data from `<meta>` tag**  
```js
if ( $('meta[name=viewport]').length ) {
	var metavp = $('meta[name=viewport]').prop('content').split(', ');
	var jsn ={};
	$.each(metavp, function(i, v) {
		var val = v.split('=');
		jsn[val[0]] = val[1];
	});
	console.log(jsn['width'] +' '+ jsn['initial-scale'])
}
```
