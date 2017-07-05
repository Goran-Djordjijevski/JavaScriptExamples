/* For in and For of */

var person = {
    firstName: "Goran",
    lastName: "Djordjijevski",
    age: 30
};

var text = "";
for (var p in person) {
    text += person[p];
    console.log(p);
}

console.log(text);