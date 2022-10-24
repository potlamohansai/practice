// 2. Write a JavaScript program to
// a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F
// b) Map the grades of each student
// c) Group students according to the grades they have received and display.

// Sample Input:

// a) Calculate grades on basis of marks
let students = [
{ name: "John", marks: "92" },
{ name: "Oliver", marks: "85" },
{ name: "Michael", marks: "79" },
{ name: "Dwight", marks: "95"},
{ name: "Oscar", marks: "64" },
{ name: "Kevin", marks: "48" }
];

// b) Map the grades of each student
students.map(item => {
    if(item.marks >= 90 ){
        item["Grade"] = "A";
    }else if(item.marks >= 80 ){
        item["Grade"] = "B";
    }else if(item.marks >= 70 ){
        item["Grade"] = "C";
    }else if(item.marks >= 60 ){
        item["Grade"] = "D";
    }else if(item.marks >= 50 ){
        item["Grade"] = "E";
    }else {
        item["Grade"] = "F";
    }
})
console.log(students);

// c) Group students according to the grades they have received and display.
let group= students.reduce((acc, obj) => {
    const prop = obj["Grade"];
    acc[prop] = acc[prop] || [];
    acc[prop].push(obj);
    return acc;
},{})
console.log(group);



