var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
  	var stored = storage[0];
  	delete storage[0];
  	for (var key in storage){
  		var nextValue = storage[key];
  		delete storage[key];
  		key--;
  		storage[key] = nextValue;
  	}
  	return stored;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
