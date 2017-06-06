

// Instantiate a new graph
var Graph = function() {
	this.verticies = [];
	this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.verticies.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.verticies.indexOf(node) > -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	this.verticies = _.filter(this.verticies, function(item){
		return item !== node;
	});
	for (var key in this.edges){
		this.edges[key] = _.filter(this.edges[key], function(item){
			return item !== node;
		});
	}
	return node;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.edges[fromNode].indexOf(toNode) > -1 && this.edges[toNode].indexOf(fromNode) > -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	// var edge = [];
	// edge.push(toNode);
	// this.edges[fromNode] = edge;
	// edge = [];
	// edge.push(fromNode);
	// this.edges[toNode] = edge;
  if (!this.edges[fromNode]){
    this.edges[fromNode] = [toNode];
  } else  {
    this.edges[fromNode].push(toNode);
  } 

  if (!this.edges[toNode]){
    this.edges[toNode] = [fromNode];
  } else {
    this.edges[toNode].push(fromNode);
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	this.edges[fromNode] = _.filter(this.edges[fromNode], function(item){
		return item !== toNode;
	});
	this.edges[toNode] = _.filter(this.edges[toNode], function(item){
		return item !== fromNode;
	});
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.verticies.length; i++){
    cb(this.verticies[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


