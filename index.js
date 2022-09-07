function factorialOfPrime(lowerRange, upperRange) {

    //Logic to print Prime Numbers
    let primeNumbers =[];
    for (j=lowerRange; j <= upperRange;j++) {
        let count = 0;
        for (let i= 1 ; i <= upperRange ; i++) {
            if(j%i == 0) {
                count++;
            }
        }
        if (count ==2) {
            primeNumbers.push(j)
        }
    }

    // Logic to printt Factorial

    for(let num of primeNumbers){
        let fact =1;
        for(let x=1; x<=num; x++){
            fact = fact * x;
        }
        console.log (`Factorial of ${num}! is ${fact}.`);
    }
    return (`List of Prime Numbers between ${lowerRange} and ${upperRange} is [${primeNumbers}]`);
    
}


//function checking

let result = factorialOfPrime(1,20);
console.log(result);