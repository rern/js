**convert 'tbody' to value-only array** [ [i, 'a', 'b', 'c'], [i, 'd', 'e', 'f'] ]  
```js
var tableArray = [];
$('#tableid').each( function ( i ) {
  var row = [ i ];
  $( this ).find('td').each( function ( j ) {
    if ( settings.negativeSort.indexOf( j+1 ) === -1 ) { // '+1' - make 1st column = 1, not 0
      var cell = $( this ).text();
    } else { // minus value in column
      var cell = $( this ).text().replace( /[^0-9\.\-]/g, '' ); // get only '0-9', '.' and '-'
    }
    row.push( $thtd.eq( j ).text() == '' ? '' : cell ); // blank header not sortable
  } );
  tableArray.push( row );
} );

console.log( tableArray );
```
