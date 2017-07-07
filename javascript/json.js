/* JSON - JavaScript Object Notation */

var simpleJSON = {
    "name": {
        "first": "Goran",
        "last": "Carnes"
    },
    "age": 30,
    "skills": ["C#", ".NET", "JavaScript"],
    "married": false,
    "superpowers": null
}

// Stringify method
var simpleStringi = JSON.stringify(simpleJSON);
console.log(simpleStringi);

// Parse method
// var stringJSON = "{'name': 'Goran', 'city': 'Zrenjanin', 'country': 'Serbia'}";
var parseJson = JSON.parse(simpleJSON);
console.log(parseJson);