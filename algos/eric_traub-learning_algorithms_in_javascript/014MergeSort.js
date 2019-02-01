/*
Two sorted arrays. Left array is sorted and the right array is sorted.
How can we merge and sort these two arrays?
*/

mergeSort([3,4,8,20], [1,2,12,17]);

// My solution 1 - Incomplete
function mergeSort(arr1, arr2) {
  let endArr = [];
  while(arr1.length > 0 && arr2.length > 0){
    if (arr1[0] < arr2[0]) endArr.push(arr1.shift());
    else endArr.push(arr2.shift());
  }
  arr1.length ? endArr.push(arr1.shift()) : endArr.push(arr2.shift());
  return endArr;
}


//My solution 2 - spread operator and .sort method
function mergeSort(arr1, arr2) {
  return [...arr1, ...arr2].sort((a,b) =>{
    return a - b;
  });
}






//dude
function mergeSort(arr){
  if (arr.length < 2) return arr;

  var middleIndex = Math.floor(arr.length/2);
  var firstHalf = arr.slice(0, middleIndex);
  var secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2){
  var result = [];
  while(arr1.length && arr2.length){
    var minElem;
    if(arr1[0] < arr2[0]) minElem = arr1.shift();
    else minElem = arr2.shift();
    result.push(minElem);
  }

  if(arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);

  return result;
}
