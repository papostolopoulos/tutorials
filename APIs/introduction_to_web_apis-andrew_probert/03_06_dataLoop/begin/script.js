var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products?&order=name');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);

	var unorderedList = document.createElement("ul");
	document.body.appendChild(unorderedList);

	for(item in parsedData){
		var productName = document.createElement('li');
		var productImage = document.createElement("img");
		
		productName.innerHTML = parsedData[item].name;
		unorderedList.appendChild(productName);

		productImage.src = parsedData[item].image;
		unorderedList.appendChild(productImage);
	}
	
	
};

request.send();