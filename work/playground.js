
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

var str = `Thank you for using our online services.

This confirms your Payment Arrangement for Account Number ******6864.

Your Payment Arrangement schedule is shown below:

First Payment:
Date: 12/28/2018
Amount:$ 39.11

Second Payment:
Date: 01/22/2019
Amount:$ 30.42

Third Payment:
Date: 02/21/2019
Amount:$ 30.42

Fourth Payment:
Date: 03/23/2019
Amount:$ 30.41

IMPORTANT NOTE:To avoid service interruption, pay your Payment Arrangement installments and any future charges on time.`

str.split(/(amount\s?(:|of)\s?\$\s?\d{1,}(\.\d{2})?)/i);
str.split("Amount:")
