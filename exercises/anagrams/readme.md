Before converting to object, its good to sort because 

```
   JSON.stringify({t:2,y:9}) === JSON.stringify({t:2,y:9})
=> true
   JSON.stringify({t:2,y:9}) === JSON.stringify({y:9,t:2})
=> false
```


And 

```
   'ttooo'.split('').reduce(function(obj, char) {obj[char] = obj[char]+1 || 1; return obj }, {})
=> { t: 2, o: 3 }
   'ooott'.split('').reduce(function(obj, char) {obj[char] = obj[char]+1 || 1; return obj }, {})
=> { o: 3, t: 2 }
```
