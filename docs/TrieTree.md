# TrieTree

> [Wikipedia Article](http://en.wikipedia.org/wiki/Trie)&ensp;&middot;&ensp;[TrieTree.js](../src/TrieTree.js)

## Example

```javascript
var tree = new Structures.TrieTree(['apple', 'tree', 'pie']);

console.log(tree.contains('apple'));
tree.get('pie').remove();
tree.add('applepie');
console.log(tree.get('app').isend());
console.log(tree.toJSON());

tree.traverse(function(node){
  console.log(node.value());
});
```

## Methods

* Constructors
  * `TrieTree()`
  * `TrieTree([strings...])`
* `.value()` Returns the aggregate value of the current node
* `.isend()` Returns true if the current node is the end of a word
* `.contains(string)` Returns true if the string is contained by the current node
* `.add(string)` Adds the string to the current node 
* `.remove(string)` Removes the string from the current node
* `.remove()` Removes any words ending at the current node
* `.toJSON()` Returns a JSON interpretation of the current node
* `.traverse(function)` Traverses down the tree calling the function at each node.
  * The function calls recieve the current node as the only parameter
  * If any value is returned by the given function at anytime, traversing stops and that value is returned.
* `.get(word)` Returns the node at the end of the given word, undefined if the word isn't in the tree.
* `.get()` Returns an object containing the private data of the node.

***Note*** Each node acts as it's own tree. Thus all methods work on nodes. It is advisable to use a single node as the root and not call `add` on any nodes except for the root, though doing so will not cause an error.