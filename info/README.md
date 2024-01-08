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

info( {                                         // default
      icon          : 'NAME'                    // 'question'     (top icon)
    , title         : 'TITLE'                   // 'Information'  (top title)
    , width         : N                         // 400            (info width)
    
    , tab           : [ FUNCTION, ... ]         // ***            (info() functions - blank for current)
    , tablabel      : [ 'LABEL', ... ]          // ***            (tabs for switch between multiple infos)
    
    , content       : 'HTML'                    // ***            (custom html <table> input content)
    , height        : N                         // (fit)          (infocontent height)
    , contentcssno  : true                      // --             (omit content css)

    , header        : 'HEADER'                  // --             (header above message)
    , headeralign   : 'CSS'                     // 'center'
    , message       : 'MESSAGE'                 // --             (message under title)
    , messagealign  : 'CSS'                     // 'center'

    , list          : [
          [ 'LABEL', 'TYPE' ]                                     // (password, textarea, range)
        , [ 'LABEL', 'TYPE',     'UNIT',   'td' ]                 // (text, number)
        , [ 'LABEL', 'TYPE',     { step: N, min: N, max: N } ]    // (number with up/down buttons)
        , [ 'LABEL', 'checkbox',           'td' ]
        , [ 'LABEL'  'radio',    { K: V }, 'tr' ]
        , [ 'LABEL', 'select',   { K: V }, 'UNIT' ]
    ]                                           // ('td'/'tr' - single/1:1 line, each[ 4 ] - colspan)

    , prompt        : 'HTML'                    // --             (hidden prompt - $( '#infoX' ).trigger( 'click' ) required for close)

    , footer        : 'FOOTER'                  // --             (footer above buttons)
    , footeralign   : 'CSS'                     // 'center'

    , focus         : N                         // --             (focused input)
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
    , checklength   : { i: N, . }               // --             (N characters in i)
                   // { i: [ N, 'COND' ], ... } //                (N: characters; COND: min, max; in i)
    
    , values        : [ 'VALUE', ... ]          // --             (default values - in layout order)
                   // { KEY: 'VALUE', ... }     //                (return bash var - [ 'KEY=value', ... ])
    
    , fileconf      : true                      // --             (bash: save key=value to $dirsystem/$CMD.conf)
} );
```
