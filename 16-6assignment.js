// 6). Create a function that takes a word and returns true if the word
// has two consecutive identical letters.
// Examples
// doubleLetters("loop") ➞ true
// doubleLetters("yummy") ➞ true

//function that takes a word and returns true if the word has two consecutive identical letters
function doubleLetters(str) {
    let regex = /([a-z\d])\1/gi;
    let found = regex.test(str);

    if(found){
        return true;
    }
    else{
        return false;
    }
}

//driver code
let result = doubleLetters("yummy");
console.log(result);