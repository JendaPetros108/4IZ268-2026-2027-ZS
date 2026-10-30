console.log('Hello world');

const tasksDiv = document.querySelector('#tasks');
const resultsDiv = document.querySelector('#results');

const createBtn = (id, text, callback) => {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.setAttribute('id', id);
    btn.addEventListener('click', callback);
    tasksDiv.appendChild(btn);
};

const pepeBirthYear = 1990;
const pepeAge = new Date().getFullYear() - pepeBirthYear;
console.log(`Pepe is ${pepeAge} years old.`);

const c = 20;
const f = (c * 9) / 5 + 32;
console.log(`${c}°C = ${f}°F`);

const f2 = 68;
const c2 = ((f2 - 32) * 5) / 9;
console.log(`${f2}°F = ${c2}°C`);

const getPepesAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    console.log(`Pepe is ${age} years old.`);
    resultsDiv.innerText = `Pepe is ${age} years old.`;
};

const convertTemperature = (celsius) => {
    const fahr = (celsius * 9) / 5 + 32;
    console.log(`${celsius}°C = ${fahr}°F`);
    resultsDiv.innerText = `${celsius}°C = ${fahr}°F`;
};

createBtn('task-3-1', "Pepe's age", () => getPepesAge(1990));
createBtn('task-3-2', "WTF (wow, that's fun)", () => convertTemperature(20));

const calculatePercentage = (a, b) => {
    if (b === 0) {
        resultsDiv.innerText = 'Cannot divide by zero.';
        return;
    }
    const result = (a / b) * 100;
    resultsDiv.innerText = `${a} is ${result.toFixed(2)}% of ${b}.`;
};

createBtn('task-4', "Percentage", () => calculatePercentage(21, 42));

const compareNumbers = (a, b) => {
    if (a > b) resultsDiv.innerText = `${a} is greater than ${b}.`;
    else if (b > a) resultsDiv.innerText = `${b} is greater than ${a}.`;
    else resultsDiv.innerText = `Numbers are equal.`;
};

createBtn('task-5-1', "Integer", () => compareNumbers(10, 5));
createBtn('task-5-2', "Decimal", () => compareNumbers(3.14, 2.71));
createBtn('task-5-3', "Fractions", () => compareNumbers(1/2, 1/2));

const printMultiples = () => {
    let result = [];
    for (let i = 0; i <= 730; i += 13) {
        result.push(i);
    }
    resultsDiv.innerText = result.join(', ');
};

createBtn('task-6', "Multiple", printMultiples);

const circleArea = (r) => {
    const area = Math.PI * (r ** 2);
    resultsDiv.innerText = `Circle area: ${area.toFixed(2)}`;
};

createBtn('task-7', "Circle", () => circleArea(5));

const coneVolume = (h, r) => {
    const volume = (1/3) * Math.PI * (r ** 2) * h;
    resultsDiv.innerText = `Cone volume: ${volume.toFixed(2)}`;
};

createBtn('task-8', "Another dimension", () => coneVolume(10, 5));

const isTriangle = (a, b, c) => {
    const valid = a + b > c && a + c > b && b + c > a;
    resultsDiv.innerText = `Sides: a=${a}, b=${b}, c=${c} | Is it a valid triangle? ${valid}`;
    return valid;
};

createBtn('task-9', "Triangle?", () => isTriangle(3, 4, 5));

const heronArea = (a, b, c) => {
    if (!isTriangle(a, b, c)) {
        resultsDiv.innerText = 'The given values do not form a triangle.';
        return;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    resultsDiv.innerText = `Triangle area: ${area.toFixed(2)}`;
};

createBtn('task-10', "Heroic performance", () => heronArea(3, 4, 5));