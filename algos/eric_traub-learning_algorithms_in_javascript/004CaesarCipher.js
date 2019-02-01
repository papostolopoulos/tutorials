/*Takes two parameters, string number. Objective is to shift every letter by the
number that it is entered as a second parameter. For example,
string: "abcd"
number: 2 - a becomes c (to places forward, etc)
returned string: cdef;
*/

caesarCipher("Zoo Keeper", 2);
caesarCipher("Big Car", 166);

//My solution 1 Methods used: charCodeAt fromCharCode
//Method not correct because it iterates through the UTF-16 characters and not
//just alphaget characters. Still pretty cool as a compact code.
function caesarCipher(str, num) {
  let endStr = "";
  for (let i = 0; i < str.length; i++) {
    endStr += String.fromCharCode(str[i].charCodeAt() + num);
  }
  return endStr;
}

// My solution 2
function caesarCipher(str, num) {
  var abc = "abcdefghijklmnopqrstuvwxyz";
  var lowerCaseStr = str.toLowerCase();
  var endStr = "";

  for (var i = 0; i < lowerCaseStr.length; i++) {
    if (abc.indexOf(lowerCaseStr[i]) === -1) {
      endStr += lowerCaseStr[i];
      continue;
    }

    var idx = abc.indexOf(lowerCaseStr[i]) + num;
    if(idx > abc.length) idx = idx % abc.length;
    if(idx < 0) idx = abc.length + idx;

    str[i] === str[i].toLowerCase() ? endStr += abc[idx] : endStr += abc[idx].toUpperCase();

  }

  return endStr;
}


//Solution from the dude
function caesarCipher(str, num){
  num = num % 26;
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var lowerCaseString = str.toLowerCase();
  var newStr = "";

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if(currentLetter === " "){
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if(str[i] === str[i].toUpperCase()) newString += alphabet[newIndex].toUpperCase();
    else newString += alphabet[newIndex];
  }
  return newStr;
}
