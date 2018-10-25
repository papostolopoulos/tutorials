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
Date - package: 20181004 - 70158297,  notification.intuit.com
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
  {code: 'USD', symbol: '$'}, //United States Dollar
  {code: 'EUR', symbol: '€'}, //European Union Euro
  {code: 'GBP', symbol: '£'}, //United Kingdom Pound

  {code:'ALL', symbol: 'Lek'}, //Albania Lek
  {code: 'AFN', symbol: '؋'}, //Afghanistan Afghani
  {code: 'ARS', symbol: 'AR$'}, //Argentina Peso
  {code: 'AWG', symbol: 'ƒ'}, //Aruba Guilder
  {code: 'AUD', symbol: 'A$'}, //Australia Dollar
  {code: 'AZN', symbol: '₼'}, //Azerbaijan Manat
  {code: 'BSD', symbol: 'B$'}, //Bahamas Dollar
  {code: 'BBD', symbol: 'Bds$'}, //Barbados Dollar
  {code: 'BYN', symbol: 'Br'}, //Belarus Ruble
  {code: 'BZD', symbol: 'BZ$'}, //Belize Dollar
  {code: 'BMD', symbol: '$'}, //Bermuda Dollar
  {code: 'BOB', symbol: '$b'}, //Bolivia Bolíviano
  {code: 'BAM', symbol: 'KM'}, //Bosnia and Herzegovina Convertible Marka
  {code: 'BWP', symbol: 'P'}, //Botswana Pula
  {code: 'BGN', symbol: 'лв'}, //Bulgaria Lev
  {code: 'BRL', symbol: 'R$'}, //Brazil Real
  {code: 'BND', symbol: 'B$'}, //Brunei Darussalam Dollar
  {code: 'KHR', symbol: '៛'}, //Cambodia Riel
  {code: 'CAD', symbol: 'Can$'}, //Canada Dollar
  {code: 'KYD', symbol: 'CI$'}, //Cayman Islands Dollar
  {code: 'CLP', symbol: 'CLP$'}, //Chile Peso
  {code: 'CNY', symbol: 'CN¥'}, //China Yuan Renminbi
  {code: 'COP', symbol: 'COL$'}, //Colombia Peso
  {code: 'CRC', symbol: '₡'}, //Costa Rica Colon
  {code: 'HRK', symbol: 'kn'}, //Croatia Kuna
  {code: 'CUP', symbol: '₱'}, //Cuba Peso
  {code: 'CZK', symbol: 'Kč'}, //Czech Republic Koruna
  {code: 'DKK', symbol: 'kr'}, //Denmark Krone
  {code: 'DOP', symbol: 'RD$'}, //Dominican Republic Peso
  {code: 'XCD', symbol: 'EC$'}, //East Caribbean Dollar
  {code: 'EGP', symbol: 'E£'}, //Egypt Pound
  {code: 'EGP', symbol: 'ج.م'}, //Egypt Pound
  {code: 'SVC', symbol: '₡'}, //El Salvador Colon
  {code: 'FKP', symbol: 'FK£'}, //Falkland Islands (Malvinas) Pound
  {code: 'FJD', symbol: 'FJ$'}, //Fiji Dollar
  {code: 'GHS', symbol: '¢'}, //Ghana Cedi
  {code: 'GIP', symbol: 'GI£'}, //Gibraltar Pound
  {code: 'GTQ', symbol: 'Q'}, //Guatemala Quetzal
  {code: 'GGP', symbol: '£'}, //Guernsey Pound
  {code: 'GYD', symbol: 'G$'}, //Guyana Dollar (or GY$)
  {code: 'HNL', symbol: 'L'}, //Honduras Lempira
  {code: 'HKD', symbol: 'HK$'}, //Hong Kong Dollar
  {code: 'HUF', symbol: 'Ft'}, //Hungary Forint
  {code: 'ISK', symbol: 'kr'}, //Iceland Krona
  {code: 'INR', symbol: '₹'}, //Indian rupee
  {code: 'IDR', symbol: 'Rp'}, //Indonesia Rupiah
  {code: 'IRR', symbol: '﷼'}, //Iran Rial
  {code: 'IMP', symbol: '£'}, //Isle of Man Pound
  {code: 'ILS', symbol: '₪'}, //Israel Shekel
  {code: 'JMD', symbol: 'J$'}, //Jamaica Dollar
  {code: 'JPY', symbol: '¥'}, //Japan Yen
  {code: 'JEP', symbol: '£'}, //Jersey Pound
  {code: 'KZT', symbol: 'лв'}, //Kazakhstan Tenge
  {code: 'KRW', symbol: '₩'}, //Korea (South) Won
  {code: 'KPW', symbol: '₩'}, //Korea (North) Won
  {code: 'KGS', symbol: 'лв'}, //Kyrgyzstan Som
  {code: 'LAK', symbol: '₭'}, //Laos Kip
  {code: 'LBP', symbol: 'ل.ل.‎'}, //Lebanon Pound
  {code: 'LRD', symbol: 'L$'}, //Liberia Dollar - Also LD$
  {code: 'MKD', symbol: 'ден'}, //Macedonia Denar
  {code: 'MYR', symbol: 'RM'}, //Malaysia Ringgit
  {code: 'MUR', symbol: '₨'}, //Mauritius Rupee
  {code: 'MXN', symbol: 'Mex$'}, //Mexico Peso
  {code: 'MNT', symbol: '₮'}, //Mongolia Tughrik
  {code: 'MZN', symbol: 'MT'}, //Mozambique Metical
  {code: 'NAD', symbol: 'N$'}, //Namibia Dollar
  {code: 'NPR', symbol: '₨'}, //Nepal Rupee
  {code: 'ANG', symbol: 'ƒ'}, //Netherlands Antilles Guilder
  {code: 'NZD', symbol: 'NZ$'}, //New Zealand Dollar
  {code: 'NIO', symbol: 'C$'}, //Nicaragua Cordoba
  {code: 'NGN', symbol: '₦'}, //Nigeria Naira
  {code: 'NOK', symbol: 'kr'}, //Norway Krone
  {code: 'OMR', symbol: '﷼'}, //Oman Rial
  {code: 'PKR', symbol: '₨'}, //Pakistan Rupee
  {code: 'PAB', symbol: 'B/.'}, //Panama Balboa
  {code: 'PYG', symbol: 'Gs'}, //Paraguay Guarani
  {code: 'PEN', symbol: 'S/.'}, //Peru Sol
  {code: 'PHP', symbol: '₱'}, //Philippines Piso
  {code: 'PLN', symbol: 'zł'}, //Poland Zloty
  {code: 'QAR', symbol: '﷼'}, //Qatar Riyal
  {code: 'RON', symbol: 'lei'}, //Romania Leu
  {code: 'RUB', symbol: '₽'}, //Russia Ruble
  {code: 'SHP', symbol: '£'}, //Saint Helena Pound
  {code: 'SAR', symbol: '﷼'}, //Saudi Arabia Riyal
  {code: 'RSD', symbol: 'Дин.'}, //Serbia Dinar
  {code: 'SCR', symbol: '₨'}, //Seychelles Rupee
  {code: 'SGD', symbol: 'S$'}, //Singapore Dollar
  {code: 'SBD', symbol: 'SI$'}, //Solomon Islands Dollar
  {code: 'SOS', symbol: 'S'}, //Somalia Shilling
  {code: 'ZAR', symbol: 'R'}, //South Africa Rand
  {code: 'LKR', symbol: '₨'}, //Sri Lanka Rupee
  {code: 'SEK', symbol: 'kr'}, //Sweden Krona
  {code: 'CHF', symbol: 'CHF'}, //Switzerland Franc
  {code: 'SRD', symbol: 'Sr$'}, //Suriname Dollar
  {code: 'SYP', symbol: '£S'}, //Syria Pound
  {code: 'SYP', symbol: 'LS'}, //Syria Pound
  {code: 'TWD', symbol: 'NT$'}, //Taiwan New Dollar
  {code: 'THB', symbol: '฿'}, //Thailand Baht
  {code: 'TTD', symbol: 'TT$'}, //Trinidad and Tobago Dollar
  {code: 'TRY', symbol: '₺'}, //Turkish Lira
  {code: 'TVD', symbol: '$'}, //Tuvalu Dollar
  {code: 'UAH', symbol: '₴'}, //Ukraine Hryvnia
  {code: 'UYU', symbol: '$U'}, //Uruguay Peso
  {code: 'UGX', symbol: 'Ush'}, //Ugandan shilling - might also be 'USh' as per wikipedia
  {code: 'UZS', symbol: 'лв'}, //Uzbekistan Som
  {code: 'VEF', symbol: 'Bs'}, //Venezuela Bolívar
  {code: 'VND', symbol: '₫'}, //Viet Nam Dong
  {code: 'YER', symbol: '﷼'}, //Yemen Rial
  {code: 'ZWD', symbol: 'Z$'} //Zimbabwe Dollar
];
  for (var i = 0; i < currencies.length; i++) {
    if (data.indexOf(currencies[i].symbol) !== -1) return currencies[i].code;
  }

  return "";
}



//Person Name
function transform(data) {
  return data.replace(/Receipt\sfor\s/, "").split("(")[0].trim();
}





function transform(data) {
  var textMatchObj = {
    'keyword1': 'PaymentDue',
    'keyword2': 'PaymentPastDue',
    'keyword3': 'PaymentComplete',
    'keyword4': 'PaymentDeclined',
    'keyword5': 'PaymentAutomaticallyApplied',
    'keyword6': 'PaymentScheduled'
  };

  for(var key in textMatchObj){
    if(data.trim().indexOf(key) !== -1) return textMatchObj[key];
  }
  return "";
}
