class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    employeeId: number;
    companyName: string;
    deptName: string;

    constructor(employeeId: number, companyName: string, name: string, age:number){
        super(name,age);
        this.employeeId = employeeId;
        this.companyName = companyName;
    }

    printEmployeeDetails(): void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.employeeId);
        console.log(this.companyName);
    }

}

    var refat = new Employee(101, "STL", "Refat", 28);
    refat.printEmployeeDetails();