// Anonymous Function

var greeting = function () {
    console.log("Greetings!!!!!");
}

greeting();


// Anonymous Function with parameterized and return type

console.log("Anonymous Function with parameterized and return type------");

var printMultiply = function (x: number, y: number): number {
    return (x * y);
}

console.log(printMultiply(10, 5));


//******************* */ defined parameter

console.log("---defined parameter---");

function greetins(msg: string, name: string): string {
    return msg + " " + name;
}
console.log(greetins("Hi", 'Rishad')); // ok --> expecting 2 args and got 2 args
// console.log(greetins("Hi")); // compiler error --> expecting 2 args and got 1 args
// console.log(greetins("Hi", "Rishad", "Raka")); // compiler error --> expecting 2 args and got 3 args



//******************* */ optional parameter

console.log("---optional parameter---");

function printDetails(name: string, weight: number, address?: string): string {
    return name + " " + weight + " " + address;
}

console.log(printDetails("Rishad", 69, "Sherpur")); // ok --> expecting 2 args and got 2 args
console.log(printDetails("Alpha", 75)); // ok - 3rd one is optional parameter 
// console.log(printDetails("Rafat", 84, "Dhaka", "Munshigong")); // compiler error --> expecting 2 args and got 4 args



//******************* */ default parameter

console.log("---default parameter---");

function defaultParameterFunction(sId: number, name: string, greetingMsg: string = "Hi!!"): string {
    return greetingMsg + " " + name + " " + sId;
}

console.log(defaultParameterFunction(101, "Asad", "Hello"));
console.log(defaultParameterFunction(101, "Rakuna"));

