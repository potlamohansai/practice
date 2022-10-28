// What are the different ways of iterating through an array

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];


//Using for loop
for ( let i=0; i<arr.length; i++){
    console.log(arr[i]);
};

//Using while loop
let i=0;
while(i<arr.length){
    console.log(arr[i]);
    i++;
}

//Using for-Each method
arr.forEach(ele => {
    console.log(ele);
})

//Using every method
function lessThan5(ele){
    return ele < 5;
}
console.log(arr.every(lessThan5));

//Using map method
let mp = arr.map(ele => ele*2);
console.log(mp);

//using filter method
let fil = arr.filter(ele => ele < 6)
console.log(fil);

//Using reduce method
let red = arr.reduce((acc,ele) => acc+ele);
console.log(red);

//Using some method
function addtwo(ele){
    console.log(`${ele+2}`)
}
console.log(arr.some(addtwo));
