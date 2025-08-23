/*
A binary search tree is constituted by nodes.
Each node can have up to two branches.
Left branch has a value that is lesser or equal to the parent node while the
right node can have a value that is larger or equal to the parent node.
That results in the binary search tree to have an ordered structure.
In a binary search tree, on average half of the search operations can be skipped.
So addition, deletion or search is proportional to the logarithm of the number of
nodes that constitute the binary search tree.
This is better than the linear order of an array where we have to investigate each
element separately.
*/

class Node{
  constructor(data, left, right){
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}


class BST {
  constructor(){
    this.root = null;
  }


  //Add in BST
  add(data) {
    const currentNode = this.root;
    if (!currentNode) this.root = new Node(data);
    else {
      const searchTree = function(currentNode) {
        if(data < currentNode.data){
          if(!currentNode.left) currentNode.left = new Node(data);
          else return searchTree(currentNode.left);
        }
        else if(data > currentNode.data) { //
          if(!currentNode.right) currentNode.right = new Node(data);
          else return searchTree(currentNode.right);
        }
        else return null;
      };
      return searchTree(currentNode);
    }
  } //End of add()


  //find Minimum
  findMin(){
    let currentNode = this.root;
    while(currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data || this.root.data;
  }


  //Find Maximum
  findMax(){
    let currentNode = this.root;
    while(currentNode.right){
      currentNode = currentNode.right;
    }
    return currentNode.data || this.root.data;
  }


  //Find data
  find(data){
    let currentNode = this.root;
    if(currentNode.data === data) return currentNode;

  }



}

let bst = new BST();
bst.add(50);
bst.add(40);
bst.add(60);













//My practice
class BST{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }


  //add new value to the BST object
  add(value){
    if (value <= this.value){
      if(!this.left) this.left = new BST(value);
      else this.left.add(value);
    }
    if (value > this.value){
      if(!this.right) this.right = new BST(value);
      else this.right.add(value);
    }
  }


  //three contains a searched value
  contains(value){
    if(value === this.value) return true;
    if(value < this.value){
      if(!this.left) return false;
      else return this.left.contains(value);
    }
    else {
      if(!this.right) return false;
      else return this.right.contains(value);
    }
  }


  //Depth first traversal
  dft(logger){
    if(this.left) this.left.dft(logger);
    logger(this.value);
    if(this.right) this.right.dft(logger);
  }


  //Depth first traversal refactoring
  dftR(logger, order){
    if(order === "pre") logger(this.value);
    if(this.left) this.left.dftR(logger, order);
    if(order === "in") logger(this.value, order);
    if(this.right) this.right.dftR(logger, order);
    if(order === "post") logger(this.value);
  }


  //Breadth first search
  bsf(logger){
    let queue = [this];
    while(queue.length > 0){
      let currentNode = queue.shift();
      logger(currentNode.value);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }
}


function log(value){
  console.log(value);
}


var bst = new BST(50);
bst.add(40);
bst.add(60);
bst.add(55);
bst.add(45);
bst.add(65);
bst.add(35);
