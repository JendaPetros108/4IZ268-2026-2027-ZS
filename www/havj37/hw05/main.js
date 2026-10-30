/* HOMEWORK */
/**
 * 0) Pre-preparacion.
 * - Vytvořte HTML stránku s nadpisem h1 "JavaScript is awesome!" 
 * - Na stránce vytvořte místo pro umístění jednotlivých spouštěčů úkolů - tlačítek (tj. div, který má id s hodnotou "tasks" - <div id="tasks"></div>). 
 * - Na stránce vytvořte místo pro výpis výsledků úkolů (div, který má id s hodnotou "result" - <div id="results"></div>).
 * 
 * - Připojte tento homework.js soubor k vytvořené HTML stránce pomocí tagu <script> (viz LAB) a vyzkoušejte
 */
console.log('Ahoj světe');

// Pomocné reference na elementy v HTML (pro úlohy 3 až 10)
const tasksContainer = document.querySelector('#tasks');
const resultsContainer = document.querySelector('#results');


/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here
const birthYear = 1995;
const currentYear = new Date().getFullYear();
const pepeAge = currentYear - birthYear;
console.log(`Pepe is ${pepeAge} years old (born in ${birthYear}).`);


/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const celsius = 20;
const calculatedFahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C = ${calculatedFahrenheit}°F`);

const fahrenheit = 68;
const calculatedCelsius = ((fahrenheit - 32) * 5) / 9;
console.log(`${fahrenheit}°F = ${calculatedCelsius}°C`);


/**
 * 3) Funkce function fonction funktio. Vemte předchozí úlohy a udělejte z nich funkce. Tj. vytvoříte funkce, 
 * které přijímají argumenty, a na základě argumentů po zavolání vypíše výsledek na konzoli. 
 * Párkrát zavolejte tyto funkce s různými argumenty. V konzoli také vyzkoušejte, zda fungují vaše funkce. 
 */
// Solution here

// Funkce pro úlohu 1
const printPepeAge = (pepeBirthYear) => {
    const year = new Date().getFullYear();
    const age = year - pepeBirthYear;
    const message = `Pepe is ${age} years old (born in ${pepeBirthYear}).`;
    console.log(message);
    resultsContainer.innerText = message;
};

// Funkce pro úlohu 2
const convertCelsiusToFahrenheit = (tempC) => {
    const tempF = (tempC * 9) / 5 + 32;
    const message = `${tempC}°C = ${tempF.toFixed(1)}°F`;
    console.log(message);
    resultsContainer.innerText = message;
};

const convertFahrenheitToCelsius = (tempF) => {
    const tempC = ((tempF - 32) * 5) / 9;
    const message = `${tempF}°F = ${tempC.toFixed(1)}°C`;
    console.log(message);
    resultsContainer.innerText = message;
};

// Zavolání funkcí s různými argumenty do konzole
printPepeAge(1990);
printPepeAge(2002);
convertCelsiusToFahrenheit(0);
convertCelsiusToFahrenheit(30);
convertFahrenheitToCelsius(32);
convertFahrenheitToCelsius(100);

// Vytvoření tlačítka pro Úlohu 1
const buttonTask1 = document.createElement('button');
buttonTask1.innerText = "Uloha 1 (Pepe's age)";
buttonTask1.setAttribute('id', 'task-1');
buttonTask1.addEventListener('click', () => {
    printPepeAge(1995);
});
tasksContainer.appendChild(buttonTask1);

// Vytvoření tlačítek pro Úlohu 2
const buttonTask2a = document.createElement('button');
buttonTask2a.innerText = 'Uloha 2 (°C na °F)';
buttonTask2a.setAttribute('id', 'task-2a');
buttonTask2a.addEventListener('click', () => {
    convertCelsiusToFahrenheit(25);
});
tasksContainer.appendChild(buttonTask2a);

const buttonTask2b = document.createElement('button');
buttonTask2b.innerText = 'Uloha 2 (°F na °C)';
buttonTask2b.setAttribute('id', 'task-2b');
buttonTask2b.addEventListener('click', () => {
    convertFahrenheitToCelsius(77);
});
tasksContainer.appendChild(buttonTask2b);


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const getPercentage = (part, whole) => {
    if (whole === 0) {
        const errorMsg = 'Chyba: Nelze dělit nulou!';
        console.log(errorMsg);
        resultsContainer.innerText = errorMsg;
        return null;
    }
    const ratio = (part / whole) * 100;
    const formattedRatio = ratio.toFixed(2);
    const message = `${part} je ${formattedRatio}% z ${whole}`;
    console.log(message);
    resultsContainer.innerText = message;
    return ratio;
};

const buttonTask4 = document.createElement('button');
buttonTask4.innerText = 'Uloha 4 (Podíl v procentech)';
buttonTask4.setAttribute('id', 'task-4');
buttonTask4.addEventListener('click', () => {
    getPercentage(20, 42);
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
const compareNumbers = (num1, num2) => {
    let message;
    if (num1 > num2) {
        message = `Číslo ${num1} je větší než ${num2}.`;
    } else if (num2 > num1) {
        message = `Číslo ${num2} je větší než ${num1}.`;
    } else {
        message = `Čísla ${num1} a ${num2} se rovnají.`;
    }
    console.log(message);
    resultsContainer.innerText = message;
};

// Tlačítko 5a - celá čísla
const buttonTask5a = document.createElement('button');
buttonTask5a.innerText = 'Uloha 5 (Větší/menší - Celá čísla)';
buttonTask5a.setAttribute('id', 'task-5a');
buttonTask5a.addEventListener('click', () => {
    compareNumbers(10, 5);
});
tasksContainer.appendChild(buttonTask5a);

// Tlačítko 5b - desetinná čísla
const buttonTask5b = document.createElement('button');
buttonTask5b.innerText = 'Uloha 5 (Větší/menší - Desetinná)';
buttonTask5b.setAttribute('id', 'task-5b');
buttonTask5b.addEventListener('click', () => {
    compareNumbers(3.14, 3.1415);
});
tasksContainer.appendChild(buttonTask5b);

// Tlačítko 5c - zlomky (shodná hodnota)
const buttonTask5c = document.createElement('button');
buttonTask5c.innerText = 'Uloha 5 (Větší/menší - Zlomky)';
buttonTask5c.setAttribute('id', 'task-5c');
buttonTask5c.addEventListener('click', () => {
    compareNumbers(1 / 2, 2 / 4);
});
tasksContainer.appendChild(buttonTask5c);


/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const printMultiplesOf13 = () => {
    const multiples = [];
    for (let i = 0; i <= 730; i += 13) {
        multiples.push(i);
    }
    const output = multiples.join(', ');
    const message = `Násobky 13: ${output}`;
    console.log(message);
    resultsContainer.innerText = message;
};

const buttonTask6 = document.createElement('button');
buttonTask6.innerText = 'Uloha 6 (Násobky 13)';
buttonTask6.setAttribute('id', 'task-6');
buttonTask6.addEventListener('click', () => {
    printMultiplesOf13();
});
tasksContainer.appendChild(buttonTask6);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const calculateCircleArea = (radius) => {
    const area = Math.PI * Math.pow(radius, 2);
    const message = `Obsah kruhu s poloměrem ${radius} je ${area.toFixed(2)}.`;
    console.log(message);
    resultsContainer.innerText = message;
    return area;
};

const buttonTask7 = document.createElement('button');
buttonTask7.innerText = 'Uloha 7 (Obsah kruhu)';
buttonTask7.setAttribute('id', 'task-7');
buttonTask7.addEventListener('click', () => {
    calculateCircleArea(5);
});
tasksContainer.appendChild(buttonTask7);


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const calculateConeVolume = (radius, height) => {
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    const message = `Objem kuželu (r=${radius}, v=${height}) je ${volume.toFixed(2)}.`;
    console.log(message);
    resultsContainer.innerText = message;
    return volume;
};

const buttonTask8 = document.createElement('button');
buttonTask8.innerText = 'Uloha 8 (Objem kuželu)';
buttonTask8.setAttribute('id', 'task-8');
buttonTask8.addEventListener('click', () => {
    calculateConeVolume(3, 10);
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
    const valid = (a + b > c) && (a + c > b) && (b + c > a);
    const verdict = valid ? 'ANO (true)' : 'NE (false)';
    const message = `Strany: a=${a}, b=${b}, c=${c} -> Lze sestrojit trojúhelník: ${verdict}`;
    console.log(message);
    resultsContainer.innerText = message;
    return valid;
};

const buttonTask9 = document.createElement('button');
buttonTask9.innerText = 'Uloha 9 (Trojúhelník)';
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
const calculateHeroicTriangleArea = (a, b, c) => {
    // - krok 1.1 - pomocí selektoru vyberte container pro výpis výsledků a uložte ho do proměnné
    const resultElement = document.querySelector('#results');

    // - krok 1.2 - zvalidujte vstupní argumenty pomocí funkce z úlohy č. 9
    if (!isTriangle(a, b, c)) {
        const errorMessage = `Chyba: Ze stran a=${a}, b=${b}, c=${c} nelze sestrojit trojúhelník!`;
        console.log(errorMessage);
        resultElement.innerText = errorMessage;
        return;
    }

    // - krok 1.3 - spočítejte obsah trojúhelníku podle Heronovy vzorce a výsledek uložte do proměnné
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // - krok 1.4 - vypište výsledek na místo pro výpis výsledků
    const resultMessage = `Obsah trojúhelníku se stranami a=${a}, b=${b}, c=${c} je ${area.toFixed(2)}.`;
    console.log(resultMessage);
    resultElement.innerText = resultMessage;
};

// - krok 2 - vytvořte tlačítko (pro validní trojúhelník)
const buttonTask10Valid = document.createElement('button');
buttonTask10Valid.innerText = 'Uloha 10 (Heronův vzorec)';
buttonTask10Valid.setAttribute('id', 'task-10-valid');

// - krok 3 - nabindujte na toto tlačítko callback, ve kterém zavoláte implementovanou funkci pro výpočet a výpis výsledků
buttonTask10Valid.addEventListener('click', () => {
    calculateHeroicTriangleArea(3, 4, 5);
});

// - krok 4 - tlačítko umístěte na stránku
tasksContainer.appendChild(buttonTask10Valid);

// Bonusové tlačítko pro otestování nevalidního trojúhelníku v úloze 10
const buttonTask10Invalid = document.createElement('button');
buttonTask10Invalid.innerText = 'Uloha 10 (Heronův vzorec - Nevalidní)';
buttonTask10Invalid.setAttribute('id', 'task-10-invalid');
buttonTask10Invalid.addEventListener('click', () => {
    calculateHeroicTriangleArea(1, 2, 10);
});
tasksContainer.appendChild(buttonTask10Invalid);