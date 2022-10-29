//2). Write a sleep function using a promise in javascript?


//sleep function using a promise

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
};

//driver code
console.log("start");
sleep(3000);



