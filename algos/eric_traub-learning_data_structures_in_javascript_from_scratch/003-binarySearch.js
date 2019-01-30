//RECURSION

//What is factorial --> 4! = 4 * 3 * 2 * 1
//My solution
function factorial(num, result = 1){
  if (num === 1) {
    return result;
  }
  else{
    result *= num;
    num -= 1;
    return factorial(num, result);
  }
}

//Solution from the dude
function factorial(num) {
  if (num === 1) return num;
  else return num * factorial(num - 1);
}

//My solution without recursion
function factorial(num) {
  if (num === 1) {
    return num;
  }
  var result = 1;
  while (num > 1) {
    result *= num;
    num --;
  }
  return result;
}




//BINARY SEARCH TREE
//Create a constructor for binary search therefore
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}


BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};


var bst = new BST(50);

bst.insert(100);
bst.insert(90);
bst.insert(80);
bst.insert(70);
bst.insert(60);
bst.insert(40);
bst.insert(30);
bst.insert(20);
bst.insert(10);
bst.insert(5);
bst.insert(95);
bst.insert(85);
bst.insert(75);
bst.insert(65);
bst.insert(55);
bst.insert(45);
bst.insert(35);
bst.insert(25);
bst.insert(15);



//Contains - My solution
BST.prototype.contains = function(value) {
  if (value < this.value) return this.left ? this.left.contains(value) : false;
  if(value > this.value) return this.right ? this.right.contains(value) : false;
  return true;
};

bst.contains(100);
bst.contains(99);


//Expanded solution
BST.prototype.contains = function() {
  if (this.value === value) return true;
  else {

    if(value < this.value){
      if (!this.left) return false;
      return this.left.contains(value);
    }

    else {
      if (!this.right) return false;
      return this.right.contains(value);
    }

  }

};




//Depth First Traversal
BST.prototype.depthFirstTraversal = function(iterFunc) {
  if(this.left) this.left.depthFirstTraversal(iterFunc);
  iterFunc(this.value);
  if(this.right) this.right.depthFirstTraversal(iterFunc);
};

function log(value){
  console.log(value);
}

bst.depthFirstTraversal(log);




//Depth First Traversal refactoring
BST.prototype.depthFirstTraversalRefactoring = function(iterFunc, order) {
  if(order === "pre-order") iterFunc(this.value);
  if (this.left) this.left.depthFirstTraversalRefactoring(iterFunc, order);
  if (order === "in-order") iterFunc(this.value);
  if (this.right) this.right.depthFirstTraversalRefactoring(iterFunc, order);
  if (order === "post-order") iterFunc(this.value);
};

bst.depthFirstTraversalRefactoring(log, 'in-order');
bst.depthFirstTraversalRefactoring(log, 'pre-order');


//Breadth First traversal - Traverses through the tree for every node.
//Moving level by level
//Breadth First traversal - Traverses through the tree for every node.
//Moving level by level
BST.prototype.breadthFirstTraversal = function(iterFunc) {
  var queue = [this];
  while(queue.length){
    var treeNode = queue.shift();
    iterFunc(treeNode.value);
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
};


BST.prototype.getMinVal = function() {
  if(this.left) return this.left.getMinVal();
  return this.value;
};


BST.prototype.getMaxVal = function() {
  if(this.right) return this.right.getMaxVal();
  return this.value;
};



//Exercise
