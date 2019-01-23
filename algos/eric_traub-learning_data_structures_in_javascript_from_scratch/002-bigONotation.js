/*
Wnat: Big O Notation is an expression that identifies the time an angorithm takes
to run.
When: Bio O notation is useful to evaluate different types of functions or coding
structures and see what their performance is. In some cases, we want to measure the
time it takes for an application to run, versus the space it takes in memory.

Types of Os (Order)
- CONSTANT TIME - O(1): regardless of the size of the data, there is a requirement for returning only
ONE constant number of iterations.

Example:*/
let oOneArr = [1,2,3,5,6,7];

const oOneFun = arr => arr[arr.length - 1];
oOneFun(oOneArr);



/*LINEAR TIME - O(N): In the worst case scenario, the number of iterations can be as big as the
size of the data.
Example:
*/
let oNArr = [5,4,3,2,1,0,9,8,7];

const oNFun = (arr, param) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === param) return i;
  }
  return -1;
}

oNFun(oNArr, 5); //Best case scenario, only one iteration
oNFun(oNArr, 7); //worst case scenario, iterations as many as the length of the array
oNFun(oNArr, 15); //worst case scenario, iterations as many as the length of the array



/*Quadratic-Time algorithm O(N 2) — Order N squared. For this case, the worst scenario
is the square of the inputs. Example:
*/
let oNTwoArr = ["a", "b", "c"];

const oNTwoFun1 = (arr) => {
  let endArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      endArr.push(arr[i]+arr[j]);
    }
  }
  return endArr;
}


/*
Logarithmic-Time Algorithm
O(log n) — “Order log N” - These are effective processes because insead of looking
through all the data, they cut the data each time in half and re-evaluate until
they find the seeked component.
*/

let sortArr = ['q','a','z','w','s','x','e','d','c','r'];

const quickSort = (arr) => {
  let left = [];
  let right = [];
  if (arr.length < 2) return arr;
  let startEl = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (startEl > arr[i]){
      left.push(arr[i]);
    }
    else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), startEl, ...quickSort(right)];
}
