# Queue

> [Wikipedia Article](http://en.wikipedia.org/wiki/Queue_%28abstract_data_type%29)

## Example

```javascript
var stack = new Structures.Stack(['apple', 'tree', 'pie']);

console.log(stack.peak() == 'pie');
console.log(stack.pop() == 'pie');
console.log(stack.length() == 2);
console.log(stack.contains('apple') == true);

var dup = stack.clone();
stack.clear();
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