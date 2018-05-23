'use strict'
/*
  Notes made out of cut out of magazine
  The objective is to find if the magazineText has enough words to create the
  noteText. If so, then return true, else return false;

  Hash table according to the dude.
  time complexity,
  big O notation:
  how scalable is an algoritm and how much time it takes
*/
function harmlessRansomNote(noteText, magazineText) {

}

harmlessRansomNote("this is a secret note for you from a secret admirer",
`puerto rico is a great place you must hike far from town to find a secret waterfall that
i am an admirer of but note that it is not as hard as it seems this is my advice to you`); // == false
harmlessRansomNote("this is a note for you from a secret admirer",
`puerto rico is a great place you must hike far from town to find a secret waterfall that
i am an admirer of but note that it is not as hard as it seems this is my advice to you`); // == true
