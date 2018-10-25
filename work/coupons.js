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
        var daysDifference = endDay > beginningDay ? endDay - beginningDay : (endDat + 7) - beginningDay;
         var day1 = headersDate.getDate() + daysDifference;
         var mon1 = headersDate.getMonth();
         var result = new Date("1970",mon1,day1);
        return result;
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




// 20180912 -  75957758,  beauty.sephora.com
// Root xPath: /descendant::img[contains(@alt,"%")]
// Description: concat(./@alt, ". ", ./ancestor::table/following-sibling::table/descendant::span[contains(text(),"rewards")])
// URL xPath: ./parent::a/@href
//Valid through: ./@alt[contains(.,"%")]/ancestor::table/descendant::div[contains(.,"valid")]

var str = "*Enter promotion code LUXELIP in the promotion code box at checkout to receive your choice of one trial size, free with any online merchandise purchase of $35 or more. Valid while supplies last; quantities are limited. Not valid in Canada, on previous purchases, purchases of gift cards, FLASH, PLAY! by Sephora, gift wrapping, packaging, taxes, or shipping & handling charges. Offer not available in retail stores, Sephora inside JCPenney stores, or on jcp.com. Cannot be used in conjunction with other promotion codes. This offer is subject to change, alteration, or termination by Sephora at its sole discretion at any time.",
 str2 = "Pineapple of My Eye Collectors Set, $77 ($454 value) >",
 str3 = "Life of the Party Clay Blush Palette & Clutch, $56 ($173 value)4 >",
 str4 = "Let’s Fla-mingle Brush Set, $57 ($179 value)4 >";
//Description

function transform(data){
  if(data.match(/Enter\spromotion\scode\s.*\sor\smore\./)) return data.match(/Enter\spromotion\scode\s.*\sor\smore\./)[0];
  if(data[data.length-1] === ">") data = data.slice(0, data.length-1).trim().replace(/\)4/,")");

  return data || "";
}


//Valid through
var str = `* Offer valid for Rouge members on merchandise purchases made from 12:01am PT on 8/24/18 through 11:59pm PT on 9/3/18 and for both VIB and Insider members from 12:01am PT on 8/30/18 through 11:59pm PT on 9/3/18 in Sephora US stores, Sephora Canada stores, Sephora inside JCPenney stores, and online. Offer not valid on jcp.com. Online offer valid for one-time use only; in-store offer may be redeemed multiple times. Not valid on purchases of customizable sets online or through Sephora’s customer service. Clients are limited to the purchase of three Drunk Elephant items per SKU per transaction and three Tatcha items per SKU per transaction. Not valid on Dyson, previous purchases, purchases of gift cards, FLASH, PLAY! by Sephora, gift wrapping, packaging, taxes, or shipping & handling charges. Return of discounted merchandise will be for the price actually paid. Sephora is not responsible for damaged, lost, or stolen promotion codes or barcodes. Promotion offer has no cash value and may not be altered, sold, or transferred. Relevant Beauty Insider status must be attained prior to redemption. No minimum purchase required. Due to heavy demand, Sephora FLASH delivery times cannot be guaranteed for this promotion. Not valid on orders shipping outside the US or Canada. Cannot be used in conjunction with other promotion codes. Sephora and JCPenney employees are not eligible for this offer. Offer is subject to change, alteration, or termination by Sephora at its sole discretion at any time.** 100 or 250 point rewards are available in Sephora stores and online with a purchase. 100 and 250 point rewards will vary at Sephora and Sephora inside JCPenney stores. Rewards Bazaar offers are for a limited time, while supplies last, and provided on a first-come, first-served basis. Quantities of each reward are limited and the quantities listed above reflect only the starting inventory amount, not a live balance. Must be a registered Beauty Insider to redeem. Beauty Insider members may only redeem one of each reward per transaction and must have the sufficient number of BI points available at time of redemption. Points will be deducted at time of redemption. Rewards are non-transferable, have no cash value (unless required by law) and cannot be exchanged, sold or returned. Sephora is not responsible for lost, stolen or damaged rewards. Sephora and Sephora brands are not responsible for any taxes incurred by clients or guests. Some rewards may only be available to residents of a particular country (e.g., U.S. only or Canada only). Not available in retail stores. Rewards are subject to change, alteration, substitution, or termination by Sephora in its sole discretion at any time. See specific Rewards Bazaar offers for any additional terms and conditions.*** Available online and in stores while supplies last. Quantities of each reward are limited; sample substitutions may occur. Limit of one per client. Offers are valid with 500 Beauty Insider points in stores and online with a purchase. Non-transferable. Must be a registered Beauty Insider to redeem offer. Reward is not available in Sephora inside JCPenney stores. Offer not valid on jcp.com. No returns or exchanges.`;
var str2 = `**Beauty Insider members will earn triple points on qualified fragrance purchases from 12:01am PT 9/28/18 through 11:59pm PT 9/28/18 online only. Offer not valid on jcp.com. Bonus points will be automatically credited to your Beauty Insider account within 24 hours after purchase. Not valid on purchases of customizable sets online or through Sephora’s customer service. Points not earned on previous purchases, purchases of gift cards, FLASH, PLAY! by Sephora, gift wrapping, packaging, taxes, or shipping & handling charges. Points have no cash value and may not be altered, sold, or transferred. Merchandise return will result in deduction of awarded points. No minimum purchase required. Due to heavy demand, Sephora FLASH delivery times cannot be guaranteed for this promotion. Not valid on orders shipping outside the US or Canada. Cannot be used in conjunction with other promotion codes. Offer is subject to change, alteration, or termination by Sephora at its discretion at any time.`

function transform(data){
	return data.match(/\sthrough\s11:59pm\sPT\s(on\s)?(\d{1,2}\s?\/){2}\d{0,4}/)[0].match(/(\d{1,2}\s?\/){2}\d{0,4}/)[0] || "";
}



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
Date - package: 20180917 - 75422609,  pizzaranch.fbmta.com
// Root xPath: /descendant::font[contains(.,"Off")
or contains(.,"$")
and not (contains(.,"restrictions"))]
// Description: concat(./preceding-sibling::font, ", ", . ,".") --Concatenation for getting all strings wanted
// URL xPath:
*/


//Description
var str1 = "Single Topping Large Pizza, Only $8.99ORDERNOW.",
str2 = "10 Pc Chicken & 8 Potato Wedges, Only $15.99ORDERNOW.",
str3 = "Regular Priced Adult Buffet, $1.00 Off.";

function transform(data){
  return data ? data.replace("ORDER NOW", "") : "";
}

//Valid through
var str1 = "Valid only at the Sibley Pizza Ranch location. Limit of 4. Some restrictions may apply. Additional $2.00 charge for stuffed crust. Extra cheese is an additional charge. Prices subject to change without notice. Not valid with any other offer or with Gluten Free Crust. Delivery where available and charges may apply. Code: 52592 Expires: 9/30/18",
str2 = "Valid only at the Sibley Pizza Ranch location. Limit of 4. Some restrictions may apply. Additional $2.00 charge for stuffed crust. Extra cheese is an additional charge. Prices subject to change without notice. Not valid with any other offer or with Gluten Free Crust. Delivery where available and charges may apply. Code: 52592 Expires: 9/30/18",
str3 = "Limit of 2. Some restrictions may apply. Not valid in combination with any other discounts or offerings including Senior and Military discount. Void if posted on a third party website. Price is subject to change without notice. Only valid at the Sibley Pizza Ranch location. Code: 9269 Expires: 9/30/18";

function transform(data) {
	return data.match(/Expires:\s[\d\/]+/)[0].replace("Expires: ", "") || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180918 - 77470900,  macaronigrill.fbmta.com
// Root xPath:
// Description:
URL xPath:
*/


//Description
var str1 = `Dine-in Terms: Receive $10 off your purchase of $30 or more. Valid 9/14/18-9/16/18. To redeem, please print this page or display on your mobile phone and receive $10 off your food and non-alcoholic beverage purchase of $30 or more. Valid on dine-in or carry-out. Coupon required. One coupon valid per party, per table. Not valid on Happy Hour or Catering section menu items. Not valid with any other offers or discounts. Coupon has no cash value, may be used one time only and applied to one check only. Alcoholic beverages not included. Valid at participating locations. Not valid in Hawaii, Puerto Rico, airport or international locations. Taxes and gratuity not included.`,
str2 = `Order Online Terms: Receive $10 off your online purchase of $30 or more. Valid 9/14/18-9/16/18. To redeem, use code TENOFF at checkout when ordering online at www.macaronigrill.com to receive $10 off your online, to-go order purchase of $30 or more. Not valid on Happy Hour or Catering section menu items. Coupon code required. One coupon code valid per online order. Not valid with any other offers or discounts. Coupon has no cash value. Only valid at participating locations. Not valid in Hawaii, Puerto Rico, airport or international locations. Taxes and gratuity not included. Coupon code TENOFF.`;

function transform(data) {
	return data.match(/Terms:\s[\w\s\$]+/i)[0].replace("Terms:", "").trim() + "." || "";
}

//Valid through
function transform(data) {
	if(!data) return "";
	data = data.match(/Valid\s[\d\/]+-[\d\/]+/)[0];
	return data.slice(data.indexOf("-") + 1);
}
//------------------------------------------------------------------------------



 /*------------------------------------------------------------------------------
 Date - package: 20180918 - 77458114,  houlihans.fbmta.com
 // Root xPath: /descendant::b[contains(.,"$")]
 // Description: .
 URL xPath: /descendant::a[contains(.,"Click here")]/@href
 Valid through xPath: /descendant::font[contains(text(),"Offer expires")]
 */


 //Description
 var str1 =

 function transform(data) {
 	return data || "";
 }

 //Valid through
 var str = "Offer expires 9/18/2018. Valid for Dine in and To Go"
 function transform(data) {
 	return data.match(/Offer\sexpires\s[\d\/]+/i)[0].replace("Offer expires ", "") || "";
 }
 //------------------------------------------------------------------------------



/*------------------------------------------------------------------------------
Date - package: 20180918 - 9804122,  bdsmongolianbarbeque.fbmta.com
// Root xPath: /descendant::img[contains(@alt,"%")]
// Description xPath: ./@alt
URL xPath: ./parent::a/@href
Valid through xPath: /descendant::font[contains(text(),"Offer expires")]
*/


//Description
var str1 = "bd's would like to honor our police and firefighters all September long with 20% off your bill (excludes alcohol). Thank you for all you do!";

function transform(data) {
	if(!data) return "";
	data = data.replace("bd's would like to honor", "We honor");
	return data.match(/[\w\s]+%[\w\s]+/)[0].trim() + ".";
}

//Valid through
var str = "Offer expires 9/30/2018. Tax and gratuity not included. No cash value. Cannot be combined with any other offer. Any alterations to this certificate will make it non-redeemable. Only valid at this location. Does not include alcohol. Valid ID required.";
function transform(data) {
 return data.match(/Offer\sexpires\s[\d\/]+/i)[0].replace("Offer expires ", "") || "";
}
//------------------------------------------------------------------------------



/*------------------------------------------------------------------------------
Date - package: 20180918 - 74391137,  millersalehouse.fbmta.com
// Root xPath: /descendant::img[contains(@alt,"%")]
|
/descendant::span[contains(text(),"$")]
// Description xPath: ./@alt | .
URL xPath: ./parent::a/@href
|
/descendant::a[contains(.,"View Specials")]/@href
Valid through xPath:
*/


//Description
var str1 = `House Rules: Teachers get an A+ for good taste...AND 10% OFF This Thursday 6-8PM for Teacher Appreciation Day (Sponsored by Revolution Brewery) | Teachers, bring this coupon to Miller's Ale House locations in North Riverside or Lombard on Thursday, August 23 (6-8PM) for 10% OFF Your Food Purchase * *Good for ten (10) percent off food purchase for all teachers presenting teacher ID or proof of school employment. Coupon is non-transferable. Must present this coupon to receive offer. One coupon per table, per visit. One time use only. Dine-in only. Not valid in conjunction with any other coupon, promotion or discount. Good only on 8/23/18 (6-8PM) and at the Lombard and North Riverside locations. | CODE: 875893729583659832358 | Miller's Ale House`,
str2 = "Laura, how can you top off your Tuesday? Head to our House for a perfectly-grilled $8.99 sirloin + $1.00 for your choice of one of our three NEW toppings. Feeling tangy? Go for the Western. Feeling saucy? Go for the Southern. Feeling savory? Go for the N'Orleans.";

function transform(data) {
	if(!data) return "";
	if (data.indexOf(":") !== -1) return data.match(/:[\w\s\.+]+%\sOFF[\w\s-]+/i)[0].replace(":", "").trim() + ".";
	if (data.indexOf("?") !== -1) return data.match(/\?[\w\s\$\.+-]+\./)[0].replace("?","").trim();
}

//Valid through
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180918 - 66750925,  kerswinghouse.fbmta.com
// Root xPath: /descendant::span[contains(text(),"$")]
// Description xPath: .
URL xPath:
Valid through xPath:
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




 /*------------------------------------------------------------------------------
 Date - package: 20180918 - 77505840, 77929487  email.landsend.com
 // Root xPath: /descendant::a[contains(.,"%")]
 // Description xPath: .
 URL xPath: ./@href
 Valid through xPath: /descendant::span[contains(text(),"valid through") or contains(text(),"Valid through")]
 */


 //Description
 var str1 = "Take 40% off full-price styles + free shipping over $50.";

 function transform(data) {
 	return data || "";
 }

 //Valid through
 var str= "Receive 30% off full-price styles online, in-store or by phone (excludes buy more and save pricing, monogramming, gift boxing, gift cards, shipping, taxes, duties, Lands' End Business Outfitters purchases, and excluded items as marked). Promotions and products may vary in-store. Prices as marked in-store. Excludes clearance in-store. Discount will be applied at checkout. This offer has no cash value. Promotional savings may be deducted from returns. 5-7 business day delivery to most addresses. Offer valid through 11:59 p.m. Central, September 17, 2018. Not valid on previous purchases or when combined with any other promotional offers.";


 function transform(data) {
   data = data.match(/valid\sthrough[\w\s:]+p\.m\.[\w\s,]+\./gi)[0].split(",");
   var result = data[1] + " " + data[2];
   return result || "";
 }
 //------------------------------------------------------------------------------




 /*------------------------------------------------------------------------------
 Date - package: 20180918 - 77253188, email-totalwine.com
 // Root xPath: /descendant::p[contains(.,"%")]
 // Description xPath: .
 URL xPath: /descendant::a[contains(.,"Web")]/@href (not mine, already there)
 Valid through xPath:
 */


 //Description
 var str1 =

 function transform(data){
   return data.match(/.*:/)[0].replace(":",".") || "";
 }

 //Valid through
 function transform(data) {
 	return data || "";
 }
 //------------------------------------------------------------------------------




 /*------------------------------------------------------------------------------
 Date - package: 20180918 - 77464192, email-totalwine.com
 // Root xPath: /descendant::strong[contains(.,"%")]
 // Description xPath: .
 URL xPath: /descendant::img[contains(@alt,"Shop Limited Time Specials!") or contains(@alt,"Download your savings now!")]/parent::a/@href
 Valid through xPath: /descendant::td[contains(text(),"valid through")]
 */


 //Description
 var str1 =

 function transform(data){
	 return data + "." || "";
 }

 //Valid through
 function transform(data) {
   return data.match(/valid\sthrough\s[\d\/]+/i)[0].replace("valid through", "").trim() || "";
 }
 //------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180918 - 77253186, email-totalwine.com
// Root xPath: /descendant::strong[contains(.,"%") or contains(.,"$")]
// Description xPath: .
URL xPath: /descendant::a[contains(text(),"Shop Now")]/@href
Valid through xPath: /descendant::td[contains(text(),"valid through")] -  Not used on this one
*/


//Description
var str1 =

function transform(data){
	//Creating an array with all the distinction marks that might be at the end of the text
  var marksArr = [":", "?", ".", ";"];

	//Ternary operator to clean up the text from the last character and add a full stop
  return marksArr.indexOf[data[data.length-1]] !== -1 ?
  				data.slice(0, data.length-1) + "." :
  		 		data + "." || "";
}


//Valid through
function transform(data) {
	return data.match(/valid\sthrough\s[\d\/]+/i)[0].replace(/[a-z\s]+/i, "").trim() || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180918 - 77253183, email-totalwine.com
// Root xPath: /descendant::strong[contains(.,"%")]
// Description xPath: .
URL xPath: /descendant::a[contains(text(),"Shop Now")]/@href
Valid through xPath: /descendant::td[contains(text(),"valid through")]
*/


//Description
var str1 =

function transform(data){
	//Creating an array with all the distinction marks that might be at the end of the text
  var marksArr = [":", "?", ".", ";"];

	//Ternary operator to clean up the text from the last character and add a full stop
  return marksArr.indexOf[data[data.length-1]] !== -1 ?
  				data.slice(0, data.length-1) + "." :
  		 		data + "." || "";
}

//Valid through
function transform(data) {
	return data.match(/valid\sthrough\s[\d\/]+/i)[0].replace("valid through", "").trim() || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180918 - 77460244, 77460251, 77460253, 77505835 email.landsend.com
// Root xPath: /descendant::a[contains(.,"%")] OR /descendant::a[contains(.,"%")] | /descendant::a[contains(.,"FREE SHIPPING")]
URL xPath: ./@href OR ./@href | /descendant::a[contains(.,"%")]/@href
Valid through xPath: /descendant::span[contains(text(),"valid through") or contains(text(),"Valid through")]
*/


//Description
var str1 =

function transform(data) {
 return data || "";
}

//Valid through
var str= "Receive 30% off full-price styles online, in-store or by phone (excludes buy more and save pricing, monogramming, gift boxing, gift cards, shipping, taxes, duties, Lands' End Business Outfitters purchases, and excluded items as marked). Promotions and products may vary in-store. Prices as marked in-store. Excludes clearance in-store. Discount will be applied at checkout. This offer has no cash value. Promotional savings may be deducted from returns. 5-7 business day delivery to most addresses. Offer valid through 11:59 p.m. Central, September 17, 2018. Not valid on previous purchases or when combined with any other promotional offers.";

function transform(data) {
	data = data.match(/valid\sthrough[\w\s:]+p\.m\.[\w\s,]+\./gi)[0].split(",");
	var result = data[1] + " " + data[2];
	return result || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 2018/09/20 - 71012595 pfchangs.fbmta.com
// Root xPath: /descendant::strong[contains(text(),"FREE") or contains(text(), "free")]
|
/descendant::img[contains(@alt,"free")]
// Description xPath: ./@alt | .
URL xPath: /descendant::a[contains(text(),"MAKE A RESERVATION")]/@href
Valid through xPath: /descendant::span[contains(text(),"Valid")]
*/


//Description
var str1 = "FREE SUSHI DAY RETURNS 9/20",
str2 = "Photo: image of sushi. FREE SUSHI DAY IS BACK - Last year we hand-rolled and hand-sliced over 90,000 sushi rolls on Free Sushi Day. This year we’re hoping to hit 100,000, and we need your help to break that record! Dine-in on Thursday, 9/20 and use the barcode below to treat yourself (and everyone dining with you!) to one free Spicy Tuna or California Roll per person on us, no purchase necessary.* Which roll will you choose?",
str3 = "JUST FOR YOU: FREE ENTRÉE WITH ENTRÉE PURCHASE"

function transform(data){
  if(data.match(/FREE\s[A-ZÉ\s]+/)) return data.match(/FREE\s[A-ZÉ\s]+/)[0].trim();
  return "";
}

//Valid through
function transform(data) {
	return data.match(/([\d]{1,2}\/){2}[\d]{2,4}/) || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 2018/09/20 77720406,  texasdebrazil.fbmta.com
// Root xPath: /descendant::strong[contains(text(),"FREE") or contains(text(), "free")]
|
/descendant::img[contains(@alt,"free")]
// Description xPath: ./@alt | .
URL xPath: /descendant::a[contains(text(),"MAKE A RESERVATION")]/@href
Valid through xPath: /descendant::span[contains(text(),"Valid")]
*/


//Description
var str1 = "FREE SUSHI DAY RETURNS 9/20",
str2 = "Photo: image of sushi. FREE SUSHI DAY IS BACK - Last year we hand-rolled and hand-sliced over 90,000 sushi rolls on Free Sushi Day. This year we’re hoping to hit 100,000, and we need your help to break that record! Dine-in on Thursday, 9/20 and use the barcode below to treat yourself (and everyone dining with you!) to one free Spicy Tuna or California Roll per person on us, no purchase necessary.* Which roll will you choose?",
str3 = "JUST FOR YOU: FREE ENTRÉE WITH ENTRÉE PURCHASE"

function transform(data){
  if(data.match(/FREE\s[A-ZÉ\s]+/)) return data.match(/FREE\s[A-ZÉ\s]+/)[0].trim();
  return "";
}

//Valid through
function transform(data) {
	return data.match(/([\d]{1,2}\/){2}[\d]{2,4}/) || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 2018/09/20 - 66191939,  roysrestaurant.fbmta.com
// Root xPath: /descendant::strong[contains(text(),"$")]
// Description xPath: concat(./preceding::text(), ". ", .)
URL xPath: /descendant::img[contains(@alt,"RESERVE") or contains(@alt,"Reserve")]/parent::a/@href
Valid through xPath: /descendant::text()[contains(.,"valid through")]
*/

//Description
function transform(data){
}

//Valid through
var str = "*Offer available now through October 31, 2018 in the main dining room and bar at participating locations only. Price varies in San Francisco. Cannot be combined with any other offers or promotions. Roy's abides by all local and state liquor laws.";

function transform(data) {
	if(!data) return "";
	var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

	//Iterate through the months. If the month is included in "data" then:
	//1. slice the string where the month is at
	//2. return the match() of the string as month + days + year
	for (var i = 0; i < months.length; i++) {
		var el = months[i];
		if (data.toLowerCase().indexOf(el) !== -1) {
			data = data.slice(data.toLowerCase().indexOf(el));
			return data.match(/[a-z\s]+[\d]{1,2},?\s[\d]{4}/i)[0];
		}
	}
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 2018/09/20 - 77691003,  bertuccis.fbmta.com
// Root xPath: /descendant::img[contains(@alt,"FREE") or contains(@alt,"Free")]
// Description xPath: ./@alt
URL xPath: ./parent::a/@href
Valid through xPath:
*/


//Description
var str1 = "Enjoy Two for Tuesday all day! Buy any Large Pizza and take home a FREE Large Cheese Pizza. Valid for Lunch and Dinner, Dine-In or 2Go.",
str2 = "Kids Day Wednesday - Receive one FREE Kids' Meal with an adult entrée purchase of $10.99 or more. Valid for Lunch and Dinner, Dine-In only.";

function transform(data) {
	return data.match(/.*\.\s/)[0].trim() || "";
}

//Valid through
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180920 - 77322387,  ledo.fbmta.com
// Root xPath: /descendant::font[contains(text(),"$") or contains(text(),"deals") or contains(text(),"Offerings") or contains(text(),"FREE")][1]
|
/descendant::span[contains(text(),"FREE") or contains(text(),"free") or contains(text(),"Sign")]
// Description xPath: .
URL xPath: /descendant::a[contains(.,"here")]/@href
Valid through xPath: /descendant::span[contains(text(),"Expires")]
*/


//Description
var str1 =

function transform(data) {
	return data || "";
}

//Valid through
function transform(data) {
	if(!data) return "";
	var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

	//Iterate through the months. If the month is included in "data" then:
	//1. slice the string where the month is at
	//2. return the match() of the string as month + days + year
	for (var i = 0; i < months.length; i++) {
		if (data.toLowerCase().indexOf(months[i]) !== -1) return data.slice(data.toLowerCase().indexOf(el)).match(/[a-z\s]+[\d]{1,2},?\s[\d]{4}/i)[0];
	}
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180921 - 77657793,  email.boots.com
// Root xPath: /descendant::img[contains(@alt,"points")]
|
/descendant::td[contains(text(),"Collect over")]
// Description xPath: ./@alt AND SECOND XPATH
concat(., " ",
./following::td[contains(text(),"£")],
./following::td[contains(text(),"£")]/following-sibling::td,
" worth of points.",
/following::td[contains(text(),"£")]/following-sibling::td/following::td[@class = "noheight"],
" ",
./following::td/following::td/following::td[contains(.,"£")]
)
URL xPath:
Valid through xPath:
*/


//Description
var str1 = "21 points per £1",
str2 = "Collect over £13 worth of points. Paco Rabanne Pure XS Eau de Parfum 50ml** £62.50",
str3 = "Collect over £15 worth of points. Estee Lauder Advanced Night Repair Synchronized Recovery Complex II 50ml*** £75",
str4 = "Collect over £11 worth of points. Braun Series 3040 Wet & Dry Shaver £54.99",
str5 = "Collect over £31 worth of points. Oral B Genius Rose Gold £150";

 function transform(data) {
 	return data.replace(/\*/g, "") || "";
 }

 //Valid through
 function transform(data) {
	 //Regular expression strings and array with all string scenarios
	 var regEx1 = new RegExp("valid\\sthrough:?\\s"); //valid through(:)
	 var regEx2 = new RegExp("expires:?\\s"); //expires(:)
	 var regEx3 = new RegExp("until:?\\s"); //until(:)

	 var dateRegEx = new RegExp("([\\d\\/]{2,3}){2}([\\d]{2,4})?") // (N)N/(N)N/(NNNN)
	 var flags = "i"; //Can be i, gi, g
	 var expirTextArr = [new RegExp (regEx1.source + dateRegEx.source, flags) , new RegExp (regEx2.source + dateRegEx.source, flags), new RegExp (regEx3.source + dateRegEx.source, flags)];
	 var dateStr = ""; //String where the extracted (N)N/(N)N/(NNNN) is added

	 //loop through all the RegExp to see if there is a match
	 for (var i = 0; i < expirTextArr.length; i++) {
	 	var el = expirTextArr[i];
		console.log(el);
		//If there is a match, then add the (N)N/(N)N/(NNNN) in dateStr and split it.
		if (data.match(el)) {
			dateStr = data.match(el)[0].split(" ")[1].split("/");
			break;
		}
	 }
	 console.log("dateStr:", dateStr);

	 //If $ is in the "data string," then make mm/yy/yyyy. If € or £ then twist and return
	 if (data.match(/\$/)) return new Date(dateStr[0] + "/" + dateStr[1] + "/" + (dateStr[2] || "1970"));
	 if (data.match(/[£€]/)) return new Date(dateStr[1] + "/" + dateStr[0] + "/" + (dateStr[2] || "1970"));
	 return "";
 }
 //------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180921 - 77879570, services.costco.com
// Root xPath: /descendant::a[contains(text(),"%")]
// Description xPath: .
URL xPath:
Valid through xPath:
*/


//Description
var str1 = "Costco members receive low, prearranged pricing from Approved Dealerships on a wide variety of powersports vehicles including ATVs, side-by-sides, dirt bikes, motorcycles and more. You can also take advantage of 15% off powersports parts, service, accessories and apparel.2",
str2 = "15% Off Parts & Service3";

function transform(data) {
	if (!data) return "";

	if (data.match(/\*\^/g)) data = data.replace(/\*\^/g, "");

	if (data[data.length-1].match(/\d/) && data[data.length-2].match(/[a-z\.]/i))
	return data.slice(0, data.length-1).match(/[\d]{1,2}%[a-z\s,\.&]+/i)[0].trim();

}

//Valid through
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180924 - 77863588,  value.sears.com
// Root xPath: /descendant::a[contains(text(),"%") or
contains(text(),"Sale") or
contains(text(),"$")
]
// Description xPath: concat(., " ", ./following::a)
URL xPath:
Valid through xPath: ./following::span[contains(text(),"Offer Ends")]
*/


//Description
var str1 =

function transform(data){
  return data.replace("Shop Now", "").trim() + "." || "";
}

//Valid through
function transform(data) {
	return data.match(/([\d\/]{2,3}){2}([\d]{2,4})?/) || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180924 - 77958196, mail.gnc.com
// Root xPath: /descendant::td[contains(text(),"$")]
// Description xPath: .
URL xPath: /descendant::a[contains(.,"View Online")]/@href
Valid through xPath: /descendant::span[contains(text(),"effective through")]
*/


//Description
var str1 =

function transform(data){
  return data.replace(/\*/g, "") || "";
}

//Valid through
var str = "These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure or prevent any disease. Regular prices effective through September 26, 2018 at GNC.com, through phone orders via 1-877-GNC-4700, and at participating GNC stores in the U.S. All products and prices may not be available at all locations. Pricing and promotions may not be available online. Prices may be higher in Alaska, Hawaii and Puerto Rico. Sales on select fitness equipment may not be combined with any discounts or Member Pricing. StriVectin® and Under Armour® products cannot be combined with any discount. Errors and omissions are not the responsibility of the advertiser. Shop one of more than 8,900 GNC stores. Call 1-800-477-4462 or visit GNC.com to find the store nearest you."

function transform(data) {
	if(!data) return "";
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	//Iterate through the months. If the month is included in "data" then:
	//1. slice the string where the month is at
	//2. return the match() of the string as month + days + year
	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]) !== -1) return data.slice(data.indexOf(months[i])).match(/[a-z\s]+[\d]{1,2},?\s[\d]{4}/i)[0];
	}
}
//------------------------------------------------------------------------------







//------------------------------------------------------------------------------
//20180910 - 52643954, rewards.shopyourwayrewards.com
var str1 = "SHIP ORDERS FAST & FREE | Frequent shoppers save $180* a year with FREE 2-day shipping from Shop Your Way MAX®. | START FREE TODAY | *Based on 2015 data",
str2 = "VIP MEMBERS GET MORE | Every purchase can get you closer to exclusive offers. Silver members can earn an extra $300* annually. | LEARN MORE | *Based on annual VIP purchases made by VIPs by level",
str3 = "MAKE HOTEL BOOKING EASY | Get up to $100 CASHBACK in points per night with Shop Your Way® Hotels.",
str4 = "EARN CASHBACK in points in unexpected places with access to over 500 Rewards Partners • REDEEM points on millions of products you need and love • Get FREECASH in points to spend (just because!) • Enjoy member-only COUPONS personalized to your shopping tastes",
str5 = "EARN EXTRA POINTS on gas, grocery and dining with the Sears Mastercard® with Shop Your Way • SAVE TIME AND MONEY with Shop Your Way MAX® free shipping and free Personal Shoppers • PLAY Win What You Want and enter new Sweepstakes daily • CONNECT & SHARE with other members for advice",
str6 = "SHIP ORDERS FAST & FREE | Frequent shoppers save $180* a year with FREE 2-day shipping from Shop Your Way MAX®. | START FREE TODAY | *Based on 2015 data",
str7 = "CONGRATS, YOU'RE A VIP SILVER | Get exclusive benefits like earning 5% CASHBACK in points for your birthday. | LEARN MORE";


// Description - Version of 9/17
function transform(data) {
	var regEx1 = new RegExp("[\\w\\s\\*]+%[\\w\\s®-]+\\.", "i");
	var regEx2 = new RegExp("[a-z\\s]+\\$[\\d]+\\*?[\\w\\s-®]+\\.", "i");
	var regEx3 = new RegExp("[\\w\\s]+cashback[\\w\\s]+", "i");
	var regEx4 = new RegExp("[\\w\\s®\\*\\$]+free[\\w\\s®-]+", "i");
	var regExArr = [regEx1, regEx2, regEx3, regEx4];

	for (var i = 0; i < regExArr.length; i++) {
		var el = regExArr[i];
		if (data.match(el)) return data.match(el)[0].replace("*", "").trim();
	}

	return "";
}


//Version of 9/10
function transform(data) {
  return data.match(/[a-z\s]+\$[\d]+\*?[\w\s-®]+\./gi) ? data.match(/[a-z\s]+\$[\d]+\*?[\w\s-®]+\./gi)[0].trim() : "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180924 - 78051985, rewards.shopyourwayrewards.com
// Root xPath: /descendant::img[contains(@alt,"CASHBACK")]
// Description xPath: ./@alt
URL xPath: ./parent::a/@href
Valid through xPath: ./ancestor::table/following-sibling::table/following::a[contains(text(),"Offer ends")]
*/


//Description
var str1 =

function transform(data) {
	return data.match(/\|.*\|/)[0].replace(/\|/g, "").trim() || "";
}

//Valid through
var str = "Offer ends 10/6/18. Exclusions apply. See details."

function transform(data) {
	return data.match(/([\d]{1,2}\/){2}[\d]{2,4}?/)[0] || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20180924 - 37821521,  smokeybones.fbmta.com
// Root xPath: //descendant::img[contains(@alt, "redeem") or
contains(@alt, "%")]
// Description xPath: ./@alt
URL xPath: ./parent::a/@href
Valid through xPath: -
*/


//Description
var str1 = "Stop by Smokey Bones to redeem your $10 credit today! For complete club details and to view your membership profile, visit the Bones Club section of SmokeyBones.com";

function transform(data){
  if (data.match(/[\w\s\$]+!/gi)) return data.match(/[\w\s\$]+!/gi)[0].trim();
  return data || "";
}

//Valid through
function transform(data) {
	return data || "";
}
//------------------------------------------------------------------------------




//LANDSEND SCENARIO 1
/*------------------------------------------------------------------------------
Date - package: 20180925 - 77619368, 77843564, 78084584, 77843545, 78084551 email.landsend.com
// Root xPath: /descendant::a[contains(.,"%") and not (contains(.,"Last day!") or contains(.,"Take"))
or contains(.,"FREE SHIPPING")]
// Description xPath: .
URL xPath: /descendant::a[contains(.,"%") or contains(.,"FREE SHIPPING")]/@href
Valid through xPath: /descendant::span[contains(text(),"valid through") or contains(text(),"Valid through")]
|
/descendant::p[contains(text(),"valid through") or contains(text(),"Valid through")]
*/


//Description
var str1 =

function transform(data) {
 return data.replace(/^\+/, "").trim() || "";
}

//Valid through
var str= "Receive 30% off full-price styles online, in-store or by phone (excludes buy more and save pricing, monogramming, gift boxing, gift cards, shipping, taxes, duties, Lands' End Business Outfitters purchases, and excluded items as marked). Promotions and products may vary in-store. Prices as marked in-store. Excludes clearance in-store. Discount will be applied at checkout. This offer has no cash value. Promotional savings may be deducted from returns. 5-7 business day delivery to most addresses. Offer valid through 11:59 p.m. Central, September 17, 2018. Not valid on previous purchases or when combined with any other promotional offers.";
var str2 = "Receive 50% off one (1) full-price item online, in-store or by phone (excludes buy more and save pricing, monogramming, gift boxing, gift cards, shipping, taxes, duties, Lands' End Business Outfitters purchases, and excluded items as marked). Promotions and products may vary in-store. Prices as marked in-store. Excludes clearance in-store. Discount will be applied at checkout. This offer has no cash value. Promotional savings may be deducted from returns. 5-7 business day delivery to most addresses. Offer valid through 11:59 p.m. Central, September 19, 2018. Not valid on previous purchases or when combined with any other promotional offers.";

function transform(data) {
	data = data.match(/valid\sthrough[\w\s:]+p\.m\.[\w\s,]+\./gi)[0].split(",");
	var result = data[1] + "," + data[2];
	return result || "";
}
//------------------------------------------------------------------------------




//LANDSEND SCENARIO 2 (pulling only from the top of the email)
/*------------------------------------------------------------------------------
Date - package: 20180925 - 77929489 email.landsend.com
// Root xPath: /descendant::a[contains(.,"%") and not (contains(.,"Last day!")) and contains(.,"free shipping")]
// Root xPath2: /descendant::a[contains(.,"%") and not
(contains(.,"free shipping")) or
contains(.,"FREE SHIPPING") and not
(contains(.,"Last day!"))]

// Description xPath: .
URL xPath: /descendant::a[contains(.,"%") and contains(.,"free shipping")]/@href
Valid through xPath: /descendant::span[contains(text(),"valid through") or contains(text(),"Valid through")]
|
/descendant::p[contains(text(),"valid through") or contains(text(),"Valid through")]
*/


//Description
var str1 =

function transform(data) {
 return data.replace(/^\+/, "").trim() || "";
}

//Valid through
var str= "Receive 30% off full-price styles online, in-store or by phone (excludes buy more and save pricing, monogramming, gift boxing, gift cards, shipping, taxes, duties, Lands' End Business Outfitters purchases, and excluded items as marked). Promotions and products may vary in-store. Prices as marked in-store. Excludes clearance in-store. Discount will be applied at checkout. This offer has no cash value. Promotional savings may be deducted from returns. 5-7 business day delivery to most addresses. Offer valid through 11:59 p.m. Central, September 17, 2018. Not valid on previous purchases or when combined with any other promotional offers.";
var str2 = "Receive 50% off one (1) full-price item online, in-store or by phone (excludes buy more and save pricing, monogramming, gift boxing, gift cards, shipping, taxes, duties, Lands' End Business Outfitters purchases, and excluded items as marked). Promotions and products may vary in-store. Prices as marked in-store. Excludes clearance in-store. Discount will be applied at checkout. This offer has no cash value. Promotional savings may be deducted from returns. 5-7 business day delivery to most addresses. Offer valid through 11:59 p.m. Central, September 19, 2018. Not valid on previous purchases or when combined with any other promotional offers.";

function transform(data) {
	data = data.match(/valid\sthrough[\w\s:]+p\.m\.[\w\s,]+\./gi)[0].split(",");
	var result = data[1] + "," + data[2];
	return result || "";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20181002 - 71524273, e.officedepot.com
// Root xPath:
/descendant::tr[@class="mobile-hidden"]/descendant::img[contains(@class,"image")][contains(@alt,"%") or contains(@alt,"$") or contains(@alt,"Save") or contains(@alt,"Sale") or contains(@alt,"Free")][not (contains(@alt,"Tech Support"))]
|
/descendant::tr[@class="mobile-hidden"]/descendant::img[not(@class)][contains(@alt,"%") or contains(@alt,"$") or contains(@alt,"Save") or contains(@alt,"Sale") or contains(@alt,"Free")][not (contains(@alt,"Tech Support"))]
|
/descendant::img[contains(@class,"image")]/parent::a/parent::td/parent::tr[not(@class)]/descendant::img[contains(@alt,"%") or contains(@alt,"$") or contains(@alt,"Save") or contains(@alt,"Sale") or contains(@alt,"Free")][not (contains(@alt,"Tech Support"))]
|
/descendant::span[contains(text(),"delivery")]
|
/descendant::a[contains(text(),"$") or contains(text(),"%") or contains(text(),"Free")]
|
/descendant::td[contains(text(),"%") and not (contains(.,"Bonus Rewards"))]
|
/descendant::b[contains(text(),"$")]

// Description xPath: ./@alt | .
URL xPath: ./parent::a/@href
|
/descendant::span[contains(text(),"View in web browser")]/parent::a/@href
Valid through xPath: /descendant::text()[contains(.,"through") and contains(.,"Prices and offers valid")]
*/


//Description
var str1 = "FREE store pickup, ready in 1 hour!",
str2 = "FREE delivery for VIP Rewards Members",
str3 = "Save 20% on Qualifying Regular Priced Purchase",
str4 = "Biggest. Baddest. Blowout. $ALE",
str5 = "Toner Deal Save $25 on 2 HP or Samsung Toners",
str6 = "Save up to $250 on select HP printers + 10% Bounus Rewards",
str7 = "Get in here for up to 70% savings on thousands of items",
str8 = "100% back on DuracellÂ® Coppertop Alkaline Batteries, 16pk: Valid in store, online, by phone or fax from 9/30/18 to 10/06/18 11:59 PM ET or while supplies last, whichever occurs first. Rewards are Limited to 2 items per member. This offer cannot be combined with other Bonus Rewards offers on the same or similar products and services",
str9 = "10% Back in rewards on all HP inkjet printers: Valid in store, online, by phone or fax from 9/30/18 to 10/6/18 11:59 PM ET or while supplies last, whichever occurs first. Rewards are Limited to 2 printers per member. This offer cannot be combined with other Bonus Rewards offers on the same or similar products and services.";

function transform(data)
{
 var n = data.get("http://schema.org/description")[0];
  return n ? data : "";
}


//Desctription
function transform(data){
  if(data.trim()[data.length-1] === ":") return data.slice(0,data.length-1);
  return data || "";
}


//OLD DESCRIPTIONS
function transform(data) {
	//IF NO DATA, RETURN EMPTY STRING;
	if(!data) return "";

	//IF TEXT IS INCLUDED IN DATA, THEN DISCARD IT IF IT IS FALSE IN ARRAY ELSE RETURN IT
	//AFTER YOU MODIFY IT
	var footer = [
		{text: ": Valid", keep: true},
		{text: "Prices", keep: false},
		{text: "Rewards are earned on", keep: false},
		{text: "cannot be combined", keep: false}
	]

	for (var i = 0; i < footer.length; i++) {
		if (data.indexOf(footer[i].text) !== -1) {
		return footer[i].keep ? data.split(footer[i].text)[0] : "";
		}
	}

	// RETURN DATA IF NONE OF THE ABOVE IS VALID
	return data;
}

function transform(data) {
	//IF NO DATA, RETURN EMPTY STRING;
	if(!data) return "";

	//IF TEXT IS INCLUDED IN DATA, THEN DISCARD IT IF IT IS FALSE IN ARRAY ELSE RETURN IT
	//AFTER YOU MODIFY IT
	var footer = [
		{text: ": Valid", keep: true},
		{text: "Prices", keep: false},
		{text: "Rewards are earned on", keep: false},
		{text: "cannot be combined", keep: false}
	]

	for (var i = 0; i < footer.length; i++) {
		if (data.indexOf(footer[i].text) !== -1 && footer[i].keep) return data.split(footer[i].text)[0];
    if (data.indexOf(footer[i].text) !== -1 && !footer[i].keep) return "";
	}

	// RETURN DATA IF NONE OF THE ABOVE IS VALID
	return data;
}

// old code pulled from Scarlett
function transform(data) {
	if(data.match(/:\sValid/)) return data.split(": Valid")[0];
	return data || "";
}



// old code for description function

	//IF TEXT INCLUDED IN DATA, RETURN EMPTY STRING (FOR THE TEXT THAT IS PULLED FROM THE FOOTER)
	var discardTextArr = ["Prices", "Rewards are earned on", "cannot be combined"];
	for (var i = 0; i < discardTextArr.length; i++) {
		if (data.indexOf(discardTextArr[i]) !== -1) return "";
	}

	//THIS IS FOR THE COUPONS THAT RESIDE ON THE FOOTER AND WE WANT TO KEEP. THEY BEGIN WITH: "BONUS REWARDS: ..."
	if(data.match(/:\sValid/)) return data.split(": Valid")[0];

//Valid through
function transform(data) {
	return
	data.match(/through\s(\d{1,2}\/){2}\d{2,4}/) ?
	data.match(/through\s(\d{1,2}\/){2}\d{2,4}/)[0].replace(/through\s/,"").trim() :
	"";
}
//------------------------------------------------------------------------------




/*------------------------------------------------------------------------------
Date - package: 20181004 - 78683916, email.childrensplace.com
// Root xPath: /descendant::img[contains(@alt,"%") or contains(@alt,"$") or contains(@alt,"Free") or contains(@alt,"Double Rewards")]
|
/descendant::a[contains(text(),"%")]
// Description xPath:
URL xPath:
Valid through xPath:
*/


//Description
var str1 =

function transform(data) {
	return data || "";
}

//Valid through
var str = "**To receive Double Points, customer must make a qualifying My Place Rewards purchase September 1 - 30, 2018 at The Children’s Place stores in the U.S. and Puerto Rico or at";
var str = "Start downloading your digital coupons now and redeem September 14-15 ONLY, with Card.* Use digital coupons up to 5 times in one transaction.";

function transform(data) {
	if(!data) return "";
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	//Iterate through the months. If the month is included in "data" then:
	//1. slice the string where the month is at
	//2. return the match() of the string as month + days + year
	//3. replace the extra text that is not needed based on the final text's format
	for (var i = 0; i < months.length; i++) {
		if (data.indexOf(months[i]) !== -1) return data.slice(data.indexOf(months[i])).match(/[a-z\s]+\s\d{1,2}\s?(-\s?\d{1,2})?,?(\s\d{4})?/i)[0].replace(/\d{1,2}\s?-/, "");
	}
}
//------------------------------------------------------------------------------



var str = "HUBSAN Drones Extra 10% DTO. Para Asegurarte Ahorros, por favor añade newsletter@deals.banggood.com a su libro de direcciones. ¿Visualizar imágenes? Ver aquí"

function transform(data) {
  //Return empty strings if the following are included since they are not coupons.
  var reg1 = /100%/i;
  var regExArr = [reg1];

  for (var i = 0; i < regExArr.length; i++) {
    if (data.match(regExArr[i])) return "";
  }



  //Replace uncecessary text
  var rep1 = /To\sensure\ssavings,.*/i;
  var rep2 = /Para\sAsegurarte.*/i;
  //var rep3 = /No\sother\sdiscounts\sapply\./;
  //var rep4 = /Buy\snow\.?$/;
  var replaceArr = [rep1, rep2];

  for (var i = 0; i < replaceArr.length; i++) {
		console.log(replaceArr[i]);
    if (data.match(replaceArr[i])) data = data.replace(replaceArr[i], "");
  }



  //Replace US$ to "Was $"
  data = data.replace(/US\$/, "| Was $");



  return data.trim();
}


















/*------------------------------------------------------------------------------
Date - package:
// Root xPath:
// Description xPath:
URL xPath:
Valid through xPath:
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
