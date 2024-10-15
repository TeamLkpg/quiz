const quizdata = [
  {
    question: "What is the smallest planet in our solar system",
    options: ["jupiter", "mercury", "earth", "mars"],
    hideOrder: [2, 0, 3],
    answer: "mercury",
  },
  {
    question: "Who is considered the father of the computer?",
    options: [
      "Bob Moore",
      "Alan Turing",
      "Charles Babbage",
      "Mohammad Abdollahi",
    ],
    hideOrder: [3, 0, 2],
    answer: "Alan Turing",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    hideOrder: [2, 1, 3],
    answer: "Blue Whale",
  },/*
  {
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    hideOrder: [2, 0, 3],
    answer: "Madrid",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["jupiter", "mercury", "earth", "mars"],
    hideOrder: [2, 0, 3],
    answer: "jupiter",
  },*/
];

/*
<div id="q1" class="question">
                <p><span class="qno">1</span></p>
                <input type="radio" name="rdbQ1" value="-1" onclick="UpdateScore(this)" /><br />
                <input type="radio" name="rdbQ1" value="-1" onclick="UpdateScore(this)" /><br />
                <input type="radio" name="rdbQ1" value="1" onclick="UpdateScore(this)"  /><br />
                <input type="radio" name="rdbQ1" value="-1" onclick="UpdateScore(this)" /><br />
            </div>
            De här är det vi vill fast med script
*/

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

/* Vidare till nästa fråga
const nextQuestionButton = document.getElementById(nextBtn);
*/


let score = 0;
let currentQuestion = 0;
let currentQuestionTries = 0;


function showQuestion() {
    showTries();
    const question = quizdata[currentQuestion];
    questionElement.innerText = question.question;
   
    optionsElement.innerHTML = "";
    question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function showTries(){
    const tries = document.getElementById("currentTries");
    tries.innerText = currentQuestionTries + 1;
}

function selectAnswer(input) {
    const selectedAnswer = input.target;
    const answer = quizdata[currentQuestion].answer;
    showTries();
    currentQuestionTries++;

    if (selectedAnswer.innerText === answer) {
        score += 5;
        currentQuestion++;
        currentQuestionTries = 0;
        if (currentQuestion > quizdata.length-1) {
            alert("Quiz is over1");
        }
        currentQuestionTries = 0;
        showTries();
        showQuestion();
    }
    else if (currentQuestion < quizdata.length) {

        if (currentQuestionTries < quizdata[currentQuestion].options.length) {
            hideOption(currentQuestionTries);
            currentQuestionTries = 0;
            showQuestion();
        }
        else {

             alert("All tries are used");
             /*fail?!*/
        }
    } 
    else {
        alert("Quiz is over2");
    }
}


function hideOption(input) {
  alert("fel");
  const hideElement = quizdata[currentQuestion].hideOrder[input-1];
  const hide2 = quizdata.options[hideElement];
  const optionsElement = document.getElementById(hide2.innerHTML);
  optionsElement.style.color = "red"; 
  currentQuestionTries++;
}



/*
  const hideButton = document.getElementById("hide-button");
  const alternativeToHide = document.getElementById(options); // Lägg in element att byta ut

  hideButton.addEventListener("click", function () {alternativeToHide.classList.toggle("hidden")});
*/

showQuestion();

function initialAnswers()
            {
                for(var j=1;j<document.getElementsByClassName("question").length;++j)
                    answers[j] = 0
            }
