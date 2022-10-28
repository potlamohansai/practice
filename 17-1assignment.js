// 1. Create a function to iterate over the following list [“John”,
//     “Rohn”, “Danny”, “James”]

//function to iterate over the list
function iterateArr(arr) {
    arr.forEach(element => {
        console.log(element)
    });
    return 0;
}


//driver code
let arr = ["John","Rohn", "Danny", "James"];
iterateArr(arr);