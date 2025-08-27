// Array dec and Init 

var fruits: string[] = ["Apple", "Banana", "Mango"];
console.log(fruits);

console.log("------------");

// or 

// Array dec
var flowers: Array<String>;
// Value init
flowers = ["Rose", "Sun-flower", "Dahlia", "Orchid"];
console.log(flowers);

console.log("------------");



// multi-type array
var NoAndFruites: (String | number)[] = ["Banana", 500, "Apple", 300];
console.log(NoAndFruites);

console.log("------------");

// or 

var flowerAndNo: Array<(String | number)> = ["Rose", 50, "Dhalia", 100];
console.log(flowerAndNo);

// ***** Access array element
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log("------------");

for (var i: number = 0; i < flowers.length; i++) {
    console.log(flowers[i]);
}

console.log("------for in------");

for (var j in fruits){
    console.log(fruits[j]);
}
