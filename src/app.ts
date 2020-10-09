abstract class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

    abstract describe(this: Department): void;

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

    describe(this: ITDepartment) {
        console.log('I am an IT department!');
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found.');
    }
    set mostRecentReport(newVal) {
        this.mostRecentReport = newVal;
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe(this: AccountingDepartment) {
        console.log('Welcome to Accounting!');
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    hire(name: string) {
        if(name === 'Andrew') {
            console.error('Andrew is not an accountant');
            return;
        }
        this.employees.push(name);
    }
}

// const dept = new Department('d1', 'Engineering');
// console.log(dept);

//const deptCopy = { describe: dept.describe, name: 'foo' };
//deptCopy.describe();

// dept.hire('Jack');
// dept.hire('Jill');
// dept.printRoster();

const itDept = new ITDepartment('d2', ['Andrew']);
console.log(itDept);

const accounting = new AccountingDepartment('d3', []);
accounting.addReport('Something went wrong');
accounting.hire('Andrew');
accounting.hire('Alli');
console.log(accounting);
console.log(`Most recent report: ${accounting.mostRecentReport}`);