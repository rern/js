sortable.js 
---
a jquery plugin for `table` with `thead` and `tbody`  
  
[**DEMO**](https://rern.github.io/sortable/)  
- เรียงลำดับภาษาไทยได้ถูกต้อง
- sortable row
- fixed header
- scrollable body
- align center table
- zebra stripe row
- highlight sorted column
- maintain scroll position on screen rotate
- screen rotate responsive  
  
**usage:**  
```html
...
<link rel="stylesheet" href="/path/sortable.css">
</head>
<body>

	<div id="divbeforeid"> <!-- optional -->
		(divBeforeTable html)
	</div>

	<table id="tableid">
		<thead><tr><td>cell</td></tr></thead>
		<tbody><tr><td>cell</td></tr></tbody>
	</table>

	<div id="divafterid"> <!-- optional -->
		(divAfterTable html)
	</div>

<script src="/path/jquery.min.js"></script>
<script src="/path/sortable.js"></script>
<script>
...
$( 'tableid' ).sortable();                 // without options > full page table
// or
$( 'tableid' ).sortable( {
	  divBeforeTable:  'divbeforeid' // default: (none) - div before table, enclosed in single div
	, divAfterTable:   'divafterid'  // default: (none) - div after table, enclosed in single div
	, initialSort:     'column#'     // default: (none) - start with 0
	, initialSortDesc: false         // default: false
	, locale:          'code'        // default: 'en'   - locale code
	, negativeSort:    [column#]     // default: (none) - column with negative value
	, tableArray:      []            // default: (none) - use table data array directly
} );
...
```
**custom css for table:**  
  edit in `sortable.css`    
  
[**locale code**](https://r12a.github.io/app-subtags/)
