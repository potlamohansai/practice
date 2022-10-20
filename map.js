//Given the following array, write a snippet of code using map, 
//that constructs an array of objects, each with the subject, score and grade, for all subjects. 
//Grade A is for scores of 91 and above. Grade B is for scores of 81 – 90. Grade C is for scores 71 – 80, and Grade D for scores 70 and below.
var scores = [

    { subject: 'Math', score: 89 },

    { subject: 'Programming', score: 100 },

    { subject: 'Physics', score: 95 },

    { subject: 'Chemistry', score: 75 },

    { subject: 'History', score: 59 },

];

var res= scores.map( item => {

    if(item.score >=91){
        item.Grade= "A";
        return item;
    }else if (item.score >=81 && item.score <=90 ){
        item.Grade= "B";
        return item;
    }else if (item.score >=71 && item.score <=80 ){
        item.Grade= "C";
        return item;
    }else {
        item.Grade= "D";
        return item;
    }
})

console.log(res);