// variable 
export var num1:number = 15;

// function
export function add(a: any, b: number) {
    return (a + b);
}


// Class
export class Student{
     name: string;
     age: number;
     
constructor (name:string, age:number){
    this.name = name;
    this.age = age;
}

     display():void {
        console.log (this.name + " " + this.age);
     }
}



