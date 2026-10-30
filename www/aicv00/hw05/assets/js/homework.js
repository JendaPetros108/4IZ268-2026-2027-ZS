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


/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here

const pepesBirthYear = 2000;
const currentYear = new Date().getFullYear();
console.log(`Pepa se narodil v roce ${pepesBirthYear} a letos mu je ${currentYear - pepesBirthYear} let.`);

/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const celsius = 20;
const fahrenheit = 68;

const convertedToFahrenheit = (celsius * 9 / 5) + 32;
const convertedToCelsius = (fahrenheit - 32) * 5 / 9;

console.log(`${celsius}°C = ${convertedToFahrenheit}°F`);
console.log(`${fahrenheit}°F = ${convertedToCelsius}°C`);

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

// Funkce pro Úlohu 1
const getAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    console.log(`Pepa se narodil v roce ${birthYear} a letos mu je ${currentYear - birthYear} let.`);
};

// Funkce pro Úlohu 2
const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`${celsius}°C = ${fahrenheit}°F`);
};

const convertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F = ${celsius}°C`);
};

// Volání funkcí s různými argumenty do konzole
getAge(1990);
getAge(2010);
convertCelsiusToFahrenheit(0);
convertFahrenheitToCelsius(100);

// Tlačítko pro úlohu 1
const buttonTask1 = document.createElement('button');
buttonTask1.innerText = "Úloha 1 (Pepe's age)";
buttonTask1.setAttribute('id', 'task-1');
buttonTask1.addEventListener('click', () => {
    getAge(2000);
});

// Tlačítko pro úlohu 2
const buttonTask2 = document.createElement('button');
buttonTask2.innerText = "Úloha 2 (WTF)";
buttonTask2.setAttribute('id', 'task-2');
buttonTask2.addEventListener('click', () => {
    convertCelsiusToFahrenheit(20);
    convertFahrenheitToCelsius(68);
});

// Vložení tlačítek do divu
const tasksDiv = document.querySelector('#tasks');
tasksDiv.appendChild(buttonTask1);
tasksDiv.appendChild(buttonTask2);

/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here

const calculatePercentage = (a, b) => {
    const resultsDiv = document.querySelector('#results');
    
    if (b === 0) {
        resultsDiv.innerText = 'Nelze dělit nulou!';
        return;
    }
    
    const percentage = (a / b * 100).toFixed(2);
    resultsDiv.innerText = `${a} je ${percentage}% z ${b}.`;
};

const buttonTask4 = document.createElement('button');
buttonTask4.innerText = 'Úloha 4 (%CENSORED%)';
buttonTask4.setAttribute('id', 'task-4');
buttonTask4.addEventListener('click', () => {
    calculatePercentage(21, 42); 
});

document.querySelector('#tasks').appendChild(buttonTask4);

/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here

const compareNumbers = (a, b) => {
    const resultsDiv = document.querySelector('#results');
    if (a > b) {
        resultsDiv.innerText = `Větší je číslo: ${a}`;
    } else if (a < b) {
        resultsDiv.innerText = `Větší je číslo: ${b}`;
    } else {
        resultsDiv.innerText = `Čísla se rovnají (${a} = ${b}).`;
    }
};

const tasksContainer = document.querySelector('#tasks');

// Tlačítko pro celá čísla
const buttonTask5Int = document.createElement('button');
buttonTask5Int.innerText = 'Úloha 5 (Celá čísla)';
buttonTask5Int.setAttribute('id', 'task-5-int');
buttonTask5Int.addEventListener('click', () => {
    compareNumbers(10, 42);
});
tasksContainer.appendChild(buttonTask5Int);

// Tlačítko pro desetinná čísla
const buttonTask5Float = document.createElement('button');
buttonTask5Float.innerText = 'Úloha 5 (Desetinná čísla)';
buttonTask5Float.setAttribute('id', 'task-5-float');
buttonTask5Float.addEventListener('click', () => {
    compareNumbers(3.141, 3.142);
});
tasksContainer.appendChild(buttonTask5Float);

// Tlačítko pro zlomky
const buttonTask5Fraction = document.createElement('button');
buttonTask5Fraction.innerText = 'Úloha 5 (Zlomky)';
buttonTask5Fraction.setAttribute('id', 'task-5-fraction');
buttonTask5Fraction.addEventListener('click', () => {
    compareNumbers(1/3, 1/2);
});
tasksContainer.appendChild(buttonTask5Fraction);

// Tlačítko pro rovnost
const buttonTask5Equal = document.createElement('button');
buttonTask5Equal.innerText = 'Úloha 5 (Rovnost)';
buttonTask5Equal.setAttribute('id', 'task-5-equal');
buttonTask5Equal.addEventListener('click', () => {
    compareNumbers(7, 7);
});
tasksContainer.appendChild(buttonTask5Equal);

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here

const getMultiplesOf13 = () => {
    const resultsDiv = document.querySelector('#results');
    let multiples = [];
    
    for (let i = 0; i <= 730; i += 13) {
        multiples.push(i);
    }
    
    resultsDiv.innerText = `Násobky 13: ${multiples.join(', ')}`;
};

const buttonTask6 = document.createElement('button');
buttonTask6.innerText = 'Úloha 6 (Pattern)';
buttonTask6.setAttribute('id', 'task-6');
buttonTask6.addEventListener('click', () => {
    getMultiplesOf13();
});
document.querySelector('#tasks').appendChild(buttonTask6);

/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const calculateCircleArea = (radius) => {
    const resultsDiv = document.querySelector('#results');
    const area = Math.PI * radius ** 2;
    resultsDiv.innerText = `Obsah kružnice s poloměrem ${radius} je ${area.toFixed(2)}.`;
};

const buttonTask7 = document.createElement('button');
buttonTask7.innerText = 'Úloha 7 (Obsah kružnice)';
buttonTask7.setAttribute('id', 'task-7');
buttonTask7.addEventListener('click', () => {
    calculateCircleArea(5); // Můžeš si zkusit změnit číslo
});
document.querySelector('#tasks').appendChild(buttonTask7);

/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const calculateConeVolume = (height, radius) => {
    const resultsDiv = document.querySelector('#results');
    const volume = (Math.PI * radius ** 2 * height) / 3;
    resultsDiv.innerText = `Objem kuželu s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}.`;
};

const buttonTask8 = document.createElement('button');
buttonTask8.innerText = 'Úloha 8 (Objem kuželu)';
buttonTask8.setAttribute('id', 'task-8');
buttonTask8.addEventListener('click', () => {
    calculateConeVolume(10, 5); 
});
document.querySelector('#tasks').appendChild(buttonTask8);

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
    const resultsDiv = document.querySelector('#results');
    const isValid = (a + b > c) && (a + c > b) && (b + c > a);
    
    if (isValid) {
        resultsDiv.innerText = `Strany: a=${a}, b=${b}, c=${c}. Lze sestrojit trojúhelník? Ano (true).`;
    } else {
        resultsDiv.innerText = `Strany: a=${a}, b=${b}, c=${c}. Lze sestrojit trojúhelník? Ne (false).`;
    }
    
    return isValid;
};

const buttonTask9 = document.createElement('button');
buttonTask9.innerText = 'Úloha 9 (Je to trojúhelník?)';
buttonTask9.setAttribute('id', 'task-9');
buttonTask9.addEventListener('click', () => {
    isTriangle(3, 4, 5); // Zkus si třeba i (1, 2, 10)
});
document.querySelector('#tasks').appendChild(buttonTask9);

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

const calculateTriangleArea = (a, b, c) => {
    const resultsDiv = document.querySelector('#results');
    
    if (!isTriangle(a, b, c)) {
        resultsDiv.innerText = `Chyba: Ze stran ${a}, ${b} a ${c} nelze sestrojit trojúhelník.`;
        return;
    }
    
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    resultsDiv.innerText = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}.`;
};

const buttonTask10 = document.createElement('button');
buttonTask10.innerText = 'Úloha 10 (Obsah trojúhelníku)';
buttonTask10.setAttribute('id', 'task-10');
buttonTask10.addEventListener('click', () => {
    calculateTriangleArea(3, 4, 5); 
});
document.querySelector('#tasks').appendChild(buttonTask10);