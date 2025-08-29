// ***** Flat Arrow function

console.log("***** Flat Arrow function");
var sum = (x: number, y: number, z: number): number => {  // should not specify the function key word
    return (x + y + z);
}

console.log(sum(10, 20, 30));

// ***** Flat Arrow function

console.log("***** Flat Arrow function without parameter");
var displayText = () => {
    console.log("Parameter less flat arrow function");
}

var displayText2 = () => console.log("Parameter less flat arrow function with a single line");

displayText();
displayText2();

// if the function body consists of only one statement
// then no need for the curly brackets and return keyword

console.log("if the function body consists of only one statement, then no need for the curly brackets and return keyword");

var printMultiply = (x: number, y: number) => (x * y);
console.log(printMultiply(10, 6));