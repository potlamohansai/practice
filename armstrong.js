// Program to find given number is armstrong or not

function isArmstrong(number) {
    let givenNumber = number;
    let cubeSum=0;
    while(givenNumber !=0) {
        let digit = givenNumber % 10;
        cubeSum += (digit*digit*digit);
        givenNumber = parseInt(givenNumber /10);
    }
    if(number == cubeSum) {
        return (`Given Number ${number} is Armstrong Number.`)
    }
    else {
        return (`Given Number ${number} is not an Armstrong Number.`)
    }
}

//function checking

let result = isArmstrong(100);
console.log(result);