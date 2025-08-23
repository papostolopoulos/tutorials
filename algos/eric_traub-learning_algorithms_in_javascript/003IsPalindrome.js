isPalindrome("Race car");
isPalindrome("Madam, I'm Adam");


//My solution 1
function isPalindrom(str){
  return str.replace(/\s\W/g, "").toLowerCase() === str.replace(/\s\W/g, "").toLowerCase().split("").reverse().join("");
}


//My solution 2
function isPalindrome(str){
  var lowerCaseStr = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqustuvwxyz";
  var strArr = [];
  var strArrReverse = [];
  for (var i = 0; i < lowerCaseStr.length; i++) {
    if(alphabet.includes(lowerCaseStr[i])){
      strArrReverse.unshift(lowerCaseStr[i]);
      strArr.push(lowerCaseStr[i]);
    }
  }
  return strArrReverse.join("") === strArr.join("");
}


//Solution from dude
function isPalondrome(string){
  string = string.toLowerCase();
  var charactersArr = str.split("");
  var validCharacters = "abcdefghijklmnopqustuvwxyz".split("");

  charactersArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if(lettersArr.join('') === lettersArr.reverse().join("")) return true;
  else return false;
}
