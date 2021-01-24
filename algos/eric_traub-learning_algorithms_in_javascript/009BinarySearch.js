/*
Allows us to search a value within a list. It is performant because it runs in
O(logN)
*/

//Recursion factorial
// 4! = 4*3*2*1 = 24

function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}

//With a while loop
function factorial(num){
  let result = 1;
  while(num >1){
    result *= num;
    num --;
  }
  return result;
}


//---------binary search

binarySearch([5,3,8,-2,9,11,-6], 7); //false
binarySearch([5,3,8,-2,9,11,-6], 8); //true

// My solution 1
function binarySearch(numArray, key) {
  return numArray.includes(key);
}


//My solution 2 - Don't forget the length of the aray because otherwise infinite loop
//Don't forget to add the parameter "key" in the recursion
function binarySearch(numArray, key) {
  numArray = numArray.sort((a,b)=>{return a-b;});
  var middleIdx = Math.floor(numArray.length/2);

  if(key === numArray[middleIdx]) return true;
  else if(key < numArray[middleIdx] && numArray.length > 1) return binarySearch(numArray.slice(0, middleIdx), key);
  else if(key > numArray[middleIdx] && numArray.length > 1) return binarySearch(numArray.slice(middleIdx), key);


  return false;
}


//Dude's solution
function binarySearch(numArray, key) {
  numArray = numArray.sort((a,b)=>{return a-b;});
  var middleIdx = Math.floor(numArray.length/2);
  var middleElem = numArray[middleIdx];

  if(key === middleElem) return true;
  else if(key < middleElem && numArray.length > 1) return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  else if(key > middleElem && numArray.length > 1) return binarySearch(numArray.splice(0, middleIdx), key);
  else return false;
}
