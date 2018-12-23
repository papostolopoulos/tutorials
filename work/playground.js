
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
    {oldStr:/[\*©®ǂ‡†±→§™¹›]/g, newStr: ""},
    {oldStr: /& a Special/i, newStr: "A Special"},
    {oldStr: /Limit \d\./i, newStr: ""},
    {oldStr: /2 DAYS ONLY! Don't Miss Out\..*/i, newStr: ""},
    {oldStr: /\d Days of Cheer: \d{1,2}\/\d{1,2}-\d{1,2}\/\d{1,2} ONLY\./i, newStr: ""},
    {oldStr: /Check back each day.*/i, newStr: ""},
    {oldStr: /Cheer's Workshop of Savings\..*/i, newStr: ""},
    {oldStr: /(Best part\?? They’re all at 50-90%)/i, newStr: "So many Big Brands. $1"},
    {oldStr: /Check back each day.*/i, newStr: ""},
    {oldStr: /SHOP HOLLAR.*/i, newStr: ""},
    {oldStr: /UNWRAP YOUR MYSTERY OFFER/i, newStr: ""},
    {oldStr: /^Ends Today(!|\.)/i, newStr: ""},
    {oldStr: /Use Code \w+ at Checkout.*/i, newStr: ""},
    {oldStr: /Use\s+Code.*/i, newStr: ""},
    {oldStr: /(Feed\s+the\s+Heart|Feeding\s+Fun|Feel\s+the\s+Magic!).*/i, newStr: ""},
    {oldStr: /gyou/i, newStr: "you"},
    {oldStr: /^For H(er|im).*/i, newStr: ""},
    {oldStr: /^For the (D(é|e)cor Lover|Littles)\..*/i, newStr: ""},
    {oldStr: /^Kid Favorites.*/i, newStr: ""},
    {oldStr: /Now Through \d{1,2}\/\d{1,2}\./i, newStr: ""},
    {oldStr: /^Plus,/i, newStr: ""},
    {oldStr: /^Pack It Up.*/i, newStr: ""},
    {oldStr: /UNWRAP YOUR MYSTERY OFFER/i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    // {oldStr: RegExp(String.fromCharCode(8204), "ugi"), newStr: ""},
    // {oldStr: /\u200c/ugi, newStr: ""},
    // {oldStr: /\s.\s./gi, newStr: ""},
    // {oldStr: /\s{2,}/gi, newStr: ""},
  ];

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

 return data.trim();
}

var str = " ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ $3.99 Shipping and FREE SHIPPING on all order over $25"

RegExp(String.fromCharCode(8204), "ugi");

(?uig)\u200c
