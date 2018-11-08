
// Learn ES6 better
// promises and assynchronous calls
// https://www.typingclub.com/sportal/program-3/117.play
// destructuring for es6
// currying javascript
// linked lists and double linked lists, trees
// tail call optimization
// tail recursive non tail recursive


// background image has to go
// Keep the same color scheme
// text should be easy to read in different light
// single colors is better
// the x on top of the other x when you are closing modals342



function transform(data,node,headers){
  if(data){
    var headerUnixTimestamp = headers.get("Date");
    var date = new Date(headerUnixTimestamp * 1000);
     var dateString = date.toISOString();
    if(data.match(/ends\s*tomorrow/i)) return date.addDays(1);
    else if(data.match(/Last\s*Day/i)) return date;
    else if(data.match(/Ends\s\d+\/\d+/i)) return new Date(data.replace(/.*Ends|\,.*/gi,""));
    else if(data.match(/Now\-[a-z]+\.?\,?\s*\d+/i)) return data.replace(/.*Now\-|\.|\,/gi,"");
    else if(data.match(/Now\-\s*\w+\.?\,?\s*\w+\.?\,?\s*\d+/i)) return new Date(data.replace(/.*Now\-\s*|\./gi,"").replace(/^(\w+\,\s)(.*\d+)(\,.*)/,"$2"));
    else if(data.match(/ends\s*\w+/i)) return findNextDate(dateString, data.match(/ends\s*\w+/i).toString().replace(/ends/i,""));
    else return null;
  }
  else return null;
}

function findNextDate(startDateStr, dayOfWeekStr) {
  var startDate = new Date(startDateStr);
  // .getUTCDay() needed here versus .getDay() b/c .getDay() gives the day of the week based on local time, whereas Date objects all use UTC time
  var startDayInt = startDate.getUTCDay();

  var newDayInt = -1;
  //get value of newDayInt
  var dayOfWeek = dayOfWeekStr.toLowerCase().trim();
  var dayOfWeekArray = ['sun','mon','tues','wed','thu','fri','sat'];
  for (var i = 0; i < dayOfWeekArray.length; i++) {
    if (dayOfWeek.startsWith(dayOfWeekArray[i])) {
      newDayInt = i;
      break;
    }
  }
  if (newDayInt == -1) {
    return null;
  }

  var returnDate = new Date(startDateStr);
  if (newDayInt > startDayInt) {
    var numDays = newDayInt - startDayInt;
    returnDate.setDate(returnDate.getDate() + numDays);
  } else {
    var numDays = 7 - (startDayInt - newDayInt);
    returnDate.setDate(returnDate.getDate() + numDays);
  }

  return returnDate;
}










function transform(data) {
  if(!data) return null;


  var removeStrings = [
    /\,\sOut\sof\sStore.*/g,
    /\,\sFinancing.*/g,
    /\,\sExclusions\,/g,
    /Exclusions\,/g,
    /Exclusions\sapply\./g,
    /\,\s*Shop\s*All\s*\w+/g,
    /\,\sJoin\sNow/g,
    /\,\sShop\sNow/g,
    /Terms.*/g,
    /\,\sExclusions\sand\sDetails/g
  ]

  removeStrings.forEach(function(el) {
    data = data.replace(el, "");
  });



  var replaceStrings = [
    {oldStr: /\spercent/g, newStr: "%"},
    {oldStr: /(\$)\s(\d)/, newStr: "$1$2"},
    {oldStr: /\spercent/g, newStr: "%"}
  ]

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  })

 return data.trim();
}
