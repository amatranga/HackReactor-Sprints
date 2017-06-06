var BinarySearchTree = function(value) {
	var binarySearchTree = Object.create(binarySearchTreeMethods);
	BinarySearchTree.value = null;
	BinarySearchTree.left = null;
	BinarySearchTree.right = null;

	return binarySearchTree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){
	if (!this.value){
		this.value = value;
	}
	if (value > this.value){
		if (!this.left){
			this.left = BinarySearchTree(value);
		} else {  //this.left !== null
			this.left.insert(value);
		}
	} else {   //value is less than this.value
		if (!this.right){
			this.right = BinarySearchTree(value);
		} else {   //this.right !== null
			this.right.insert(value);
		}
	}
};

binarySearchTreeMethods.contains = function(value){
	if (value > this.value){
		
	}
};

binarySearchTreeMethods.depthFirstLog = function(){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
