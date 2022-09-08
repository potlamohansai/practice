// Program to find given number is SpecialNumber or not

function isSpecialNumber(number) {
    let givenNumber = number;
    let factSum=0;
    while(givenNumber != 0) {
        let digit = givenNumber % 10;
        let fact = 1;
        for (let i=1; i<=digit; i++) {
            fact *= i;
        }
        factSum += fact;
        givenNumber = parseInt(givenNumber/10);
    }
    if(number == factSum) {
        return (`Given number ${number} is a Special Number.`)
    }
    else {
        return (`Given number ${number} is not a Special Number.`)
    }
}

//function checking

let result = isSpecialNumber(145);
console.log(result);