console.log("JS is connected to the html page");
// window.onload = function(){
//
// }

// Selecting elements 1
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(){
    alert("The text you entered was: " + inputTag.value);
  });

//Selecting elements 2
  var codeButton = document.getElementById("codeButton");
  codeButton.addEventListener("click", function () {
    var code = document.getElementsByTagName("code");
    for (var i = 0; i < code.length; i++) {
      console.log(code[i]);
    }
  });

// Working with DOM
var buttonWorkingWithDom = document.getElementById("buttonWorkingWithDom");
buttonWorkingWithDom.addEventListener("click", function () {
  var divExampleWorkingWithDom = document.getElementById("divExampleWorkingWithDom");
  var workingWithDomNodes = divExampleWorkingWithDom.childNodes

  var inputWorkingWithDom = document.getElementById("inputWorkingWithDom");

  for (var i = 0; i < workingWithDomNodes.length; i++) {
    if (workingWithDomNodes[i].nodeName === "P") {
      workingWithDomNodes[i].innerHTML = inputWorkingWithDom.value;
    }
  }
});

// Changing Attributes
var buttonChangeAttribute = document.getElementById("buttonChangeAttribute");
buttonChangeAttribute.addEventListener("click", function () {
var imgChangeAttribute = document.getElementById("imgChangeAttribute");
imgChangeAttribute.src === "https://media-cdn.tripadvisor.com/media/photo-s/07/0c/68/d4/aegli-1876.jpg"?imgChangeAttribute.src = "https://media-cdn.tripadvisor.com/media/photo-s/06/8e/b9/77/captain-sifakis.jpg" :imgChangeAttribute.src = "https://media-cdn.tripadvisor.com/media/photo-s/07/0c/68/d4/aegli-1876.jpg";
});

// Changing styles
var buttonChangeStyle = document.getElementById("buttonChangeStyle");
buttonChangeStyle.addEventListener("click", function () {
  var divCodeChangeStyle = document.getElementById("divCodeChangeStyle");
  // Ternary operator format
  // divCodeChangeStyle.style.backgroundColor === "rgb(102, 204, 255)" ? divCodeChangeStyle.style = "background-color: pink; border-color: red":     divCodeChangeStyle.style = "background-color: #66ccff; border-color: blue"
  if (divCodeChangeStyle.style.backgroundColor === "rgb(102, 204, 255)") {
    divCodeChangeStyle.style = "background-color: pink; border-color: red"
  }
  else {
    divCodeChangeStyle.style = "background-color: #66ccff; border-color: blue"
  }
  // Alternative way to write the line above:
  // divCodeChangeStyle.style.backgroundColor = "#66ccff";
  // divCodeChangeStyle.style.borderColor = "blue";
});

// Creating Elements
var buttonCreatingElements = document.getElementById("buttonCreatingElements");
buttonCreatingElements.addEventListener("click", function () {
  var inputCreatingElements = document.getElementById("inputCreatingElements");
  var paragraphCreateElement = document.createElement("p");
  var textValueCreateElement = document.createTextNode(inputCreatingElements.value);
  paragraphCreateElement.appendChild(textValueCreateElement);
  var divCreatingElementsExample = document.getElementById("divCreatingElementsExample");
  divCreatingElementsExample.insertBefore(paragraphCreateElement, divCreatingElementsExample.childNodes[4]);
});


//Removing elements
var buttonRemoveChild = document.getElementById("buttonRemoveChild");
buttonRemoveChild.addEventListener("click", function () {
  var articleRemovingElements = document.getElementById("articleRemovingElements");
  articleRemovingElements.removeChild(articleRemovingElements.firstChild);
  articleRemovingElements.removeChild(articleRemovingElements.firstChild);
  //Two removals because the #text child node needs to be removed first
});


// Replacing elements
var buttonReplaceChild = document.getElementById("buttonReplaceChild");
buttonReplaceChild.addEventListener("click", function () {

  var h4ExampleReplacement = document.createElement("h4");
  var h4ExampleTextNode = document.createTextNode("This is the Example heading and I was changed!");
  h4ExampleReplacement.appendChild(h4ExampleTextNode);

  var divExampleReplaceChild = document.getElementById("divExampleReplaceChild");
  var h4ExampleReplaced = divExampleReplaceChild.getElementsByTagName("h4")[0];
  divExampleReplaceChild.replaceChild(h4ExampleReplacement, h4ExampleReplaced);
  console.log(h4ExampleReplaced);
});


// Animations
var buttonAnimate = document.getElementById("buttonAnimate");
var box = document.getElementById("divBox");
var interval;
var pos = 0;
var maxCounter = 0;

buttonAnimate.addEventListener("click", function () {
  if (typeof interval === "number") {
    clearInterval(interval);
    interval = "";
    return;
  }

  interval = setInterval(move, 10);


  function move() {
    if (pos < 250 && maxCounter === 0) pos += 1, box.style.left = pos + "px";
    if (pos === 250) maxCounter = 1;
    if (maxCounter === 1) pos -= 1, box.style.left = pos + "px";
    if (pos === 0) maxCounter = 0;
  }

    // function move() {
    //   if (pos >= 250) {
    //     clearInterval(interval);
    //   }
    //   else {
    //     pos += 1;
    //     box.style.left = pos + "px";
    //   }
    // }
});


//Capitalize the content of the input after text is entered
function capitalizeText() {
  var inputCapitalize = document.getElementById("inputCapitalize");
  inputCapitalize.value = inputCapitalize.value.toUpperCase();
}
