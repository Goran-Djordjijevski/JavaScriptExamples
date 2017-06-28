/* Functions */

function square(number) {
    return number * number;
}

var squareResult = square(3);
console.log(squareResult);

// Scope
var name = "Goran";
function sayTheName() {
    var name = "Pixi";
    console.log(name);
}

sayTheName();

///////////////////////////////////////////////////////

function addSquares(one, two) {
    function square(three) {
        return three * three;
    }

    return square(one) + square(two);
}

var first = addSquares(2, 3); // return 13
var second = addSquares(3, 4); // return 25
var third = addSquares(4, 5) // returns 41

console.log(first);
console.log(second);
console.log(third);
