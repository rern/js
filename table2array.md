**convert 'tbody' to value-only array** [ [i, 'a', 'b', 'c'], [i, 'd', 'e', 'f'] ]  
```js
var tableArray = [];
$('#tableid tbody tr').each( function () {
  var row = [];
  $( this ).find('td').each( function () {
      row.push( $( this ).text() );
  } );
  tableArray.push( row );
} );

console.log( tableArray );
```
