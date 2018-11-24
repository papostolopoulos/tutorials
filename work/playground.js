
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
  //Define array of strings that are possibly both in the coupon and the footer of the email
    var stringArr = [
      /%/g,
      /free/gi,
      /gratuits/gi, //French: Free
      /Kostenloser/gi, //German: Free
      /gratuita/gi, //Spanish: Free
      /gratis/gi, //Italian, Dutch, Corsican: Free
      /GRÁTIS/gi, //Portuguese: Free
      /ingyenes/gi, //Hungarian: Free
      /gratuită/gi, //Romanian: Free
      /Бесплатная/gi, //Russian: Free
      /Δωρεάν/gi, //Greek: Free
      /БЕЗПЛАТНА/gi, //Bulgarian: Free
      /zdarma/gi, //Czech: Free
      /ZADARMO/gi, //Slovak: Free
      /Bezpłatna/gi, //Polish: Free
      /ÜCRETSİZ/gi, //Turkish: Free
      /مجاناً/gi, //Arabic: Free
      /BEZPŁATNA/gi, //Polish: Free
      /折优惠/gi, //Chinese: Discount (% off)
      /\d{1,2}折/gi //Chinese: Num off
    ];



    //Iterate through the array. If the string is included twice in the concatenated text
    //then see if there are any date formats
    for (var i = 0; i < stringArr.length; i++) {
      var el = stringArr[i];

      if (data.match(el) !== null && data.match(el).length >= 2) {


        //MM/DD/YYYY
        if (data.match(/([\d]{1,2}\/){2}\d{2,4}/)) return data.match(/([\d]{1,2}\/){2}\d{2,4}/)[0];



        //YYYY/MM/DD
          if(data.match(/\d{4}(\.[\d]{1,2}){2}/)){
            data = data.match(/\d{4}(\.[\d]{1,2}){2}/)[0].split(".");
            return data[1] + "/" + data[2] + "/" + data[0];
          }




        //YYYY/MM/DD - Chinese
        if(data.match(/\d{4}年\d{1,2}月\d{1,2}/)){
            data = data.match(/\d{4}年\d{1,2}月\d{1,2}/)[0].replace(/[年月]/g,".").split(".");
            return data[1] + "/" + data[2] + "/" + data[0];
          }



        //DD.MM.YYYY
        if (data.match(/([\d]{1,2}\.){2}\d{2,4}/)){
          data = data.match(/([\d]{1,2}\.){2}\d{2,4}/)[0].split(".");
        return data[1] + "/" + data[0] + "/" + data[2];
        }

      } //End of top if statement
    } //End of for loop



  return "";
}







function transform(data){
//Define array of strings that are possibly both in the coupon and the footer of the email
  var stringArr = [
    "%",
    "free",
    "gratuits", //French: Free
    "Kostenloser", //German: Free
    "gratuita", //Spanish: Free
    "gratis", //Italian, Dutch, Corsican: Free
    "GRÁTIS", //Portuguese: Free
    "ingyenes", //Hungarian: Free
    "gratuită", //Romanian: Free
    "Бесплатная", //Russian: Free
    "Δωρεάν", //Greek: Free
    "БЕЗПЛАТНА", //Bulgarian: Free
    "zdarma", //Czech: Free
    "ZADARMO", //Slovak: Free
    "Bezpłatna", //Polish: Free
    "ÜCRETSİZ", //Turkish: Free
    "مجاناً", //Arabic: Free
    "BEZPŁATNA", //Polish: Free
    "折优惠", //Chinese: Discount (% off)
    "折" //Chinese: off
  ];



  //Iterate through the array. If the string is included twice in the concatenated text
  //then see if there are any date formats
  for (var i = 0; i < stringArr.length; i++) {
    var el = stringArr[i];
    if (data.toLowerCase().indexOf(el.toLowerCase()) !== data.toLowerCase().lastIndexOf(el.toLowerCase())) {


      //MM/DD/YYYY
      if (data.match(/([\d]{1,2}\/){2}\d{2,4}/)) return data.match(/([\d]{1,2}\/){2}\d{2,4}/)[0];



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

    } //End of top if statement
  } //End of for loop



return "";
}





function transform(data){
  data = data.replace(/[\*©®ǂ†→§™¹]/g, "");

  var stringArr = [
    /%/i,
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
    /ÜCRETSİZ/i, //Turkish: Free
    /BEZPŁATNA/i, //Polish: Free
    /مجاناً/i, //Arabic: Free
    /折优惠/i, //Chinese: Discount (% off)
    /\d{1,2}折/gi //Chinese: Num off
  ];

  for (var i = 0; i < stringArr.length; i++) {
    if (data.match(stringArr[i])) return data;
  }

  return "";
}








function transform(data){
  if(data.match(/\$[\d\,\.]{4,}/)){
    var price = data.replace(/\$/,'')
    var amt = parseFloat(price.match(/[\$\d\,\.]+/)[0].replace(/,/,'')).toFixed(2);
    return amt;
  } else {
    return null;
  }
}



















function transform(data, node, headers){
  if (data.match(/%\soff/i) && data.match(/\sthrough\s(\d{1,2}\s?\/){2}\d{0,4}\sat\s11:59pm\sPT/)) {
    return data.match(/\sthrough\s(\d{1,2}\s?\/){2}\d{0,4}\sat\s11:59pm\sPT/)[0].match(/(\d{1,2}\s?\/){2}\d{0,4}/)[0];
  }

  return "";
}








function transform(data) {
  if(!data) return null;

  var replaceStrings = [
    {oldStr: /\,\sOut\sof\sStore.*/g, newStr: ""},
    {oldStr: /\,\sFinancing.*/g, newStr: ""},
    {oldStr: /\,\sExclusions.*/g, newStr: ""},
    {oldStr: /Exclusions.*/g, newStr: ""},
    {oldStr: /\,\s*Shop\s*All\s*\w+/g, newStr: ""},
    {oldStr: /\,\sJoin\sNow/g, newStr: ""},
    {oldStr: /\,\sShop\sNow/g, newStr: ""},
    {oldStr: /Terms.*/g, newStr: ""},
    {oldStr: /^Plus,\s/g, newStr: ""},
    {oldStr: /\spercent/g, newStr: "%"},
    {oldStr: /(\$)\s(\d)/, newStr: "$1$2"},
    {oldStr: /([A-z])(&)/g, newStr: "$1 $2"}
  ];

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  })

 return data.trim();
}