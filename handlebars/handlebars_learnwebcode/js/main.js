var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();





function createHTML(petsData) {
  var rawTemplate = document.getElementById("petsTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(petsData);

  var petsContainer = document.getElementById("pets-container")
  petsContainer.innerHTML = ourGeneratedHTML;
}
