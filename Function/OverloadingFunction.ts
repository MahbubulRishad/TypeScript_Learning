// Function overloading with different numbers of parameters and type with the same name is not supported in typescript

function add(x: number, y: number): number;
function add(firstname: string, secondname: string): string;

function add(a: any, b: any) {
    return (a + b);
}
console.log("Number overloading: " + add(100, 200));
console.log("String concat: " + add("Hi ", "Rishad"));


// console.log("---*------");

// function printMultiply(x: number, y: number): number {
//     return x * y;
// }

// function printMultiply(x: number, y: number, z: number): number {
//     return x * y * z;

// }  - not supported in typescript


// ******************** Rest parameter
function greetings(msg:string, ...name:string[]): string{
    return msg + " " + name.join(" ");
}

console.log(greetings("Hi!!"));
console.log(greetings("Hi!!", "Rishad"));
console.log(greetings("Hi!!", "Rishad", "Rimon"));
console.log(greetings("Hi!!", "Rfat", "Rashid", "Tasfy", "Rokea"));