// 1. Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) 
// b) 
// c) 
// d) 
// e) 
// Places
// Sample Input:
// [ 1, 2, 3, 4, 5 ]

// Sample Output:
// Difference = 3
// Odd Elements = 3
// Even Elements = 2
// Average = 3
// GCD = 3


//driver code

//To take input from console
let userInput = prompt('Enter comma separated numbers');
let arr= userInput.split(',');
arr = arr.map(i => parseInt(i));

//let arr = [1,2,3,4,5];

let oddEle = arr.filter(num => num%2 !=0);
console.log(oddEle);
let evenEle = arr.filter(num => num%2 ==0);
console.log(evenEle);

//Print the difference between the two sums
let sumInOdd = oddEle.reduce((sum,ele) => sum+ele);
console.log(sumInOdd)
let sumInEven = evenEle.reduce((sum,ele) => sum+ele);
console.log(sumInEven);
let difference = Math.abs(sumInEven-sumInOdd);
console.log(`Difference = ${difference}`);

//Print the number of elements in odd places
console.log(`Odd Elements = ${oddEle.length}`);

//Print the number of elements in even places
console.log(`Even Elements = ${evenEle.length}`);

//Print the average of all elements in the array
let avg = (sumInOdd+sumInEven)/arr.length;
console.log(`Average = ${avg}`);

//Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places
let GCD = gcd(sumInEven,sumInOdd);
function gcd(a,b) {
    if(b==0) return a;
    else return gcd(b,a%b);
}
console.log(`GCD = ${GCD}`);