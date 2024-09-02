/*
  Array sort: Sorting Array Elements

*/

////////////////////////////
// SORT ARRAY OF OBJECT BY A PROPERTY
// The following is an array of employee objects, where each object contains three properties: name,salary and hireDate.
let employees = [
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' },
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
]

// \\\\\\\\\\\\\\\
// The following example shows how to sort the employees by salary in ascending order.
// <> Sorting objects by a numeric property
// sort by salary
employees.sort(function (x, y) {
  return x.salary - y.salary
})
console.table(employees)
// This example works the same as sorting an array of numbers in ascending order. The difference is that it compares the salary property of two objects.

// \\\\\\\\\\\\\\\
// <> Sorting objects by a string property
// To sort the employees array by name property case-insensitively, you pass the compare function that compares two strings case-insensitively as follows:
employees.sort(function (x, y) {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase()
  return a === b ? 0 : a > b ? 1 : -1
})
console.table(employees)

// \\\\\\\\\\\\\\\
// <> Sorting objects by the date property
// Suppose, you wish to sort employees based on each employee’s hire date.
// The hire date data is stored in the hireDate property of the employee object. However, it is just a string that represents a valid date, not the Date object.
// Therefore, to sort employees by hire date, you first have to create a valid Date object from the date string, and then compare two dates, which is the same as comparing two numbers.
employees.sort(function (x, y) {
  let a = new Date(x.hireDate),
    b = new Date(y.hireDate)
  return a - b
})
console.table(employees)
