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


const currentYear = 2026;
const birthYear = 1983;
const age = currentYear - birthYear;
console.log('Pepa is ' + age + ' years old.');




/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
const momentalniCelsius = 11;
const fahrenheitVysledek = momentalniCelsius * 9 / 5 + 32;

const momentalniFahrenheit = fahrenheitVysledek ;
const celsiusVysledek = (momentalniFahrenheit - 32) * 5 / 9;

console.log(`${momentalniCelsius}°C = ${fahrenheitVysledek}°F resp. ${momentalniFahrenheit}°F = ${celsiusVysledek}°C.`);



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

//TASK 1 PEPE'S AGE
const tasks = document.querySelector('#tasks');

const calculateAge = (birthYear) => {
    const currentYear = 2026;
    const age = currentYear - birthYear;
    console.log(`Pepa is ${age} years old.`)
}
    const buttonTask1 = document.createElement('button');
    buttonTask1.innerText = "Úloha 1 (Pepe's age";
    buttonTask1.setAttribute('id', 'task-1');
    
    buttonTask1.addEventListener('click', () => {
        calculateAge(1983);
    });

    tasks.appendChild(buttonTask1);

//TASK 2 TEMP. BUTTON
const task = document.querySelector('#tasks');

const calculateFahrenheit2 = (currentCelsius2) => {
    const currentFahrenheit2 = currentCelsius2 * 9 / 5 + 32;

    console.log(`Current temapature is ${currentCelsius2} Celsius or ${currentFahrenheit2} Fahrenheit.`)
}

const buttonTask2 = document.createElement('button');
buttonTask2.innerText = "Úloha 2 - teplota";
buttonTask2.setAttribute('id', 'task-2');

buttonTask2.addEventListener('click', () => {
    calculateFahrenheit2(11)
});

task.appendChild(buttonTask2);



/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
const calculatepercentage = (cislo1, cislo2) => {
    const resultDiv = document.querySelector('#results');

    if (cislo2 == 0) {
        resultDiv.innerText = "Chyba: Nelze dělit nulou.";

    } else {
        const procenta = (cislo1 / cislo2) * 100;
        resultDiv.innerText = `${cislo1} je ${procenta.toFixed(2)}% z ${cislo2}.`;
    }
};

const buttonTask4 = document.createElement('button');
buttonTask4.innerText = "Úloha 4 - procenta";
buttonTask4.setAttribute('id', 'task-4');

buttonTask4.addEventListener('click', () => {
    calculatepercentage(25, 75);
});

task.appendChild(buttonTask4);



/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */

const compareNumbers = (number1, number2) => {
    const resultDiv = document.querySelector('#results');

    if (number1 > number2) {
        resultDiv.innerText = `Číslo ${number1} je větší než číslo ${number2}`;

    } else if (number1 < number2) {
         resultDiv.innerText = `Číslo ${number1} je menší než číslo ${number2}`;
    } else {
         resultDiv.innerText = `Číslo ${number1} je rovno číslu ${number2}`;
    }
};

//cela cisla
const buttonTask5a = document.createElement('button');
buttonTask5a.innerText = "Úloha 5 - porovnání-celá čísla";
buttonTask5a.setAttribute('id', 'task-5a');
buttonTask5a.addEventListener('click', () => {
    compareNumbers(25, 75);
});

task.appendChild(buttonTask5a);

//desetinna cisla
const buttonTask5b = document.createElement('button');
buttonTask5b.innerText = "Úloha 5 - porovnání-desetinná čísla";
buttonTask5b.setAttribute('id', 'task-5b');
buttonTask5b.addEventListener('click', () => {
    compareNumbers(3.14, 3.15);
});
task.appendChild(buttonTask5b);

//zlomky
const buttonTask5c = document.createElement('button');
buttonTask5c.innerText = "Úloha 5 - porovnání-zlomky";
buttonTask5c.setAttribute('id', 'task-5c');
buttonTask5c.addEventListener('click', () => {
    compareNumbers(15/3, 3/15);
});
task.appendChild(buttonTask5c);

//rovnost
const buttonTask5d = document.createElement('button');
buttonTask5d.innerText = "Úloha 5 - porovnání-rovnost";
buttonTask5d.setAttribute('id', 'task-5d');
buttonTask5d.addEventListener('click', () => {
    compareNumbers(67, 67);
});

task.appendChild(buttonTask5d);

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
const printMultiples = () => {
    const resultDiv = document.querySelector('#results');
    let vysledekText = "Násobky 13";
    for (let i = 0; i <= 730; i += 13) {
        vysledekText += i + ", ";
        console.log(i);
    }
    resultDiv.innerText = vysledekText;
}

const buttonTask6 = document.createElement('button');
buttonTask6.innerText = "Úloha 6 - násobky 13";
buttonTask6.setAttribute('id', 'task-6');

buttonTask6.addEventListener('click', () => {
    printMultiples();
})
task.appendChild(buttonTask6);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
const calculateCircleArea = (radius) => {
    const resultDiv = document.querySelector('#results');
    const area = Math.PI * (radius ** 2);
    resultDiv.innerText = `Obsah kružnice o poloměru ${radius} je ${area.toFixed(2)}.`;
};

const buttonTask7 = document.createElement('button');
buttonTask7.innerText = "Úloha 7- obsah kružnice";
buttonTask7.setAttribute('id', 'task-7');

buttonTask7.addEventListener('click', () => {
    calculateCircleArea(37);
});

task.appendChild(buttonTask7);




/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
const calculateConeVolume = (radius, height) => {
    const resultDiv = document.querySelector('#results');
    const volume = (1 / 3) * Math.PI * (radius ** 2) * height;
    resultDiv.innerText = `Objem kuželu o poloměru ${radius} a výšce ${height} je ${volume.toFixed(2)}.`;
};

const buttonTask8 = document.createElement('button');
buttonTask8.innerText = "Úloha 8-objem kuželu";
buttonTask8.setAttribute('id', 'task-8');

buttonTask8.addEventListener('click', () => {
    calculateConeVolume(5.12, 420); 
});

task.appendChild(buttonTask8);

/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */

const isTriangle = (a, b, c) => {
    const resultDiv = document.querySelector('#results');
    const isValid = (a + b > c) && (a + c > b) && (b + c > a);
    const textResult = isValid ? "ano (true)" : "ne (false)";
    resultDiv.innerText = `Strany a=${a}, b=${b}, c=${c}. Jde postavit trojúhelník? ${textResult}`;
    return isValid;
};

const buttonTask9 = document.createElement('button');
buttonTask9.innerText = "Úloha 9 - trojúhelník";
buttonTask9.setAttribute('id', 'task-9');
buttonTask9.addEventListener('click', () => {
    //isTriangle(7, 3, 10);
    isTriangle(5, 5, 5);
});

task.appendChild(buttonTask9);


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

const calculateHeronArea = (a, b, c) => {
    const resultDiv = document.querySelector('#results');
if (!isTriangle(a, b, c)) {
        resultDiv.innerText = `Chyba: Z délek stran ${a}, ${b} a ${c} nelze sestrojit trojúhelník, výpočet nemá smysl.`;
        return; 
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    resultDiv.innerText = `Obsah trojúhelníku o stranách ${a}, ${b}, ${c} je ${area.toFixed(2)}.`;
};

const buttonTask10 = document.createElement('button');
buttonTask10.innerText = "Úloha 10 - obsah Heron";
buttonTask10.setAttribute('id', 'task-10');
buttonTask10.addEventListener('click', () => {
    calculateHeronArea(5, 5, 5);
});

task.appendChild(buttonTask10);
