
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



function transform(data){

  //MM/DD/YYYY
	if (data.match(/([\d]{1,2}\/){2}\d{2,4}/)) return data.match(/([\d]{1,2}\/){2}\d{2,4}/);



  //YYYY/MM/DD
  	if(data.match(/\d{4}(\.[\d]{1,2}){2}/)){
      data = data.match(/\d{4}(\.[\d]{1,2}){2}/)[0].split(".");
      return data[1] + "/" + data[2] + "/" + data[0];
    }



  //YYYY/MM/DD - Japanese
  if(data.match(/\d{4}年\d{1,2}月\d{1,2}/)){
      data = data.match(/\\d{4}年\d{1,2}月\d{1,2}/)[0].replace(/[年月]/g,".").split(".");
      return data[1] + "/" + data[2] + "/" + data[0];
    }



  //DD.MM.YYYY
  if (data.match(/([\d]{1,2}\.){2}\d{2,4}/)){
    data = data.match(/([\d]{1,2}\.){2}\d{2,4}/)[0].split(".");
	return data[1] + "/" + data[0] + "/" + data[2];
  }


return "";

}



function transform(data){
  data = data.replace(/[\*©®ǂ†→§™¹]/g, "");

  var stringArr = [
    /%/,
    /free/i,
    /gratuits/i, //French: Free
    /Kostenloser/i, //German: Free
    /gratuita/i, //Spanish: Free
    /gratis/i, //Italian, Dutch, Corsican: Free
    /GRÁTIS/i, //Portuguese: Free
    /ingyenes/i, //Hungarian: Free
    /gratuită/i, //Romanian: Free
    /Бесплатная/i, //Russian: Free
    /Δωρεάν/i, //Greek: Free
    /БЕЗПЛАТНА/i, //Bulgarian: Free
    /zdarma/i, //Czech: Free
    /ZADARMO/i, //Slovak: Free
    /Bezpłatna/i, //Polish: Free
    /ÜCRETSİZ/i //Turkish: Free

  ];

  for (var i = 0; i < stringArr.length; i++) {
    if (data.match(stringArr[i])) return data;
  }

  return "";
}























var str = "Sign up for texts& get 25% off your first order! Exclusions apply.";

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
    {oldStr: /([A-z])(&)/g, newStr: "$1 $2"}
  ]

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

 return data.trim();
}




function transform(data) {
 if (data) return data.replace(/\spercent/g,"%").replace(/\,\sOut of Store.*|\,\sFinancing.*|\,\sExclusions\,|Exclusions\,|Exclusions apply\.|\,\s*Shop\s*All\s*\w+|\, Join Now|\, Shop Now|Terms.*|\,\sExclusions and Details/g,"").replace(/(\$)\s(\d)/,"$1$2").trim();
 else return null;
}







function transform(data){
	return data.match(/\sthrough\s(\d{1,2}\s?\/){2}\d{0,4}\sat\s11:59pm\sPT/)[0].match(/(\d{1,2}\s?\/){2}\d{0,4}/)[0] || "";
}



function transform(data, node, headers){
  if (data.match(/%\soff/) && data.match(/\sthrough\s(\d{1,2}\s?\/){2}\d{0,4}\sat\s11:59pm\sPT/)) {
    return data.match(/\sthrough\s(\d{1,2}\s?\/){2}\d{0,4}\sat\s11:59pm\sPT/)[0].match(/(\d{1,2}\s?\/){2}\d{0,4}/)[0] || "";
  }

  if (data.match(/2-day\sshipping/)) {
     return new Date()(headers.get("Date") * 1000).getDate() + 2);
  }



  return "";
}









function transform(data){
  var replaceStrArr = [
    {oldStr: /[\*©®ǂ†→§™¹]/g, newStr: ""},
    {oldStr: /Shop\sNow$/i, newStr: ""}
  ];

  replaceStrArr.forEach(function(el) {
    data = data.replace(el, "");
  });



	if(data.match(/Enter\spromotion\scode\s.*\sor\smore\./)) return data.match(/Enter\spromotion\scode\s.*\sor\smore\./)[0];

  return data || "";
}










































function transform(data) {
  if(!data) return null;


  var removeStrings = [
    /[\*©®ǂ†→§™¹›]/g,
    /Valid\sthrough.*/i,
    /Valid\s((\d{1,2}\/){2}\d{2,4})\s?-?–?\s?((\d{1,2}\/){2}\d{2,4}).*/i,
    /Valid\sfor\sone-time\suse(.*)?/i,
    /coupon\svalid\sfor.*/i,
    /Browse\sBottles$/i,
    /Browse\sBeers$/i,
    /Shop\sNow$/i,
    /Shop\sNow\sUse\sBarcode.*$/i,
    /Use\sBarcode\sTo\sRedeem.*/,
    /^Plus,?\s/i,
    /^\d\sDays?\sOnly!?\sEnds\s\d{1,2}\/\d{1,2}/i,
    /Free\sitem\smust\sbe\sof\sequal\sor\slesser\svalue(.*)?/,
    /worldmarket.com(\/[a-z]+)?/i,
    /Find\sA\sStore$/i,
    /Sign\sIn$/,
    /Join\sNow$/,
    /MEMBER\sPRICING:?/,
    /HALLMARK\sCHANNEL\sMOVIE\sSWEEPSTAKES.*/,
    /to\sredeem\soffer\..*/,
    /Shopper\sReward\scredits\searned.*/,
    /^Or\s/,
    /^Plus\s/
  ]

  removeStrings.forEach(function(el) {
    data = data.replace(el, "");
  });



  var replaceStrings = [
    {oldStr:/(.*):/, newStr: "$1"},
    {oldStr: /:\sBUY\sWINE\sONLINE,\sPICK\sUP\sIN\sSTORE:?\s?/, newStr: "-"}
  ];

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

 return data.trim();
}
