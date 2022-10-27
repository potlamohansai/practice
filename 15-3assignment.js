// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants.



//double derivative of given function is f''(x) = (b^2-b) * x ^(b-2)
// At x=m it becomes (b^2 -b) * m ^ (b-2)
function secondDerivative (b ,m) {
    let ans = (Math.pow(b,2) -b) * (Math.pow(m, (b-2)));
    
    return ans;
}

//driver code
let result = secondDerivative(4,2);
console.log(result);
