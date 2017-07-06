/* Objects */

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log("My car makes is " + myCar.make + " and model is " + myCar.model);

// Creation: object initializer
var ford = {
    color: "blue",
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    }
};

console.log(ford.engine.cylinders);

// Creation: constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var yugo = new Car("Yugo", "Corola", 1992);
var mazda = new Car("Mazda", "Miata", 1991);

// Creation: Object.create
var Animal = {
    type: "Invertebrates",
    displayType: function() {
        console.log(this.type);
    }
};

var animal1 = Object.create(Animal);
animal1.displayType();

var fox = Object.create(Animal);
fox.type = "Foxes";
fox.displayType();