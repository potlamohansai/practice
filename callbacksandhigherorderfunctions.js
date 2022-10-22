function doArithmetic(arr, instruction) {    
    const output =[];
    for(let i=0; i<arr.length; i++){
        output.push(instruction(arr[i]));    
    }
    return output;
}

function multiplyByTwo(input) {
    return input*2;
}


let arr = [1,2,3,4];

let result = doArithmetic(arr, multiplyByTwo);

console.log(result);

//doArithmetic is a Higher order function because it takes in a function called instruction.
//Here, Instruction is a callback function which does some work and gives output.