// The right shift operation is similar to floor division by powers of
// two. Write a function that mimics (without the use of >>) the right
// shift operator and returns the result from the two given integers. Try
// to solve this challenge by recursion.


//function that mimics the right shift operator and returns the result from the two given integers.
function rightShift(num, den) {

    return Math.floor(num / Math.pow(2 , den));

}

//driver code
let result = rightShift(20,2);
console.log(result);