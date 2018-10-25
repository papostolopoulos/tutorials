// DATE
//Userful when the expiring date is in the footer, along with currency information
function transform(data) {
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
    finalStrArr= data.match(el)[0].split(" ")[1].split(".");
     break;
   }
  }


  //---PHASE 4---
  //If $ is in the "data" string, then make mm/yy/yyyy. If € or £ then twist the order of the array elements
  if (data.match(/\$/)) return new Date(finalStrArr[0] + "/" + finalStrArr[1] + "/" + finalStrArr[2] || "1970");
  if (data.match(/[£€]/)) return new Date(finalStrArr[1] + "/" + finalStrArr[0] + "/" + finalStrArr[2] || "1970");
  return "";
}

//Same like above but with no currency information. Just pulls the valid through mm/dd/yyyy
function transform(data) {
  if (!data) return "";
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
    finalStrArr= data.match(el)[0].split(" ")[1].split(".");
     break;
   }
  }

  if (finalStrArr.length === 0) return null;

  //---PHASE 4---
  //Return a concatenation (this can be expanded based on other information like currency data)
  return new Date(finalStrArr[0] + "/" + finalStrArr[1] + "/" + finalStrArr[2] || "1970");
}

// Useful when month is written in full
function transform(data) {
	if(!data) return "";
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]) !== -1) return data.slice(data.indexOf(months[i])).match(/[a-z\s]+\s\d{1,2}\s?(-\s?\d{1,2})?,?(\s\d{4})?/i)[0].replace(/\d{1,2}\s?-/, "") + " 1970";
	}
}

//Useful when month is written in the format "Jan", "Feb"...
function transform(data) {
	if(!data) return "";
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]) !== -1) return data.slice(data.indexOf(months[i]), data.length-1);
	}
}



// SPECIAL CHARACTERS
//List of unicode characters: https://en.wikipedia.org/wiki/List_of_Unicode_characters
function transform(data) {
  data = data.replace(/[\*©®ǂ†→]/g, "");
  return data || "";
}



//PII REMOVAL
function transform(data) {
	var n=data.get("_footer");
	n=n.toString();
	n= n.replace(/[A-z0-9.%+-_]{2,64}\@[A-z0-9.]{2,64}/g,'');
	return {'_footer': [n]};
}



// PRICE CURRENCY
function transform(data){
  var currencies = [
    {code: 'USD', symbol: '$'}, //United States Dollar
    {code: 'EUR', symbol: '€'}, //European Union Euro
    {code: 'GBP', symbol: '£'}, //United Kingdom Pound
    {code: 'ALL', symbol: 'Lek'}, //Albania Lek
    {code: 'AFN', symbol: '؋'}, //Afghanistan Afghani
    {code: 'ARS', symbol: 'AR$'}, //Argentina Peso
    {code: 'AWG', symbol: 'ƒ'}, //Aruba Guilder
    {code: 'AUD', symbol: 'A$'}, //Australia Dollar
    {code: 'AZN', symbol: '₼'}, //Azerbaijan Manat
    {code: 'BSD', symbol: 'B$'}, //Bahamas Dollar
    {code: 'BBD', symbol: 'Bds$'}, //Barbados Dollar
    {code: 'BYN', symbol: 'Br'}, //Belarus Ruble
    {code: 'BZD', symbol: 'BZ$'}, //Belize Dollar
    {code: 'BMD', symbol: 'BD$'}, //Bermuda Dollar
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
    {code: 'RUB', symbol: '₽'}, //Russia Ruble (руб)
    {code: 'RUB', symbol: 'руб'}, //Russia Ruble (руб)
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



//PAYMENT STATUS
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



//REGEX $OFF
var dollarOff = /\$\d+(\.\d{1,2})?\s([Oo][Ff]{2})/;
var percentOff = /%\s([Oo][Ff]{2})/;
var numberOfPoints = /\d+\s?[Pp][Oo][Ii][Nn][Tt][Ss]/
var downToAmmount = /down\sto\s\$\d{1,}(\.\d{2})?/i;



//REMOVE OR CLEAN COUPONS WITH CRAPPY TEXT AT LINKBASE
function transform(data) {
  //Return empty strings if the following are included since they are not coupons.
  var reg1 = /.*with\sapproved\scredit.*/i;
  var reg2 = /You\sPay\sOnly.*/i;
  var reg3 = /\/month!.*/i;
  var reg4 = /.*fees.*/i;
  var reg5 = /%\sdown/i;
  var reg6 = /all\srights\sreserved/i;
  var reg7 = /please\snote/i;
  var reg8 = /100%/;
  var reg9 = /stocks/i;
  var reg10 = /trade/i;
  var reg11 = /United\sStates/;
  var reg12 = /the\sbest\sdeals/;
  var reg13 = /beauty/i;
  var regExArr = [reg1, reg2, reg3, reg4, reg5, reg6, reg7, reg8, reg9, reg10, reg11, reg12, reg13];

  for (var i = 0; i < regExArr.length; i++) {
    if (data.match(regExArr[i])) return "";
  }



  //Replace uncecessary text
  var rep1 = /Click\sto\sunsubscribe/i;
  var rep2 = /[\*©®ǂ†→]/g;
  var rep3 = /No\sother\sdiscounts\sapply\./;
  var rep4 = /Buy\snow\.?$/;
  var replaceArr = [rep1, rep2, rep3];

  for (var i = 0; i < replaceArr.length; i++) {
    if (data.match(replaceArr[i])) data = data.replace(replaceArr[i], "");
  }



  return data.trim();
}





function transform(data) {

  if (data) {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var regex = /(\s*\d+)\/(\s*\d+)/i;
    var match = regex.exec(data);

    if (match && match[1]) {
      return monthNames[match[1] - 1] + ', ' + match[2];
    }
    else{
      return data;
    }
  }
  return null;
}