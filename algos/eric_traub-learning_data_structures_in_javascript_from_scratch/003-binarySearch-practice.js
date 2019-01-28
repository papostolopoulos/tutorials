function BST(value){
  this.value = value;
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
}

var bst = new BST(50);
bst.insert(40);
bst.insert(60);
bst.insert(45);
bst.insert(55);

var result = false;
BST.prototype.contains = function(value) {
  if (value < this.value){
    console.log(value, "is less than", this.value);
    this.left.contains(value);
  }
  else if (value > this.value){
    console.log(value, "is larger than", this.value);
    this.right.contains(value);
  }
  else if (value === this.value){
    console.log(value, "is equal to ", this.value);
    result = true;
  }
  console.log("we are at the bottom of the function", result);
  return result;
}



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
}

bst.contains(55);
bst.contains(32);
