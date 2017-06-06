var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  var storage = {};
  _.extend(instance, stackMethods);
  instance.storage = storage;
  return instance;
};

var stackMethods = {};


stackMethods.size = function(){
	return Object.keys(this.storage).length;
};
stackMethods.push = function(value){
	this.storage[Object.keys(this.storage).length] = value;
};
stackMethods.pop = function(){
	var currentValue = this.storage[Object.keys(this.storage).length - 1];
	delete this.storage[Object.keys(this.storage).length - 1];
	return currentValue;
};