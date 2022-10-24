
let obj ={
"id": [ 67, 48, 29 ],
"name": [ "Hitanshu", "Ninad", "Amandeep" ],
"salary": [ 75000, 82000, 98000 ]
}

// a) Print an array of all employee ids
console.log(`Employee IDs: [${obj.id}]`);

// b) Print count of employees
console.log(`Count of Employees: ${obj.id.length}`);

// c) Print the name of the employee according to their id { key: value }
const employees = new Map();
for(let i =0; i<obj.id.length; i++){
    employees[obj.id[i]] = obj.name[i];
}
console.log(employees);

// d) Store the salaries of all employees in an array
console.log(`Salaries of all Employees: [${obj.salary}]`);

// e) Calculate the average salary the company is paying to its employees
let sumOfSalaries = 0;
for(let i =0; i<obj.id.length; i++) {
    sumOfSalaries += obj.salary[i];
}
console.log(`Average salary company paying is : ${sumOfSalaries/obj.id.length}`)



// Output:
// [ 67, 48, 29 ]
// 3
// 67: Hitanshu
// 48: Ninad
// 29: Amandeep
// [ 75000, 82000, 98000 ]
// 85000