

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //define tuples and bucket arrays
  var tuples = [];
  var bucket = this._storage.get(index);
  //push key and value into tuples
  tuples.push(k, v);
  //if bucket already has exists, get bucket, push into bucket
  if (bucket){
    for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === k){
        bucket[i][1] = v;
        break;
      } else {
        bucket.push(tuples);
        this._count++;
        // if (this._count > this._limit * 0.75){
        //   this._resize(this._limit * 2);
        // }
      }
    }
  } else {
    bucket = [tuples];
    //assign this._storage.set to index and bucket
  }  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++){
    if (this._storage.get(index)[i][0] === k){
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++){
    if (this._storage.get(index)[i][0] === k){
      this._storage.get(index)[i][1] = undefined;
      // if (this._count < this._limit * 0.25){
      //   this._resize(this._limit / 2);
      // }
      return this._storage.get(index)[i];
    }
  }
};

// HashTable.prototype._resize = function(newLimit){
//   var oldStorage = this._storage;
//   this._limit = newLimit;
//   this._storage = LimitedArray(this._limit);
//   this._count = 0;
//   var context = this;

//   oldStorage.each(function(bucket){
//     for (var i = 0; i < bucket.length; i++){
//       var tuple = bucket[i];
//       context.insert(tuples[0], tuple[1])
//     }
//   });
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */


