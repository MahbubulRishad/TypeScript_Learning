// **** 2D Array ****

//Declaration and init
var myArray: number[][] = [[10, 20], [30, 40], [50, 60], [70, 80]];
console.log(myArray);


// Multi-type 2D array
var myDetails: (string | number)[][] = [["Rishad", 70], ["Ashkary", 68], ["Emu", 67]];
console.log(myDetails);


// Access 2D array element
console.log(myDetails[0][0]);
console.log(myDetails[0][1]);
console.log(myDetails[1][0]);
console.log(myDetails[1][1]);
console.log(myDetails[2][0]);
console.log(myDetails[2][1]);


// for loop
console.log("****** For loop ************");
for (var i: number = 0; i < myDetails.length; i++) {
    for (var j: number = 0; j < myDetails[i].length; j++) {
        console.log("Value: " + myDetails[i][j]);
    }
}


// for in loop
console.log("****** For in loop ************");

for (var k in myDetails) {
    for (var l in myDetails[k]) {
        console.log("Value: " + myDetails[k][l]);
    }
}