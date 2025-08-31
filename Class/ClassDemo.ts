// Class dec
class Employee {
    emp_id: number;
    emp_name: string;
    emp_dept: string;
    emp_salary: number;


    printEmployeeDetails(): void {
        console.log("Employee Id: " + this.emp_id);
        console.log("Employee Name: " + this.emp_name);
        console.log("Employee Dept: " + this.emp_dept);
        console.log("Employee Salary: " + this.emp_salary);
    }

}

// Object Creation
var emp_sadat = new Employee();
emp_sadat.emp_id = 100;
emp_sadat.emp_name = "Sadat";
emp_sadat.emp_dept = "Dev";
emp_sadat.emp_salary = 5000;

emp_sadat.printEmployeeDetails();

var emp_rokib = new Employee();
emp_sadat.emp_id = 101;
emp_sadat.emp_name = "Rokib";
emp_sadat.emp_dept = "QA";
emp_sadat.emp_salary = 500;

emp_sadat.printEmployeeDetails();