// 3). Write a regular expression that matches only a prime number.
// Numbers will be presented as strings.
// Example
// “7” ➞ true
// “134” ➞ false

//function that matches only a prime number
function checkPrime(str){
    let num = "1".repeat(str);
    let regex = /^1?$|^(11+?)\1+$/

    let found = regex.test(num);
    if(found){
        return (false);
    }else{
        return (true);
    };
}


//driver code
let result = checkPrime("3");
console.log(result);