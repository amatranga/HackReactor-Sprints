var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	if (!this._storage.includes(item)){
		this._storage.push(item);
	}
		//if yes
			//do nothing
		//else
			//push item to array
};

setPrototype.contains = function(item) {
	//check for indexOf item
	return this._storage.indexOf(item) > -1;
	//return truthy or falsy
};

setPrototype.remove = function(item) {
	//check for indexOf item
	//splice (indexOf(item), 1)
	this._storage = _.filter(this._storage, function(element){
		return element !== item;
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
