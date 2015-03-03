# Heap

> [Wikipedia Article](http://en.wikipedia.org/wiki/Heap_%28data_structure%29)&ensp;&middot;&ensp;[Heap.js](../src/Heap.js)

## Example

```javascript
var heap = new Structures.Heap();
for(var i=0; i<100; i++) heap.push(Math.random()*100);
console.log(heap.sort());

heap.clear();
```

## Methods

* Constructors
  * `Heap()`
  * `Heap(function)`
    * A `CompareTo` function used to order the heap. For example, the default is function(a,b){return a>b;}
  * `Heap([objects...])`
  * `Heap([objects...], function)`
* `.push(object)`
* `.peek()`
  * Returns the top node's value
* `.pop()`
  * Returns and removes the top node's value
* `.sort()`
  * Returns a sorted array containing the heaps values. Sorted using the `CompareTo` function.
  * The original heap remains unchanged
* `.clear()`
* `.clone()`
* `.size()`
* `.contains()`