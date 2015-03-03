# BinarySearchTree

> [Wikipedia Article](http://en.wikipedia.org/wiki/Binary_search_tree)&ensp;&middot;&ensp;[BinarySearchTree.js](../src/BinarySearchTree.js)

## Example

```javascript
var tree = new Structures.BinarySearchTree();
for(var i=0; i<100; i++) tree.push(Math.random()*100);
console.log(tree.sort());

tree.clear();
```

## Methods

* Constructors
  * `BinarySearchTree()`
  * `BinarySearchTree(function)`
    * A `CompareTo` function used to order the tree. For example, the default is function(a,b){return a>b;}
  * `BinarySearchTree([objects...])`
  * `BinarySearchTree([objects...], function)`
* `.push(object)`
* `.sort()`
  * Returns a sorted array containing the tree's values. Sorted using the `CompareTo` function.
  * The original tree remains unchanged
* `.clear()`
* `.clone()`
* `.size()`
* `.contains(object)`
* `.contains(object, function)`
  * uses the given function to determine if the provided object matches a node in the tree
  * default value is function(a,b){return a == b;}
* `.traverse(function)`
  * Runs an in-order traversal over the tree calling `function(value, tree)` at each node.