(function(){
  
  function Queue(){
    var self = this;
    var undefined;
    
    var data = new LinkedList();
    
    function Push(value){
      data.push(value);
    }
    function Peek(){
      var node = data.get(0);
      return node == undefined ? undefined : node.getValue();
    }
    function Poll(){
      if(GetLength() > 0)
        return data.splice(0, 1).get(0).getValue();
    }
    
    function Clear(){
      data.clear();
    }
    function Clone(){
      var output = new Queue();
      
      data.traverse(function(node){
        output.push(node.getValue());
      });
      
      return output;
    }
    
    function Contains(value){
      return data.indexOf(value) != -1;
    }
    
    function GetLength(){
      return data.length();
    }
    
    function ToArray(){
      return data.toArray();
    }
    
    self.peek = Peek;
    self.push = Push;
    self.poll = Poll;
    
    self.clear = Clear;
    self.clone = Clone;
    
    self.contains = Contains;
    
    self.length = GetLength;
    
    self.toArray = ToArray;
    
    var Constructor = Overload.function();
    Constructor.overload(function(arr){
      for(var i=0; i<arr.length; i++) Push(arr[i]);
    }, ['array']);
    Constructor.apply(self, arguments);
  }
  
  window.Queue = Queue;
  
})();