### Extract Path Elements

```js
var FULLPATH = '/path/to/file.ext';

// ext
var ext = FULLPATH.split( '.' ).pop();

// file.ext
var file_ext = FULLPATH.split( '/' ).pop();

// file
var file = FULLPATH.split( '.' ).slice( 0, -1 ).join( '.' );

// /path/to
var path_to = FULLPATH.substr( 0, FULLPATH.lastIndexOf( '/' ) );
```
