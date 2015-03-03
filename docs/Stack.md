# Stack

> [Wikipedia Article](http://en.wikipedia.org/wiki/Stack_%29abstract_data_type%29)

## Example

```javascript
var stack = new Structures.Stack(['apple', 'tree', 'pie']);

console.log(stack.peek() == 'pie');
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
* `peek()` Returns the value on top of the stack
* `pop()` Returns and removes the top value
* `push(object)` Adds a value to the stack
* `length()` Returns the amount of objects in the stack
* `contains(object)` Returns true if the given object is in the stack, otherwise false
* `clone()` Clones the stack
* `clear()` Clears the stack