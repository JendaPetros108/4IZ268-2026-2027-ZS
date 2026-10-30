/* HOMEWORK */

/**
 * 0) Pre-preparacion.
 */
console.log('Ahoj světe');

// Elementy na stránce, se kterými budeme pracovat
const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');

// Pomocná funkce: vytvoří tlačítko, nabinduje na něj funkci a vloží ho do #tasks
const addTaskButton = (id, label, callback) => {
    const button = document.createElement('button');
    button.innerText = label;
    button.setAttribute('id', id);
    button.addEventListener('click', callback);
    tasks.appendChild(button);
};

// Pomocná funkce: vypíše text do #results (přepíše předchozí výsledek)
const showResult = (text) => {
    results.innerText = text;
};


/**
 * 1) Pepe's age.
 */
const pepesBirthYear = 2000;
const currentYear = new Date().getFullYear();
const pepesAge = currentYear - pepesBirthYear;

console.log(`Pepovi je ${pepesAge} let.`);


/**
 * 2) WTF (wow, that's fun).
 */
const celsius = 20;
const fahrenheit = 68;

const celsiusInFahrenheit = celsius * 9 / 5 + 32;
const fahrenheitInCelsius = (fahrenheit - 32) * 5 / 9;

console.log(celsius + '°C = ' + celsiusInFahrenheit + '°F');
console.log(fahrenheit + '°F = ' + fahrenheitInCelsius + '°C');


/**
 * 3) Funkce function fonction funktio.
 */
const printPepesAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    console.log(`Pepovi je ${age} let.`);
};

const printCelsiusToFahrenheit = (celsiusValue) => {
    const result = celsiusValue * 9 / 5 + 32;
    console.log(`${celsiusValue}°C = ${result}°F`);
};

const printFahrenheitToCelsius = (fahrenheitValue) => {
    const result = (fahrenheitValue - 32) * 5 / 9;
    console.log(`${fahrenheitValue}°F = ${result}°C`);
};

// Zkouška v konzoli
printPepesAge(2000);
printPepesAge(1985);
printCelsiusToFahrenheit(0);
printCelsiusToFahrenheit(100);
printFahrenheitToCelsius(32);
printFahrenheitToCelsius(212);

// Tlačítka
addTaskButton('task-1', "Uloha 1 (Pepe's age)", () => {
    printPepesAge(2000);
});
addTaskButton('task-2a', 'Uloha 2 (C na F)', () => {
    printCelsiusToFahrenheit(20);
});
addTaskButton('task-2b', 'Uloha 2 (F na C)', () => {
    printFahrenheitToCelsius(68);
});


/**
 * 4) %CENSORED%
 */
const getPercentage = (a, b) => {
    if (b === 0) {
        showResult('Nelze dělit nulou!');
        return;
    }
    const percentage = (a / b * 100).toFixed(2);
    showResult(`${a} je ${percentage}% z ${b}`);
};

addTaskButton('task-4a', 'Uloha 4 (procenta 21 z 42)', () => {
    getPercentage(21, 42);
});
addTaskButton('task-4b', 'Uloha 4 (dělení nulou)', () => {
    getPercentage(5, 0);
});


/**
 * 5) Kdo s koho.
 */
const compareNumbers = (a, b) => {
    if (a > b) {
        showResult(`${a} je větší než ${b}`);
    } else if (a < b) {
        showResult(`${b} je větší než ${a}`);
    } else {
        showResult(`${a} a ${b} se rovnají`);
    }
};

addTaskButton('task-5a', 'Uloha 5 (celá čísla 7, 3)', () => {
    compareNumbers(7, 3);
});
addTaskButton('task-5b', 'Uloha 5 (desetinná 2.5, 2.7)', () => {
    compareNumbers(2.5, 2.7);
});
addTaskButton('task-5c', 'Uloha 5 (zlomky 1/3, 1/4)', () => {
    compareNumbers(1 / 3, 1 / 4);
});
addTaskButton('task-5d', 'Uloha 5 (rovnají se 0.5, 1/2)', () => {
    compareNumbers(0.5, 1 / 2);
});


/**
 * 6) I can cleary see the pattern.
 */
const printMultiplesOf13 = () => {
    const multiples = [];
    for (let i = 0; i <= 730; i += 13) {
        multiples.push(i);
    }
    showResult(multiples.join(', '));
};

addTaskButton('task-6', 'Uloha 6 (násobky 13)', printMultiplesOf13);


/**
 * 7) Around and about.
 */
const getCircleArea = (radius) => {
    const area = Math.PI * radius ** 2;
    showResult(`Obsah kruhu s poloměrem ${radius} je ${area.toFixed(2)}`);
};

addTaskButton('task-7', 'Uloha 7 (obsah kruhu, r = 5)', () => {
    getCircleArea(5);
});


/**
 * 8) Another dimension.
 */
const getConeVolume = (height, radius) => {
    const volume = Math.PI * radius ** 2 * height / 3;
    showResult(`Objem kuželu (výška ${height}, poloměr ${radius}) je ${volume.toFixed(2)}`);
};

addTaskButton('task-8', 'Uloha 8 (objem kuželu, v = 10, r = 3)', () => {
    getConeVolume(10, 3);
});


/**
 * 9) Not sure if triangle, or just some random values.
 */
const isTriangle = (a, b, c) => {
    const valid = a + b > c && a + c > b && b + c > a;
    showResult(`Strany a = ${a}, b = ${b}, c = ${c}: ${valid ? 'ano, trojúhelník lze sestrojit (true)' : 'ne, trojúhelník nelze sestrojit (false)'}`);
    return valid;
};

addTaskButton('task-9a', 'Uloha 9 (3, 4, 5)', () => {
    isTriangle(3, 4, 5);
});
addTaskButton('task-9b', 'Uloha 9 (1, 2, 10)', () => {
    isTriangle(1, 2, 10);
});


/**
 * 10) Heroic performance.
 */
const getTriangleArea = (a, b, c) => {
    // krok 1.1 - container pro výsledky
    const resultsContainer = document.querySelector('#results');

    // krok 1.2 - validace pomocí funkce z úlohy 9
    if (!isTriangle(a, b, c)) {
        resultsContainer.innerText = `Chyba: z hodnot ${a}, ${b}, ${c} nelze sestrojit trojúhelník.`;
        return;
    }

    // krok 1.3 - Heronův vzorec
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // krok 1.4 - výpis výsledku
    resultsContainer.innerText = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}`;
};

// kroky 2-4 - tlačítka s callbackem
addTaskButton('task-10a', 'Uloha 10 (3, 4, 5)', () => {
    getTriangleArea(3, 4, 5);
});
addTaskButton('task-10b', 'Uloha 10 (1, 2, 10)', () => {
    getTriangleArea(1, 2, 10);
});
