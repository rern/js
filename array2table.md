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
	var tbarray = <?php echo json_encode( $phpArray ) ;?>;
	var tharray = ['th0', 'th1', 'th2', 'th3'];
	var table = array2table( {
	      tbodyArray: [tbarray]
	    , theadArray: [tharray] // default: (none)
	    , thTag:      'th'      // default: 'td'
	    , setID:      'id'      // default: (none)
	    , setClass:   'class'   // default: (none)
	} );
	$('body script:first').before( table );
*/
function array2table( data ) {
	var thTag =  ( data.thTag == null ) ? 'td' : 'th';
	var setID = ( data.setID == null ) ? '' : ' id="'+ data.setID +'"';
	var setClass = ( data.setClass == null ) ? '' : ' class="'+ data.setClass +'"';
	// 'thead'
	if ( data.theadArray == null ) {
		var thead = '';
	} else {
		var td = '';
		data.theadArray.forEach( function ( cell ) {
			td += '<'+ thTag +'>'+ cell +'</'+ thTag +'>';
		});
		var thead = '<thead>\n<tr>'+ td +'</tr></thead>\n';
	}
	// 'tbody'
	var tr = '';
	data.tbodyArray.forEach( function ( row, i ) {
		var td = '';
		row.forEach( function ( cell ) {
			td += '<td>'+ cell +'</td>';
		});
		tr += '<tr>'+ td +'</tr>\n';
		row.unshift( i ); // add row index to original array for sorting
	});
	return '<table'+ setID + setClass +'>\n'
			+ thead
			+ '<tbody>\n'+ tr +'</tbody>\n'
		+ '</table>';
}
```
