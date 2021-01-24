fetch('https://hplussport.com/api/products')
.then(
	function(response) {
		console.log("Response", response)
		return response.json();
	}
)
.then(
	function(respData) {
		console.log(respData);
	}
)