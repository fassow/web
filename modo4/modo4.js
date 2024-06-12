const questions = [
  {
    question: 'Quien creó la tabla periodica?',
    answers: [
      { text: 'Robert Boyle', correct: false },
      { text: 'Antoine Lavoisier', correct: false },
      { text: 'Emanuel Ramirez Calderon', correct: false },
      { text: 'Dmitri Ivánovich Mendeléiev', correct: true }
    ]
  },
  {
    question: '¿Quién descubrió el nitrógeno?',
    answers: [
      { text: 'Joseph Priestley', correct: false },
      { text: 'Carl Wilhelm Scheele', correct: false },
      { text: 'Daniel Rutherford', correct: true },
      { text: 'Antoine Lavoisier', correct: false }
    ]
  },
  {
    question: '¿Qué significa el nombre "oxígeno"?',
    answers: [
      { text: 'Generador de vida', correct: false },
      { text: 'Formador de ácidos', correct: true },
      { text: 'Aire puro', correct: false },
      { text: 'Gas vital', correct: false }
    ]
  },
  {
    question: '¿En qué año se descubrió el sodio?',
    answers: [
      { text: '1902', correct: false },
      { text: '1825', correct: false },
      { text: '1783', correct: false },
      { text: '1807', correct: true }
    ]
  },

  {
    question: '¿Quién descubrió el carbono?',
    answers: [
      { text: 'Antoine Lavoisier', correct: false },
      { text: 'Joseph Black', correct: true },
      { text: 'Henry Cavendish', correct: false },
      { text: 'Robert Hooke', correct: false }
    ]
  },

  {
    question: '¿Qué elemento químico es esencial para la vida en la Tierra?',
    answers: [
      { text: 'Hidrógeno', correct: false },
      { text: 'Nitrógeno', correct: false },
      { text: 'Carbono', correct: false },
      { text: 'Oxígeno', correct: true }
    ]
  },
  {
    question: '¿Quién descubrió la penicilina?',
    answers: [
      { text: 'Marie Curie', correct: false },
      { text: 'Alexander Fleming', correct: true },
      { text: 'Louis Pasteur', correct: false },
      { text: 'Robert Koch', correct: false }
    ]
  },
  {
    question: '¿Cuál es el símbolo químico del oro?',
    answers: [
      { text: 'Fe', correct: false },
      { text: 'Ag', correct: false },
      { text: 'Au', correct: true },
      { text: 'Cu', correct: false }
    ]
  },
  {
    question: '¿Quién formuló la teoría de la relatividad?',
    answers: [
      { text: 'Isaac Newton', correct: false },
      { text: 'Albert Einstein', correct: true },
      { text: 'Stephen Hawking', correct: false },
      { text: 'Galileo Galilei', correct: false }
    ]
  },
  {
    question: '¿Quién descubrió el oxígeno?',
    answers: [
      { text: 'Joseph Priestley', correct: true },
      { text: 'Dmitri Mendeléyev', correct: false },
      { text: 'Marie Curie', correct: false },
      { text: 'Isaac Newton', correct: false }
    ]
  },
  {
    question: '¿En qué año se descubrió el helio?',
    answers: [
      { text: '1901', correct: false },
      { text: '1895', correct: false },
      { text: '1868', correct: true },
      { text: '1812', correct: false }
    ]
  },
  {
    question: '¿Qué significa el nombre "plomo"?',
    answers: [
      { text: 'Metal liviano', correct: false },
      { text: 'Agua', correct: false },
      { text: 'Líquido', correct: false },
      { text: 'Metal pesado en latín', correct: true }
    ]
  },
  {
    question: '¿Quién descubrió el radio?',
    answers: [
      { text: 'Marie Curie', correct: true },
      { text: 'Albert Einstein', correct: false },
      { text: 'Niels Bohr', correct: false },
      { text: 'Galileo Galilei', correct: false }
    ]
  }
];

const elementName = document.getElementById('element-name');
const buttons = document.querySelectorAll('.button');
const scoreDisplay = document.getElementById('score');
const exitButton = document.getElementById('exit-button');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  currentQuestionIndex = 0; // Empieza desde la primera pregunta
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    window.location.href = 'file:///C:/Users/felip/OneDrive/Documentos/VS/elementosJS/interfaz/index.html'; // Redirigir a la página principal cuando se completen todas las preguntas
    return;
  }
  const question = questions[currentQuestionIndex];
  elementName.innerText = question.question;
  question.answers.forEach((answer, index) => {
    buttons[index].innerText = answer.text;
    buttons[index].onclick = () => selectAnswer(answer.correct, index);
    buttons[index].style.backgroundColor = "hsl(197, 100%, 50%)"; // Reiniciar el color de fondo de los botones
  });
}

function selectAnswer(correct, index) {
  if (correct) {
    score++;
    buttons[index].style.backgroundColor = "green"; // Cambiar a verde si es correcto
  } else {
    buttons[index].style.backgroundColor = "red"; // Cambiar a rojo si es incorrecto
    // Encontrar el índice de la respuesta correcta
    const correctIndex = questions[currentQuestionIndex].answers.findIndex(answer => answer.correct);
    buttons[correctIndex].style.backgroundColor = "#FFB900"; // Cambiar a amarillo la respuesta correcta
  }
  setTimeout(() => {
    currentQuestionIndex++; // Avanzar a la siguiente pregunta
    showQuestion();
  }, 1000);
  updateScore();
}

function updateScore() {
  scoreDisplay.innerText = `Puntaje: ${score}`;
}

function resetGame() {
  score = 0;
  updateScore();
  startGame();
}

startGame();

document.getElementById("exit-button").addEventListener("click", () => {
  // Acción para salir del juego, puede ser redirigir a otra página o cerrar la ventana
  window.location.href = 'https://fassow.github.io/web/index.html'; // Redirigir a la página principal
});
