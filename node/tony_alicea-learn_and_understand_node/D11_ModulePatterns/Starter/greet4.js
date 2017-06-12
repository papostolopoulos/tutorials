function Greeter() {
    this.greeting = "Hello there 4";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greeter;