// 2. Write a program in JavaScript to map the student ids, names and scores.


// a) Add data for 3 students (use map functions)
let students = new Map();
students.set("id",[1,2,3]);
students.set("name",[ 'Hitanshu', 'Ninad', 'Amandeep' ]);
students.set("scores",[ 90, 88, 92 ]);

// b) Get Student Names using map functions
let names= students.get("name");
console.log(names);

// d) Display 1 parameter (only value)
for(let [key,value] of students){
    console.log(`${value}`)
}

// Display 2 parameters (value + key)
for(let [key,value] of students){
    console.log(`${key} : ${value}`)
}

// Display 3 parameters (value + key + map)
console.log(students)

// c) Delete Student Scores using map functions
students.delete("scores");
console.log(students);