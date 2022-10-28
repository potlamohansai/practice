// 6. Create a generator that can throw an exception.

//generator that can throw an exception
function* gen() {
    while (true) {
      try {
        yield 42;
      } catch (e) {
        console.log('Error caught!');
      }
    }
}
  
//driver code
let control = gen();
console.log(control.next());
control.throw(new Error('Something went wrong'));