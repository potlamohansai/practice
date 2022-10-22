

let str = "i love iNeuron";

//Convert the String into upper case.
console.log( str.toUpperCase() );

//Convert only the first character to uppercase.
let result = str.charAt(0).toUpperCase()+ str.slice(1);
console.log( result );

// Convert the String into lower case.
console.log( str.toLowerCase() );

// Break the string into two halves and swap them.
let sub1 = str.substring(0,str.length/2);
let sub2 = str.substring(str.length/2, str.length);
console.log(sub2.concat(sub1));


// Count the repeating characters.
var obj={};
str = str.toLowerCase();
for(let char of str) {
    
    obj[char] = (isNaN(obj[char]) ? 1 : obj[char] + 1);
}
console.log(obj)

// Reverse the string
console.log( str.split('').reverse().join('') );
