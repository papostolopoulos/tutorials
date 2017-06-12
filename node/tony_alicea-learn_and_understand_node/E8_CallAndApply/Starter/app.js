var obj = {
    name: "Paris Apostolopoulos",
    greet: function() {
        console.log(`Hello ${this.name}`)
    }
}

obj.greet();
obj.greet.call({name: "George Michos"});
obj.greet.apply({name: "Nikos Tiotsios"})