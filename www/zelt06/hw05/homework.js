
console.log('Ahoj světe');


const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');

const addTaskButton = (id, text, callback) => {
  const button = document.createElement('button');
  button.innerText = text;
  button.setAttribute('id', id);
  button.addEventListener('click', () => {
    callback();
  });
  tasks.appendChild(button);
};

const showResult = (text) => {
  results.innerText = text;
};


const round = (value, digits = 2) => Number(value.toFixed(digits));


const pepeBirthYear = 1990;
const currentYear = new Date().getFullYear();
console.log(`Pepe was born in ${pepeBirthYear}, so he is ${currentYear - pepeBirthYear} years old.`);


const temperatureCelsius = 20;
const temperatureFahrenheit = 68;
console.log(`${temperatureCelsius}°C = ${temperatureCelsius * 9 / 5 + 32}°F`);
console.log(`${temperatureFahrenheit}°F = ${(temperatureFahrenheit - 32) * 5 / 9}°C`);


const printPepesAge = (birthYear) => {
  const age = new Date().getFullYear() - birthYear;
  console.log(`Pepe was born in ${birthYear}, so he is ${age} years old.`);
};

const celsiusToFahrenheit = (celsius) => {
  console.log(`${celsius}°C = ${round(celsius * 9 / 5 + 32)}°F`);
};

const fahrenheitToCelsius = (fahrenheit) => {
  console.log(`${fahrenheit}°F = ${round((fahrenheit - 32) * 5 / 9)}°C`);
};

printPepesAge(1985);
printPepesAge(2000);
celsiusToFahrenheit(0);
celsiusToFahrenheit(36.6);
fahrenheitToCelsius(32);
fahrenheitToCelsius(100);


addTaskButton('task-1', "Uloha 1 (Pepe's age)", () => {
  printPepesAge(1990);
});
addTaskButton('task-2-c-to-f', 'Uloha 2 (°C na °F)', () => {
  celsiusToFahrenheit(20);
});
addTaskButton('task-2-f-to-c', 'Uloha 2 (°F na °C)', () => {
  fahrenheitToCelsius(68);
});


const printPercentage = (first, second) => {
  if (second === 0) {
    showResult('Nelze dělit nulou.');
    return;
  }
  const percentage = (first / second * 100).toFixed(2);
  showResult(`${first} je ${percentage} % z ${second}`);
};

addTaskButton('task-4', 'Uloha 4 (21 je kolik % z 42)', () => {
  printPercentage(21, 42);
});
addTaskButton('task-4-zero', 'Uloha 4 (dělení nulou)', () => {
  printPercentage(5, 0);
});


const compareNumbers = (first, second) => {
  if (first > second) {
    showResult(`${round(first, 4)} je větší než ${round(second, 4)}`);
  } else if (second > first) {
    showResult(`${round(second, 4)} je větší než ${round(first, 4)}`);
  } else {
    showResult(`${round(first, 4)} a ${round(second, 4)} se rovnají`);
  }
};


const compareCases = [
  { id: 'task-5-integers', label: 'Uloha 5 (celá čísla 7 a 3)', first: 7, second: 3 },
  { id: 'task-5-negative', label: 'Uloha 5 (záporná čísla -5 a -2)', first: -5, second: -2 },
  { id: 'task-5-decimals', label: 'Uloha 5 (desetinná čísla 2.5 a 2.75)', first: 2.5, second: 2.75 },
  { id: 'task-5-fractions', label: 'Uloha 5 (zlomky 1/3 a 2/5)', first: 1 / 3, second: 2 / 5 },
  { id: 'task-5-equal', label: 'Uloha 5 (stejná čísla 4 a 4)', first: 4, second: 4 },
];

compareCases.forEach((testCase) => {
  addTaskButton(testCase.id, testCase.label, () => {
    compareNumbers(testCase.first, testCase.second);
  });
});


const printMultiplesOf13 = () => {
  const multiples = [];
  for (let i = 0; i <= 730; i += 13) {
    multiples.push(i);
  }
  showResult(multiples.join(', '));
};

addTaskButton('task-6', 'Uloha 6 (násobky 13 do 730)', () => {
  printMultiplesOf13();
});


const circleArea = (radius) => {
  if (radius < 0) {
    showResult('Poloměr nemůže být záporný.');
    return;
  }
  const area = Math.PI * radius ** 2;
  showResult(`Obsah kružnice o poloměru ${radius} je ${area.toFixed(2)}.`);
};

addTaskButton('task-7', 'Uloha 7 (obsah kružnice, r = 5)', () => {
  circleArea(5);
});



const coneVolume = (height, radius) => {
  if (height < 0 || radius < 0) {
    showResult('Výška ani poloměr nemohou být záporné.');
    return;
  }
  const volume = Math.PI * radius ** 2 * height / 3;
  showResult(`Objem kuželu s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}.`);
};

addTaskButton('task-8', 'Uloha 8 (objem kuželu, v = 10, r = 3)', () => {
  coneVolume(10, 3);
});


const canBuildTriangle = (a, b, c) => {
  const isValid = a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
  showResult(`Strany: a = ${a}, b = ${b}, c = ${c}. Lze sestrojit trojúhelník? ${isValid ? 'ano (true)' : 'ne (false)'}`);
  return isValid;
};

addTaskButton('task-9-yes', 'Uloha 9 (3, 4, 5)', () => {
  canBuildTriangle(3, 4, 5);
});
addTaskButton('task-9-no', 'Uloha 9 (1, 2, 10)', () => {
  canBuildTriangle(1, 2, 10);
});


const triangleAreaHeron = (a, b, c) => {
  const resultContainer = document.querySelector('#results');
  if (!canBuildTriangle(a, b, c)) {
    resultContainer.innerText = `Z délek ${a}, ${b}, ${c} nelze sestrojit trojúhelník, obsah nelze spočítat.`;
    return;
  }

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  resultContainer.innerText = `Obsah trojúhelníku o stranách ${a}, ${b}, ${c} je ${round(area)}.`;
};


addTaskButton('task-10-yes', 'Uloha 10 (obsah trojúhelníku 3, 4, 5)', () => {
  triangleAreaHeron(3, 4, 5);
});
addTaskButton('task-10-no', 'Uloha 10 (nevalidní 1, 2, 10)', () => {
  triangleAreaHeron(1, 2, 10);
});