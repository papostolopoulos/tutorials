/*A numbers array and a number are the parameters
It should return an array with array pairs that gives the sum

*/

twoSum([1,6,4,5,3,3], 7); //[[6,1], [3,4], [3,4]]


//My solution 1 O(n^2)
function twoSum(numArray, sum) {
  let resultArr = [];
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if(numArray[i] + numArray[j] === sum) resultArr.push([numArray[i], numArray[j]]);
    }
  }
  return resultArr;
}


//Dude's solution O(n)
function twoSum(numArray, sum) {
  var pairs = [];
  var hashTable = [];
  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i];
    var counterpart = sum - currNum;
    if(hashTable.indexOf(counterpart) !== -1){
      pairs.push([currNum, counterpart]);
    }
    hashTable.push(currNum);
  }

  return pairs;
}
