/* Ternary operator */

// condition ? expression1 : expression2

var age = 15;

var isItTrue = age >= 18 ? "You are an adult" : "You are a child";
console.log(isItTrue);

var stop;

age > 18 ? (
    console.log("OK, you can go"),
    stop = false
) : (
    console.log("Sorry, you are too young"),
    stop = true
);

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";
    
console.log(access);