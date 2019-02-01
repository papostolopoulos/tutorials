//return an object from an array that has the mean meadian and mode

var someArr = [1,2,3,4,5,6,7,8,9,10];

//My solution 1
function getMean(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
}

function getMedian(arr) {
  arr.sort((a,b)=> { a - b; });
  if(arr.length % 2 === 0) return getMean([arr[arr.length / 2], arr[(arr.length / 2) - 1]]);
  else return arr[Math.floor(arr.length / 2)];
}

function getMode(arr){
  var someObj = {}, result, counter = 0;

  for (var i = 0; i < arr.length; i++) {
    !someObj[arr[i]] ? someObj[arr[i]] = 1 : someObj[arr[i]] += 1;
  }

  for(let key in someObj){
    if(someObj[key] > counter) {
      counter = someObj[key];
      result = key;
    }
  }
  return Number(result);
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}
