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
  let result = 1;
  while (num > 1) {
    result *= num;
    num --;
  }
  return result;
}

//Create a constructor for binary search therefore
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  var newBST = new BST(value)
  if (value <= this.value){
    var nextLeft = this.left;
    if (nextLeft === null) {
      nextLeft = new BST(value);
    }
    else {
      
    }
  }
  else this.right = value;
}

function Node(value) {

}
