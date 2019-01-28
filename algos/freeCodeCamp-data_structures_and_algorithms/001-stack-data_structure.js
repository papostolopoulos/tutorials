//Stack of books. Last in first out structure.
//functions: push, pop, peek and length
//All the arrays have the functionality of a stack but this section displays
//functionality that was made here. In the example, we are trying to see if a
// word is a palindrome.

var letters = [];
var word = "racecar";
var rword = "";

// put letters for word in Stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
}
else {
  console.log(word + " is not a palindrome");
}




//Function constructor for creating a Stack
var Stack = function() {
  this.count = 0;
  this.storage = {};


  //Add a value to the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //Removes and returns the value at the end of the Stack
  this.pop = function() {
    if (this.count === 0) return undefined;
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };


  //Returns the size of the storage
  this.size = function() {
    return this.count;
  };


  //Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};



var stack1 = new Stack();
stack1.push("M");
stack1.push("a");
stack1.push("l");
stack1.peek(); 
stack1.push("a");
stack1.push("k");
stack1.push("a");
stack1.push("s");

console.log(stack1.storage);
stack1.pop();
