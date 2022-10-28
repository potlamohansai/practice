// 4). Create a function that will return an integer number
// corresponding to the amount of digits in the given integer num
// Examples
// num_of_digits(1000) ➞ 4
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10

//function that will return an integer number corresponding to the amount of digits in the given integer

function num_of_digits(num) {
    num = num.toString();
    let regex = /[0-9]/g;
    let found = num.match(regex)
    return found.length;
}

//driver code
let result = num_of_digits(1305981031);
console.log(result);