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



/*LINEAR7 RUNTIME - O(N): In the worst case scenario, the number of iterations can be as big as the
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

const oNTwoFun = (arr) => {
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

//Create random order array from str
let alphabetStr = 'abcdefghijklmnopqrstuvwxyz';

const randomOrder = (str) => {
  let endArr = [];
  while(str.length > 0){
    let random = Math.floor(Math.random() * str.length);
    endArr.push(str[random]);
    str = str.replace(str[random], '');
  }
  return endArr;
};


//SORTING
let alphabetArr = ["r", "w", "j", "k", "i", "n", "p", "h", "u", "o", "m", "v", "l", "d", "g", "c", "f", "t", "b", "y", "s", "z", "a", "x", "q", "e"];

let quickSort = (arr) => {
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
};

//FINDING THE ELEMENT - LOGARITHMIC
let ordABCArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function binarySearch(arr, item){
  let low = 0;
  let high = arr.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = arr[mid];
    if (element < item) low = mid + 1;
    else if(element > item) high = mid - 1;
    else return mid;
  }

  return -1;
}

binarySearch(ordABCArr, "a");
















//FROM THE UDEMY COURSE

// Constant runtime - Big O Notation:  "O (1)"
function log(array) {
 console.log(array[0]);
 console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Linear runtime - Big O Notation:  "O (n)"
function logAll(array) {
 for (var i = 0; i < array.length; i++) {
   console.log(array[i]);
 }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);


// Exponential runtime - Big O Notation: "O (n^2)"
function addAndLog(array) {
 for (var i = 0; i < array.length; i++) {
   for (var j = 0; j < array.length; j++) {
     console.log(array[i] + array[j]);
   }
 }
}

addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out


// Logarithmic runtime - Big O Notation: O (log n)
function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}









//UBER INTERVIEW PREP VIDEOS https://s3.amazonaws.com/ubercandidateprep/index.html
//Find how performant are the next pieces of code"

//01. Find Min This is O(n)
min = ...
for (int v : array){
  if(min > v) {
    min = v
  }
}




//02. Min and Max (This is O(2n)???)
//According to the lady, this is O(n) because we do not include contstants in big O
min = ...
max = ...
for (int v : array){
  if(min > v){
    min = v
  }
}

for ( int v : array) {
  if (max < v) {
    max = v
  }
}






//03. Nested with two arrays (This is O(n^2)???)
//No, according to the lady, this is O(A * B) because there are two different arrays
//that are looping within each other
for (int a : A) {
  for (int b : B) {
    if(a * b < a + b){
      print(a * b)
    }
  }
}







//04. Nested with A, starting at I (This is O(n^2)???)
for i from 0 to N{
  for j from i to N {
      if i * j < K {
        print(i * j);
      }
  }
}





//05. Max population (O(n^2 2n)????)
/*
You have a list of people with birth and death year. How do you find the highest
population over time?
*/
int last_death = Integer.min

//Step 1: Get last death
for (Person person : people) {
    last_death = max(last_death, person.death)
}


// Step2: increment counter for each year someone is alive
int[] counter = new int[last_death]
for (Person person : people){
  for(int year = person.birth; year < person.death; year++){
    counter[year]++
  }
}


// Step 3: find population peak
int highest_population = 0
for(int year = 0; year < counter.length; year++){
  highest_population = max(highest_population, counter[year])
}


//06. VALIDATE (O(n))
for i from 0 to A.length:
  if validate A([i])
    print(i);


// 07. Recursion (O(logn))
int fib(int n){
  if (n < 0) {
    return 0;
  }
  else if (n <= 1) {
    return 1;
  }
  else {
    return fib(n - 1) + fib(n - 2);
  }
}



//Memoization
int fib(int n, int[], memo){
  if(n < 0){
    return 0;
  }
  else if (n <= 1){
    return 1;
  }
  else if (memo[n] == 0) { /*Not computed yet*/
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }
  return memo[n];
}
