// 8). Create a function that determines whether a string is a valid hex
// code. A hex code must begin with a pound key # and is exactly 6
// characters in length. Each character must be a digit from 0-9 or an
// alphabetic character from A-F. All alphabetic characters may be
// uppercase or lowercase.
// Examples
// isValidHexCode("#CD5C5C") ➞ true
// isValidHexCode("#EAECEE") ➞ true
// isValidHexCode("#CD5C&C") ➞ false

//function that determines whether a string is a valid hex code
function isValidHexCode(hexcode) {
    let regex = /^#([0-9A-F]){6}$/gi;
    let found = regex.test(hexcode);

    if(found) return true;
    else return false;
}

//driver code
let result = isValidHexCode("#CD5C5F");
console.log(result);