
// 4). This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one
// has three dots, the third one has 6 dots and so on.
// Write a function that returns the cumulative sum of the number of
// all the previous (including current) dots when given its
// corresponding triangle number of the sequence.

//function that returns the cumulative sum of the number of all the previous (including current) dots when given its corresponding triangle number of the sequence.
function dotsInTriangle(num){
    let sum =0,total=0;

    for(let i =1; i<=num; i++){
        sum += i;
        total += sum;
    }

    return total;
}

//driver code
let result = dotsInTriangle(4);
console.log(result);