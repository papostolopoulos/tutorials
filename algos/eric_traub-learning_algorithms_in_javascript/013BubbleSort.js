/*
A sorting algorithm takes an array and returns the array sorted.
Checking each number with it's neighbor to the right
*/

function bubbleSort(array) {

}

bubbleSort([5,3,8,2,1,4]);

//My solution 1 - .sort method
function bubbleSort(array) {
  return array.sort((a,b) =>{
    return a - b;
  });
}

//My solution 2 - after I watched the explanation from the dude. The key is
//that the passes for an array are array.length - 1. We do not need to check the
// later elements of the array after each loop because they are the first ones sorted
function bubbleSort(array) {
  var length = array.length - 1;

  while(length > 1){
    for (var i = 0; i < length; i++) {
      if (array[i] > array[i + 1]) {
        var tempVal = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tempVal;
      }
    }
    length --;
  }
  return array;
}




//dude's solution
function bubbleSort(array){
  for (var i = array.length; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      array[i]
    }
  }
}
