// For the date:
//Userful when the expiring date is in the footer, along with currency information
function transform(data) {
  //---PHASE 1---
  //Regular expression strings and array with all string scenarios
  var regEx1 = new RegExp("valid\\sthrough:?\\s"); //valid through(:)
  var regEx2 = new RegExp("expires:?\\s"); //expires(:)
  var regEx3 = new RegExp("until:?\\s"); //until(:)
  var regEx4 = new RegExp("offer\\sends:?\\s"); //offer ends(:)
  var regExArr = [regEx1, regEx2, regEx3, regEx4];

  var dateRegEx = new RegExp("([\\d\\/]{2,3}){2}([\\d]{2,4})?"); // (N)N/(N)N/(NNNN)
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
    finalStrArr= data.match(el)[0].split(" ")[1].split("/");
     break;
   }
  }



  //---PHASE 4---
  //If $ is in the "data" string, then make mm/yy/yyyy. If € or £ then twist the order of the array elements
  if (data.match(/\$/)) return new Date(finalStrArr[0] + "/" + finalStrArr[1] + "/" + finalStrArr[2] || "1970");
  if (data.match(/[£€]/)) return new Date(finalStrArr[1] + "/" + finalStrArr[0] + "/" + finalStrArr[2] || "1970");
  return "";
}




function transform(data) {
	if(!data) return "";
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]) !== -1) return data.slice(data.indexOf(months[i])).match(/[a-z\s]+\s\d{1,2}\s?(-\s?\d{1,2})?,?(\s\d{4})?/i)[0].replace(/\d{1,2}\s?-/, "") + " 1970";
	}
}
