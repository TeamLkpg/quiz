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
  },
  {
    question: "What is the capital of Canada?",
    options: ["Montreal", "Toronto", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
  {
    question: "What is the capital of the United States?",
    options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
    answer: "Washington D.C.",
  },
];


/*CONSTS*/

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionToneElement = document.getElementById("questionBox");
const scoreElement = document.getElementById("scoreID");
const timer = new Time();


/*VARIABLES*/

var questionNumber = 1;
var questionIndex = 0;
var points = 0;


/*EVENT LISTENERS*/

for (let i of optionsElement.children) {
  i.addEventListener("click", selectOption);
}


/*GAME LOGIC FUNCTIONS*/
var animationInterval = null;


//Opacity Function Loop di Loop
function textAnimation(input){
  
  var opacityLevel = 0;
  clearInterval(animationInterval);
  animationInterval = setInterval(doStuff, 15)
  function doStuff(){
    if (opacityLevel == 100){
      clearInterval(animationInterval);
    }
    else{
      opacityLevel++
      input.style.opacity = opacityLevel + "%";
    }
  }
}

function showQuestion() {
  var currentQuestion = quizdata[questionIndex].question;
  var textAnimationElement = document.getElementById("questionBox");
  textAnimationElement.style.opacity = "0%";
  questionElement.innerHTML = currentQuestion;

  textAnimation(textAnimationElement);

  updateQuestionNumber(questionNumber);
  timer.countdownTimer();
  scoreElement.innerHTML = points;
}

function showOptions() {
  var currentOptions = quizdata[questionIndex].options;
  for (let i = 0; i < currentOptions.length; i++) {
    optionsElement.children[i].innerHTML = currentOptions[i];
  }
}

function resetOptions() {
  for (let i of optionsElement.children) {
    i.style.removeProperty("background-color");
  }
}

function selectOption() {
  if (this.innerHTML == quizdata[questionIndex].answer) {
    questionIndex++;
    points += 5;
    if (questionIndex >= quizdata.length) {
      endQuiz();
      return;
    } else {
      resetOptions();
      
      showQuestion();
      showOptions();
      scoreElement.innerHTML = points;
      
    }
  } else {
    this.style.backgroundColor = "red";
    points--;
    scoreElement.innerHTML = points;
  }
}

function updateQuestionNumber(input) {
  document.getElementById("questionNumber").innerHTML = input;
  questionNumber++;
}

function setOpacity() {
  questionElement.style.opacity = "100%";
}

/*Start and end screen*/

const startElement = document.getElementById("startBox");
const mainElement = document.getElementById("main");
const endElement = document.getElementById("endBox");
const buttonElement = document.getElementById("startButton");
const resetButton = document.getElementById("restartButton");

buttonElement.addEventListener("click", startQuiz);

function startQuiz() {
  
  startElement.classList.remove("start");
  startElement.classList.add("startHidden");
  mainElement.classList.remove("mainHidden");
  mainElement.classList.add("main");

  showQuestion();
  showOptions();
}

function endQuiz() {
  mainElement.classList.remove("main");
  mainElement.classList.add("mainHidden");
  endElement.classList.remove("endHidden");
  endElement.classList.add("end");

  resetButton.addEventListener("click", resetQuiz);

  var endScore = document.getElementById("finalPoints");
  endScore.innerHTML = points;
}

function resetQuiz(){
  mainElement.classList.remove("mainHidden");
  mainElement.classList.add("main");
  endElement.classList.remove("end");
  endElement.classList.add("endHidden");
  questionIndex = 0;
  questionNumber = 1;
  points = 0;
  showQuestion();
  showOptions();
}