var request = new XMLHttpRequest;

request.open("GET", "https://hplussport.com/api/products");

request.onload = function(){
    var response = request.response;
    var responseJson = JSON.parse(response);
    console.log(responseJson);
}

request.send();