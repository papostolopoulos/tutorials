/*
A sequence of numbers. The first two is 1, 1 and the next one is the sum of the
two previous others*/

fibonacci(4); //Result: 3 (it is the fourth number in the fibunacci sequance);
fibonacci(9); //Result: 34 (it is the 9th number in the fibonacci sequence);


// My solution 1 (better because it is O(n))
function fibonacci(position){
  var resultArr = [0, 1];
  while(position > 2){
    resultArr.push(resultArr[0] + resultArr[1]);
    resultArr.shift();
    position --;
  }
  return resultArr[0] + resultArr[1];
}


//My solution 2
function fibonacci(position) {
  return position <= 2 ? 1 : fibonacci(position - 2) + fibonacci(position - 1);
}

/*
Why is my solution better:
The runtime in my solution is O(n) while the solution 2 which is the usual solution,
is O(2^n)
For example, if you run fibonacci(99); with the declaration of solution 1, the
result will come back without any problems. If you run it with solution 2, the
selenium will get stuck because too many functions will be invoked on top of each
other on the stack.
*/
