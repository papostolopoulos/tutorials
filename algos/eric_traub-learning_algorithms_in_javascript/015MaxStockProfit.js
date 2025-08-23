/*
takes an array with the different prices of the stock throughout the day
MaxStockProfit is the max profit we could have made throughout the day.
Find the best price to buy at and the best price to sell at so you can find the
maximum profit
*/

maxStockProfit([32,46,26,38,40,48,42]); //=> 22 (48 - 26)
maxStockProfit([32,46,26,38,40,48,42, 22]); //=> 22 (48 - 26) even though there is a lower value,
//it is not taken under consideration because it is after the max value.
maxStockProfit([48, 44, 32, 22]);

//My solution1
function maxStockProfit(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr.slice(0, arr.indexOf(max)));
  return min === Infinity ? -1 : max - min;
}


//My solution2
function maxStockProfit(arr){
  var max = -Infinity;
  var min = +Infinity;
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
  return min === Infinity ? -1 : max - min;
}



//dude's solution
function maxStockProfit(pricesArr) {
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;

  var changeBuyPrice = true;

  for (var i = 0; i < pricesArr.length; i++) {
    if(changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];
  }

  if (sellPrice < buyPrice) changeBuyPrice = true;
  else {
    var tempProfit = sellPrice - buyPrice;
    if (tempProfit > maxProfit) maxProfit = tempProfit;
    changeBuyPrice = false;
  }

  return maxProfit;
}
