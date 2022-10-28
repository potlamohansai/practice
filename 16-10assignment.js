// 10). Create a function that takes a string, checks if it has the same
// number of x's and o's and returns either true or false.
// ● Return a boolean value (true or false).
// ● Return true if the amount of x's and o's are the same.
// ● Return false if they aren't the same amount.
// ● The string can contain any character.
// ● When "x" and "o" are not in the string, return true.
// Examples
// XO("ooxx") ➞ true
// XO("xooxx") ➞ false
// XO("ooxXm") ➞ true
// // Case insensitive.
// Notes
// ● Remember to return true if there aren't any x's or o's.
// ● Must be case insensitive.


//function that takes a string, checks if it has the same number of x's and o's and returns either true or false
function XO(str) {
    let regForX = /x/gi;
    let regForO = /o/gi;
    let arrOfX = str.match(regForX);
    let arrOfO = str.match(regForO);
    
    if(arrOfO == null && arrOfX == null){
        return true;
    }else if (arrOfO.length == arrOfX.length){
        return true;
    }else{
        return false;
    }
}

//driver code
let result = XO("ooOxxxm");
console.log(result);