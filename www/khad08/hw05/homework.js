/* HOMEWORK */

/**
 * 0) Pre-preparacion.
 */
console.log('Ahoj světe');


/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy...
 */
const pepeBirthYear = 1998;
const currentYear = new Date().getFullYear();
const pepeAge = currentYear - pepeBirthYear;

console.log(`Pepa se narodil v roce ${pepeBirthYear} a dnes je mu ${pepeAge} let.`);


/**
 * 2) WTF (wow, that's fun). Převod C na F a F na C.
 */
const celsius = 20;
const celsiusToFahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C = ${celsiusToFahrenheit}°F`);

const fahrenheit = 68;
const fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit}°F = ${fahrenheitToCelsius}°C`);


/**
 * 3) Funkce function fonction funktio. Převod úloh 1 a 2 do funkcí + vytvoření tlačítek.
 */
const printPepeAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    console.log(`Pepa se narodil v roce ${birthYear} a je mu ${age} let.`);
};

const convertCelsiusToFahrenheit = (cVal) => {
    const fVal = (cVal * 9 / 5) + 32;
    console.log(`${cVal}°C = ${fVal}°F`);
};

const convertFahrenheitToCelsius = (fVal) => {
    const cVal = (fVal - 32) * 5 / 9;
    console.log(`${fVal}°F = ${cVal}°C`);
};

// Otestování v konzoli
printPepeAge(1995);
convertCelsiusToFahrenheit(25);
convertFahrenheitToCelsius(77);

// Získání kontejneru pro tlačítka
const tasksContainer = document.querySelector('#tasks');

// Tlačítko pro Úlohu 1
const buttonTask1 = document.createElement('button');
buttonTask1.innerText = "Uloha 1 (Pepe's age)";
buttonTask1.setAttribute('id', 'task-1');
buttonTask1.addEventListener('click', () => {
    printPepeAge(1998);
});
tasksContainer.appendChild(buttonTask1);

// Tlačítko pro Úlohu 2
const buttonTask2 = document.createElement('button');
buttonTask2.innerText = "Uloha 2 (WTF Převod teploty)";
buttonTask2.setAttribute('id', 'task-2');
buttonTask2.addEventListener('click', () => {
    convertCelsiusToFahrenheit(20);
    convertFahrenheitToCelsius(68);
});
tasksContainer.appendChild(buttonTask2);


/**
 * 4) %CENSORED%. Výpočet procentuálního podílu.
 */
const calculatePercentage = (part, total) => {
    const resultsContainer = document.querySelector('#results');
    
    if (total === 0) {
        resultsContainer.innerText = 'Chyba: Dělení nulou není možné!';
        return null;
    }
    
    const percentage = (part / total) * 100;
    const output = `${part} je ${percentage.toFixed(2)}% z ${total}.`;
    resultsContainer.innerText = output;
    return percentage;
};

const buttonTask4 = document.createElement('button');
buttonTask4.innerText = 'Uloha 4 (%CENSORED%)';
buttonTask4.setAttribute('id', 'task-4');
buttonTask4.addEventListener('click', () => {
    calculatePercentage(21, 42);
});
tasksContainer.appendChild(buttonTask4);


/**
 * 5) Kdo s koho. Porovnání dvou čísel.
 */
const compareNumbers = (a, b) => {
    const resultsContainer = document.querySelector('#results');
    let message = '';

    if (a > b) {
        message = `Číslo ${a} je větší než ${b}.`;
    } else if (b > a) {
        message = `Číslo ${b} je větší než ${a}.`;
    } else {
        message = `Čísla ${a} a ${b} se rovnají.`;
    }

    resultsContainer.innerText = message;
};

// Testovací tlačítka pro celá čísla, desetinná čísla a zlomky
const buttonTask5Int = document.createElement('button');
buttonTask5Int.innerText = 'Uloha 5 (Celá čísla: 10 vs 5)';
buttonTask5Int.setAttribute('id', 'task-5-1');
buttonTask5Int.addEventListener('click', () => {
    compareNumbers(10, 5);
});
tasksContainer.appendChild(buttonTask5Int);

const buttonTask5Float = document.createElement('button');
buttonTask5Float.innerText = 'Uloha 5 (Desetinná čísla: 3.14 vs 3.1415)';
buttonTask5Float.setAttribute('id', 'task-5-2');
buttonTask5Float.addEventListener('click', () => {
    compareNumbers(3.14, 3.1415);
});
tasksContainer.appendChild(buttonTask5Float);

const buttonTask5Fraction = document.createElement('button');
buttonTask5Fraction.innerText = 'Uloha 5 (Zlomky / Rovnost: 1/2 vs 2/4)';
buttonTask5Fraction.setAttribute('id', 'task-5-3');
buttonTask5Fraction.addEventListener('click', () => {
    compareNumbers(1 / 2, 2 / 4);
});
tasksContainer.appendChild(buttonTask5Fraction);


/**
 * 6) I can clearly see the pattern. Násobky 13 <= 730.
 */
const printMultiplesOf13 = () => {
    const resultsContainer = document.querySelector('#results');
    const multiples = [];

    for (let i = 0; i <= 730; i += 13) {
        multiples.push(i);
    }

    resultsContainer.innerText = `Násobky 13 do 730:\n${multiples.join(', ')}`;
};

const buttonTask6 = document.createElement('button');
buttonTask6.innerText = 'Uloha 6 (Násobky 13)';
buttonTask6.setAttribute('id', 'task-6');
buttonTask6.addEventListener('click', () => {
    printMultiplesOf13();
});
tasksContainer.appendChild(buttonTask6);


/**
 * 7) Around and about. Obsah kružnice.
 */
const calculateCircleArea = (radius) => {
    const resultsContainer = document.querySelector('#results');
    const area = Math.PI * Math.pow(radius, 2);
    resultsContainer.innerText = `Obsah kružnice o poloměru r = ${radius} je ${area.toFixed(2)}.`;
};

const buttonTask7 = document.createElement('button');
buttonTask7.innerText = 'Uloha 7 (Obsah kružnice r=5)';
buttonTask7.setAttribute('id', 'task-7');
buttonTask7.addEventListener('click', () => {
    calculateCircleArea(5);
});
tasksContainer.appendChild(buttonTask7);


/**
 * 8) Another dimension. Objem kuželu.
 */
const calculateConeVolume = (radius, height) => {
    const resultsContainer = document.querySelector('#results');
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    resultsContainer.innerText = `Objem kuželu s poloměrem r = ${radius} a výškou h = ${height} je ${volume.toFixed(2)}.`;
};

const buttonTask8 = document.createElement('button');
buttonTask8.innerText = 'Uloha 8 (Objem kuželu r=3, h=7)';
buttonTask8.setAttribute('id', 'task-8');
buttonTask8.addEventListener('click', () => {
    calculateConeVolume(3, 7);
});
tasksContainer.appendChild(buttonTask8);


/**
 * 9) Not sure if triangle, or just some random values. Trojúhelníková nerovnost.
 */
const isTriangle = (a, b, c) => {
    const resultsContainer = document.querySelector('#results');
    const isValid = (a + b > c) && (a + c > b) && (b + c > a);
    const message = `Stranám a=${a}, b=${b}, c=${c} ${isValid ? 'LZE' : 'NELZE'} sestavit trojúhelník.`;

    if (resultsContainer) {
        resultsContainer.innerText = message;
    }
    
    return isValid;
};

const buttonTask9 = document.createElement('button');
buttonTask9.innerText = 'Uloha 9 (Lze postavit trojúhelník 3, 4, 5)';
buttonTask9.setAttribute('id', 'task-9');
buttonTask9.addEventListener('click', () => {
    isTriangle(3, 4, 5);
});
tasksContainer.appendChild(buttonTask9);


/**
 * 10) Heroic performance. Heronův vzorec pro obsah trojúhelníku.
 */
const calculateHeronArea = (a, b, c) => {
    // krok 1.1 - výběr containeru pro výpis výsledků
    const resultsContainer = document.querySelector('#results');

    // krok 1.2 - zvalidování vstupních argumentů pomocí funkce z úlohy č. 9
    const isValid = isTriangle(a, b, c);

    if (!isValid) {
        // v případě nevalidních hodnot vypíšeme hlášku a ukončíme funkci
        resultsContainer.innerText = `Chyba: Z délek a=${a}, b=${b}, c=${c} nelze postavit trojúhelník!`;
        return;
    }

    // krok 1.3 - výpočet obsahu podle Heronova vzorce
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // krok 1.4 - výpis výsledku
    resultsContainer.innerText = `Obsah trojúhelníku se stranami a=${a}, b=${b}, c=${c} je ${area.toFixed(2)}.`;
};

// krok 2 & 3 - vytvoření tlačítka a nabindování callbacku
const buttonTask10 = document.createElement('button');
buttonTask10.innerText = 'Uloha 10 (Heronův vzorec 3, 4, 5)';
buttonTask10.setAttribute('id', 'task-10');
buttonTask10.addEventListener('click', () => {
    calculateHeronArea(3, 4, 5);
});

// krok 4 - umístění tlačítka na stránku
tasksContainer.appendChild(buttonTask10);