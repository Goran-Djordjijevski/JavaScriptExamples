/* Copying Arrays */

var original = [1, 2, 3 , 4 ,5, 6];

// slice
var copy1 = original.slice(0);
console.log(copy1);

// spread operator
var copy2 = [...original];
console.log(copy1, copy2);