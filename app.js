let questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    currentAnswer: "Paris",
    time: 30,
    marks: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    currentAnswer: "Mars",
    time: 40,
    marks: 1
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo", "Nikola Tesla"],
    currentAnswer: "Albert Einstein",
    time: 45,
    marks: 2
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    currentAnswer: "H2O",
    time: 50,
    marks: 1
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    currentAnswer: "Pacific",
    time: 60,
    marks: 1
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    currentAnswer: "Carbon Dioxide",
    time: 50,
    marks: 1
  },
  {
    question: "Who is known as the Father of Computers?",
    options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    currentAnswer: "Charles Babbage",
    time: 60,
    marks: 2
  },
  {
    question: "Which country is famous for the Great Wall?",
    options: ["Japan", "China", "India", "Korea"],
    currentAnswer: "China",
    time: 55,
    marks: 1
  },
  {
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    currentAnswer: "2",
    time: 30,
    marks: 1
  },
  {
    question: "In which year did World War II end?",
    options: ["1940", "1945", "1950", "1939"],
    currentAnswer: "1945",
    time: 40,
    marks: 2
  },
  {
    question: "What is the national currency of Japan?",
    options: ["Dollar", "Euro", "Yen", "Won"],
    currentAnswer: "Yen",
    time: 35,
    marks: 1
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    currentAnswer: "Nile",
    time: 55,
    marks: 2
  },
  {
    question: "Which organ purifies our blood?",
    options: ["Heart", "Lungs", "Kidneys", "Liver"],
    currentAnswer: "Kidneys",
    time: 55,
    marks: 1
  },
  {
    question: "Who was the first person to step on the Moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
    currentAnswer: "Neil Armstrong",
    time: 55,
    marks: 2
  },
  {
    question: "Which programming language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    currentAnswer: "JavaScript",
    time: 44,
    marks: 1
  }
]


let questionIndex = 0
let totalMarks = 0
let displayQuestion = document.getElementById("displayQuestion")
let displayOptions = document.getElementById("displayOptions")
let currentQuestionNo = document.getElementById("currentQuestionNo");
let totalQuestionNumber = document.getElementById("totalQuestionNumber");
let timerDisplay = document.getElementById("timerDisplay");
let timer = questions[0].time;

let checkAnswer = (correct, selected, marks) => {
  if (correct === selected) {
    totalMarks += marks;
    document.getElementById("marksDisplay").innerText = totalMarks; 
  }
  nextQuestion();
};

let renderQuestion = () => {
  let currentQuestion = questions[questionIndex];

  currentQuestionNo.innerHTML = questionIndex + 1;
  totalQuestionNumber.innerHTML = questions.length;
  displayQuestion.innerHTML = currentQuestion.question;

  timer = currentQuestion.time;
  timerDisplay.innerHTML = timer;

  displayOptions.innerHTML = "";
  for (let i = 0; i < currentQuestion.options.length; i++) {
    let option = currentQuestion.options[i];
    displayOptions.innerHTML += `
      <button 
        class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-200"
        onclick="checkAnswer('${currentQuestion.currentAnswer}', \`${option}\`, ${currentQuestion.marks})">
        ${option}
      </button>
    `;
  }
};

let nextQuestion = () => {
  if (questionIndex + 1 === questions.length) {
    alert("Quiz Completed! Your total marks are " + totalMarks);
  } else {
    questionIndex++;
    renderQuestion();
  }
};

let previousQuestion = () => {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion();
  }
};

const checkTimer = () => {
  const currentQuestion = questions[questionIndex];
  if (timer === 0) {
    nextQuestion();
  } else {
    timer--;
    timerDisplay.innerHTML = timer;
  }
};
setInterval(checkTimer, 1000);

renderQuestion();
