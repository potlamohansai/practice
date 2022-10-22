const numbers = new Set();

while(numbers.size != 5){
    numbers.add( Math.round((Math.random()*10)) );
}

console.log(numbers);

console.log(numbers.has(8));