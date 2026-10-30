// 0) priprava
console.log('Ahoj světe');

const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');

// pomocna funkce na vypis do stranky
function vypis(text) {
  const p = document.createElement('p');
  p.innerText = text;
  results.appendChild(p);
}

// 1) Pepe's age
const birthYear = 1990;
const thisYear = 2026;
console.log('Pepe is ' + (thisYear - birthYear) + ' years old.');

// 2) teplota
const celsius = 20;
const fahrenheit = 68;
console.log(celsius + '°C = ' + (celsius * 9 / 5 + 32) + '°F');
console.log(fahrenheit + '°F = ' + ((fahrenheit - 32) * 5 / 9) + '°C');

// 3) funkce
function pepesAge(birthYear) {
  const age = 2026 - birthYear;
  console.log('Pepe is ' + age + ' years old.');
}

function celsiusToFahrenheit(c) {
  const f = c * 9 / 5 + 32;
  console.log(c + '°C = ' + f + '°F');
}

function fahrenheitToCelsius(f) {
  const c = (f - 32) * 5 / 9;
  console.log(f + '°F = ' + c + '°C');
}

pepesAge(1990);
pepesAge(2000);
celsiusToFahrenheit(20);
celsiusToFahrenheit(0);
fahrenheitToCelsius(68);
fahrenheitToCelsius(32);

// tlacitka pro ulohu 3
const button1 = document.createElement('button');
button1.innerText = "Uloha 1 (Pepe's age)";
button1.setAttribute('id', 'task-1');
button1.addEventListener('click', function () {
  pepesAge(1990);
});
tasks.appendChild(button1);

const button2 = document.createElement('button');
button2.innerText = 'Uloha 2 (C na F)';
button2.setAttribute('id', 'task-2');
button2.addEventListener('click', function () {
  celsiusToFahrenheit(20);
});
tasks.appendChild(button2);

const button3 = document.createElement('button');
button3.innerText = 'Uloha 2 (F na C)';
button3.setAttribute('id', 'task-3');
button3.addEventListener('click', function () {
  fahrenheitToCelsius(68);
});
tasks.appendChild(button3);

// 4) procenta
function percent(a, b) {
  if (b === 0) {
    vypis('Nelze delit nulou!');
    return;
  }
  const result = (a / b * 100).toFixed(2);
  vypis(a + ' je ' + result + '% z ' + b);
}

const button4 = document.createElement('button');
button4.innerText = 'Uloha 4 (procenta)';
button4.setAttribute('id', 'task-4');
button4.addEventListener('click', function () {
  percent(21, 42);
});
tasks.appendChild(button4);

const button4b = document.createElement('button');
button4b.innerText = 'Uloha 4 (deleni nulou)';
button4b.setAttribute('id', 'task-4b');
button4b.addEventListener('click', function () {
  percent(5, 0);
});
tasks.appendChild(button4b);

// 5) kdo s koho
function compare(a, b) {
  if (a > b) {
    vypis(a + ' je vetsi nez ' + b);
  } else if (a < b) {
    vypis(b + ' je vetsi nez ' + a);
  } else {
    vypis(a + ' a ' + b + ' se rovnaji');
  }
}

const button5 = document.createElement('button');
button5.innerText = 'Uloha 5 (cela cisla)';
button5.setAttribute('id', 'task-5');
button5.addEventListener('click', function () {
  compare(5, 10);
});
tasks.appendChild(button5);

const button5b = document.createElement('button');
button5b.innerText = 'Uloha 5 (desetinna)';
button5b.setAttribute('id', 'task-5b');
button5b.addEventListener('click', function () {
  compare(3.14, 2.71);
});
tasks.appendChild(button5b);

const button5c = document.createElement('button');
button5c.innerText = 'Uloha 5 (zlomky)';
button5c.setAttribute('id', 'task-5c');
button5c.addEventListener('click', function () {
  compare(1 / 2, 2 / 4);
});
tasks.appendChild(button5c);

// 6) nasobky 13
function multiples() {
  let text = '';
  for (let i = 0; i <= 730; i += 13) {
    text = text + i + ' ';
  }
  vypis(text);
}

const button6 = document.createElement('button');
button6.innerText = 'Uloha 6 (nasobky 13)';
button6.setAttribute('id', 'task-6');
button6.addEventListener('click', function () {
  multiples();
});
tasks.appendChild(button6);

// 7) obsah kruhu
function circleArea(r) {
  const area = Math.PI * r * r;
  vypis('Obsah kruhu s polomerem ' + r + ' je ' + area.toFixed(2));
}

const button7 = document.createElement('button');
button7.innerText = 'Uloha 7 (obsah kruhu)';
button7.setAttribute('id', 'task-7');
button7.addEventListener('click', function () {
  circleArea(5);
});
tasks.appendChild(button7);

// 8) objem kuzelu
function coneVolume(height, radius) {
  const volume = Math.PI * radius * radius * height / 3;
  vypis('Objem kuzelu je ' + volume.toFixed(2));
}

const button8 = document.createElement('button');
button8.innerText = 'Uloha 8 (objem kuzelu)';
button8.setAttribute('id', 'task-8');
button8.addEventListener('click', function () {
  coneVolume(10, 3);
});
tasks.appendChild(button8);

// 9) trojuhelnik
function isTriangle(a, b, c) {
  let ok = false;
  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    ok = true;
  }
  if (ok) {
    vypis('a=' + a + ', b=' + b + ', c=' + c + ': yes');
  } else {
    vypis('a=' + a + ', b=' + b + ', c=' + c + ': no');
  }
  return ok;
}

const button9 = document.createElement('button');
button9.innerText = 'Uloha 9 (3, 4, 5)';
button9.setAttribute('id', 'task-9');
button9.addEventListener('click', function () {
  isTriangle(3, 4, 5);
});
tasks.appendChild(button9);

const button9b = document.createElement('button');
button9b.innerText = 'Uloha 9 (1, 2, 10)';
button9b.setAttribute('id', 'task-9b');
button9b.addEventListener('click', function () {
  isTriangle(1, 2, 10);
});
tasks.appendChild(button9b);

// 10) Heronuv vzorec
function triangleArea(a, b, c) {
  const container = document.querySelector('#results');
  if (!isTriangle(a, b, c)) {
    container.innerText = 'Z techto stran nejde postavit trojuhelnik.';
    return;
  }
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  container.innerText = 'Obsah trojuhelniku je ' + area.toFixed(2);
}

const button10 = document.createElement('button');
button10.innerText = 'Uloha 10 (Heron)';
button10.setAttribute('id', 'task-10');
button10.addEventListener('click', function () {
  triangleArea(3, 4, 5);
});
tasks.appendChild(button10);

const button10b = document.createElement('button');
button10b.innerText = 'Uloha 10 (spatne strany)';
button10b.setAttribute('id', 'task-10b');
button10b.addEventListener('click', function () {
  triangleArea(1, 2, 10);
});
tasks.appendChild(button10b);
