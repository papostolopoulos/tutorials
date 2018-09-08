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
      matchedStr += data.match(regExArr[i])[0].replace(/[\|\*]/g, "").trim().replace(/\s\s/, ". ") + ".";

      return matchedStr.charAt(0).toUpperCase() + matchedStr.slice(1);
    }
  }

return "";
}
