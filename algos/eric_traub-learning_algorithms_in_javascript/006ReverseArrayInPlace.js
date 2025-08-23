//Takes an array, it reverses it and returns a reversed array
//The dude wants to manipulate the array itself and not pass a new array
//He does not want to use the reverse method

reverseArrayInPlace(["Hello", "my", "name", "is", "Paris"]);
//["Paris", "is", "name", "my", "Hello"]

//Solution 1 - the easy way
function reverseArrayInPlace(arr){
  return arr.reverse();
}

//Solution 2 - no reverse, no other array
function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr[arr.length - 1]);
    arr.pop();
  }
  return arr;
}

//Solution 3 - no reverse, other array
function reverseArrayInPlace(arr) {
  var finalArr = [];
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    finalArr.push(arr.pop());
  }
  return finalArr;
}

//Solution 4 - Unshift, other array
function reverseArrayInPlace(arr) {
  var finalArr = [];
  for (var i = 0; i < arr.length; i++) {
    finalArr.unshift(arr[i]);
  }
  return finalArr;
}


//From dude
function reverseARrayInPlace(arr){
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = tempVar;
  }
  return arr;
}
