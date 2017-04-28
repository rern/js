**Convert PHP array to html table**  
```js
/*
html file extension must be '.php'
usage:
	<?php
	$phpArray = array( // hidden '1st column index' for sorting
		array(0, 'th0', 'th1', 'th2', 'th3'), // 1st row for header
		array(0, 'td00', 'td01', 'td02', 'td03'),
		array(1, 'td10', 'td11', 'td12', 'td13'),
	);
	?>
	...
	<script>
	var tableArray = <?php echo json_encode($phpArray) ;?>;
	var table = array2table(tableArray[, setTableId, setTableClass]);
	$('body script:first').before(table);
*/
function array2table(ar, id, cl) {
	var id = (id == null) ? '' : ' id="'+ id +'"';
	var cl = (cl == null) ? '' : ' class="'+ cl +'"';
	var thead = '';
	var tbody = '';
	$.each(ar, function(i, row) {
		var td = '';
		if (i === 0) {
			$.each(row, function(j, cell) {
				if(j > 0) {td += '<th>'+ cell +'</th>';}
			});
			thead += '<tr>'+ td +'</tr>\n';
		} else {
			$.each(row, function(j, cell) {
				if(j > 0) {td += '<td>'+ cell +'</td>';}
			});
			tbody += '<tr>'+ td +'</tr>\n';
		}
	});
	return '<table'+ id + cl +'>\n'+
		'<thead>\n'+ thead +'</thead>\n'+
		'<tbody>\n'+ tbody +'</tbody>\n'+
		'</table>'
}
```
