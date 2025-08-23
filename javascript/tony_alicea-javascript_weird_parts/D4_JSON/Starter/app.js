var objectLiteral = {
  firstname: "Mary",
  isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

//  backticks work better. If you had quotations
// at the beginning of the string, you would have to have
// everything single lined
var fromValue = JSON.parse(`{
  "firstname": "Mary",
  "isAProgramer": true}`);

  
{
  "firstname": "Mary",
  "isAProgrammer": true
}
