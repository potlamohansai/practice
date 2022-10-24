// 3. Write a JavaScript program to iterate over an array inputted by the user using
// mapping. Perform the square of all elements in the original array, store the
// squares in a new array and make a mapping for the squares and display it.

// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Original Array = [ 1, 2, 3, 4, 5 ]
// New Array = [ 1, 4, 9, 16, 25 ]
// Mapping = squares => [ 1, 4, 9, 16, 25 ]
// Output:
// [ 1, 4, 9, 16, 25 ]

//To take input from Browser
let elements = prompt("Enter values of Array");
elements = elements.split(',');
elements = elements.map(i => parseInt(i));
//document.write(elements)
console.log(elements)


// let elements = [ 1, 2, 3, 4, 5 ];

//Squares of Input Elements
let squares = elements.map(num => num*num)
console.log(squares);

//Mapping of Elements with Squares
let mappedValues = new Map();
for(let element of elements){
    mappedValues.set(element,squares[elements.indexOf(element)]);
}
console.log(mappedValues)

