/*Find all of the prime numbers up to a given number*/

sieveOfEratosthenes(20);

function sieveOfEratosthenes(num) {
  let limit = Math.floor(Math.sqrt(num));
  let primes = [];
  for (let i = 0; i <= num; i++) {
    primes.push(true);
  }

  primes[0] = false;
  primes[1] = false;
  console.log(primes);

  for (let j = 2; j < limit; j++) {
    for (var k = 2; k * j < num; k++) {
      primes[k * j] = false;
    }
  }

  let endArr = [];

  primes.forEach((el, idx) => {
    if(el === true) endArr.push(idx);
  });

  return endArr;
}





function sieveOfEratosthenes(num) {
  let limit = Math.floor(Math.sqrt(num));
  let primes = [];
  for (let i = 0; i <= num; i++) {
    primes.push(true);
  }

  primes[0] = false;
  primes[1] = false;
  console.log(primes);

  for (let j = 2; j < limit; j++) {
    for (var k = 2; k * j < num; k++) {
      primes[k * j] = false;
    }
  }

  let endArr = [];

  primes.forEach((el, idx) => {
    if(el === true) endArr.push(idx);
  });

  return endArr;
}
