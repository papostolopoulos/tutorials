var request = new XMLHttpRequest();
request.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=t1vnpjeQnY5KBPjNDgbOSxjN3yk22ao6&rating=r&tag=boobs");

request.onload = function(){
    var response = request.response;

    var parsedData = JSON.parse(response);
    console.log(parsedData.data);

    var image = document.createElement("img");
    image.src = parsedData.data.images.original.url;
    document.body.appendChild(image);
}

request.send()