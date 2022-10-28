// 4. Create a generator for multiplying?

//generator function
function* operation(){
    console.log("2*2=?");
    yield 2*2;
    console.log("3+3=?");
    yield 3+3;
}

//driver code
let control = operation();
console.log(control.next().value);
console.log(control.next().value);
console.log(control.next().done);





