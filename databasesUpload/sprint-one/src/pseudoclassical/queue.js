var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.instance = {};
};


Queue.prototype.size = function(){
	return Object.keys(this.storage).length;
};
Queue.prototype.enqueue = function(value){
	this.storage[Object.keys(this.storage).length] = value;
};
Queue.prototype.dequeue = function(){
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