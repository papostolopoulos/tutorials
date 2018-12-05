
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


function transform(data) {
  var stringRegex = /offer\sends\s((\d{1,2}\/){2}([\d]{2,4})?)/i;
  if (data.indexOf("†") !== data.lastIndexOf("†") && data.indexOf("†") !== -1) {
    return stringRegex.exec(data)[0].replace(stringRegex, "$1");
  }

  return "";
}


function transform(data,node,headers){
  var offerEnds = /offer\sends\s((\d{1,2}\/){2}([\d]{2,4})?)/i;
  if (data.indexOf("†") !== data.lastIndexOf("†") && data.indexOf("†") !== -1) {
    return offerEnds.exec(data)[0].replace(offerEnds, "$1");
  }



  var todayToDay = /PM\sCT\sTODAY\s-\s\d{1,2}\sCT\s(.*)\s\|/
  if(todayToDay.exec(data)) {
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var emailDate = new Date(headers.Date * 1000);
    var emailDay = emailDate.getDay();
    var expirDay = daysOfWeek.indexOf(todayToDay.exec(data)[0].replace(todayToDay, "$1"));
    var addedDays = expirDay > emailDay ? expirDay - emailDay : expirDay + 7 - emailDay;

    var finalDay = emailDate.getDate() + addedDays;
    var month = emailDate.getMonth();

    return new Date("1970", month, finalDay);
  }
  return "";
}
