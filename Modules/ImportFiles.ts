// Accessing imported variable
import { num1 } from "./ExportFile";
console.log("Imported var: " + num1);



// Accessing imported function
import { add } from "./ExportFile";
var sum: number = add(10, 20);
console.log("Imported sum function" + sum);


// Accessing imported class
import { Student } from "./ExportFile";

var stu = new Student("Labbi", 15);

console.log("Imported class method");
stu.display();



// // run tsc file 
// tsc --module commonjs ExportFile.ts
// tsc --module commonjs ImportFile.ts
// node ImportFile.js