
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

function transform(data) {
  if(!data) return null;


  var replaceStrings = [
    {oldStr: /[\*©®ǂ†→§™¹›]/g, newStr: ""},
    {oldStr: /\[NOOK.*/, newStr: ""},
    {oldStr: /Not\svalid.*/, newStr: ""},
    {oldStr: /SHOP\sNOW.*/, newStr: ""},
    {oldStr: /May\sbe\sredeemed.*/i, newStr: ""},
    {oldStr: /Ends\s([A-z]+day|tomorrow).*/i, newStr: ""},
    {oldStr: /While\ssupplies\slast.*/i, newStr: ""},
    {oldStr: /SHOP\sTHE\sGIFT\sGUIDE.*/, newStr: ""},
    {oldStr: /Select\sbrands.*/i, newStr: ""},
    {oldStr: /Get\s(online|store)\scoupon.*/i, newStr: ""},
    {oldStr: /Learn\smore.*/i, newStr: ""},
    {oldStr: /Select\sitems\sexcluded\./, newStr: ""},
    {oldStr: /Get\sstore\scoupon.*/i, newStr: ""},
    {oldStr: /Save\s\$\d{1,3}\s(Save\s\${1,3})/, newStr: "$1"},
    {oldStr: /All\soffers\sare\ssubject.*/i, newStr: ""},
    {oldStr: /We're\ssorry.*/, newStr: ""},
    {oldStr: /See\sall$/i, newStr: ""},
    {oldStr: /Sign\sup.*/i, newStr: ""},
    {oldStr: /\s+$/, newStr: ""},
    {oldStr: /\|$/, newStr: ""},
    {oldStr: /-$/, newStr: ""},
    // {oldStr: /NOOK\sdevices\sand\sNOOK\sBooks\sexcluded.*/i, newStr: ""},
    // {oldStr: /NOOK\s.*excluded\..*/, newStr: ""},
    //{oldStr: /Prices\sare\ssubject.*/i, newStr: ""},
    // {oldStr: /Other\sexclusions.*/, newStr: ""},
    // {oldStr: /Stores\s&\sEvents\sAuthor\sEvents.*/, newStr: ""},
    // {oldStr: /Download\sthe\sfree.*/, newStr: ""},
  ];

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

 return data.trim();
}
