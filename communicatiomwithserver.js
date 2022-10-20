

var scores = `

    [

        { "subject": "Math", "score": 89 },

        { "subject": "Programming", "score": 100 },

        { "subject": "Physics", "score": 95 },

        { "subject": "Chemistry", "score": 75 },

        { "subject": "History", "score": 59 }

    ]

`;

var res = JSON.parse(scores);
console.log(res);

res = res.map(item => {
    if(item.subject == "Physics"){
        item.score = 97;
    }
    else if (item.subject == "Chemistry"){
        item.subject = "Biology";
        item.score = 78
    }
    return item;
})

console.log(res);

var sendBack = JSON.stringify(res);

console.log(sendBack)