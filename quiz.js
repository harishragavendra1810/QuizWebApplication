let queCon = document.getElementById("queCon");
let resultCon = document.getElementById("resultCon");
let questionEl = document.getElementById("question");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let queNo = document.getElementById("queNo");
let errmsg = document.getElementById("errmsg");
let city1 = document.getElementById("city1");
let city2 = document.getElementById("city2");
let city3 = document.getElementById("city3");
let city4 = document.getElementById("city4");
let submitBtn = document.getElementById("submitBtn");
let nextBtn = document.getElementById("nextBtn");
let appreciation = document.getElementById("appreciation");
let scoreEl = document.getElementById("score");
let questions = {
    1: "1.ISRO launched Chandrayan-3 to?",
    status1: false,
    2: "2. Who played Mrs. Robinson in The Graduate?",
    status2: false,
    3: "3.Who directs the movie openheimer?",
    status3: false,
    4: "4.who is the authour of Harry Potter?",
    status4: false,
    5: "5.Who is the Winner of FIDA chess Champioship?",
    status5: false
}
let option = {
    1: ["Saturn", "jupiter", "Moon", "Mars"],
    2: ["cillian", "john", "Morget Robbie", "Anne Bancroft"],
    3: ["Nolan", "Angelina", "Raj & DK", "Lokesh"],
    4: ["shakeshpeare", "J.K.Rowling", "vairaMuthu", "Robert"],
    5: ["vishwanathAnand", "pragyanandha", "Magnus", "Ashwin"]
}

let currentQueno = 1;
let preQue = 5;

function nextqueOptions(queno) {
    city1.textContent = option[queno][0];
    city2.textContent = option[queno][1];
    city3.textContent = option[queno][2];
    city4.textContent = option[queno][3];

    opt1.value = option[queno][0];
    opt2.value = option[queno][1];
    opt3.value = option[queno][2];
    opt4.value = option[queno][3];


    opt1.checked = false;
    opt2.checked = false;
    opt3.checked = false;
    opt4.checked = false;


}

function prequeOptions(queno) {
    city1.textContent = option[queno][0];
    city2.textContent = option[queno][1];
    city3.textContent = option[queno][2];
    city4.textContent = option[queno][3];


}




function checkingForError(queno) {
    if (answer[queno] === "") {
        errmsg.textContent = "Please choose the options!!!";
    } else {
        queno += 1;
        if (queno === 6) {
            checkAnswers();
        } else {
            nextquesDisplay(queno);
        }
    }
}


function nextquesDisplay(queno) {
    currentQueno = queno;
    if (currentQueno < 6) {
        let nextQue = currentQueno;
        questionEl.textContent = questions[nextQue];
        queNo.textContent = nextQue;
        errmsg.textContent = "";
        nextqueOptions(nextQue);
        console.log(typeof(queno));
        if (queno === 5) {
            submitBtn.classList.remove("button1");
            nextBtn.classList.add("button1");
        }
    }


}

function prevoiusDisplay() {
    preQue = parseInt(queNo.textContent) - 1;
    if (preQue > 0) {

        questionEl.textContent = questions[preQue];
        queNo.textContent = preQue;
        prequeOptions(preQue);
    }
}
let resultAns = ["", "Moon", "Anne Bancroft", "Nolan", "J.K.Rowling", "Magnus"]
let answer = {
    1: "",
    stat1: "",
    2: "",
    stat2: "",
    3: "",
    stat3: "",
    4: "",
    stat4: "",
    5: ""
}
let currentQuenoforAns = 0;
opt1.addEventListener("change", function(event) {
    currentQuenoforAns = queNo.textContent;
    //console.log(currentQuenoforAns);
    answer[currentQuenoforAns] = event.target.value;
    answer["stat" + currentQuenoforAns] = "opt1";
    //console.log(answer);
    opt1.checked = true;
});

opt2.addEventListener("change", function(event) {

    //console.log(currentQuenoforAns);
    currentQuenoforAns = queNo.textContent;
    answer["stat" + currentQuenoforAns] = "opt2";
    //console.log(currentQueno);
    answer[currentQuenoforAns] = event.target.value;

    //console.log(answer);
    opt2.checked = true;
});
opt3.addEventListener("change", function(event) {

    currentQuenoforAns = queNo.textContent;
    //console.log(currentQuenoforAns);
    answer["stat" + currentQuenoforAns] = "opt3";
    //console.log(currentQueno);
    answer[currentQuenoforAns] = event.target.value;
    //console.log(answer);
});
opt4.addEventListener("change", function(event) {

    currentQuenoforAns = queNo.textContent;
    //console.log(currentQuenoforAns);
    answer["stat" + currentQuenoforAns] = "opt4";
    answer[currentQuenoforAns] = event.target.value;
    opt4.checked = true;

    //console.log(answer);
});
let score = 0;

function checkAnswers() {
    console.log(answer);
    queCon.classList.add("d-none");
    resultCon.classList.remove("result");
    for (let i = 1; i < 6; i++) {
        if (resultAns[i] === answer[i]) {
            score++;
        }
    }
    if (score > 3) {
        appreciation.textContent = ">Congrations!!!";
        scoreEl.textContent = score + "/5";
    } else if (score > 1 && score < 4) {
        appreciation.textContent = ">Done Well🎖🔥";
        scoreEl.textContent = score + "/5";
    } else {
        appreciation.textContent = ">Practise More!!😕😵";
        scoreEl.textContent = score + "/5";
    }
}

nextBtn.onclick = function() {
    checkingForError(currentQueno);
};

submitBtn.onclick = function() {
    checkingForError(currentQueno);


}