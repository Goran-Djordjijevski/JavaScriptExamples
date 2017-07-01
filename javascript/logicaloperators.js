/* Logical operators && Short Circuit Evaluation */

// And: &&      Or: ||

var number = 7;

if (number > 5 && number < 10) {
    console.log("This is true");
}

var test = true;

var isTrue = function () {
    console.log("Test is true.");
}

var isFalse = function () {
    console.log("Test is false.");
}

if (test) {
    isTrue();
}

function theSameOldName(name) {
    name = name || "Pixi";
    console.log("My best friend's name is " + name);
}

theSameOldName();
theSameOldName("Goran");