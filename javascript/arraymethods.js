/* Common Arrays methods */

var numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers);

numbers.pop();
console.log(numbers);

var numbers2 = [4, 5];
console.log(numbers.concat(numbers2));
console.log(numbers);

var joinNumbers = numbers.join("!");
console.log(joinNumbers);

var removeFirstNumber = numbers.shift();
console.log(removeFirstNumber);

var insertNewNumber = numbers.unshift(9);
console.log(insertNewNumber);