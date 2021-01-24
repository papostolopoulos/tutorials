function Greeter() {
    this.greeting = "Hello there 3";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greeter();