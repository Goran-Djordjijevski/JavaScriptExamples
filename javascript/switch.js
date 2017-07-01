/* Switch operator */

var day = new Date().getDay();
var yourDay;

switch (day) {
    case 0:
        yourDay = "Sunday";
        break;
    case 1:
        yourDay = "Monday";
        break;
    case 2:
        yourDay = "Tuesday";
        break;
    case 3:
        yourDay = "Wednesday";
        break;
    case 4:
        yourDay = "Thursday";
        break;
    case 5:
        yourDay = "Friday";
        break;
    case 6:
        yourDay = "Saturday";
        break;
}

console.log(yourDay);

var animal = "Dog";
switch (animal) {
    case "Cow":
    case "Giraffe":
    case "Dog":
    case "Pig":
        console.log("This animal will go on Noah's Ark");
        break;
    case "Spoon":
        console.log("A spoon is not a animal");
        break;
    default:
        console.log("You have wrong answer");
}