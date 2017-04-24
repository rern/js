Sort array alphanumerically
--- 
เรียงลำดับอักษร  
by `Intl.Collator().compare` `localeCompare()`  

`{numeric: true}` sort numeric text as number  
`{sensitivity: 'base'}` sort base sensitive  

**Sort array**  
`sort` ascend  
`reverse` descend  
```js
var arr = ['ก', 'ง', 'เก', '1', '3', '๓', '๘', 'a', 'b'];

var ascend = arr.sort(Intl.Collator('en', {numeric: true}).compare);
console.log(ascend); // ["1", "3", "๓", "๘", "a", "b", "ก", "เก", "ง"]

// ภาษาไทย Thai locale - เลขอารบิค > เลขไทย > อักษรไทย > อักษรอังกฤษ
var ascend = arr.sort(Intl.Collator('th', {numeric: true}).compare);
console.log(ascend); // ["1", "3", "๓", "๘", "ก", "เก", "ง", "a", "b"]

```

**Sort multi-dimensional array**
`sort` ascend  
`reverse` descend  
```js
var arr = [ ['1', 'a', 'ก'], ['2', 'b', 'ง'], ['3', 'c', 'เก'], ['4', 'd', '๓'], ['5', 'e', 'a'], ['6', 'f', 'b'], ['7', 'g', '2'] ];

var ascend = arr.sort(function(a, b) {
    return a[2].localeCompare(b[2], 'en', {numeric: true}); // sort by `a[2]` 3rd sub-array 
});
console.log(JSON.stringify(ascend)); // [["7","g","2"],["4","d","๓"],["5","e","a"],["6","f","b"],["1","a","ก"],["3","c","เก"],["2","b","ง"]]

// ภาษาไทย Thai locale - เลขอารบิค > เลขไทย > อักษรไทย > อักษรอังกฤษ
var ascend = arr.sort(function(a, b) {
    return a[2].localeCompare(b[2], 'th', {numeric: true});
});
console.log(JSON.stringify(ascend)); // [["7","g","2"],["4","d","๓"],["1","a","ก"],["3","c","เก"],["2","b","ง"],["5","e","a"],["6","f","b"]]
```
