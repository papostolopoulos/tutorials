
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
    {oldStr: /STARTS\sTODAY/i, newStr: ""},
    {oldStr: /\|\sSHOP\sSALE(\syep.*)$/i, newStr: ""},
    {oldStr: /^Also,\sthis\sperk:/i, newStr: ""},
    {oldStr: /^Plus,/i, newStr: ""},
    {oldStr: /(|\s)?SHOP\sNOW.*/i, newStr: ""},
    {oldStr: /.*oldnavy\.com\/supercash.*/i, newStr: ""},
    {oldStr: /\|\sSHOP\sSALE/i, newStr: ""},
    {oldStr: /FIND\sYOUR\sSTORE$/i, newStr: ""},
    {oldStr: /(\|\s)?(Exclusions|Restrictions)(\smay)?\sapply\.\s(See)?\sDetails\sbelow\.?/i, newStr: ""},
    {oldStr: /Or\sshow\scashier\sbarcode.*/i, newStr: ""},
    {oldStr: /\|\sFIND\sA\sSTORE/i, newStr: ""},
    {oldStr: /Valid\sUntil.*/i, newStr: ""},
    {oldStr: /If\syou\shave\sany\squestions.*/i, newStr: ""},
    {oldStr: /rn\s\(!\)/i, newStr: ""},
    {oldStr: /.*Plus,\senjoy\sthis\sperk:/i, newStr: ""},
    {oldStr: /So\.\sMany\.\sPerks\.\sSay\shi\sto\.\.\./i, newStr: ""},
    {oldStr: /^WHAT'S\sBETTER.*Plus,/i, newStr: ""},
    {oldStr: /^Come\ssee.*PLUS,/i, newStr: ""},
    {oldStr: /Plus,\sso\smuch\s\$/i, newStr: ""},
    {oldStr: /^((Hey,\swhat's\sup)|(Hi,\snice\sto)).*Plus,/i, newStr: ""},
    {oldStr: /SCORE\sNOW$/i, newStr: ""},
    {oldStr: /Cannot\sbe\scombined.*/i, newStr: ""},
    {oldStr: /Limited\stime\sonly.*/i, newStr: ""},
    {oldStr: /Use\scode\s\w+/i, newStr: ""},
    {oldStr: /USE\sCODE(\s+)?$/i, newStr: ""},
    {oldStr: /(\|\s)Details\sbelow\./i, newStr: ""},
    {oldStr: /^Also,?/i, newStr: ""},
    {oldStr: /OLD\sNAVY\sOUTLET.*Premium\sOutlets/i, newStr: ""},
    {oldStr: /APPLY\sNOW/i, newStr: ""},
    {oldStr: /BARCODE(\s\w+)/i, newStr: "$1"},
    {oldStr: /New\sstore\sreopening.*(get\s\$\d{1,2})/i, newStr: "$1"},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    //{oldStr: //i, newStr: ""},
    {oldStr: /\|(\s)?$/i, newStr: ""},
  ];

  replaceStrings.forEach(function(el) {
    data = data.replace(el.oldStr, el.newStr);
  });

 return data.trim();
}
