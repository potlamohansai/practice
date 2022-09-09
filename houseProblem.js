//Program to find number of matchsticks required to build given number of houses

function noOfMatchSticks(countOfHouses) {
    matchSticksRequired = 6 + 5*(countOfHouses-1);
    return matchSticksRequired;
}

//function Checking

let result = noOfMatchSticks(87);
console.log(result);