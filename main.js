const questions = [
  {
    id: 1,
    q: " Q1) How much of the Earth's surface is covered by ocean ?",
    answers: ["51%", "71%", "81%", "100%"],
    correctAnswer: "71%",
  },
  {
    id: 2,
    q: " Q2) The world's ocean is often divided into how many individual oceans ?",
    answers: ["Three", "Seven", "Nine", "Five"],
    correctAnswer: "Five",
  },

  {
    id: 3,
    q: " Q3) The ocean is home to how many known species ?",
    answers: ["26,000", "116,000", "226,000", "566,000"],
    correctAnswer: "226,000",
  },
  {
    id: 4,
    q: " Q4) According to scientist, what is one of the biggest threats to our oceans ?",
    answers: [
      "Plastic pollution",
      "Volcanic eruptions",
      "Sharks",
      "Climate change",
    ],
    correctAnswer: "Plastic pollution",
  },

  {
    id: 5,
    q: " Q5) What is a feature of the blue whale ?",
    answers: [
      "It's one of the fastest animals",
      "It's one of the loudest animals",
      "It's one of the quitest animals",
      "It's one of the lightest animals",
    ],
    correctAnswer: "It's one of the loudest animals",
  },

  {
    id: 6,
    q: " Q6) Which fish can kill you, even after it's been caught and cooked ?",
    answers: ["Shark", "Blowfish", "Swordfish", "Fish fingers"],
    correctAnswer: "Blowfish",
  },

  {
    id: 7,
    q: " Q7) The ocean affects which of the following ?",
    answers: ["Weather", "Temperature", "Food supplies", "All of the above"],
    correctAnswer: "All of the above",
  },

  {
    id: 8,
    q: " Q8) What is the largest ocean?",
    answers: ["Pacific", "Atlantic", "Indian", "Southern"],
    correctAnswer: "Pacific",
  },

  {
    id: 9,
    q: " Q9) What is the smallest ocean?",
    answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correctAnswer: "Arctic",
  },

  {
    id: 10,
    q: " Q10) What is the largest sea animal?",
    answers: [
      "Dolphin",
      "Great White Shark",
      "Antartic Blue Whale",
      "Giant Pacific Octopus",
    ],
    correctAnswer: "Antartic Blue Whale",
  },
];

let questionIndex = 0;
let score = 0;
const questionBox = document.querySelector(".question_box");
const showQuestion = () => {
  questionBox.innerHTML = "";
  let question = questions[questionIndex];
  const p = document.createElement("p");
  p.innerText = question.q;
  questionBox.append(p);
  p.classList.add("question");
  const answersBox = document.createElement("div");
  questionBox.append(answersBox);
  answersBox.classList.add("answerbox");
  question.answers.forEach((element) => {
    const button = document.createElement("button");
    button.innerText = element;
    button.classList.add("answerbtn");
    answersBox.append(button);
    button.addEventListener("click", (e) => {
      if (e.target.innerText === question.correctAnswer) {
        score = score + 10;

        button.style.backgroundColor = "green";
      } else {
        button.style.backgroundColor = "red";
      }
      const bt1 = document.querySelectorAll(".answerbtn");

      bt1.forEach((element) => {
        element.disabled = true;
      });
    });
  });
};
const homePage = document.querySelector(".home");
const next = document.querySelector("#next");
next.addEventListener("click", () => {
  if (questionIndex < questions.length - 1) {
    questionIndex = questionIndex + 1;
    homePage.style.display = "none";
    showQuestion();
  } else {
    const result = document.createElement("div");
    questionBox.innerText = "";
    result.innerText = ` 
    You have completed the quiz !
    Your score: ${score} out of 100`;
    result.classList.add("score");
    questionBox.append(result);
    next.style.display = "none";
  }
});

showQuestion();


