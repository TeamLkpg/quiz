const quizdata = [
  {
    question: "What is the smallest planet in our solar system",
    options: ["jupiter", "mercury", "earth", "mars"],
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
    answer: "Alan Turing",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["jupiter", "mercury", "earth", "mars"],
    answer: "jupiter",
  },
  {
    question: "What is the largest country in the world?", 
    options: ["Canada", "China", "Russia", "United States"],
    answer: "Russia",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Nauru", "San Marino", "Vatican City"],
    answer: "Vatican City",
  },
  {
    question: "What is the capital of France?",
    options: ["Lyon", "Marseille", "Nice", "Paris"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Australia?", 
    options: ["Melbourne", "Sydney", "Brisbane", "Canberra"],
    answer: "Canberra",
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionToneElement = document.getElementById("questionBox");
var questionNumber = 1;
var points=0;
const scoreElement = document.getElementById("scoreID");

// Start timer
const timer = new Time();


function setOpacity(){
  questionElement.style.opacity = "100%";
}

var questionIndex = 0;

for (let i of optionsElement.children) {
  i.addEventListener("click", selectOption);
}

function showQuestion() {
  var currentQuestion = quizdata[questionIndex].question;
  questionElement.innerHTML = currentQuestion;
  
  //questionToneElement.animate({opacity: "100%", animation-fill-mode: "forward"},3000)
  
  updQuestionNumber(questionNumber);
  timer.countdownTimer();
  scoreElement.innerHTML = points;
}

function showOptions() {
  var currentOptions = quizdata[questionIndex].options;
  for (let i = 0; i < currentOptions.length; i++) {
    optionsElement.children[i].innerHTML = currentOptions[i];
  }
}

function selectOption() {
  scoreElement.innerHTML = points;
  if (this.innerHTML == quizdata[questionIndex].answer) { /* Svarat rätt */ 
    questionIndex++;
    if (questionIndex >= quizdata.length) { /* Om quizet är slut */
      endOfQuiz();
      return;
    } else { /* VIsa nästa fråga*/
      resetOptions();
      points+=5;
      showQuestion();
      showOptions();
    }
  } else { /* Svarat fel */
    this.style.backgroundColor = "red";
    points--;
  }
}

function endOfQuiz() {
  alert("Tack för att du deltog!");
  for (let i of optionsElement.children) {
    i.removeEventListener("click", selectOption);
  }
}

function resetOptions() {
  for (let i of optionsElement.children) {
    i.style.backgroundColor = "white";
  }
}

showQuestion();
showOptions();

function updQuestionNumber(input){
  document.getElementById("questionNumber").innerHTML = "";
  document.getElementById("questionNumber").innerHTML = input;
  questionNumber++;
}