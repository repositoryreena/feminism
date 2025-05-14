// script.js

// FAQ toggle logic
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Toggle visibility
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});

// Quiz data
const quizData = [
  {
    question: "What does feminism advocate for?",
    options: [
      "Women's superiority over men",
      "Equal rights and opportunities for all genders",
      "Revenge against patriarchy",
      "Only women’s advancement"
    ],
    answer: "Equal rights and opportunities for all genders"
  },
  {
    question: "Who said, 'We should all be feminists'?",
    options: [
      "Gloria Steinem",
      "Malala Yousafzai",
      "Chimamanda Ngozi Adichie",
      "Emma Watson"
    ],
    answer: "Chimamanda Ngozi Adichie"
  },
  {
    question: "Which wave of feminism focused on intersectionality?",
    options: [
      "First wave",
      "Second wave",
      "Third wave",
      "Fourth wave"
    ],
    answer: "Third wave"
  },
  {
    question: "Feminism benefits:",
    options: [
      "Only women",
      "Everyone",
      "Only non-binary people",
      "Only men who are allies"
    ],
    answer: "Everyone"
  }
];

// Quiz logic
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectOption(btn, option));
    optionsEl.appendChild(btn);
  });

  nextBtn.disabled = true;
}

function selectOption(button, selectedOption) {
  Array.from(optionsEl.children).forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
  nextBtn.disabled = false;

  if (selectedOption === quizData[currentQuestion].answer) {
    score++;
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.innerHTML = `You scored ${score} out of ${quizData.length}. ${
    score === quizData.length ? "👏 Perfect!" : "💡 Keep learning!"
  }`;
}

// Initialize quiz
loadQuestion();
