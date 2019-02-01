/*Find all of the prime numbers up to a given number*/

sieveOfEratosthenes(20);

function sieveOfEratosthenes(num) {
  var limit = Math.floor(Math.sqrt(num));
  var arr = [];
  for (var i = 0; i <= num; i++) {
    arr.push(true);
  }

  for (var i = 0; i < limit; i++) {
    if(limit <= 1)
    arr[i] = false;
    
  }
}
