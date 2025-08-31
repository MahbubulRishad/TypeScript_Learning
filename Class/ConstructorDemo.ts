// Class dec
class Student {
    stu_id: number;
    stu_name: string;
    stu_class: string;
    stu_address: string;

    constructor(stu_id: number, stu_name: string, stu_class: string, stu_address: string) {
        this.stu_id = stu_id;
        this.stu_name = stu_name;
        this.stu_class = stu_class;
        this.stu_address = stu_address;
    }


    printStudentDetails(): void {
        console.log("Student Id: " + this.stu_id);
        console.log("Student Name: " + this.stu_name);
        console.log("Student Dept: " + this.stu_class);
        console.log("Student Address: " + this.stu_address);
    }

}

var stu_sakin = new Student(1001, "Sakin", "Class 2", "Sherpur");
stu_sakin.printStudentDetails();