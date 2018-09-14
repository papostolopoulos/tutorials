// 20180906 - WORK 1

var str1 = `

25% off Select Backpacks, The North Face Apparel & MUCH More!

		`, //YES WITH RULE 1
str2 = "FREE SHIPPING ON YOUR PURCHASE OF $25 OR MORE* | Online only. Exclusions apply. See website for details.", //yes with rule 3
str3 = "STARTING AT $34.98 SELECT MEN'S OR WOMEN'S ADIDAS TIRO PANTS | Reg. 45.00-50.00 | YOUTH STARTING AT $29.98 | Reg. 40.00 | Valid through 9/7/18. | SHOP NOW", //yes with rule 4
str4 = "IN-STORE AND ONLINE | 25% OFF SELECT BACKPACKS | Exclusions apply. Reg. 9.99-70.00 | SHOP NOW", //yes with rule 2
str5 = "SALE $24.98 - MEN'S OR WOMEN'S REEBOK 24/7 JERSEY COLLECTION | Reg. 30.00-35.00",//yes with rule 5
str6 = "$49.98 OR LESS - SELECT FOOTWEAR FOR THE WHOLE FAMILY | Was 49.99-69.99", //yes with rule 6
str7 = "TODAY ONLY! $20 OFF YOUR FOOTWEAR PURCHASE OF $100 OR MORE** | Online only. Exclusions apply. Valid through 9/2/11:59PM ET. | SHOP NOW", //yes with rule 7
str8 = "25% OFF SELECT MEN'S OR WOMEN'S THE NORTH FACE APPAREL | Select styles and colors | Reg. 25.00-149.00", //YES WITH RULE 1
str9 = "UP TO 30% OFF SELECT PATAGONIA APPAREL | Reg. 35.00-299.99 | SHOP NOW", //YES WITH RULE 1
str10 = "HUGE LABOR DAY DEALS | UP TO 50% OFF | SHOP ALL DEALS";

// My way
function transform(data) {
  var regEx1 = new RegExp("^([a-z\\s]+)?[0-9]{2}%\\s[\\w\\s,'&]+", "gi"),
      regEx2 = new RegExp("\\|\\s[0-9]{2}%[a-z\\s]+", "gi"),
      regEx3 = new RegExp("(.*)?free[a-z\\s0-9\\$]+", "gi"),
      regEx4 = new RegExp("^starting\\sat\\s\\$[0-9\\.\\sa-z']+", "gi"),
      regEx5 = new RegExp("^sale.*\\|", "gi"),
      regEx6 = new RegExp(".*?or\\sless.*\\|", "gi"),
      regEx7 = new RegExp("(.*)?\\$[0-9]+\\soff\\s[a-z\\s\\$0-9]+", "gi"),
      regEx8 = new RegExp("[a-z\\s]+\\|[\\sa-z0-9%]+", "gi"),
      regExArr = [regEx1, regEx2, regEx3, regEx4, regEx5, regEx6, regEx7, regEx8],
      matchedStr = "";

  for (var i = 0; i < regExArr.length; i++) {
    if (data.match(regExArr[i])){
      matchedStr += data.match(regExArr[i])[0].replace(/[\|\*]/g, "").trim().replace(/\s\s/, ". ") + ".";
      var matchedArr = matchedStr.split(" ");

      var result = matchedArr.map((el) => el.slice(0,1) + el.slice(1).toLowerCase());
      return result.join(" ");
    }
  }

return "";
}

// For Scarlett
function transform(data) {
  //Creating the RegExp rules and the array of the Regular expressions
  var regEx1 = new RegExp("^([a-z\\s]+)?[0-9]{2}%\\s[\\w\\s,'&]+", "gi"),
      regEx2 = new RegExp("\\|\\s[0-9]{2}%[a-z\\s]+", "gi"),
      regEx3 = new RegExp("(.*)?free[a-z\\s0-9\\$]+", "gi"),
      regEx4 = new RegExp("^starting\\sat\\s\\$[0-9\\.\\sa-z']+", "gi"),
      regEx5 = new RegExp("^sale.*\\|", "gi"),
      regEx6 = new RegExp(".*?or\\sless.*\\|", "gi"),
      regEx7 = new RegExp("(.*)?\\$[0-9]+\\soff\\s[a-z\\s\\$0-9]+", "gi"),
      regEx8 = new RegExp("[a-z\\s]+\\|[\\sa-z0-9%]+", "gi"),
      regExArr = [regEx1, regEx2, regEx3, regEx4, regEx5, regEx6, regEx7, regEx8],
      matchedStr = "";

  //Loop through the Regular Expresssions array. If a condition is true, in the if statement, then
  //the data variable will be manipulated for the final result. Nothing else will need to run.
  for (var i = 0; i < regExArr.length; i++) {

    if (data.match(regExArr[i])){
      matchedStr += data.match(regExArr[i])[0].replace(/[\|\*]/g, "").trim().replace(/\s\s/, ". ") + ".";

      //Running map method to lowercase all the words in the array but keep the first letter into uppercase
      var result = matchedStr.split(" ").map(function(el) {
        return el.slice(0,1) + el.slice(1).toLowerCase();
      });
      return result.join(" ");
    }

  }

return "";
}

//DATE MANIPULATION
var str1 = "FREE SHIPPING ON YOUR PURCHASE OF $25 OR MORE* | Online only. Exclusions apply. See website for details.",
str2 = "STARTING AT $34.98 SELECT MEN'S OR WOMEN'S ADIDAS TIRO PANTS | Reg. 45.00-50.00 | YOUTH STARTING AT $29.98 | Reg. 40.00 | Valid through 9/7/18. | SHOP NOW",
str3 = "IN-STORE AND ONLINE | 25% OFF SELECT BACKPACKS | Exclusions apply. Reg. 9.99-70.00 | SHOP NOW",
str4 = "SALE $24.98 - MEN'S OR WOMEN'S REEBOK 24/7 JERSEY COLLECTION | Reg. 30.00-35.00",
str5 = "$49.98 OR LESS - SELECT FOOTWEAR FOR THE WHOLE FAMILY | Was 49.99-69.99",
str6 = "TODAY ONLY! $20 OFF YOUR FOOTWEAR PURCHASE OF $100 OR MORE** | Online only. Exclusions apply. Valid through 9/2/11:59PM ET. | SHOP NOW",
str7 = "25% OFF SELECT MEN'S OR WOMEN'S THE NORTH FACE APPAREL | Select styles and colors | Reg. 25.00-149.00",
str8 = "UP TO 30% OFF SELECT PATAGONIA APPAREL | Reg. 35.00-299.99 | SHOP NOW",
str9 = "HUGE LABOR DAY DEALS | UP TO 50% OFF | SHOP ALL DEALS",
str10 = "25% off Select Backpacks, The North Face Apparel & MUCH More!";

function transform(data){
  if(data.includes("Valid through")){
    var dateArr = data.match(/Valid\sthrough\s[0-9]{1,2}\/[0-9]{1,2}/);
    if (dateArr.length > 0) return dateArr[0].slice("Valid through ".length) + "/1970";
  }
  return "";
}

function transform(data){
  if(data.includes("Valid through")){
    var date = new Date(data.match(/Valid\sthrough\s[0-9]{1,2}\/[0-9]{1,2}/)[0].slice("Valid through ".length) + "/2018");
    return date;
  }
  return "";
}

function transform(data) {
  if (data.match(/Valid\sthrough/)) {
    return data.match(/Valid\sthrough\s[0-9]{1,2}\/[0-9]{1,2}/)[0].slice("Valid through ".length) + "/2018";
  }
  return "";
}




//20180906 - Work 2
var str = `*Limited time offer: $20 Off + Free Delivery Offer: Minimum $49 purchase required. Enter Promo Code: TWENTY at online checkout. SERVICE FEE MAY APPLY. Order by 9/30/18. OFFER VALID ONLY FOR 1ST TIME ONLINE GROCERY ORDERS. LIMIT 1 PER HOUSEHOLD. May not be combined with any other free or reduced delivery fee or service fee offer, discount or promotion. Service by albertsons.com available only in select areas and may be provided by another Albertsons Companies banner store, which is subject to that store’s availability, pricing and promotions. Instacart may independently provide shopping services. Enter your zip code online to find if service from albertsons.com and/or Instacart is available in your location. Service by Instacart is subject to the terms and conditions of Instacart, and requires Instacart account. Same day delivery subject to availability. All delivery orders require a minimum purchase, unless otherwise noted. Minimum purchases calculated based on subtotal of all eligible items in cart at checkout. Prices for products you order for delivery through the online grocery ordering service generally are higher than the prices for such products in Albertsons physical stores and may vary depending on fulfillment method chosen. Online promotions, discounts and offers may differ from those in Albertsons physical stores. We reserve the right to modify or cancel this offer and/or to correct typographical, pictorial and other ad or pricing errors. Find additional terms at albertsons.com/ShopStores/Terms-of-Use.page. Instacart terms at delivery.albertsons.com/terms. You've received this email because our records indicate you supplied an email address when you created an account for one of our programs, contacted us via our website or signed-up via our website, mobile app or sweepstakes to receive email. Emails are sent from the albertsons@email.safeway.com domain. Please add albertsons@email.safeway.com to your address book and safe sender list. Unsubscribe from our email list. Change or manage your email preferences. Read our Privacy Policy. Read our Policy for Website Accessibility. Copyright © 2018 by Albertsons Companies, LLC. All rights reserved. Contact us at 250 E. Parkcenter Blvd, Boise, ID, 83706.`;

//Description
function transform(data){
  if(data.match(/\$[\d]+\sOff[\s\+a-z]+/)){
    return data.match(/\$[\d]+\sOff[\s\+a-z]+/i)[0];
  }
  return "";
}

//Valid sthrough
function transform(data){
  return data.match(/Order\sby/) ?
  data.match(/Order\sby\s[\d\/]+/)[0].slice("Order by ".length) :
  "";
}




//20180907 - Work 9
var str = "Earn up to 25% off Base Rates Plus 1,000 Points²";

//Description
function transform(data){
  return data.match(/\%/) ? data.match(/[a-z\s0-9]+%[a-z\s0-9,]+/i)[0].trim() : "";
}



//20180907 - Work 11
var str1 = "Buy here, use there, save at the pump! Download your coupon to earn 4X fuel points on Gift Cards, August 31-September 3.**",
str2 = "50¢ OFF Eggo®Waffles",
str3 = "Get 15% OFF and FREE shipping on your first order with promo codeSHIP15. Choose from a wide selection of snacks, beverages, paper products and more!",
str4 = "You’ll get $68 OFF your izhm online order with digital exsexf!",
str5 = "Save $2 on New Cook-in-Bag Meats";

//Description
function transform(data) {
  //Creating the RegExp rules and the array of the Regular expressions
  var regEx1 = new RegExp("download\\syour\\scoupon[a-z\\s0-9]+", "gi"),
      regEx2 = new RegExp("[\\d]+¢[a-z\\s]+®[a-z]+", "gi"),
      regEx3 = new RegExp("get\\s[\\d\\$\\%]+\\soff\\s[\\w\\s]+", "gi"),
      regEx4 = new RegExp("[\\w\\s\\$-]+", "gi"),
      regExArr = [regEx1, regEx2, regEx3, regEx4],
      matchedStr = "";

  //Loop through the Regular Expresssions array. If a condition is true, in the if statement, then
  //the data variable will be manipulated for the final result. Nothing else will need to run.
  for (var i = 0; i < regExArr.length; i++) {

    if (data.match(regExArr[i])){
      matchedStr += data.match(regExArr[i])[0].replace(/[\|\*]/g, "").trim() + ".";

      return matchedStr.charAt(0).toUpperCase() + matchedStr.slice(1);
    }
  }

return "";
}




//20180910 - Work 12
//description
var str1 = "Get250 Cashback on your Dining Transactions";

function transform(data){
  if (data) {
    var splitStr = data.split(" ");

    //Itterating through the array. if element text contains both numbers and letters
    //but no space, then split and ad " $"
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr[i].match(/[a-z]+[\d]+/i)) {
        splitStr[i] = splitStr[i].match(/[a-z]+/i) + " $" + splitStr[i].match(/[\d]+/);
      }
    }
    return splitStr.join(" ");
  }
  return "";
}



//20180910 - 52643954
var str1 = "SHIP ORDERS FAST & FREE | Frequent shoppers save $180* a year with FREE 2-day shipping from Shop Your Way MAX®. | START FREE TODAY | *Based on 2015 data",
str2 = "VIP MEMBERS GET MORE | Every purchase can get you closer to exclusive offers. Silver members can earn an extra $300* annually. | LEARN MORE | *Based on annual VIP purchases made by VIPs by level",
str3 = "MAKE HOTEL BOOKING EASY | Get up to $100 CASHBACK in points per night with Shop Your Way® Hotels.";

function transform(data) {
  return data.match(/[a-z\s]+\$[\d]+\*?[\w\s-®]+\./gi) ? data.match(/[a-z\s]+\$[\d]+\*?[\w\s-®]+\./gi)[0].trim() : "";
}




//20180911 - 59220812
var str1 = "Save up to 25% on home updates.*›",
str2 = "48-hour flash sale: Save 30% on rugs.* Online only. Ends Sunday. ›",
str3 = "$20 gift card on Owlet Smart Sock 2 monitor* ›",
str4 = "$30 gift card on Ergobaby 360 carrier* ›",
str5 = "Up to $30 gift card on select Motorola monitors* ›",
str6 = "Stock up & save. Spend $50, save $10 on Halloween costumes & decor.* Ends Sunday. Online only. ›",
str7 = "Save up to 30% during our patio sale & clearance.* ›",
str8 = "Spend $40, save $5 on next-day delivery with Target Restock.Use your REDcard™ to get free shipping.";


//Description
function transform(data) {
  var reg1 = new RegExp("\\*", "g");
  var reg2 = new RegExp("›", "g");
  var cleanRegexArr = [reg1, reg2];

// Run Regular expressions and replace them with empty string.
  cleanRegexArr.forEach(function(el) {
    if (data.match(el)) data = data.replace(el, "").trim();
  });

// Check if there are no spaces between a full stop and two characters. Put a space after the full stop
  while (data.match(/\w\.\w/)) {
    data = data.slice(0, data.indexOf(data.match(/\w\.\w/)[0]) + 2) + " " + data.slice(data.indexOf(data.match(/\w\.\w/)[0]) + 2);
  }

  return data || "";
}


//Valid through
function transform(data,node,headers){
  if(data.match(/Online\sonly\.\sEnds/i)) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (var i = 0; i < days.length; i++) {
      if (data.indexOf(days[i]) !== -1) {
        var endDay = days.indexOf(days[i]); //3

        var headersDateStr = headers.get("Date");
        var headersDate = new Date(headersDateStr * 1000);
        var beginningDay = headersDate.getDay(); //2
        var daysDifference = endDay - beginningDay;
         var day1 = headersDate.getDate() + daysDifference;
         var mon1 = headersDate.getMonth();
         var vt = new Date("1970",mon1,day1);
        return vt;
      }
    }
  }
  else return "";
}



//20180911 - 77013036
// Root xPath: /descendant::a[contains(text(),"Free shipping")]
//Description Concatenation: concat(., " hahaha ", ./following-sibling::a)


//Description
function transform(data) {
  return data ? data.replace(/→/g, "").trim() + "." : "";
}

// 20180912 - 74605015 - dealnews.com
// Root xPath: /descendant::a[contains(.,"MORE")] - Simple TD[contains(.,"free")] would select the whole page so I had to go around it
// Description: ./parent::td/parent::tr/preceding-sibling::tr/td[contains(.,"free") or contains(.,"%")]
// URL: ./parent::td/parent::tr/preceding-sibling::tr/descendant::td[contains(.,"free")]/parent::tr/following-sibling::tr/td/a/@href


/descendant::span[@class = "price"]




// 20180912 -  75957758 ,  beauty.sephora.com
// Root xPath: /descendant::img[contains(@alt,"%")]
// Description: ./@alt
// URL xPath: ./parent::a/@href




// 20180912 - 77151989,  email.landsend.com
// Root xPath: /descendant::strong[contains(text(),"%")]
// Description:
// URL xPath:


// Valid through - It did not like the .slice() method so I did a split
var str = "Receive 50% off one (1) full-price item online, in-store or by phone (excludes buy more and save pricing, monogramming, gift boxing, gift cards, shipping, taxes, duties, Lands' End Business Outfitters purchases, and excluded items as marked). Promotions and products may vary in-store. Prices as marked in-store. Excludes clearance in-store. Discount will be applied at checkout. This offer has no cash value. Promotional savings may be deducted from returns. 5-7 business day delivery to most addresses. Offer valid through 11:59 p.m. Central, September 12, 2018.";


function transform(data) {
  data = data.match(/valid\sthrough[\w\s:]+p\.m\.[\w\s,]+\./gi)[0].split(",");
  var result = data[1] + " " + data[2];
  return result || "";
}


// 20180912 - 76077240,  gaylordhotels.com
// Root xPath: /descendant::strong[contains(text(),"%")]
// Description: concat(./preceding-sibling::span, " ", .)
// URL xPath:


//Description
function transform(data){
	var regEx1 = new RegExp("\\*.*");
	var regEx2 = new RegExp("for\\sa\\slimited\\stime", "gi");
	var cleanRegexArr = [regEx1, regEx2];

	cleanRegexArr.forEach(function(el) {
		data = data.replace(el, "");
	});

  return data + "." || "";
}

function transform(data){
  return data.replace(/\*.*/, ".") || "";
}






// 20180912 - 77083759,  emailinfo.bestbuy.com
// Root xPath: /descendant::a[contains(.,"gift card")]  | /descendant::a[contains(.,"%")] | /descendant::a[contains(.,"sale")]
// Description: .
// URL xPath:


var str1 = "Plus, get up to $200* in Best Buy® gift cards with qualifying purchase.",
str2 = "Limited time only: 15% back in rewards*on select Samsung 4K UHD smart TVs with your My Best Buy® Credit Card",
str3 = "Save up to 30%* onselect small appliances",
str3 = "Create your own packageSave 10%* with two or more Samsung appliances totaling $2,000 or more";

function transform(data){
	var regEx1 = new RegExp("\\*");
	var regEx2 = new RegExp("limited\\stime\\sonly:\\s", "gi");
	var regEx3 = new RegExp("Plus\\s", "g");
	var cleanRegexArr = [regEx1, regEx2, regEx3];

	cleanRegexArr.forEach(function(el) {
		data = data.replace(el, "");
	});

	data = data.replace("rewardson", "rewards on").replace("onselect", "on select");

  return data.slice(0,1).toUpperCase() + data.slice(1) + "." || "";
}







// 20180912 - 74733317,  e.krogermail.com
// Root xPath: /descendant::td[contains(text(),"%")] | /descendant::td[contains(text(),"Save")] | /descendant::a[contains(.,"%")]
// Description: .
// URL xPath: ./parent::tr/following-sibling::tr/descendant::td/descendant::a/@href | ./@href

// Description
function transform(data){
  return data.replace(/[\w\s]+!\s/i, "").replace(/\s–[\s\w,]+/gi, "") || "";
}

// Valid through
function transform(data){
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var throughDays = days.map(function (el) {
		return "through " + el;
	});

	for (var i = 0; i < throughDays.length; i++) {
		if (data.match(throughDays[i])) {
			data = data.slice(data.indexOf(days[i]), data.length - 1) + " " + new Date().getFullYear();
      return data;
		}
	}

	return "";
}




// 20180912 - 69768531,  caferouge.fbmta.com
// Root xPath: /descendant::a/descendant::img[contains(@alt,"Kids")] |
// /descendant::a/descendant::img[contains(@alt,"off") and not (contains(@alt, "offers"))] |
// /descendant::p[contains(text(),"%") or contains(text(),"free")] |
// /descendant::a/descendant::img[contains(@alt,"Free")]
// Description: ./@alt | .
var str1 = "25 off",
str2 = "Plus enjoy 25% off Food this week!",
str3 = "Plus enjoy 25% off Starters, Mains and Desserts!",
str4 = "Free Fizz",
str5 = "PLUS, exclusive free fizz."

function transform(data) {
	data = data.replace(/plus,?\s/i, "");
	return (data[data.length-1] === "." || data[data.length-1] === "!"
	? data.slice(0,1).toUpperCase() + data.slice(1)
	: data.slice(0,1) + data.slice(1) + ".") || "";
}

// URL xPath:



/*------------------------------------------------------------------------------
Date - package: 2018/09/13 - 76779963,  halloweenexpress.com
// Root xPath: /descendant::img[contains(@alt,"%")]
// Description: ./ancestor::table/preceding-sibling::table/descendant::p[contains(.,"%")]
URL xPath: ./parent::a/@href
*/


//Description
var str1 = "It's time to get scary! Now through Friday take an additional 20% OFF, Site-Wide, No Minimum when you enter promo code 9M57FY5JG6 at checkout. Plus, you'll receive FREE SHIPPING too when you spend $75 or more.",
str2 = "EXTENDED! Our BEST DEAL of the season. Now through Wednesday we're offering 25% OFF, Site-Wide, No Minimum when you enter promo code Skeletons25 at checkout. Plus, you'll receive FREE SHIPPING too when you spend $75 or more.";

function transform(data) {
	var regEx1 = new RegExp("[0-9]+%\\soff[,\\w\\s-]+,\\sno\\sminimum", "gi");
	var regEx2 = new RegExp("promo\\scode\\s[\\w]+", "gi");
	var regEx3 = new RegExp("free\\sshipping[\\s\\w\\$]+", "gi");
	var regExArr = [regEx1, regEx2, regEx3];
	var finalArr = [];

	regExArr.forEach(function(el) {
		finalArr.push(data.match(el)[0].charAt(0).toUpperCase() + data.match(el)[0].slice(1));
	});


	return finalArr.join(". ").trim() || "";
}

//Valid through
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------


function transform(data) {
	var regEx1 = new RegExp("[0-9]+%\\soff[,\\w\\s-]+,\\sno\\sminimum", "gi");
	var regEx2 = new RegExp("promo\\scode\\s[\\w]+", "gi");
	var regEx3 = new RegExp("free\\sshipping[\\s\\w\\$]+", "gi");
	var regExArr = [regEx1, regEx2, regEx3];
	var finalText = "";

	regExArr.forEach(function(el) {
      finalText += data.match(el)[0].charAt(0).toUpperCase() + data.match(el)[0].slice(1) + ". ";
	});

	return finalText.trim() || "";
}

function transform(data) {
	var regEx1 = new RegExp("[0-9]+%\\soff[,\\w\\s-]+,\\sno\\sminimum", "gi");
	var regEx2 = new RegExp("promo\\scode\\s[\\w]+", "gi");
	var regEx3 = new RegExp("free\\sshipping[\\s\\w\\$]+", "gi");
	var regExArr = [regEx1, regEx2, regEx3];
	var finalText = ""

	for (var i = 0; i < regExArr.length; i++) {
		finalText += data.match(regExArr[i])[0].charAt(0).toUpperCase() + data.match(el)[0].slice(1) + ". ";
	}

	return finalText.trim() || "";
}















/*------------------------------------------------------------------------------
Date - package:
// Root xPath:
// Description:
URL xPath:
*/


//Description
var str1 =

function transform(data) {
	return data || "";
}

//Valid through
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------
