// 4. In the following two arrays find which two elements match
// using iterators.
// Array 1 - [“a”, “b”, “c”, “d”]
// Array 2 - [“e”, “f”, “g”, “h”, “a”, “i”, “j”]

//Program to find which two elements match using array filter iterator
let arr1 = ["a","b","c","d"];
let arr2 = ["e","f","g","h","a","i","j"];

let result = arr1.filter(ele => {
    return arr2.indexOf(ele) > -1;
})

console.log(result);
