// 5). Given a total due and an array representing the amount of
// change in your pocket, determine whether or not you are able to pay
// for the item. Change will always be represented in the following
// order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
// you 6.25 + 2 + .25 + 0 = 8.50.

//function to determine whether you are able to pay for the item or not
function changeEnough(arr, itemPrice) {
    let totalMoney = arr[0]*0.25 + arr[1]*0.10 + arr[2]*0.05 + arr[3]*0.01;
    if(totalMoney >= itemPrice){
        return true;
    }else{
        return false;
    }
}


//driver code
let result = changeEnough([30, 40, 20, 5], 12.55);
console.log(result);