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
	var table = array2table( tbodyArray, theadArray, 'tableId', 'tableClass' );
	$('body script:first').before( table );
*/
function array2table( ar, thd, id, cl ) { // arg: ( tbodyArray[, theadArray, 'setTableId', 'setTableClass'] )
	var id = ( id == null ) ? '' : ' id="'+ id +'"';
	var cl = ( cl == null ) ? '' : ' class="'+ cl +'"';
	// 'thead'
	if ( thd == null ) {
		var thead = '';
	} else {
		var th = '';
		thd.forEach( function( cell, i ) {
			th += '<th>'+ cell +'</th>';
		});
		var thead = '<thead>\n<tr>'+ th +'</tr></thead>\n';
	}
	// 'tbody'
	var tr = '';
	ar.forEach( function( row, i ) {
		var td = '';
		row.forEach( function( cell, j ) {
			td += '<td>'+ cell +'</td>';
		});
		tr += '<tr>'+ td +'</tr>\n';
		ar[ i ].unshift( i ); // add 'tr' index to original array for sorting
	});
	return '<table'+ id + cl +'>\n'
			+ thead
			+ '<tbody>\n'+ tr +'</tbody>\n'
		+ '</table>'
}
```
