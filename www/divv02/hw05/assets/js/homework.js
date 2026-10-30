/* HOMEWORK */
/**
 * 0) Pre-preparacion.
 * - Vytvořte HTML stránku s nadpisem h1 "JavaScript is awesome!" 
 * - Na stránce vytvořte místo pro umístění jednotlivých spouštěčů úkolů - tlačítek (tj. div, který má id s hodnotou "tasks" - <div id="tasks"></div>). 
 * - Na stránce vytvořte místo pro výpis výsledků úkolů (div, který má id s hodnotou "result" - <div id="results"></div>).
 * 
 * - Připojte tento homework.js soubor k vytvořené HTML stránce pomocí tagu <script> (viz LAB) a vyzkoušejte
 * console.log('Ahoj světe');
 */
const tasksContainer = document.querySelector('#tasks');
const resultsContainer = document.querySelector('#results');
console.log('Ahoj světe');

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here
const pepesBirth = 2001;
const thisYear = new Date().getFullYear();
console.log(`Pepovi je ${thisYear - pepesBirth} let`);

/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const celsiusValue = 20;
const fahrenheihtValue = 68;
const convertedCelsiusToFahrenheiht = celsiusValue * 9 / 5 + 32;
const convertedFahrenheihtToCelsius = (fahrenheihtValue - 32) * 5 / 9;
console.log(`${convertedCelsiusToFahrenheiht}°F`);
console.log(`${convertedFahrenheihtToCelsius}°C`);

/**
 * 3) Funkce function fonction funktio. Vemte předchozí úlohy a udělejte z nich funkce. Tj. vytvoříte funkce, 
 * které přijímají argumenty, a na základě argumentů po zavolání vypíše výsledek na konzoli. 
 * Párkrát zavolejte tyto funkce s různými argumenty. V konzoli také vyzkoušejte, zda fungují vaše funkce. 
 * 
 * Pro testování funkce:
 * - Pouze pomocí JavaScriptu (bez knihoven) vytvořte HTML tlačítko s názvem této úlohy, resp. co funkce dělá, a 
 * id s číslem úlohy <button id="task-1">Uloha 1 (Pepe's age)</button>, umístěte ho na stránku do předem vytvořeného 
 * místa <div id="tasks"></div> a pomocí posluchače události "click" nabindujte implementovanou funkci na toto tlačítko.
 * 
 * Výsledkem má být tlačítko, na které když kliknete, tak se provede to, co je implementováno ve funkci.
 *
 * Příklad vytvoření tlačítka s funkcí:
 * 
 * // deklarace a implementace funkce
 * const sayHello = () => {
 *   console.log('Hello');
 * };
 * 
 * // vytvoření tlačítka
 * const buttonSayHello = document.createElement('button');
 * // nastavení textu tlačítka
 * buttonSayHello.innerText = 'Say Hello';
 * // nastavení atributu id tlačítka
 * buttonSayHello.setAttribute('id', 'task-0');
 * // nabindování funkce na událost click tlačítka
 * buttonSayHello.addEventListener('click', () => {
 *   sayHello();
 * });
 * 
 * // výběr existujícího elementu na stránce s id="tasks"
 * const tasks = document.querySelector('#tasks');
 * // vložení vytvořeného tlačítka do vybraného elementu na stránce
 * tasks.appendChild(buttonSayHello);
 */
// Solution here
const calculateAge = (yearOfBirth) => {
    const age = new Date().getFullYear() - yearOfBirth;
    console.log(`Pepovi je ${age} let.`);
    resultsContainer.innerText = age;
    return age;
};
const convertCelsiusToFahrenheit = (celsiusValue) => {
    const fahrenheit = (celsiusValue * 9) / 5 + 32;
    console.log(`${fahrenheit}°F`);
    resultsContainer.innerText = `${fahrenheit}°F`;
    return fahrenheit;
};
const convertFahrenheitToCelsius = (fahrenheitValue) => {
    const celsius = ((fahrenheitValue - 32) * 5) / 9;
    console.log(`${celsius}°C`);
    resultsContainer.innerText = `${celsius}°C`;
    return celsius;
};

calculateAge(2001);
convertCelsiusToFahrenheit(20);
convertFahrenheitToCelsius(68);

const buttonTask3V = document.createElement('button');
buttonTask3V.innerText = "Task 3a - Vek";
buttonTask3V.setAttribute('id', 'task-3');
buttonTask3V.addEventListener('click', () => {
    calculateAge(2001);
});
tasksContainer.appendChild(buttonTask3V);

const buttonTask3F = document.createElement('button');
buttonTask3F.innerText = "Task 3b - Fahrenheit";
buttonTask3F.setAttribute('id', 'task-3-f');
buttonTask3F.addEventListener('click', () => {
    convertCelsiusToFahrenheit(20);
});
tasksContainer.appendChild(buttonTask3F);

const buttonTask3C = document.createElement('button');
buttonTask3C.innerText = "Task 3c - Celsius";
buttonTask3C.setAttribute('id', 'task-3-c');
buttonTask3C.addEventListener('click', () => {
    convertFahrenheitToCelsius(68);
});
tasksContainer.appendChild(buttonTask3C);

/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const getPercentage = (a, b) => {
    if (b === 0) {
        return 'Nelze delit nulou';
    }
    const result = `${((a / b) * 100).toFixed(2)}%`;
    resultsContainer.innerText = result;
    return result;
};

const buttonTask4 = document.createElement('button');
buttonTask4.innerText = 'Task 4 - Podil';
buttonTask4.setAttribute('id', 'task-4');
buttonTask4.addEventListener('click', () => {
    getPercentage(21, 42);
});
tasksContainer.appendChild(buttonTask4);

/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here
const compare = (a, b) => {
    let result = 'Cisla se rovnaji';
    if (a < b) {
        result = b;
    } else if (a > b) {
        result = a;
    }
    resultsContainer.innerText = result;
    return result;
};

compare(10, 10);
compare(10, 10.5);

const buttonTask5A = document.createElement('button');
buttonTask5A.innerText = 'Task 5a - Rovna se';
buttonTask5A.setAttribute('id', 'task-5-a');
buttonTask5A.addEventListener('click', () => {
    compare(10, 12);
});
tasksContainer.appendChild(buttonTask5A);

const buttonTask5B = document.createElement('button');
buttonTask5B.innerText = 'Task 5b - Rovna se';
buttonTask5B.setAttribute('id', 'task-5-b');
buttonTask5B.addEventListener('click', () => {
    compare(3.14, 3.1415);
});
tasksContainer.appendChild(buttonTask5B);

const buttonTask5C = document.createElement('button');
buttonTask5C.innerText = 'Task 5c - Rovna se';
buttonTask5C.setAttribute('id', 'task-5-c');
buttonTask5C.addEventListener('click', () => {
    compare(1 / 2, 2 / 4);
});
tasksContainer.appendChild(buttonTask5C);
/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const printMultiplesOfThirteen = () => {
    const multiples = [];
    for (let i = 0; i <= 730; i += 13) {
        multiples.push(i);
        console.log(i);
    }
    const result = multiples.join(', ');
    resultsContainer.innerText = result;
    return result;
};

const buttonTask6 = document.createElement('button');
buttonTask6.innerText = 'Task 6 - Nasobky 13';
buttonTask6.setAttribute('id', 'task-6');
buttonTask6.addEventListener('click', () => {
    printMultiplesOfThirteen();
});
tasksContainer.appendChild(buttonTask6);
/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const getCircleArea = (radius) => {
    const area = (Math.PI * radius ** 2).toFixed(2);
    resultsContainer.innerText = area;
    return area;
};
const buttonTask7 = document.createElement('button');
buttonTask7.innerText = 'Task 7 - Kruznice';
buttonTask7.setAttribute('id', 'task-7');
buttonTask7.addEventListener('click', () => {
    getCircleArea(7);
});
tasksContainer.appendChild(buttonTask7);

/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const getConeVolume = (height, radius) => {
    const volume = ((Math.PI * radius ** 2 * height) / 3).toFixed(2);
    resultsContainer.innerText = volume;
    return volume;
};

const buttonTask8 = document.createElement('button');
buttonTask8.innerText = 'Task 8 - Kuzel';
buttonTask8.setAttribute('id', 'task-8');
buttonTask8.addEventListener('click', () => {
    getConeVolume(67, 7);
});
tasksContainer.appendChild(buttonTask8);
/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const isTriangle = (a, b, c) => {
    const valid = a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
    console.log(`Delky stran: ${a}, ${b}, ${c} -> ${valid}`);
    resultsContainer.innerText = valid ? 'true' : 'false';
    return valid;
};

const buttonTask9 = document.createElement('button');
buttonTask9.innerText = 'Task 9 - Trojuhelnik';
buttonTask9.setAttribute('id', 'task-9');
buttonTask9.addEventListener('click', () => {
    isTriangle(3, 4, 5);
});
tasksContainer.appendChild(buttonTask9);

/**
 * 10) Heroic performance. Vytvořte funkci, která vypočte a vypíše obsah trojúhelníka podle Heronova vzorce, 
 * tj. funkce dostane délky všech 3 stran. Použijte přitom předchozí validaci v úloze č. 9, tj. počítejte pouze, 
 * když to má smysl. Hint: funkce pro odmocninu je Math.sqrt().
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
// - krok 1 - vytvořte funkci
//   - krok 1.1 - pomocí selektoru vyberte container pro výpis výsledků a uložte ho do proměnné
//   - krok 1.2 - zvalidujte vstupní argumenty pomocí funkce z úlohy č. 9
//     - v případě nevalidních hodnot vypište chybovou hlášku na místo pro výpis výsledků a funkci ukončete
//     - v případě validních hodnot pokračujte s výpočtem
//   - krok 1.3 - spočítejte obsah trojúhelníku podle Heronovy vzorce a výsledek uložte do proměnné
//   - krok 1.4 - vypište výsledek na místo pro výpis výsledků
// - krok 2 - vytvořte tlačítko
// - krok 3 - nabindujte na toto tlačítko callback, ve kterém zavoláte implementovanou funkci pro výpočet a výpis výsledků
// - krok 4 - tlačítko umístěte na stránku
// - krok 5 - otestujte řešení klikáním na tlačítko
const getTriangleArea = (a, b, c) => {
    if (!isTriangle(a, b, c)) {
        return `Neni validni`;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
};

const buttonTask10 = document.createElement('button');
buttonTask10.innerText = 'Task 10 - Heron';
buttonTask10.setAttribute('id', 'task-10');
buttonTask10.addEventListener('click', () => {
    resultsContainer.innerText = getTriangleArea(7, 12, 17);
});
tasksContainer.appendChild(buttonTask10);