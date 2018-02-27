Remember how to go reverse/backward inside map, forEach, every etc. 
using "arr.length - index - 1" as shown below.

```
var arr = ['h','e','y'];

arr.map(function(char, index) {
  console.log('char is', char); // going forward
  console.log((arr.length - index - 1), arr[arr.length - index - 1]); //going backward
})

\\ output is
char is h
2 'y'
char is e
1 'e'
char is y
0 'h'
```
