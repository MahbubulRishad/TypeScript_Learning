// Named function

function printMessage() {
    console.log("Hello welcome");
}

printMessage();

// parameter and return type

function printSum(x: number, y: number): number {
    return (x + y);
}

var sumResult: number = printSum(100, 200);
console.log(sumResult);