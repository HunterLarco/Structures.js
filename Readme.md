#Structures.js

Contributers&ensp;·&ensp;[Hunter Larco](http://larcolabs.com)

> A Javascript library for an assortment of data structures.

## Example

```javascript
var tree = new Structures.TrieTree(['apple', 'tree', 'pie']);
tree.traverse(function(node){
  console.log(node.value());
});
```

## Installation
Download [color.min.js](./build/Structures.min.js) and place it in your project's root directory
```html
<script type='text/javascript' src='Structures.min.js'></script>
```

## Included Structures

* TrieTree