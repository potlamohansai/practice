// 2. Write a JavaScript program to take 2 arrays from the user and check if the
// number 4 exists in any of the arrays, or both of the arrays.
// Sample Input 1:
// [ 1, 2, 3, 4, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:
// 4 in both arrays

let arr1 = prompt("Enter array 1");
let arr2 = prompt("Enter array 2");

arr1= arr1.split(',');
arr1 = arr1.map(i => parseInt(i));

arr2= arr2.split(',');
arr2 = arr2.map(i => parseInt(i));

// let arr1= [1,2,3,4,5];
// let arr2= [6,1,8];

let ans = [0,0];
for(let i =0; i<arr1.length; i++){
    if (arr1[i]==4){
        ans[0]= 1;
    }
}
for(let i =0; i<arr2.length; i++){
    if (arr2[i]==4){
        ans[1]= 1;
    }
}

console.log(ans);

if (ans[0] !=0 && ans[1] !=0){
    console.log("4 is present in Both arrays");
}else if(ans[0] !=0 && ans[1]==0){
    console.log("4 is in array 1");
}else{
    console.log("4 is in array 2")
}