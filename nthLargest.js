// Program to find nth largest number in an array

class nthLargest {
    constructor(arr) {
        this.arr = arr;
    }
    find_largest(n){
        let sorted =this.arr.sort(function(a,b) {
            return a-b;
        })
        let filtered = [...new Set(sorted)]
        console.log(`Here is the list without duplicates and sorted in ascending order: [${filtered}]`)
        return filtered[n-1];
    }
}


//driver Code

let obj = new nthLargest([3,45,6,7,23,5,7,8]);

console.log(obj.find_largest(3))