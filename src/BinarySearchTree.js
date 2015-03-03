(function(){
  
  function BinarySearchTree(){
    var self = this;
    var undefined;
    
    var data = [],
        compareTo = function(a,b){return a>b;};

    function LeftChild(parent_index){
      return parent_index*2+1;
    }
    function RightChild(parent_index){
      return LeftChild(parent_index)+1;
    }
    function Parent(child_index){
      return Math.floor(child_index/2+.5)-1;
    }

    function Push(value){
      if(data.length == 0){
        data.push(value);
        return;
      }
      
      PrivatePush(value, 0);
    }
    function PrivatePush(value, index){
      if(data[index] == undefined){
        data[index] = value;
        return;
      }
      
      if(compareTo(value, data[index])) PrivatePush(value, RightChild(index));
      else PrivatePush(value, LeftChild(index));
    }
    
    // in order traversal
    function Traverse(funct){
      return PrivateTraverse(0, funct);
    }
    function PrivateTraverse(index, funct){
      if(data[index] == undefined) return;
      
      PrivateTraverse(LeftChild(index), funct);
      var response = funct(data[index], self);
      if(response != undefined) return response;
      PrivateTraverse(RightChild(index), funct);
    }
    function Sort(){
      var arr = [];
      
      Traverse(function(value){
        arr.push(value);
      });
      
      return arr;
    }
    
    function Clear(){
      data = [];
    }
    function Clone(){
      return new BinarySearchTree(data, compareTo);
    }
    
    var Contains = Overload.function();
    Contains.overload(function(value){
      return this(value, function(a,b){return a==b;});
    });
    Contains.overload(function(value, funct){
      return PrivateContains(0, value, funct);
    }, ['*', 'function']);
    function PrivateContains(index, value, isequal){
      if(data[index] == undefined) return false;
      if(isequal(data[index], value)) return true;
      
      if(compareTo(value, data[index])) return PrivateContains(RightChild(index), value, isequal);
      else return PrivateContains(LeftChild(index), value, isequal);
    }
    
    function Size(){
      return data.length;
    }
    
    self.push = Push;
    
    self.traverse = Traverse;
    self.sort = Sort;
    
    self.clear = Clear;
    self.clone = Clone;
    
    self.contains = Contains;
    self.size = Size;
    
    var Constructor = Overload.function();
    Constructor.overload(function(funct){
      this([], funct);
    }, ['function']);
    Constructor.overload(function(arr){
      this(arr, compareTo);
    }, ['array']);
    Constructor.overload(function(arr, funct){
      compareTo = funct;
      for(var i=0; i<arr.length; i++) Push(arr[i]);
    }, ['array', 'function']);
    Constructor.apply(self, arguments);
  }
  
  window.BinarySearchTree = BinarySearchTree;
  
})();