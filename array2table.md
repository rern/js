**Convert PHP array to html table**  
```js
/*
html file extension must be '.php'
usage:
	<?php
	$phpArray = array(
		array('td00', 'td01', 'td02', 'td03'),
		array('td10', 'td11', 'td12', 'td13'),
	);
	?>
	...
	<script>
	var tableArray = <?php echo json_encode( $phpArray ) ;?>;
	var theadArray = ['th0', 'th1', 'th2', 'th3'];
	var table = array2table( {
	      tbar:  [tbodyArray]
	    , thar:  [theadArray]    // default: (none)
	    , thtag: 'th'            // default: 'td'
	    , id:    'setTableId'    // default: (none)
	    , cl:    'setTableClass' // default: (none)
	} );
	$('body script:first').before( table );
*/
function array2table( data ) {
	var thtag =  ( data.thtag == null ) ? 'td' : 'th';
	var id = ( data.id == null ) ? '' : ' id="'+ data.id +'"';
	var cl = ( data.cl == null ) ? '' : ' class="'+ data.cl +'"';
	// 'thead'
	if ( data.thar == null ) {
		var thead = '';
	} else {
		var td = '';
		data.thar.forEach( function( cell, i ) {
			td += '<'+ thtag +'>'+ cell +'</'+ thtag +'>';
		});
		var thead = '<thead>\n<tr>'+ td +'</tr></thead>\n';
	}
	// 'tbody'
	var tr = '';
	data.tbar.forEach( function( row, i ) {
		var td = '';
		row.forEach( function( cell, j ) {
			td += '<td>'+ cell +'</td>';
		});
		tr += '<tr>'+ td +'</tr>\n';
		row.unshift( i ); // add 'tr' index to original array for sorting
	});
	return '<table'+ id + cl +'>\n'
			+ thead
			+ '<tbody>\n'+ tr +'</tbody>\n'
		+ '</table>'
}
```
