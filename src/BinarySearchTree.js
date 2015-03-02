(function(){
  
  function BinarySearchTree(){
    var self = this;
    var undefined;
    
    var left,
        right,
        key,
        value;
    
    function GetValue(){
      return value;
    }
    function GetLeft(){
      return left;
    }
    function GetRight(){
      return right;
    }
    function GetKey(){
      return key;
    }
    
    var Add = Overload.function();
    Add.overload(function(value){
      Add(value, value);
    }, ['number']);
    Add.overload(function(_key, _value){
      if(!key){
        key = _key;
        value = _value;
        return;
      }
      
      if(_key > key){
        if(!right) right = new BinarySearchTree(_key, _value);
        else right.add(_key, _value);
      }else{
        if(!left) left = new BinarySearchTree(_key, _value);
        else left.add(_key, _value);
      }
    }, ['number', '*']);
    
    function ToMap(){
      return {
        left: !!left ? left.toMap() : null,
        right: !!right ? right.toMap() : null,
        key: key,
        value: value
      };
    }
    function Contains(_key){
      return Get(_key) != undefined;
    }
    
    var Get = Overload.function();
    Get.overload(function(){
      return {
        left: left,
        right: right,
        key: key,
        value: value
      };
    });
    Get.overload(function(_key){
      if(key == _key) return value;
      
      if(_key > key) return !!right ? right.get(_key) : undefined;
      else return !!left ? left.get(_key) : undefined;
    });
    
    // in order traversal
    function Traverse(funct){
      var response;
      
      if(!!left) response = left.traverse(funct);
      if(!!response) return response;
      
      var response = funct(self);
      if(!!response) return response;
      
      if(!!right) response = right.traverse(funct);
      if(!!response) return response;
    }
    
    self.add = Add;
    self.toMap = ToMap;
    self.contains = Contains;
    
    self.get = Get;
    
    self.traverse = Traverse;
    
    self.value = GetValue;
    self.left = GetLeft;
    self.right = GetRight;
    self.key = GetKey;
    
    var Constructor = Overload.function();
    Constructor.overload(function(values){
      for(var i=0,val; val=values[i++];) Add(val);
    }, ['array']);
    Constructor.overload(function(_key, _value){
      key = _key;
      value = _value;
    }, ['number', '*']);
    Constructor.apply(self, arguments);
  }
  
  window.BinarySearchTree = BinarySearchTree;
  
})();