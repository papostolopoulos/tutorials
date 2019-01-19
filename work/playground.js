
// Learn ES6 better
// promises and assynchronous calls
// https://www.typingclub.com/sportal/program-3/117.play
// destructuring for es6
// currying javascript
// linked lists and double linked lists, trees
// tail call optimization
// tail recursive non tail recursive

function transform(data) {
  if (!data) return "";
  if (data.match(/¹/) && data.indexOf("¹") !== data.lastIndexOf("¹")) {


		//---PHASE 1---
	  //Regular expression strings and array with all string scenarios
	  var regEx1 = new RegExp("valid\\sthrough:?\\s"); //valid through(:)
	  var regEx2 = new RegExp("expires:?\\s"); //expires(:)
	  var regEx3 = new RegExp("until:?\\s"); //until(:)
	  var regEx4 = new RegExp("offer\\sends:?\\s"); //offer ends(:)
	  var regEx5 = new RegExp("valid\\suntil:?\\s"); //valid until(:)
	  var regExArr = [regEx1, regEx2, regEx3, regEx4];

	  var dateRegEx = new RegExp("([\\d\\/?\\.?]{2,3}){2}([\\d]{2,4})?"); // (N)N/(N)N/(NNNN)
	  var flags = "i"; //Can be i, gi, g



	  //---PHASE 2---
	  //Create the new Array -> expirTextArr. Push all the regular expressions inside
	  var expirTextArr = [];
	  for (var i = 0; i < regExArr.length; i++) {
	    expirTextArr.push(new RegExp (regExArr[i].source + dateRegEx.source, flags));
	  }



	  //---PHASE 3---
	  //String where the extracted (N)N/(N)N/(NNNN) is added. Then the string is split to an array.
	  var finalStrArr = "";
	  //loop through all the regular expressions inside the expirTextArr to see if there is a match
	  //If there is a match, then add the (N)N/(N)N/(NNNN) in finalStrArr and split it.
	  for (var i = 0; i < expirTextArr.length; i++) {
	   var el = expirTextArr[i];

	   if (data.match(el)) {
	    finalStrArr= data.match(el)[0].replace(/[A-Za-z]/g,"").trim().split("/");
	     break;
	   }
	  }

	  if (finalStrArr.length === 0) return null;

	  //---PHASE 4---
	  //Return a concatenation (this can be expanded based on other information like currency data)
	  return new Date(finalStrArr[1] + "/" + finalStrArr[0] + "/" + finalStrArr[2] || "1970");

  }

  return null;
}
