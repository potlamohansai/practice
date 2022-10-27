// 2.) Create a function that finds the word "happiness" in the given
// string (not case sensitive). If found, return "Hurray!", otherwise
// return "There is no happiness.".
// Example
// findHappiness(“Work makes me happy”) -> There is no happiness.
// findHappiness(“You give me the feeling of happiness”) -> Hurray



//function that finds the word "happiness" in the given string (not case sensitive)
function findHappiness(str) {
    let regex = /happiness/gi;
    let found = regex.test(str);
    if(found){
        return ("Hurray!");
    }else{
        return ("There is no happiness.");
    }

}

//driver code
let result = findHappiness("You give me the feeling of happiness");
console.log(result);