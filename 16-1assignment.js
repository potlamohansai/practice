// 1). The time has a format: hours:minutes. Both hours and minutes
// have two digits, like 09:00.
// Make a regex to find time in the string: Lunch at 10:10 in the room
// 123:456. In this task there’s no need to check time correctness yet,
// so 25:99 can also be a valid result. The regex should not match
// 333:333.

function checkTime(str) {
    let regex = /\D\d{2}:\d{2}\D/g;
    return regex.test(str);

}

let str = "Lunch at 10:10 in03:20hi the room 123:456.";
console.log(checkTime(str));