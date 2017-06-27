/* Strings: [bracket notation] */

var name = "Goran";

console.log("First letter of your name is " + name[0]);

var fox = "Fox is a wise animal";

for (var i = 0; i < fox.length; i++) {
    if (fox[i] === "w") {
        console.log("You found the right letter");
        break;
    }
}