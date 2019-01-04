
// Learn ES6 better
// promises and assynchronous calls
// https://www.typingclub.com/sportal/program-3/117.play
// destructuring for es6
// currying javascript
// linked lists and double linked lists, trees
// tail call optimization
// tail recursive non tail recursive


// Keep the same color scheme
// text should be easy to read in different light
// single colors is better

function transform(data) {
  var compareArr = [
    //{keyword: /FAMILY & FRIENDS/, regex: /Event\sends\s(\d{1,2}\/){2}(\d{2,4})?/i},
    {keyword: /\$\d{1,3}(\.\d{1,2})? CASHBACK/, regex: /Offer\svalid\s(\d{1,2}\/){2}(\d{2,4})?/i},
    {keyword: /†/, regex: /(Offer|Event)\sends\s(\d{1,2}\/){2}(\d{2,4})?/i},
    {keyword: /%\sOFF/i, regex: /Offer\sends\s(\d{1,2}\/){2}(\d{2,4})?/i},
    {keyword: /SHOP\sNOW/, regex: /offers\send\s(\d{1,2}\/){2}(\d{2,4})?/i},
    {keyword: /PRIVATE\sEVENT/, regex: /Event\sends\s(\d{1,2}\/){2}(\d{2,4})?/i}
  ];

  for (var i = 0; i < compareArr.length; i++) {
    var el = compareArr[i];
    if (el.keyword.test(data.split("~~~")[0])) return el.regex.exec(data)[0].replace(/[^(\d{1,2}\/){2}(\d{2,4})]/g,"") || "";
  }

  return "";
}










var str = "Text JOLLY to 73277 & get $10 off your next in-store purchase of $10+ | By texting the code JOLLY, I agree to receive recurring autodialed messages from Sears alerts to my mobile number, and also agree to the program terms and privacy policy at www.shcterms.com/mobile. Message and data rates apply. Text STOP to cancel. Text HELP for info. Consent is not a condition of any purchase. ~~~ PRE-HOLIDAY BLOWOUT EVENT | SHOP ALL DEALS | Event ends 12/23/18.";




function transform(data) {
  return /(Event|Offer|valid)s?\s(ends?|valid|until)\s(\d{1,2}\/){2}(\d{2,4})/.exec(data)[0].replace(/[^(\d{1,2}\/){2}(\d{2,4})]/g,"") || "";
}


function transform(data,node,headers){
  if(/(LAST DAY!|GET IT BY)/.test(data)) {
    var n = headers.get("Date");
    var n1 = new Date(n * 1000);
    var day1 = n1.getDate();
    var mon1 = n1.getMonth();
    var vt = new Date("1970", mon1, day1);
    return vt;
  }


  var stringsArr = [
    /\$\d{1,3}(\.\d{1,2})? CASHBACK/,
    /†/,
    /%\sOFF/,
    /PRIVATE\sEVENT/,
    /FAMILY & FRIENDS/,
    /BLOWOUT/
  ];

  for(var i = 0; i < stringsArr.length; i++){
  	if(stringsArr[i].test(data)){
      console.log(stringsArr[i].exec(data)[0]);
      return /(Event|Offer|valid)s?\s(ends?|valid|until)\s(\d{1,2}\/){2}(\d{2,4})/.exec(data)[0].replace(/[^(\d{1,2}\/){2}(\d{2,4})]/g,"");
    }
  }


  return "";
}
