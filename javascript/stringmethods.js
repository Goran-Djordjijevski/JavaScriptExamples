/* String Methods */

var stringOne = "Stackoverflow is the best place to found answer for you problem";
var stringTwo = " frontend and backend development";

// charAt()
var oneChar = stringOne.charAt(3);
console.log(oneChar);

// charCodeAt
var uniValue = stringOne.charCodeAt(1);
console.log(uniValue);

// concat()
var joinTwoStrings = stringOne.concat(stringTwo);
console.log(joinTwoStrings);

// endsWith()
var endWith = stringOne.endsWith("problem");
console.log(endWith);

// fromCharCode()
var charCode = String.fromCharCode(114);
console.log(charCode);

// includes()
var inc = stringOne.includes("best");
console.log(inc);

// indexOf()
var indexValue = stringTwo.indexOf("end");
console.log(indexValue);

// lastIndexOf()
var indexOfLastValue = stringTwo.lastIndexOf("end");
console.log(indexOfLastValue);

// match()
var matchValues = stringTwo.match(/end/g);
console.log(matchValues);

// repeat()
var repeatValue = stringOne.repeat(3);
console.log(repeatValue);

// replace()
var replaceValues = stringTwo.replace(/end/g, "END");
console.log(replaceValues);

// search()
var searchValue = stringTwo.search("end");
console.log(searchValue);

// slice()
var sliceValue = stringTwo.slice(2, 4);
console.log(sliceValue);

// split()
var splitValue = stringOne.split(" ");
console.log(splitValue);

// startsWith()
var startsWithValue = stringOne.startsWith("Stack");
console.log(startsWithValue);

// substr()
var substrValue = stringOne.substr(2, 4);
console.log(substrValue);

// substring()
var substringValue = stringOne.substring(2, 4);
console.log(substringValue);

// toLowerCase()
var toLowerCaseValue = stringOne.toLowerCase();
console.log(toLowerCaseValue);

// toUpperCase()
var toUpperCaseValue = stringOne.toUpperCase();
console.log(toUpperCaseValue);

// trim()
var stringThree = "     Check me!";
var trimValue = stringThree.trim();
console.log(trimValue);