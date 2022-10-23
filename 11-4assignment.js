// 4. Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array


//To take input from console
let arr = prompt("Enter the array elements");
arr = arr.split(',');
arr = arr.map(i => parseInt(i));

// let arr = [1,2,3,2,3,4,5];

// Program to Store all duplicate elements in a separate array
let duplicates = arr.filter( (num,index) =>{
    if(arr.indexOf(num) != index) return num;
})
console.log(duplicates);

//Program to Remove the duplicate elements from the original array
arr = [...new Set(arr)];
console.log(arr);