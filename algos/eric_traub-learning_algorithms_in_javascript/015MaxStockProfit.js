/*
takes an array with the different prices of the stock throughout the day
MaxStockProfit is the max profit we could have made throughout the day.
Find the best price to buy at and the best price to sell at so you can find the
maximum profit
*/

maxStockProfit([32,46,26,38,40,48,42]); //=> 22 (48 - 26)

//My solution1
function maxStockProfit(arr) {
  return Math.max(...arr) - Math.min(...arr.slice(0, arr.indexOf(Math.max(...arr))));
}


//My solution2
function maxStockProfit(arr){
  var max = -Infinity;
  var min = + Infinity;
  var idx = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i];
      idx = i;
    }
  }

  for (var j = 0; j < idx; j++) {
    if(arr[j] < min) min = arr[j];
  }
  return max - min;
}
