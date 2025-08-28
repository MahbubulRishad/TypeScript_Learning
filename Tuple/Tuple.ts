// var empId: number = 101;
// var empName: string = "Rishad";
// var empSalary: number = 1000;

// Declare Tuple
var employee = [101, "Jhob", 1000]; // without specifying type
console.log(employee);

// dec Tuple
var empleeInfo: [number, string, number] = [255, "Alpha", 500];
console.log(empleeInfo);

// Accessing data in elements

// *** for in loop

console.log("----------For in loop ---------- ");

for (var i in empleeInfo) {
    console.log(empleeInfo[i]);
}

// Add elements into tuples - push()

console.log("Add elements into tuples - push()");

var humanInfo: [string, number, string] = ["Mahbubul", 70, "Sherpur"];
humanInfo.push("Imran", 64, "Mymensingh");
console.log(humanInfo);


// Remove elements into tuples - pop()

console.log("Remove elements into tuples - pop()");

humanInfo.pop(); // Remove by the last element by default
console.log(humanInfo);

humanInfo.push("Rafa", 45, "Dhaka");
console.log(humanInfo);


// Update elements into tuples

console.log("update elements into tuples");

humanInfo[0] = "Ritika";
console.log(humanInfo);


// Tuple in multiple Array
console.log("-----------Tuple in multiple Array-----------");

var studentInfo: [number, string][ ] = [[1001, "Rishad"], [1002, "Mahbubul"]];
console.log(studentInfo);

console.log("--------");

studentInfo.push([1003, "Elita"], [1005, "Nammi"]);
console.log(studentInfo);
console.log(studentInfo[1]);
