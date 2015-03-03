(function(){
  
  function Heap(){
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
    
    function Swap(i1, i2){
      var old = data[i1];
      data[i1] = data[i2];
      data[i2] = old;
    }
    
    function FixUp(index){
      var parent = Parent(index);
      if(parent == -1) return;
      
      if(compareTo(data[index], data[parent])){
        Swap(parent, index);
        FixUp(parent);
      }
    }
    function FixDown(index){
      var left = LeftChild(index),
          right = RightChild(index),
          max;
      
      if(data[left] == undefined) return;
      else if(data[right] == undefined) max = left;
      else max = compareTo(data[right], data[left]) ? right : left;
      
      if(compareTo(data[max], data[index])){
        Swap(max, index);
        FixDown(max);
      }
    }
    
    function Push(value){
      data.push(value);
      FixUp(data.length-1);
    }
    function Peek(){
      return data.length > 0 ? data[0] : undefined;
    }
    function Pop(){
      if(data.length == 0) return undefined;
      if(data.length == 1) return data.pop();
      
      var val = data[0];
      data[0] = data.pop();
      FixDown(0);
      return val;
    }
    
    function Sort(){
      var arr = [], heap = Clone();
      while(heap.size() > 0) arr.push(heap.pop());
      return arr;
    }
    
    function Clear(){
      data = [];
    }
    function Clone(){
      return new Heap(data, compareTo);
    }
    
    function Contains(value){
      return data.indexOf(value) != -1;
    }
    function Size(){
      return data.length;
    }
    
    self.push = Push;
    self.peek = Peek;
    self.pop = Pop;
    
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
  
  window.Heap = Heap;
  
})();