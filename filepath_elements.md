### File path elements

```js
var FULLPATH = '/path/to/file.ext';

// ext
var ext = FULLPATH.split( '.' ).pop();

// file.ext
var file-ext = FULLPATH.split( '/' ).pop();

// /path/to
var path-to = FULLPATH.substr( 0, FULLPATH.lastIndexOf( '/' ) );
```
