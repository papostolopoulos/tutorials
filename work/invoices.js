/*------------------------------------------------------------------------------
Date - package: 20180925 - 2423669,  comed.com
// Root xPath: /descendant::p[contains(text(),"My Account") and not (contains(text(),"Did you know"))]
|
/descendant::p//following-sibling::text()[contains(.,"account")]
// accountID xPath: .
// payment Due xPath: concat(., " ", ./following::p[contains(text(),"Due")])
//payment status
//URL: ./descendant::a[contains(.,'View') or contains(.,'Payment') or contains(.,"view your Bill online")]/@href
//broker
*/



var str1 = "Thank you for using My Account at ComEd.com. This is a reminder that your payment for account 6217 in the amount of $83.80 will be deducted through AutoPay from your bank account on 10/01/2018.To stop or modify your AutoPay settings, please log-in to your ComEd.com account.";
var str2 = `Thank you for using My Account at ComEd.com. This is a reminder that your payment for account ending in 7045 in the amount of $106.61 is due on 9/13/2018.

Pay now or schedule a payment by logging in to My Account at ComEd.com.

If the bill has already been paid, thank you for your payment and please disregard this reminder.`;
var str3 = `Thank you for using My Account at ComEd.com. You may view your Bill online for the following account: 4001

Total Amount Due: $52.00
Due Date: 10/15/2018`;
var str4 = `Your Budget Bill was reviewed for account: 7029 and your current Budget Bill will change to $102.00 effective with your next bill.

Your monthly Budget Bill payment will be reviewed every six months to keep the payment in line with your actual energy usage.

You will automatically be removed from the Budget Billing program if you have two consecutive late payments or have three late payments within 12 months.`;


//ACCOUNT ID
function transform(data) {
  //---PHASE 1---
  //Regular expression strings and array with all string scenarios
  var regEx1 = new RegExp("payment\\sfor\\s+account\\s\\d+", "i"); //payment for account + number - auto pay alert
  var regEx2 = new RegExp("account\\sending\\sin\\s\\d+", "i"); // account ending in + number - payment reminder
  var regEx3 = new RegExp("following\\saccount:\\s\\d+", "i"); // following account + number - Bill is ready
  var regEx4 = new RegExp("for\\saccount:\\s\\d+"); //for account + number - Budget Billing review
  var regExArr = [regEx1, regEx2, regEx3, regEx4];


  //---PHASE 2---
  //loop through all the regular expressions inside the regExArr to see if there is a match
  //If there is a match, then return the account number.
  for (var i = 0; i < regExArr.length; i++) {
   var el = regExArr[i];
   if (data.match(el)) return data.match(el)[0].match(/\d+/)[0];
  }

  return "";
}




//PAYMENT DUE
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



//PAYMENT STATUS
//Resource: https://docs.google.com/presentation/d/1Wh_Kq5aIHsvK5-dau0usVaFc2uiS7NmIEP35uoc0U4k/edit#slide=id.g42c6a9ebf6_0_1
function transform(data) {
  var textMatchObj = {
    "Bill Is Ready": "PaymentDue",
    "Payment Reminder": "PaymentDue",
    "Auto Pay Reminder": "PaymentScheduled"
  };

  for(var key in textMatchObj){
    if(key === data.trim()) return textMatchObj[key];
  }
}



//TOTAL PAYMENT DUE
function transform (data){
	if (data.match(/\$/)) return 'USD';
  	if (data.match(/\£/)) return 'GBP';
    if (data.match(/\€/)) return 'EUR';
	if (data.match(/Rs/)) return 'IND';
  	else return null;
}

//PERSON NAME
function transform (data){
  return data.match(/Hello\s[a-z&\s]+/i)[0].replace(/Hello\s/i, "").trim() || "";
}


//Minimum Payment Due - price
function transform(data) {
	return data.match(/\$[\d]+(\.[\d]{2})?/)[0].replace(/\$/, "") || "";
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

//PAYMENT STATUS
//Resource: https://docs.google.com/presentation/d/1Wh_Kq5aIHsvK5-dau0usVaFc2uiS7NmIEP35uoc0U4k/edit#slide=id.g42c6a9ebf6_0_1
function transform(data) {
  var textMatchObj = {
    PaymentDue: "Bill Is Ready",
    PaymentPastDue: "",
    PaymentComplete: "",
    PaymentDeclined: "",
    PaymentAutomaticallyApplied: "",
    PaymentScheduled: ""
  };

  for(var key in textMatchObj){
    if(textMatchObj[key] === data.trim()) return key;
  }

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

//Payment STATUS
function transform(data) {
  var textMatchObj = {
    "billing threshold": "PaymentAutomaticallyApplied",
    "Remaining ad costs": "PaymentComplete",
    "Ads costs since your last bill.": "PaymentComplete",
    "This is your monthly bill.": "PaymentAutomaticallyApplied",
    "You made this manual payment.": "PaymentComplete",
    "A manual payment was made on this account.": "PaymentComplete",
    "Your previous payment for these ad costs failed.": "PaymentComplete",
    "No reason available.": "PaymentComplete"
  };

  for(var key in textMatchObj){
    if(data.trim().indexOf(key) !== -1) return textMatchObj[key];
  }
  return "";
}



//Provide organization name
function transform(data){
  var regex1 = new RegExp("Facebook,?\\sInc\\.");
  var regex2 = new RegExp("Facebook,?\\sIreland\\sLtd\\.");
  var companyOfficialArr = [regex1, regex2];

  for (var i = 0; i < companyOfficialArr.length; i++) {
    if(data.match(companyOfficialArr[i])) return data.match(/Facebook/)[0];
  }

  return "";
}




//total Payment Due / Price specification / Price currency
function transform(data){
  var currencies = [
    {name: "EGP", symbol: "ج.م"},
    {name: "EUR", symbol: "€"},
    {name: "GBP", symbol: "£"},
    {name: "IDR", symbol: "Rp"},
    {name: "IND", symbol: "Rs"},
    {name: "INR", symbol: "₹"},
    {name: "MYR", symbol: "RM"},
    {name: "NOK", symbol: "kr"},
    {name: "PEN", symbol: "S/"},
    {name: "PHP", symbol: "₱"},
    {name: "PLN", symbol: "zł"},
    {name: "QAR", symbol: "ر.ق"},
    {name: "RON", symbol: "lei"},
    {name: "THB", symbol: "฿"},
    {name: "TRY", symbol: "TL"},
    {name: "USD", symbol: "$"},
    {name: "UGX", symbol: "Ush"}, //might also be "USh" as per wikipedia
    {name: "VND", symbol: "₫"}
  ];

  for (var i = 0; i < currencies.length; i++) {
    if (data.indexOf(currencies[i].symbol) !== -1) return currencies[i].name;
  }

  return "";
}



//Person Name
function transform(data) {
  return data.replace(/Receipt\sfor\s/, "").split("(")[0].trim();
}
