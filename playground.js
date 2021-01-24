function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price, category) {
  Product.call(this, name, price);
  this.category = category;
}

function Food1(name, price, category){
  this.category = category;
}

Food1.prototype = new Product();

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

var o = {
  a: 2,
  get m: function() {
    return this.a + 1;
  },

  set m: function(arg){
    this.a = arg * 2;
  }
};
