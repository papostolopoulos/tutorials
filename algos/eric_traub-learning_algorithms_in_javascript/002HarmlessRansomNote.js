/*
  Notes made out of cut out of magazine
  The objective is to find if the magazineText has enough words to create the
  noteText. If so, then return true, else return false;

  Hash table according to the dude.
  time complexity,
  big O notation:
  how scalable is an algoritm and how much time it takes
*/



// My solution before I saw the video
function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  for(let word of noteArr){
    if (magazineText.indexOf(word) !== -1) {
      magazineText = magazineText.slice(0, magazineText.indexOf(word)) +
      magazineText.slice(magazineText.indexOf(word) + word.length);
    }
    else return false;
  }
  return true;
}

//My solution 2
function harmlessRansomNote(noteText, magazineText){
  let noteArr = noteText.split(" ");
  for (let el of noteArr) {
    if(RegExp(el).test(magazineText)) magazineText.replace(el, "");
    else return false;
  }
  return true;
}

//My solution 3 (combo from dude's solution up to the creation of the object)
function harmlessRansomNote(noteText, magazineText){
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};
  magazineArr.forEach((el) => {
    if(!magazineObj[el]) magazineObj[el] = 1;
    else magazineObj[el] += 1;
  });
  for (let i = 0; i < noteArr.length; i++) {
    let el = noteArr[i];
    if(magazineObj[el] === undefined) return false;
    else{
      magazineObj[el] --;
      if(magazineObj[el] < 0) return false;
    }
  }
  return true;
}

//Solution from dude using a hash table
function harmlessRansomNote(noteText, magazineText){
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");
  let magazineObj = {};
  magazineArr.forEach((el) => {
    if(!magazineObj[el]) magazineObj[el] = 1;
    else magazineObj[el] += 1;
  });

  var noteIsPossible = true;
  noteArr.forEach(word => {
    if(magazineObj[word]){
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    }
    else noteIsPossibe = false;
  });
  return noteIsPossible;
}

harmlessRansomNote("this is a secret note for you from a secret admirer",
`puerto rico is a great place you must hike far from town to find a secret waterfall that
i am an admirer of but note that it is not as hard as it seems this is my advice to you`); // == false
harmlessRansomNote("this is a note to you from a secret admirer",
`puerto rico is a great place you must hike far from town to find a secret waterfall that
i am an admirer of but note that it is not as hard as it seems this is my advice to you`); // == true
