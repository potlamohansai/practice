// 1. Write a JavaScript program to get an array from the user and return the:
// a) Sum of all elements in the array using reduce()
// b) Average of all elements in the array using reduce()
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Output:
// 15
// 3


//To take input from user in Browser
let arr = prompt("Enter array values");
arr = arr.split(",");
arr = arr.map(i => parseInt(i));

//let arr = [ 1, 2, 3, 4, 5 ];

//a) Sum of all elements in the array using reduce()
let sum = arr.reduce((sum, ele) => sum+ele);
console.log(sum);

//b) Average of all elements in the array using reduce()
let avg = arr.reduce((sum,ele,index,ar) => (sum+ele/ar.length),0);
console.log(avg);