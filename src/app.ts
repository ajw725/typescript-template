class Department {
    constructor(private readonly id: string, public name: string, private employees: string[]) {}

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

const dept = new Department('1', 'Engineering', []);
console.log(dept);

//const deptCopy = { describe: dept.describe, name: 'foo' };
//deptCopy.describe();

dept.hire('Jack');
dept.hire('Jill');
dept.printRoster();