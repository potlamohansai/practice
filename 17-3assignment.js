// 3. Create a functional iterator, with a next function.

//functional iterator with next function
function rangeIterator(start=0, end = Infinity, step =1){
    let nextIndex = start;
    let count = 0;
  
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          count++;
          return result;
        }
        return { value: count, done: true };
      }
    };
    return rangeIterator;
}


//driver code
const it = rangeIterator(0,10,1);
let result = it.next();
while(!result.done){
    console.log(result.value);
    result = it.next();
}
