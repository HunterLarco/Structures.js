(function(){
  
  function Stack(){
    var self = this;
    var undefined;
    
    var data = [];
    
    function Peek(){
      return data[data.length-1];
    }
    function Pop(){
      return data.pop();
    }
    function Push(value){
      data.push(value);
    }
    
    function Clear(){
      data = [];
    }
    function Clone(){
      return new Stack(data);
    }
    
    function Contains(value){
      return data.indexOf(value) != -1;
    }
    
    function Length(){
      return data.length;
    }
    
    function ToArray(){
      var ouput = [];
      
      for(var i=0; i<data.length; i++)
        output.push(data[i]);
      
      return output;
    }
    
    self.peek = Peek;
    self.pop = Pop;
    self.push = Push;
    
    self.clear = Clear;
    self.clone = Clone;
    
    self.contains = Contains;
    
    self.length = Length;
    
    self.toArray = ToArray;
    
    var Constructor = Overload.function();
    Constructor.overload(function(arr){
      for(var i=0; i<arr.length; i++) Push(arr[i]);
    }, ['array']);
    Constructor.apply(self, arguments);
  }
  
  window.Stack = Stack;
  
})();