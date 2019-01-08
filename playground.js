function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

class Product1{
	constructor(name, price){
		this.name = name;
		this.price = price;
	}
}

class Food1 extends Product1{
	constructor(name, price, category){
		super(name, price);
		this.category = category;
	}
}
