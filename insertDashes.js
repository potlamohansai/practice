// Program to insert dashes (-) between each two even numbers.

function insertDash(num) {
    let numArr = num.toString();
    let result = [numArr[0]];
    
    for (let x = 1; x < numArr.length; x++) {
      if (numArr[x - 1] % 2 === 0 && numArr[x] % 2 === 0) {
        result.push('-', numArr[x]);
      } else {
        result.push(numArr[x]);
      }
    }
    return (result.join(''));
}

//driver Code

let output = insertDash(01246);
console.log(output);
