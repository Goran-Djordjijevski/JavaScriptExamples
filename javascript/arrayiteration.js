/* Array iteration */

// forEach
var simpleArr = [1, 2, 3];
var result = simpleArr.forEach(function(item, index) {
    console.log(item, index);
});

// map
var five = [1, 2, 3, 4, 5];
var doubled = five.map(function(item) {
    return item * 2;
});

console.log(doubled);

// filter
var ints = [1, 2, 3, 4, 5];
var evens = ints.filter(function(item) {
    return item % 2 === 0;
});

console.log(evens);

// reduce
var sum = [1, 2, 3, 4, 5];
var res = sum.reduce(function(result, item) {
    return result + item;
}, 0);

console.log(res);

// sum
var negativeNumbers = [1, 2, 3, -1, 5, -6];
var negNum = negativeNumbers.some(function(item) {
    return item < 0;
});
console.log(negNum);

// every
var positiveNumbers = [1, 2, 3, 4, 5];
var positive = positiveNumbers.every(function(item) {
    return item > 0;
});

console.log(positive);