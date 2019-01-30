function BST(value){
  this.value = value || null;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  var newBst = new BST(value);
  if (this.value > value){
    if(this.left) this.left.insert(value);
    else this.left = newBst;
  }
  else if(this.value <= value){
    if(this.right) this.right.insert(value);
    else this.right = newBst;
  }
};

var bst = new BST(50);
bst.insert(40);
bst.insert(60);
bst.insert(45);
bst.insert(55);



BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  if (value < this.value){
    if (!this.left) return false;
    return this.left.contains(value);
  }
  if (value > this.value){
    if(!this.right) return false;
    return this.right.contains(value);
  }
};

bst.contains(55);
bst.contains(32);

function logMe(value) {
  console.log(value);
}


//In the depth first traversal method, we want to log all the values of the BINARY
//tree and we want to do that by starting at the lowest value.
BST.prototype.depthFirstTraversal = function(logger) {
  if (this.left) this.left.depthFirstTraversal(logger);
  logger(this.value);
  if (this.right) this.right.depthFirstTraversal(logger);
};

BST.prototype.depthFirstTraversalRefactoring = function(logger, order) {
  if (order === "pre-order") logger(this.value);
  if (this.left) this.left.depthFirstTraversalRefactoring(logger, order);
  if(order === "in-order") logger(this.value);
  if (this.right) this.right.depthFirstTraversalRefactoring(logger, order);
  if (order === "post-order") logger(this.value);
};


BST.prototype.breadthFirstTraversal = function(logger) {
  var queue = [this];
  while(queue.length > 0){
    var node = queue.shift();
    logger(node.value);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
};


BST.prototype.getMinVal = function() {
  var minVal = this.value;
  var currentNode = this;
  while(currentNode.left){
    minVal = currentNode.left.value;
    currentNode = currentNode.left;
  }
  return minVal;
};


BST.prototype.getMaxVal = function() {
  var maxVal = this.value;
  var currentNode = this;
  while(currentNode.right){
    maxVal = currentNode.right.value;
    currentNode = currentNode.right;
  }
  return maxVal;
};
