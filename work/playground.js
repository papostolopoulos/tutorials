
// Learn ES6 better
// promises and assynchronous calls
// https://www.typingclub.com/sportal/program-3/117.play
// destructuring for es6
// currying javascript
// linked lists and double linked lists, trees
// tail call optimization
// tail recursive non tail recursive


// Keep the same color scheme
// text should be easy to read in different light
// single colors is better



Saran จองที่พักที่หมายตาไว้ได้เลย! จองตอนนี้ รับส่วนลด 1,000 บาท ทันที!




function transform(data) {
  if(!data || data.length >= 140) return null;


  var replaceStrings = [
    {oldStr: /[\*©®ǂ‡†±→§™¹›]/g, newStr: ""},
    {oldStr: /(Use\scode.*at\scheckout).*/i, newStr: "$1"},
    {oldStr: /\s(\dstar|Excep|Very).*?(reviews|score)\s*(\$\d+)\s(\$\d+)\s.*/i, newStr: " Now only: $3 Was: $4"},
    {oldStr: /\s(\d\.\dstar|Excep|Very).*?(reviews|score)\s*(\$\d+)\s(\$\d+)\s.*/i, newStr: " Now only: $3 Was: $4"},
    {oldStr: /\s(\dstar|Excep|Very).*?(reviews|score)\s*(\d+)\s(\$\d+)\s.*/i, newStr: " Now only: $ $3 Was: $4"},
    {oldStr: /\d\.\dstar.*\s((?:\d+\,)?\d+)\s(\d+)\s.*Discover\smore/i, newStr: " Now only: $ $2 Was: $ $1"},
    {oldStr: /\d\.\dstar.*\s((?:\d+\,)?\d+)\s(\d+)\s.*(SEE\sTHIS|Check).*/i, newStr: " Now only: $ $2 Was: $ $1"},
    {oldStr: /\d+\sreviews.*\s((?:\d+\,)?\d+)\s(\d+)\s.*(SEE\sTHIS|Check).*/i, newStr: " Now only: $ $2 Was: $ $1"},
    {oldStr: /Book\snow.*\s((?:\d+\,)?\d+)\s(\d+)\s.*(SEE\sTHIS|Check).*/i, newStr: " Now only: $ $2 Was: $ $1"},
    {oldStr: /(\$\d+\sGift\sCard).*\s((?:\d+\,)?\d+)\s(\d+)\s.*(SEE\sTHIS|Check).*/i, newStr: "$1 Now only: $ $3 Was: $ $2"},
    // {oldStr: /(([A-Z฿\$€£¥¢₹₨₱₩฿₫₪]{1,3})?\s?\d+([,\.]\d+)?)\s(([A-Z฿\$€£¥¢₹₨₱₩฿₫₪]{1,3})\s?\d+([,\.]\d+)?)/, newStr: " Was: $1 Now only: $4"},
    {oldStr: /.*, you’re so close! /i, newStr: ""},
    {oldStr: /.*To welcome you back, here’s an exclusive/i, newStr: "Here’s an exclusive"},
    {oldStr: /(Book (now to get up to |your room (in .* )?)(today for up to)?.*off( today)?!).*/i, newStr: "$1"},
    {oldStr: /You can list your apartment, vacation rental.*/i, newStr: ""},
    {oldStr: /(no minimum booking value.) Click to redeem!/i, newStr: "$1"},
    {oldStr: /Now until (January|February|March|April|May|June|July|August|September|Octomber|November|december) \d{1,2}, \d{4}, get/i, newStr: "Get"},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    {oldStr: /.*得分自.*/i, newStr: ""},
    {oldStr: /\%\s*\%/i, newStr: "%"},
    {oldStr: /(\$)\s(\d+)/g, newStr: "$1$2"},
    {oldStr: /\%(\S)/i, newStr: "% $1"},
    //{oldStr: //i, newStr: ""},
  ];

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

 return data.trim();
}
