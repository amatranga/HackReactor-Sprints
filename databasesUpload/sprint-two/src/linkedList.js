var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head){
      list.head = new Node(value);
      list.tail = list.head;
    }
    else {
      list.tail.next = new Node(value);
      var hasNext = function(node){
        if (!node.next){
          return node;
        } else {
          return hasNext(node.next);
        }
      }
      
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var curHead = list.head.value;
    list.head = list.head.next;
    list.head.prev = undefined;
    return curHead;
  };

  list.contains = function(target) {
    var curNode = list.head;
    while(curNode.value !== target){
      if (curNode.next === null){
        return false;
      }curNode = curNode.next;
    }
     return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  //node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
