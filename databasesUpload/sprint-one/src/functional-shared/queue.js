var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  var storage = {};
  _.extend(instance, queueMethods);
  instance.storage = storage;
  return instance;
};

var queueMethods = {};


queueMethods.enqueue = function(value){
	var sto = this.storage;
	this.storage[Object.keys(this.storage).length] = value;
};
queueMethods.dequeue = function(){
	var stored = this.storage[0];
	delete this.storage[0];

	return stored;
};
queueMethods.size = function(){
	return Object.keys(this.storage).length;
};