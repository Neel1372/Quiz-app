var runningQuestionIndex = 0;

const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];

  //Initiate Score Value as 0 if correct increment by 5 and if incorrect decrement by 2.
var Score = 0;

//Initiate time by 50 sec.
let time = 50;
const countdownEl = document.getElementById('countdown');
const myInterval = setInterval(updateCountdown, 1000);


//Time countdown function.
function updateCountdown() {
    countdownEl.innerHTML = time;
    
    if(time<=0) {
        if(time<0) {
            countdownEl.innerHTML=0;
        }

        //After completion of 50 sec it will redirect to score dispaly.
        scoresheet();
        //To stop the function
        return;
    }
    time--;
}


//To stop time after completeion of quiz.
function myStopFunction() {
    clearInterval(myInterval);
  }

let q = questions;

//To load page when redirect on mcq.html page
let load = document.getElementById("load");
document.addEventListener('DOMContentLoaded',renderQuestion());


//Using variable position it render the question.
function renderQuestion() {
    let q = questions;
    document.getElementById("question_container").innerHTML = q[runningQuestionIndex].questionText;
    document.getElementById("option1_container").innerHTML = q[runningQuestionIndex].options[0];
    document.getElementById("option2_container").innerHTML = q[runningQuestionIndex].options[1];
    document.getElementById("option3_container").innerHTML = q[runningQuestionIndex].options[2];
    document.getElementById("option4_container").innerHTML = q[runningQuestionIndex].options[3];
}




//Dispaly score when mcq is completed.
function scoresheet() {
    myStopFunction();
    const div=document.getElementById("quiz");
    div.innerHTML = "<h1 id='alldone'>All Done!</h1> <h2 id='score'>Your final score is <h2 id='Opscore'>"+Score+"</h2>.<h2> <form> <label id='ei'>Enter initials: </label> <input type='text' id='inputInitial'/><button type='button' id='submit' onClick='handleSubmit()'>Submit</button></form>";
};


//when click on option it check the Answer and give output as Correct and Incorrect.
function checkAnswer(e) {
    if (runningQuestionIndex==0) {
        if (e.target.firstChild.data == q[runningQuestionIndex].answer) {
            Score = Score + 5;


            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Correct!";
            };
            showdiv();


            function unshowdiv() {
                console.log("hii");
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex =+ 1;
                renderQuestion();
            };
            setTimeout(unshowdiv, 1000);
        }
        else {
            time = time - 10;
            Score  = Score - 2;
            

            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Incorrect!";
            };
            showdiv();


            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex =+ 1;
                renderQuestion();
            };
            setTimeout(unshowdiv, 1000);
        }
    }
    else if (runningQuestionIndex == 1) {
        if (e.target.firstChild.data == q[runningQuestionIndex].answer) {
            Score = Score + 5;
            

            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Correct!";
            };
            showdiv();
            

            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;;
                renderQuestion();
            }
            setTimeout(unshowdiv, 1000);
        }
        else {
            time = time - 10;
            Score  = Score - 2;
            

            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Incorrect!";
            };
            showdiv();


            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;
                renderQuestion();
            }
            setTimeout(unshowdiv, 1000);
        }
    }
    else if(runningQuestionIndex == 2) {
        if (e.target.firstChild.data == q[runningQuestionIndex].answer) {
            Score = Score + 5;
            

            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Correct!";
            };
            showdiv();
            

            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;;
                renderQuestion();
            }
            setTimeout(unshowdiv, 1000);
        }
        else {
            time = time - 10;
            Score  = Score - 2;


            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Incorrect!";
            };
            showdiv();


            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;
                renderQuestion();
            }
            setTimeout(unshowdiv, 1000);
        }
    }
    else if (runningQuestionIndex == 3) {
        if (e.target.firstChild.data == q[runningQuestionIndex].answer) {
            Score = Score + 5;
            

            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Correct!";
            };
            showdiv();
            

            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;;
                renderQuestion();
            }
            setTimeout(unshowdiv, 1000);
        }
        else {
            time = time - 10;
            Score  = Score - 2;


            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Incorrect!";
            };
            showdiv();


            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;
                renderQuestion();
            }
            setTimeout(unshowdiv, 1000);
        }
    }
    else if (runningQuestionIndex == 4) {
        if (e.target.firstChild.data == q[runningQuestionIndex].answer) {
            Score = Score + 5;
            

            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Correct!";
            };
            showdiv();
            

            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;
                setTimeout(scoresheet, 1000);
            }
            setTimeout(unshowdiv, 1000);
        }
        else {
            time = time - 10;
            Score  = Score - 2;

            
            function showdiv() {
                document.getElementById("horizontal_line").style.visibility = "visible";
                document.getElementById("horizontal_line").innerHTML = "<hr></hr>" ;
                document.getElementById("answer_container").style.visibility = "visible";
                document.getElementById("answer_container").innerHTML = "Incorrect!";
            };
            showdiv();


            function unshowdiv() {
                document.getElementById("horizontal_line").style.visibility = "hidden";
                document.getElementById("answer_container").style.visibility = "hidden";
                runningQuestionIndex = runningQuestionIndex + 1;
                scoresheet();
            }
            setTimeout(unshowdiv, 1000);
        }
    }
}

function handleSubmit(){
    var name = document.getElementById('inputInitial');
    localStorage.setItem(name.value, Score);
    location.replace('highscore.html');
}