/* Hoisting */

// console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

console.log(definedLater);
var definedLater;
definedLater = "I am defined";
console.log(definedLater);

console.log(defined);
var defined = "I am defined simulateneously";
console.log(defined);

doSomething();
function doSomething() {
    console.log("I did it!");
}

functionVar(); // Uncaught TypeError: functionVar is not a function
var functionVar = function() {
    console.log("This doesn't work");
};