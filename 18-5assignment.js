// 5. Print an infinite series of natural numbers using a generator.

//Generator function to print infinite series of natural numbers
function* series(){
    let count =1;
    while(true){
        console.log(count++) ;
        yield "stop"
    }
}

//driver code
let control = series();
control.next();
control.next();
control.next();
control.next();
control.next();
control.next();