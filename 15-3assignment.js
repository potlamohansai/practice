// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants.



function secDerivative (b ,m) {
    let ans = math.derivative((x^b + x*(e^(b*m))),(b,m));
    
    return ans;
}

let result = secDerivative(4,2);
console.log(result);
