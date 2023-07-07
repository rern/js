### info.js
```js
`==================================
| icon - title                  X |    - Usage      : Long-press icon for this page
|---------------------------------|    - Debug      : Long-press Ok for console.log
|      tab0      |      tab1      |    - Get values : infoVal( ''|'array'|'KEY'|'CFG' )
|                -----------------|      - ''
|                                 |        - no info.values - return [ v1, v2, ... ] or v1 (single value - as string)
|             message             |        - info.values    - return the same type - string / array / json
|    input / select / textarea    |      - 'array'
|              footer             |        - force return [ v1, v2, ... ] or [ v1 ]
|                                 |      - 'KEY' / 'CFG'
|   file - button - cancel - ok   |        - force return [ v1, v2, ..., 'KEY/CFG k1 k2 ... ]
===================================`

info( {	                                            // default
	  icon          : 'NAME'                    // 'question'     (top icon)
	, title         : 'TITLE'                   // 'Information'  (top title)
	, width         : N                         // 400            (info width)
	
	, tab           : [ FUNCTION, ... ]         // ***            (info() functions - blank for current)
	, tablabel      : [ 'LABEL', ... ]          // ***            (tabs for switch between multiple infos)
	
	, content       : 'HTML'                    // ***            (custom html <table> input content)
	, height        : N                         // (fit)          (infocontent height)
	, contentcssno  : true                      // --             (omit content css)
	
	, message       : 'MESSAGE'                 // --             (message under title)
	, messagealign  : 'CSS'                     // 'center'
	, footer        : 'FOOTER'                  // --             (footer above buttons)
	, footeralign   : 'CSS'                     // 'center'
	
	, textlabel     : [ 'LABEL', ... ]          // ***            (label array input label)
	, textalign     : 'CSS'                     // 'left'         (input text alignment)
	, focus         : N                         // --             (focused input)
	
	, passwordlabel : 'LABEL'                   // ***            (password input label)
	
	, textarea      : true                      // ***
	
	, boxwidth      : N                         // 200            (input width - 'max' to fit)
	
	, radio         : { LABEL: 'VALUE', ... }   // ***
	                [ 'VALUE', ... ]            //                (label = value)
	, radiocolumn   : true                      // --             (layout 2 colums)
	, radiosingle   : true                      // --             (layout single line)
	
	, checkbox      : [ 'LABEL', ... ]          // ***            (value = true/false if not json)
	                { LABEL: 'VALUE', ... }  
	, checkcolumn   : true                      // --             (layout 2 colums)
	
	, select        : { LABEL: 'VALUE', ... }   // ***
	                [ LABEL, ... ]              //                (option label = value)
	, selectlabel   : 'LABEL'                   // --             (select input label)
	
	, rangelabel    : 'LABEL'                   // ***            (input range label)
	, rangesub      : 'SUBLABEL'                // --             (sublabel under range)
	
	, order         : [ TYPE, ... ]             // (sequence)     (order of *** inputs)
	
	, beforeshow    : FUNCTION                  // --             (function after values set)
	
	, filelabel     : 'LABEL'                   // ***            (browse button label)
	, fileoklabel   : 'LABEL'                   // 'OK'           (upload button label)
	, filetype      : '.EXT, ...'               // --             (filter and verify filetype (with 'dot' - 'image/*' for all image types)
	
	, button        : [ FUNCTION, ... ]         // --             (function array)
	, buttonlabel   : [ 'LABEL', ... ]          // ***            (extra buttons - label array)
	, buttoncolor   : [ 'COLOR', ... ]          // 'var( --cm )'  (color array)
	, buttonfit     : 1                         // --             (fit buttons width to label)
	
	, cancel        : FUNCTION                  // (reset)        (cancel click function)
	, cancellabel   : 'LABEL'                   // ***            (cancel button label)
	, cancelcolor   : 'COLOR'                   // 'var( --cg )'  (cancel button color)
	, cancelshow    : true                      // (hide)         (show cancel button)
	
	, ok            : FUNCTION                  // (reset)        (ok click function)
	, okno          : true                      // (show)         (no ok button)
	, oklabel       : 'LABEL'                   // ('OK')         (ok button label)
	, okcolor       : 'COLOR'                   // 'var( --cm )'  (ok button color)
	, oknoreset     : true                      // --             (keep info open + omit reset; reset by cancel only)
	
	, checkchanged  : true                      // --             (check values changed)
	, checkblank    : true or [ i, ... ]        // --             (check values not blank /  [ partial ] )
	, checkip       : [ i, ... ]                // --             (check valid ip)
	, checklength   : { i: N, . }               // --             (required N characters in i)
	                { i: [ N, 'COND' ], ... }   //                (required N: characters; COND: min, max; in i)
	
	, values        : [ 'VALUE', ... ]          // --             (default values - in layout order)
	                { KEY: 'VALUE', ... }       //                (return bash var - [ 'KEY=value', ... ])
	
	, fileconf      : true                      // --             (bash: save key=value to $system/$cmd.conf)
} );
```
