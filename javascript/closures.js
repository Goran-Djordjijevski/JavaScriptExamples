/* Closures */

function simpleFunc() {
    var name = "Goran";
    function displayName() {
        console.log(name);
    }

    return displayName;
}

var myFunc = simpleFunc();
myFunc();