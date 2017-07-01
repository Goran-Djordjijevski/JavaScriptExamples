/* Arrays */

var carNames = ["ford", "golf", "mercedes", "bmw", "toyota", "alfa romeo"];

console.log(carNames[3]);

carNames[3] = "volvo";
console.log(carNames[3]);

carNames.forEach(function(element) {
    console.log(element);
});