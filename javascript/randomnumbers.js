/* Random numbers and parseInt */

var simpleRandomNumber = Math.floor(Math.random() * 20);
console.log(simpleRandomNumber);

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomRange(1, 10));