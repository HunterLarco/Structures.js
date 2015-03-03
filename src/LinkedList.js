// Circular Doubly-Linked List

(function LinkedList(){
  
  function LinkedListNode(){
    var self = this;
    var undefined;
    
    var prev = self,
        next = self,
        value;
    var IsRoot, SetRoot;
    
    function InsertAfter(node){
      node.setNext(next);
      node.setPrev(self);
      
      next.setPrev(node);
      
      next = node;
    }
    function InsertBefore(node){
      prev.insertAfter(node);
    }
    
    function GetNext(){
      return next;
    }
    function SetNext(_next){
      var old = next;
      next = _next;
      return old;
    }
    function GetPrev(){
      return prev;
    }
    function SetPrev(_prev){
      var old = prev;
      prev = _prev;
      return old;
    }
    
    function GetValue(){
      return value;
    }
    function SetValue(_value){
      var old = value;
      value = _value;
      return old;
    }
    
    function Remove(){
      prev.setNext(next);
      next.setPrev(prev);
      
      if(IsRoot(self)) SetRoot(self != next ? next : undefined);
    }
    
    self.insertBefore = InsertBefore;
    self.insertAfter = InsertAfter;
    
    self.setNext = SetNext;
    self.setPrev = SetPrev;
    self.getNext = GetNext;
    self.getPrev = GetPrev;
    
    self.getValue = GetValue;
    self.setValue = SetValue;
    
    self.remove = Remove;
    
    var Constructor = Overload.function();
    Constructor.overload(function(_value, _IsRoot, _SetRoot){
      value = _value;
      IsRoot = _IsRoot;
      SetRoot = _SetRoot;
    });
    Constructor.apply(self, arguments);
  }
  
  function LinkedList(){
    var self = this;
    var undefined;
    
    var root;
    var size = 0;
    
    function IsRoot(node){
      return node == root;
    }
    function SetRoot(node){
      root = node;
    }
    
    function Push(value){
      size++;
      
      if(!root) root = new LinkedListNode(value, IsRoot, SetRoot);
      else root.insertBefore(new LinkedListNode(value, IsRoot, SetRoot));
    }
    function Get(index){
      if(!root) return undefined;
      
      var forwards = index > 0,
          index = Math.abs(index) % GetLength();
      
      var node = root;
      for(var i=0; i<index; i++)
        node = forwards ? node.getNext() : node.getPrev();
      return node;
    }
    function Remove(index){
      if(!root) return false;
      if(GetLength() == 1) return Clear();
      
      Get(index).remove();
      size--;
      
      return true;
    }
    
    function GetLength(){
      return size;
    }
    
    function Clear(){
      root = undefined;
    }
    function Clone(){
      var list = new LinkedList();
      
      Traverse(function(node){
        list.push(node.getValue());
      });
      
      return list;
    }
    
    function ToArray(){
      var arr = [];
      if(!root) return arr;
      
      Traverse(function(node){
        arr.push(node.getValue());
      });
      
      return arr;
    }
    
    function Traverse(funct){
      if(!root) return;
      
      var node = root,
          index = 0;
      
      do{
        var response = funct(node, index++, self);
        if(response != undefined) return response;
        
        node = node.getNext();
      }while(node != root);
    }
    function Map(funct){
      var result = new LinkedList();
      
      Traverse(function(node, index, list){
        var response = funct(node, index, list);
        if(response != undefined) result.push(response);
      });
      
      return result;
    }
    function Filter(funct){
      Traverse(function(node, index, list){
        var response = funct(node, index, list);
        if(response === false){
          node.remove();
          size--;
        }
      });
    }
    
    function Splice(index, deleteCount){
      var node = Get(index),
          deleted = new LinkedList();
      
      for(var i=0; i<Math.min(GetLength(), deleteCount); i++){
        node.remove();
        size--;
        deleted.push(node.getValue());
        node = node.getNext();
      }
      
      return deleted;
    }
    function Slice(start, end){
      if(end == undefined) end = GetLength();
      
      start = Math.max(Math.min(GetLength(), start), -GetLength());
      end = Math.max(Math.min(GetLength(), end), -GetLength());
      
      if(start < 0) start += GetLength();
      if(end < 0) end += GetLength();
      
      var node = Get(start),
          result = new LinkedList();

      for(var i=0; i<end-start; i++){
        result.push(node.getValue());
        node = node.getNext();
      }

      return result;
    }
    
    function IndexOf(value){
      var index = Traverse(function(node, index, list){
        if(node.getValue() == value) return index;
      });
      
      return index == undefined ? -1 : index;
    }
    function LastIndexOf(value){
      if(!root) return;
      
      var node = root.getPrev(),
          index = GetLength()-1;
      
      do{
        if(value == node.getValue()) return index;
        index--;
        node = node.getPrev();
      }while(node != root);
    }
    
    self.push = Push;
    self.get = Get;
    self.remove = Remove;
    
    self.length = GetLength;
    
    self.clear = Clear;
    self.clone = Clone;
    
    self.toArray = ToArray;
    
    self.traverse = Traverse;
    self.map = Map;
    self.filter = Filter;
    
    self.splice = Splice;
    self.slice = Slice;
    
    self.indexOf = IndexOf;
    self.lastIndexOf = LastIndexOf;
    
    var Constructor = Overload.function();
    Constructor.overload(function(arr){
      for(var i=0; i<arr.length; i++) Push(arr[i]);
    }, ['array']);
    Constructor.apply(self, arguments);
  }
  
  window.LinkedList = LinkedList;
  
})();