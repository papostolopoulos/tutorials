/*------------------------------------------------------------------------------
Date - package: 20180925 - 2423669,  comed.com
// Root xPath: /descendant::p[contains(text(),"AutoPay")]
// accountID xPath: .
// payment Due xPath
// Description xPath:
URL xPath:
Valid through xPath:
*/


//Account ID
var str1 = "Thank you for using My Account at ComEd.com. This is a reminder that your payment for account 6217 in the amount of $83.80 will be deducted through AutoPay from your bank account on 10/01/2018.To stop or modify your AutoPay settings, please log-in to your ComEd.com account.";
var str2 = `Thank you for using My Account at ComEd.com. This is a reminder that your payment for account ending in 7045 in the amount of $106.61 is due on 9/13/2018.

Pay now or schedule a payment by logging in to My Account at ComEd.com.

If the bill has already been paid, thank you for your payment and please disregard this reminder.`;
var str3 = `Thank you for using My Account at ComEd.com. You may view your Bill online for the following account: 4001

Total Amount Due: $52.00
Due Date: 10/15/2018`


function transform(data) {
  //---PHASE 1---
  //Regular expression strings and array with all string scenarios
  var regEx1 = new RegExp("payment\\sfor\\saccount\\s\\d+", "i"); //payment for account + number - auto pay alert
  var regEx2 = new RegExp("account\\sending\\sin\\s\\d+", "i"); // account ending in + number - payment reminder
  var regEx3 = new RegExp("following\\saccount:\\s\\d+", "i"); // following account + number - Bill is ready
  var regExArr = [regEx1, regEx2, regEx3];


  //---PHASE 2---
  //loop through all the regular expressions inside the regExArr to see if there is a match
  //If there is a match, then return the account number.
  for (var i = 0; i < regExArr.length; i++) {
   var el = regExArr[i];

   if (data.match(el)) {
    return data.match(el)[0].match(/\d+/)[0];
   }
  }

  return "";
}



//Payment Due
function transform(data) {
  //---PHASE 1---
  //Regular expression strings and array with all string scenarios
  var regEx1 = new RegExp("your\\sbank\\saccount\\son\\s"); //Your bank account on + date - auto pay alert
  var regEx2 = new RegExp("is\\sdue\\son\\s"); // is due on + date - new payment reminder
  var regEx3 = new RegExp("Due\\sDate:\\s") // Due Date: + date - Bill is ready
  var regExArr = [regEx1, regEx2, regEx3];

  var dateRegEx = new RegExp("([\\d\\/]{2,3}){2}([\\d]{2,4})?"); // (N)N/(N)N/(NNNN)
  var flags = "i"; //Can be i, gi, g


  //---PHASE 2---
  //Create the new Array -> dueTextArr. Push all the regular expressions inside
  var dueTextArr = [];
  for (var i = 0; i < regExArr.length; i++) {
    dueTextArr.push(new RegExp (regExArr[i].source + dateRegEx.source, flags));
  }


  //---PHASE 3---
  //loop through all the regular expressions inside the dueTextArr to see if there is a match
  //If there is a match, then return the (N)N/(N)N/(NNNN).
  for (var i = 0; i < dueTextArr.length; i++) {
   var el = dueTextArr[i];

   if (data.match(el)) {
    return data.match(el)[0].match(dateRegEx)[0];
   }
  }

  return "";
}




//Minimum Payment Due - price
function transform(data) {
	return data.match(/\$[\d]{1,5}(\.[\d]{2})?/)[0].replace(/\$/, "") || "";
}

//Minimum Payment Due - currency
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------










/*------------------------------------------------------------------------------
Date - package:
// Root xPath:
// accountID xPath:
URL xPath:
Valid through xPath:
*/


//Account ID
var str1 =

function transform(data) {
	return data || "";
}

//Payment Due
function functionName() {
  return data || "";
}

//Valid through
function transform(data) {
	return data || "";
}

//Minimum Payment Due - price
function transform(data) {
	return data || "";
}

//Minimum Payment Due - currency
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------
