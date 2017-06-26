/* Data Types Examples */

// There are 7 data types

// Boolean

var data = true;

if (data === true) {
    console.log("This is true");
} else {
    console.log("This is false");
}

// null

var nullVariable = null;

console.log(nullVariable);

console.log(2 * nullVariable); // Value is 0 (zero)

// undefined

var a; // a is undefined

console.log(a + 2); // Value is NaN (Not a Number)

// Number

var firstNumber = 10;
var secondNumber = 10;

console.log(firstNumber + secondNumber); // Value is 20

// String

var myName = "Goran";
console.log("My name is " + myName); // Value is "My name is Goran"

// Symbol new to ES6 --- instances are unique and immutable

var symbol1 = Symbol("symbol");
var symbol2 = Symbol("symbol");

console.log(symbol1 === symbol2); // Value is false

//Object - 3 ways to create Object

// 1. Literal Notation

var person = new Object();
person.firstName = "Goran";
person.lastName = "Djordjijevski";

console.log("Your name is " + person.firstName + " and last name is " + person.lastName); // Value is ""Your name is Goran and last name is Djordjijevski"

// 2. Object notation

var user = {
    firstName: "Goran",
    lastName: "Djordjijevski"
};

console.log("Your name is " + user.firstName + " and last name is " + user.lastName); // Value is ""Your name is Goran and last name is Djordjijevski"

// 3. Constructor function

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var persons = new Person("Goran", "Djordjijevski");
console.log("Your name is " + persons.firstName + " and last name is " + persons.lastName); // Value is ""Your name is Goran and last name is Djordjijevski"