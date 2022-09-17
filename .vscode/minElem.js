let arr =[20,30,2,40,24,8];
let min= Number.MAX_VALUE;
for(let i=0; i<arr.length;i++) {
    if(arr[i] < min) min = arr[i];
}
console.log(min);