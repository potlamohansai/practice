// 9). Create a function that takes an array of numbers and returns
// "Boom!" if the digit 7 appears in the array. Otherwise, return "there is
// no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

//function that takes an array of numbers and returns "Boom!" if the digit 7 appears in the array
function sevenBoom(arr) {
    let str = arr.join('');
    let regex = /7/;
    let found = regex.test(str);
    if(found) return "Boom!";
    else return "there is no 7 in the array";
}

//driver code
let result = sevenBoom([1, 2, 3, 4, 5, 6,7]);
console.log(result);