var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var instance = Object.create(queueMethods);
  instance.storage = storage;
  return instance;
};

var queueMethods = {};


queueMethods.size = function(){
	return Object.keys(this.storage).length;
};
queueMethods.enqueue = function(value){
	this.storage[Object.keys(this.storage).length] = value;
};
queueMethods.dequeue = function(){
	var stored = this.storage[0];
	delete this.storage[0];
	for (var key in this.storage){
		var nextValue = this.storage[key];
		delete this.storage[key];
		key--;
		this.storage[key] = nextValue;
	}
	return stored;
};