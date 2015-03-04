(function(){
  
  function TrieTree(){
    var self = this;
    var undefined;
    
    var data = {},
        isend = false,
        value = '';
  
    var Add = Overload.function();
    Add.overload(function(word){
      Add(word, '');
    }, ['string']); 
    Add.overload(function(word, value){
      if(word.length == 0){
        isend = true;
        return;
      }
      
      var letter = word[0];
      if(!data[letter]) data[letter] = new TrieTree(word.substring(1), value+letter);
      else Get(letter).add(word.substring(1), value+letter);
    }, ['string', 'string']);
    
    var Remove = Overload.function();
    Remove.overload(function(){
      isend = false;
    });
    Remove.overload(function(word){
      var node = Get(word);
      if(!node || !node.isend()) return false;
      node.remove();
      return true;
    }, ['string']);
   
    function ToJson(){
      var output = {isend: IsEnd(), value: GetValue()};
      
      for(var key in data){
        var node = data[key];
        output[key] = node.toJSON();
      }
      
      return output;
    }
    function Contains(word){
      var node = Get(word);
      return node != undefined && node.isend();
    }
    function IsEnd(){
      return isend;
    }
    function GetValue(){
      return value;
    }
    
    function Traverse(funct){
      for(var key in data){
        var node = data[key];
        
        var response = funct(node);
        if(!!response) return response;
        
        var response = node.traverse(funct);
        if(!!response) return response;
      }
    }
    
    var Get = Overload.function();
    Get.overload(function(){
      var output = {};
      for(var key in data) output[key] = data[key];
      return output;
    });
    Get.overload(function(word){
      if(word.length == 0) return self;
      
      var node = data[word[0]];
      if(node == undefined) return undefined;
      
      return node.get(word.substring(1));
    }, ['string']);
    
    function HasChildren(){
      for(var key in data) return true;
      return false;
    }
    function GetChildren(){
      var arr = [];
      
      for(var key in data) arr.push(key);
      
      return arr;
    }
    
    self.get = Get;
    self.isend = IsEnd;
    self.add = Add;
    self.toJSON = ToJson;
    self.contains = Contains;
    self.traverse = Traverse;
    self.value = GetValue;
    self.remove = Remove;
    self.hasChildren = HasChildren;
    self.getChildren = GetChildren;
    
    var Constructor = Overload.function();
    Constructor.overload(function(words){
      for(var i=0,word; word=words[i++];) Add(word);
    }, ['array']);
    Constructor.overload(function(word, val){
      Add(word, val);
      value = val;
    }, ['string', 'string']);
    Constructor.apply(self, arguments);
  }
  
  window.TrieTree = TrieTree;
  
})();