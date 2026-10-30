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

console.log('Ahoj světe');

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here

const birthYear = 2002;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
console.log(`Pepovi je ${age} let.`);




/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const celsius = 20;
const fahrenheit = 68;
const toCelsius = ((fahrenheit-32)*5)/9;
const toFahrenheit = ((celsius*9)/5)+32;
console.log(`${celsius}°C =  ${toFahrenheit}°F resp. ${fahrenheit}°F = ${toCelsius}°C`);



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

const birthFunc = (birth) =>{
    const currentYear = new Date().getFullYear();
    const age = currentYear - birth;
    console.log(`Pepovi je ${age} let.`);
};

const celsiusToFahrenheit = (celsius) =>{
    const fahrenheit = ((celsius*9)/5)+32;
    console.log(`${celsius}°C = ${fahrenheit}°F`);
};

const fahrenheitToCelsius = (fahrenheit) =>{
    const celsius = ((fahrenheit-32)*5)/9;
    console.log(`${fahrenheit}°F = ${Number(celsius.toFixed(1))}°C`);
};

birthFunc(1890);
birthFunc(2012);
celsiusToFahrenheit(20);
celsiusToFahrenheit(-5);
fahrenheitToCelsius(68);
fahrenheitToCelsius(100);


const buttonAge = document.createElement('button');
buttonAge.innerText = 'Věk Pepy (1984)';
buttonAge.setAttribute('id', 'task-1');
buttonAge.addEventListener('click', () => {
    birthFunc(1984);
});

const buttonCelsiusToFahrenheit = document.createElement('button');
buttonCelsiusToFahrenheit.innerText = 'Převést °C na °F (40°C)';
buttonCelsiusToFahrenheit.setAttribute('id', 'task-2a');
buttonCelsiusToFahrenheit.addEventListener('click', () => {
    celsiusToFahrenheit(40);
});

const buttonFahrenheitToCelsius = document.createElement('button');
buttonFahrenheitToCelsius.innerText = 'Převést °F na °C (78°F)';
buttonFahrenheitToCelsius.setAttribute('id', 'task-2b');
buttonFahrenheitToCelsius.addEventListener('click', () => {
    fahrenheitToCelsius(78);
});

const tasks = document.querySelector('#tasks');
tasks.appendChild(buttonAge);
tasks.appendChild(buttonCelsiusToFahrenheit);
tasks.appendChild(buttonFahrenheitToCelsius)


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here

const percentageFunc = (number1, number2) =>{
    const results = document.querySelector('#results');
    let result = null;
    if (number2 === 0) {
        result = "Nulou nelze dělit"
    } else {
        result = `${number1} je ${((number1/number2)*100).toFixed(2)}% z ${number2}`;
    };

    results.innerText = result;
}

const buttonHalf = document.createElement('button');
buttonHalf.innerText = 'Zjistit podíl (66,124)';
buttonHalf.setAttribute('id', 'task-4');
buttonHalf.addEventListener('click', () => {
    percentageFunc(66,124);
});

tasks.appendChild(buttonHalf);


/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here

const compareFunc = (number1, number2) =>{
    const results = document.querySelector('#results');
    let result = null;
    if (number1 === number2) {
        result = "Čísla se rovnají"
    } else if (number1 > number2){
        result = `${number1} je větší než ${number2}`;
    } else if (number1 < number2){
        result = `${number2} je větší než ${number1}`;
    };

    results.innerText = result;
}

const buttonCompareInts = document.createElement('button');
buttonCompareInts.innerText = 'Kdo s koho (10, 20)';
buttonCompareInts.setAttribute('id', 'task-5a');
buttonCompareInts.addEventListener('click', () => {
    compareFunc(10, 20);
});

const buttonCompareDecimals = document.createElement('button');
buttonCompareDecimals.innerText = 'Kdo s koho (3.5, 3.14)';
buttonCompareDecimals.setAttribute('id', 'task-5b');
buttonCompareDecimals.addEventListener('click', () => {
    compareFunc(3.5, 3.14);
});

const buttonCompareFractions = document.createElement('button');
buttonCompareFractions.innerText = 'Kdo s koho (1/3, 2/5)';
buttonCompareFractions.setAttribute('id', 'task-5c');
buttonCompareFractions.addEventListener('click', () => {
    compareFunc(1 / 3, 2 / 5);
});

const buttonCompareEqual = document.createElement('button');
buttonCompareEqual.innerText = 'Kdo s koho (20, 20)';
buttonCompareEqual.setAttribute('id', 'task-5d');
buttonCompareEqual.addEventListener('click', () => {
    compareFunc(20, 20);
});

const buttonCompareNegatives = document.createElement('button');
buttonCompareNegatives.innerText = 'Kdo s koho (-5, -2)';
buttonCompareNegatives.setAttribute('id', 'task-5e');
buttonCompareNegatives.addEventListener('click', () => {
    compareFunc(-5, -2);
});


tasks.appendChild(buttonCompareInts);
tasks.appendChild(buttonCompareDecimals);
tasks.appendChild(buttonCompareFractions);
tasks.appendChild(buttonCompareEqual);
tasks.appendChild(buttonCompareNegatives);






/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here

const multiplesOf13Func = () => {
    const results = document.querySelector('#results');
    const result = [];

    for (let i = 0; i <= 730; i += 13) {
        result.push(i);
    }

    results.innerText = result.join(', ');
};

const buttonMultiples = document.createElement('button');
buttonMultiples.innerText = 'Násobky 13';
buttonMultiples.setAttribute('id', 'task-6');
buttonMultiples.addEventListener('click', () => {
    multiplesOf13Func();
});
tasks.appendChild(buttonMultiples);



/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const circleAreaFunc = (radius) =>{

    const results = document.querySelector('#results');

    const area = Math.PI * radius ** 2;
    results.innerText = `Obsah kruhu s poloměrem ${radius} je ${area.toFixed(2)}`;
};

const buttonCircleArea = document.createElement('button');
buttonCircleArea.innerText = 'Obsah kruhu (r = 6.6)';
buttonCircleArea.setAttribute('id', 'task-7');
buttonCircleArea.addEventListener('click', () => {
    circleAreaFunc(6.6);
});
tasks.appendChild(buttonCircleArea);


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const coneVolumeFunc = (height,radius) =>{

    const results = document.querySelector('#results');

    const area = Math.PI * radius ** 2;
    const volume = (area*height)/3;

    results.innerText = `Objem kuželu s poloměrem ${radius} a výškou ${height} je ${volume.toFixed(2)}`;
};

const buttonConeVolume = document.createElement('button');
buttonConeVolume.innerText = 'Objem kuželu (v = 8, r = 5)';
buttonConeVolume.setAttribute('id', 'task-8');
buttonConeVolume.addEventListener('click', () => {
   coneVolumeFunc(8,5);
});
tasks.appendChild(buttonConeVolume);

/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const possibleTriangleFunc = (a,b,c) =>{

    const results = document.querySelector('#results');

    const isTriangle = a > 0 && b > 0 && c > 0 &&
        a + b > c &&
        a + c > b &&
        b + c > a;
    
    results.innerText = `Pro strany a = ${a}, b = ${b}, c = ${c} - trojúhelník ${isTriangle ? 'jde' : 'nejde'} sestavit`;
    return isTriangle
};

const buttonTriangleYes = document.createElement('button');
buttonTriangleYes.innerText = 'Trojúhelník (3, 4, 5)';
buttonTriangleYes.setAttribute('id', 'task-9a');
buttonTriangleYes.addEventListener('click', () => {
    possibleTriangleFunc(3, 4, 5);
});

const buttonTriangleNo = document.createElement('button');
buttonTriangleNo.innerText = 'Trojúhelník (1, 2, 3)';
buttonTriangleNo.setAttribute('id', 'task-9b');
buttonTriangleNo.addEventListener('click', () => {
    possibleTriangleFunc(1, 2, 3);
});

tasks.appendChild(buttonTriangleYes);
tasks.appendChild(buttonTriangleNo);


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

const heronTriangleFunc = (a,b,c) =>{

    const results = document.querySelector('#results');

    if (!possibleTriangleFunc(a,b,c)){
        results.innerText = `Ze stran ${a}, ${b}, ${c} nelze sestrojit trojúhelník.`;
        return;
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    results.innerText = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}`;
}; 

const buttonTriangleArea = document.createElement('button');
buttonTriangleArea.innerText = 'Obsah trojúhelníku heron (3, 4, 5)';
buttonTriangleArea.setAttribute('id', 'task-10a');
buttonTriangleArea.addEventListener('click', () => {
    heronTriangleFunc(3, 4, 5);
});

const buttonTriangleAreaInvalid = document.createElement('button');
buttonTriangleAreaInvalid.innerText = 'Obsah trojúhelníku heron (1, 2, 3)';
buttonTriangleAreaInvalid.setAttribute('id', 'task-10b');
buttonTriangleAreaInvalid.addEventListener('click', () => {
    heronTriangleFunc(1, 2, 3);
});

tasks.appendChild(buttonTriangleArea);
tasks.appendChild(buttonTriangleAreaInvalid);


