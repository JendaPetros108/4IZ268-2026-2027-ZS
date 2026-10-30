/* HOMEWORK */
/**
 * 0) Pre-preparacion.
 * (Vyřešeno v souboru index.html)
 */
console.log('Ahoj světe');
const tasksDiv = document.querySelector('#tasks');
const resultsDiv = document.querySelector('#results');


/**
 * 1) Pepe's age & 3) Funkce
 */
const calculatePepesAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    const message = `Pepa se narodil v roce ${birthYear} a je mu tedy ${age} let.`;
    
    console.log(message); // Výpis do konzole podle zadání
    resultsDiv.innerHTML = message; // Výpis na stránku pro tebe
};

const btn1 = document.createElement('button');
btn1.innerText = 'Úloha 1 (Pepe\'s age)';
btn1.setAttribute('id', 'task-1');
btn1.addEventListener('click', () => calculatePepesAge(2006)); // Schválně jsem ti tam dal tvůj ročník ;)
tasksDiv.appendChild(btn1);


/**
 * 2) WTF (wow, that's fun) & 3) Funkce
 */
const convertTemperature = (temp, unit) => {
    let resultMessage = '';
    if (unit === 'C') {
        const f = (temp * 9) / 5 + 32;
        resultMessage = `${temp}°C = ${f}°F`;
    } else if (unit === 'F') {
        const c = ((temp - 32) * 5) / 9;
        resultMessage = `${temp}°F = ${c}°C`;
    }
    
    console.log(resultMessage); // Výpis do konzole podle zadání
    return resultMessage; // Vrátíme text, abychom ho mohli vypsat na stránku
};

const btn2 = document.createElement('button');
btn2.innerText = 'Úloha 2 (WTF Teploty)';
btn2.setAttribute('id', 'task-2');
btn2.addEventListener('click', () => {
    const res1 = convertTemperature(20, 'C');
    const res2 = convertTemperature(68, 'F');
    resultsDiv.innerHTML = `${res1} <br> ${res2}`; // Výpis na stránku pro tebe
});
tasksDiv.appendChild(btn2);
/**
 * 4) %CENSORED%
 */
const calculatePercentage = (a, b) => {
    if (b === 0) {
        resultsDiv.innerHTML = 'Pozor: Dělení nulou není povoleno!';
        return;
    }
    const percentage = ((a / b) * 100).toFixed(2);
    resultsDiv.innerHTML = `${a} je ${percentage}% z ${b}.`;
};

const btn4 = document.createElement('button');
btn4.innerText = 'Úloha 4 (%CENSORED%)';
btn4.setAttribute('id', 'task-4');
btn4.addEventListener('click', () => calculatePercentage(21, 42));
tasksDiv.appendChild(btn4);


/**
 * 5) Kdo s koho
 */
const compareNumbers = (a, b) => {
    if (a > b) {
        resultsDiv.innerHTML = `Číslo ${a} je větší než ${b}.`;
    } else if (b > a) {
        resultsDiv.innerHTML = `Číslo ${b} je větší než ${a}.`;
    } else {
        resultsDiv.innerHTML = `Čísla ${a} a ${b} se rovnají.`;
    }
};

// Tlačítko pro celá čísla
const btn5a = document.createElement('button');
btn5a.innerText = 'Úloha 5 (Celá čísla)';
btn5a.addEventListener('click', () => compareNumbers(10, 5));

// Tlačítko pro desetinná čísla
const btn5b = document.createElement('button');
btn5b.innerText = 'Úloha 5 (Desetinná čísla)';
btn5b.addEventListener('click', () => compareNumbers(3.14, 3.15));

// Tlačítko pro zlomky (rovnost)
const btn5c = document.createElement('button');
btn5c.innerText = 'Úloha 5 (Rovnost)';
btn5c.addEventListener('click', () => compareNumbers(1/2, 0.5));

tasksDiv.append(btn5a, btn5b, btn5c);


/**
 * 6) I can cleary see the pattern
 */
const printMultiplesOf13 = () => {
    let output = [];
    for (let i = 0; i <= 730; i += 13) {
        output.push(i);
    }
    resultsDiv.innerHTML = `Násobky 13: <br>${output.join(', ')}`;
};

const btn6 = document.createElement('button');
btn6.innerText = 'Úloha 6 (Násobky 13)';
btn6.setAttribute('id', 'task-6');
btn6.addEventListener('click', printMultiplesOf13);
tasksDiv.appendChild(btn6);


/**
 * 7) Around and about
 */
const calculateCircleArea = (radius) => {
    const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    resultsDiv.innerHTML = `Obsah kružnice s poloměrem ${radius} je ${area}.`;
};

const btn7 = document.createElement('button');
btn7.innerText = 'Úloha 7 (Obsah kružnice)';
btn7.setAttribute('id', 'task-7');
btn7.addEventListener('click', () => calculateCircleArea(5));
tasksDiv.appendChild(btn7);


/**
 * 8) Another dimension
 */
const calculateConeVolume = (height, radius) => {
    const volume = ((1/3) * Math.PI * Math.pow(radius, 2) * height).toFixed(2);
    resultsDiv.innerHTML = `Objem kuželu (výška: ${height}, poloměr: ${radius}) je ${volume}.`;
};

const btn8 = document.createElement('button');
btn8.innerText = 'Úloha 8 (Objem kuželu)';
btn8.setAttribute('id', 'task-8');
btn8.addEventListener('click', () => calculateConeVolume(10, 5));
tasksDiv.appendChild(btn8);


/** 
 * 9) Not sure if triangle, or just some random values
 */
const isTriangle = (a, b, c) => {
    const isValid = (a + b > c) && (a + c > b) && (b + c > a);
    console.log(`Lze z délek ${a}, ${b} a ${c} postavit trojúhelník? ${isValid}`);
    return isValid;
};

const btn9 = document.createElement('button');
btn9.innerText = 'Úloha 9 (Validace trojúhelníku)';
btn9.setAttribute('id', 'task-9');
btn9.addEventListener('click', () => {
    const valid = isTriangle(3, 4, 5);
    resultsDiv.innerHTML = `Trojúhelník se stranami 3, 4, 5: ${valid ? 'Lze sestrojit' : 'Nelze sestrojit'}`;
});
tasksDiv.appendChild(btn9);


/**
 * 10) Heroic performance
 */
const calculateTriangleAreaByHeron = (a, b, c) => {
    // Krok 1.1: Výběr elementu už proběhl nahoře (resultsDiv)
    // Krok 1.2: Validace
    if (!isTriangle(a, b, c)) {
        resultsDiv.innerHTML = `Chyba: Z dodaných délek (${a}, ${b}, ${c}) nelze sestrojit trojúhelník.`;
        return;
    }
    
    // Krok 1.3: Výpočet dle Heronova vzorce
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
    
    // Krok 1.4: Výpis výsledku
    resultsDiv.innerHTML = `Obsah trojúhelníku (strany: ${a}, ${b}, ${c}) je ${area}.`;
};

// Krok 2: Vytvoření tlačítka
const btn10 = document.createElement('button');
btn10.innerText = 'Úloha 10 (Heronův vzorec)';
btn10.setAttribute('id', 'task-10');

// Krok 3: Nabindování callbacku
btn10.addEventListener('click', () => calculateTriangleAreaByHeron(7, 8, 9));

// Krok 4: Umístění na stránku
tasksDiv.appendChild(btn10);
// Krok 5: Otestování naklikáním na stránce :)