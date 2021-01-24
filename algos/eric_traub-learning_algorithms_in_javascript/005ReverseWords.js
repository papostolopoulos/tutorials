/*
Takes a string and reverses every word and returns new string
*/

reverseWords("Hello, I am Paris"); // ,olleH I ma siraP

//My solution 1
function reverseWords(str){
  var splitStr = str.split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].split("").reverse().join("");
  }
  return splitStr.join(" ");
}


//My solution 2 - Without the .reverse() method - O(n^2)
function reverseWords(str) {
  let splitArr = str.split(" ");
  let endArr = [];
  for (let i = 0; i < splitArr.length; i++) {
    let newEl = "";
    for (let j = splitArr[i].length -1; j >= 0; j--) {
      newEl += splitArr[i][j];
    }
    endArr.push(newEl);
  }
  return endArr.join(" ");
}


//Solution from the dude
function reverseWords(string) {
  var wordsArr = string.split(" ");
  var reversedWordsArr = [];

  wordsArr.forEach(word => {
    var reversedWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });
  return reversedWordsArr.join(" ");
}
