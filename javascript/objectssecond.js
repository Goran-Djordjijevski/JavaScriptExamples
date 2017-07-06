/* Objects: Part 2 */

// Using Objects for Lookups
var cars = {
    1: "Ford",
    2: "Mercedes",
    3: "Golf",
    4: "BMW"
};

console.log(cars[2]);

// Remove Object Properties

var numbers = {
    first: 2,
    second: 4,
    third: 6,
    fourth: 8
};

delete numbers.second;
console.log(numbers);

// Testing Objects for Properties

console.log(numbers.hasOwnProperty("first"));
console.log(numbers.hasOwnProperty("second"));

// Accessing and Modifying Nested Objects
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet":  {
        "topDrawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottomDrawer": "soda"
    }
};

console.log(ourStorage.cabinet.topDrawer.folder2);
console.log(ourStorage.desk.drawer);

ourStorage.cabinet.topDrawer.folder2 = "cake recipe";
console.log(ourStorage.cabinet.topDrawer.folder2);

// Generate an Array of All Objects Keys
console.log(Object.keys(ourStorage));