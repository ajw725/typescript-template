class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    hire(employee: string) {
        this.employees.push(employee);
    }

    printRoster() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const dept = new Department('d1', 'Engineering');
console.log(dept);

//const deptCopy = { describe: dept.describe, name: 'foo' };
//deptCopy.describe();

dept.hire('Jack');
dept.hire('Jill');
dept.printRoster();

const itDept = new ITDepartment('d2', ['Andrew']);
console.log(itDept);

const accounting = new AccountingDepartment('d3', []);
accounting.addReport('Something went wrong');
console.log(accounting);