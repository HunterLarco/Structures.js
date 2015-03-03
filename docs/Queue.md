# Queue

> [Wikipedia Article](http://en.wikipedia.org/wiki/Queue_%28abstract_data_type%29)&ensp;&middot;&ensp;[Queue.js](../src/Queue.js)

## Example

```javascript
var queue = new Structures.Queue(['apple', 'tree', 'pie']);

console.log(queue.peek() == 'apple');
console.log(queue.poll() == 'apple');
console.log(queue.length() == 2);
console.log(queue.contains('apple') == false);

var dup = queue.clone();
queue.clear();

console.log(dup.toArray());
```

## Methods

* Constructors
  * `Stack()`
  * `Stack([objects...])` The provided array is all added to the stack starting from index 0
* `.peak()` Returns the value on top of the stack
* `.pop()` Returns and removes the top value
* `.push(object)` Adds a value to the stack
* `.length()`
* `.contains(object)`
* `.clone()`
* `.clear()`
* `.toArray()`