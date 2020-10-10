type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// use intersection operator to combine attributes of other types.
// NOTE: also possible with interfaces, i.e. Admin and Employee interfaces, then
// interface ElevatedEmployee extends Employee, Admin
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Andrew',
  privileges: ['create-server'],
  startDate: new Date()
};

// you can also do this with union types!
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;