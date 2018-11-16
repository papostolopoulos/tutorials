
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



var str = "15% rabatt på all strikk**: Tilbudet gjelder for utvalgte varer på hm.com t.o.m. 28.10.2018 eller så langt lageret rekker. 15% rabatt på all strikk: Tilbudet gjelder for utvalgte varer på hm.com t.o.m. 24.10.2018 eller så langt lageret rekker. Kan ikke kombineres med andre tilbud, rabatter, designersamarbeid eller spesialkolleksjoner. Dette tilbudet koster 0 poeng.";
var str2 = "LAST CHANCE! FREE SHIPPING - Use code 0922!* LADIESMENKIDSH&M HOMEFollow us onlineDownload appiOS ANDROID Stores & ServiceFIND STORE CONTACT *LAST CHANCE! FREE SHIPPING - Use code 0922!: Valid until 2018.11.07. : Online & in store May be subject to printing errors, changes, price changes, delivery delays and limited availability of stock.You are receiving this email because you are signed up to receive H&M promotional communications. This message was sent by H & M Hennes & Mauritz GBC AB, Mäster Samuelsgatan 46, 106 38 Stockholm, Sweden.Click here for the European Commission's Online Dispute Resolution website.Unsubscribe";
var str3 = "保暖也要时尚 - 精选外套75折优惠* 女士男士儿童H&M家居关注我们下载APPiOS ANDROID 门店和服务查看门店 联系 您好Mary, 您的积分有0分101810178728008*精选外套 - 75折优惠: 本次优惠截至2018年10月25日早上8点，仅适用于网店女士，DIVIDED和男士部门，售完即止。 可能会出现印刷错误、修改、价格变动、延迟交付和库存有限的情况。您之所以收到这封电子邮件，是因为您已注册接收H&M促销信息。 本信息来自H & M Hennes & Mauritz GBC AB, Mäster Samuelsgatan 46, 106 38 斯德哥尔摩, 瑞典。退订";
var str4 = "11.11 SINGLES' DAY - ÖZEL BİR FIRSAT % 11 İNDİRİM: Bizi takip edinUygulamamızı indiriniOS ANDROID Mağazalar ve HizmetlerMAĞAZA BUL İLETİŞİM *11.11 SINGLES' DAY - ÖZEL BİR FIRSAT % 11 İNDİRİM: 1111 kodunu kullanınız. Ücretsiz kargo dahildir. 11.11.2018 günü sabah 11:11'den akşam 11:11'e kadar geçerlidir. Başka bir teklif, indirim, özel koleksiyon veya tasarımcı iş birliği ile birleştirilemez. Basım hataları, değişiklikler, fiyat değişiklikleri, teslimde gecikmeler veya sınırlı stok durumu söz konusu olabilir.Bu e-postayı H&M tanıtım iletişimlerini almak üzere abone olduğunuz için alıyorsunuz. Bu mesaj H & M Hennes & Mauritz GBC AB, Mäster Samuelsgatan 46, 106 38 Stockholm, İsveç tarafından gönderilmiştir.Abonelikten çık";

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
