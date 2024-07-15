const elements = [
  { name: 'sodio', symbol: 'Na', oxidation: '1+' },
  { name: 'potasio', symbol: 'K', oxidation: '1+' },
  { name: 'rubidio', symbol: 'Rb', oxidation: '1+' },
  { name: 'cesio', symbol: 'Cs', oxidation: '1+' },
  { name: 'plata', symbol: 'Ag', oxidation: '1+' },
  { name: 'litio', symbol: 'Li', oxidation: '1+' },
  { name: 'cobre', symbol: 'Cu', oxidation: '1+ 2+' },
  { name: 'mercurio', symbol: 'Hg', oxidation: '1+ 2+' },
  { name: 'oro', symbol: 'Au', oxidation: '1+ 3+' },
  { name: 'berelio', symbol: 'Be', oxidation: '2+' },
  { name: 'magnesio', symbol: 'Mg', oxidation: '2+' },
  { name: 'calcio', symbol: 'Ca', oxidation: '2+' },
  { name: 'estroncio', symbol: 'Sr', oxidation: '2+' },
  { name: 'bario', symbol: 'Ba', oxidation: '2+' },
  { name: 'zinc', symbol: 'Zn', oxidation: '2+' },
  { name: 'cadmio', symbol: 'Cd', oxidation: '2+' },
  { name: 'hierro', symbol: 'Fe', oxidation: '2+ 3+' },
  { name: 'cobalto', symbol: 'Co', oxidation: '2+ 3+' },
  { name: 'niquel', symbol: 'Ni', oxidation: '2+ 3+' },
  { name: 'estaño', symbol: 'Es', oxidation: '2+ 4+' },
  { name: 'plomo', symbol: 'Pb', oxidation: '2+ 4+' },
  { name: 'platino', symbol: 'Pt', oxidation: '2+ 4+' },
  { name: 'aluminio', symbol: 'Al', oxidation: '3+' },
  { name: 'cromo', symbol: 'Cr', oxidation: '2+ 3+ 6+' },
  { name: 'manganeso', symbol: 'Mn', oxidation: '2+ 3+ 4+, 6+ 7+' },
  { name: 'antimonio', symbol: 'Sb', oxidation: '3+ 5+' },
  { name: 'bismuto', symbol: 'Bi', oxidation: '3+ 5+' },
  { name: 'hidrogeno', symbol: 'H', oxidation: '1- 1+' },
  { name: 'fluor', symbol: 'F', oxidation: '1-' },
  { name: 'cloro', symbol: 'Cl', oxidation: '1- 1+ 3+ 5+ 7+' },
  { name: 'bromo', symbol: 'Br', oxidation: '1- 1+ 3+ 5+' },
  { name: 'yodo', symbol: 'I', oxidation: '1- 1+ 5+ 7+' },
  { name: 'oxigeno', symbol: 'O', oxidation: '1- 2-' },
  { name: 'selenio', symbol: 'Se', oxidation: '2- 4+ 6+' },
  { name: 'azufre', symbol: 'S', oxidation: '2- 2+ 4+ 6+' },
  { name: 'nitrogeno', symbol: 'N', oxidation: '3- 3+ 5+' },
  { name: 'fosforo', symbol: 'P', oxidation: '3- 3+ 5+' },
  { name: 'arsenico', symbol: 'As', oxidation: '3- 3+ 5+' },
  { name: 'boro', symbol: 'B', oxidation: '3+' },
  { name: 'carbono', symbol: 'C', oxidation: '4- 2+ 4+' },
  { name: 'silicio', symbol: 'Si', oxidation: '4+' },
];

let currentElement = null;

function getRandomElement() {
  const index = Math.floor(Math.random() * elements.length);
  return elements[index];
}

function setQuestion() {
  currentElement = getRandomElement();
  document.getElementById('question').textContent = `¿Cuál es el símbolo y el número de oxidación del elemento ${currentElement.name}?`;
}

function checkAnswer(event) {
  event.preventDefault();
  const symbolInput = document.getElementById('symbol').value.trim();
  const oxidationInput = document.getElementById('oxidation').value.trim();
  const resultElement = document.getElementById('result');

  if (symbolInput === currentElement.symbol && oxidationInput === currentElement.oxidation) {
      resultElement.textContent = '¡Correcto!';
      resultElement.style.color = 'green';
  } else {
      resultElement.textContent = `Incorrecto. La respuesta correcta es símbolo: ${currentElement.symbol}, número de oxidación: ${currentElement.oxidation}`;
      resultElement.style.color = 'red';
  }
  setQuestion();
  document.getElementById('answerForm').reset();
}

document.getElementById('answerForm').addEventListener('submit', checkAnswer);
setQuestion();

document.getElementById("exit-button").addEventListener("click", () => {
  window.location = '/interfaz/index.html'; // Redirigir a la página principal
});
