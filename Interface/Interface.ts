
// Interface
interface IStudent {
    name: string;
    age: number;
    studentID: number;
    display:() => void;
}

// Implemeting innterface in var
var student: IStudent = {
    name: "Rishad",
    age: 18,
    studentID: 101, 

    display(): void {
       console.log(this.name+ " "+ this.age+ " "+this.studentID); 
    },
}

// invoke
console.log(student.name);
console.log(student.age);
console.log(student.studentID);

student.display();