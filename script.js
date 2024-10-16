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
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
var questionIndex = 0;

for (let i of optionsElement.children) {
  i.addEventListener("click", selectOption);
}

function showQuestion() {
  var currentQuestion = quizdata[questionIndex].question;
  questionElement.innerHTML = currentQuestion;
}

function showOptions() {
  var currentOptions = quizdata[questionIndex].options;
  for (i = 0; i < currentOptions.length; i++) {
    optionsElement.children[i].innerHTML = currentOptions[i];
  }
}

function selectOption() {
  if (this.innerHTML == quizdata[questionIndex].answer) {
    questionIndex++;
    if (questionIndex >= quizdata.length) {
      endOfQuiz();
      return;
    } else {
      resetOptions();
      showQuestion();
      showOptions();
    }
  } else {
    this.style.backgroundColor = "red";
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
