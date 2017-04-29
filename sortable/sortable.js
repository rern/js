/* *** sortable.css for sortable.js *** */

/* custom >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
.divbefore { /* 'divBeforeTable' */
/*	box-shadow: 0px 5px 5px rgba(0,0,0,0.1);*/
}
.divafter { /* 'divAfterTable' */
	box-shadow: 0px -5px 5px rgba(0,0,0,0.5);
}

.sortable {
	margin: 0;
	padding: 0;
	border-collapse: collapse;
	border-style: none;
	border-width: 0;
	border-spacing: 0;
}
.sortable thead,
.sortableth2 {
	height: 40px;
	line-height: 40px;
	background: #effbf8;
}
.sortableth2 {
	box-shadow: 0px 5px 5px rgba(0,0,0,0.1) inset, 
		0px 5px 5px rgba(0,0,0,0.5);
	opacity: 0.95;
}
.sortable th,
.sortable thead td {
	box-shadow: 0px 9px 5px -6px rgba(0,0,0,0.1) inset;
	border-bottom: 1px solid #eee;
}
.sortable th {
	font-weight: normal;
	text-align: left;
}
.sortable tbody {
/*	background: #fff;*/
}
.sortable tr {
	height: 30px;
	cursor: default;
}
.sortableth2 a,
.sortable th,
.sortable td {
	padding: 0 3px;
}

/* reponsive ------------------------------------------------------------------------------------------------------------------------------------- */
/* ***'min-width: 0 !important' required for column with 'max-width'*** */
@media(max-width: 569px) {
/*	.sortable th:nth-child(4), .sortable td:nth-child(4) {min-width: 0 !important; display: none !important;}
	.sortable th:nth-child(5), .sortable td:nth-child(5) {min-width: 0 !important; max-width: 300px;}*/
}
@media(max-width: 414px) {
/*	.sortable th:nth-child(3), .sortable td:nth-child(3) {min-width: 0 !important; display: none !important;}
	.sortable th:nth-child(5), .sortable td:nth-child(5) {min-width: 0 !important; max-width: 220px;}*/
}
@media(max-width: 320px) {
/*	.sortable th:nth-child(6), .sortable td:nth-child(6) {display: none !important;}
	.sortable th:nth-child(5), .sortable td:nth-child(5) {min-width: 0 !important; max-width: 200px;}*/
}
@media(min-height: 414px) {
/*	.sortable th {
		border: 0;
	}*/
}


/* SHOULD NOT change below this line ------------------------------------------------------------------------------------------- */
.sortableth2 a,
.sortable th,
.sortable td { /* 3 lines for ellipsis: 'td max-width' must be set */
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.sortableth2 a,
.sortable th {
	text-overflow: clip; /* for very narrow column */
}
.sortable tbody tr:nth-child(1) td { /* 1st row top offset */
	padding-top: 5px;
}
.sortable tbody tr:nth-child(even) { /* zebra stripe */
	background: rgba(0,0,0,0.05);
}
.sortable tbody tr:hover {
	background: rgba(0,0,0,0.15);
}
.sorted { /* sorted column */
	background: rgba(0,0,0,0.05);
}
.asc:before, .asctmp:before {
	content: '▲';
	color: green;
}
.desc:before {
	content: '▼';
	color: crimson;
}
.asctmp:before {
	opacity: 0;
}
/* custom <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

/* DO NOT change below this line ---------------------------------------------------------------------------------------------------- */
body {
	width: 100% !important;
}
.divbefore,
.divafter {
	position: fixed;
	z-index: 10;
}
.divafter {
	bottom: 0;
}
.sortable thead,
.sortableth2 {
	cursor: pointer;
	user-select: none;
}
.sortableth2 {
	position: fixed;
	width: 100%;
	z-index: 1;
}
.sortableth2 a {
	display: inline-block;
}
.sortable thead {
	visibility: hidden;
}
.sortable thead th:empty,
.sortable thead td:empty {
	pointer-events: none;
}
.sortable tbody {
	overflow: auto;
	-webkit-overflow-scrolling: touch; /* ios momentum scroll */
}
.sortable .tdpad {
	width: 50%; /* oversize for centering table */
	padding: 0;
}
