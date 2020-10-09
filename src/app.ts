class Department {
    name: string;
    private employees: string[] = [];

    constructor(newName: string) {
        this.name = newName;
    }

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

const dept = new Department('Engineering');
console.log(dept);

//const deptCopy = { describe: dept.describe, name: 'foo' };
//deptCopy.describe();

dept.hire('Jack');
dept.hire('Jill');
dept.printRoster();