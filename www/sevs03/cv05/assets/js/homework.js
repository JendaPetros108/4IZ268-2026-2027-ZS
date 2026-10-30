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

console.log('Ahoj svet')
/**
     * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
     * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
     * používejte smysluplnou angličtinu.
     */
// Solution here

const birthYear = 2004;
console.log("Pepe is " + (2026 - birthYear) + " years old.")


/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const tasks = document.querySelector('#tasks');
const celsiusValue = 24;
const fahrenheihtValue = 77;
const convertCelsiusToFahrenheit = () => {
    const result = ((celsiusValue * 9 / 5) + 32);
    return result;
};

const convertedFahrenheihtToCelsius = () => {
    const result = (fahrenheihtValue - 32) * 5 / 9;
    return result;
    ;
}
const result1 = convertCelsiusToFahrenheit();
const result2 = convertedFahrenheihtToCelsius();

console.log(celsiusValue + "°C = " + result1 + "°F")
console.log(fahrenheihtValue + "°F = " + result2 + "°C")
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
const pepesAge = (birthYear) => {
    const result = (2026 - birthYear)
    console.log("Pepe is " + result + " years old.")

};


const buttonAge = document.createElement('button');
buttonAge.innerText = 'Age of Pepe';
buttonAge.setAttribute('id', 'task-3');
buttonAge.addEventListener('click', () => {
    pepesAge(birthYear);
});

tasks.appendChild(buttonAge);



/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla.
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2);
 * Pozor na dělení nulou!
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const results = document.querySelector('#results');
const divide = (firstNumber, secondNumber) => {
    if (secondNumber == 0) {
        results.innerText = `It is not possible to divide by a zero!`;
    } else {
        //console.log(secondNumber + " is " + secondNumber / firstNumber * 100 + " % of " + firstNumber);
        results.innerText = `${secondNumber} je ${secondNumber / firstNumber * 100}% z ${firstNumber}`;
    }
}



// vytvoření tlačítka
const buttonDivide = document.createElement('button');
// nastavení textu tlačítka
buttonDivide.innerText = 'Divide';
// nastavení atributu id tlačítka
buttonDivide.setAttribute('id', 'task-4');
// nabindování funkce na událost click tlačítka
buttonDivide.addEventListener('click', () => {
    const division = divide(20, 0);
});

// výběr existujícího elementu na stránce s id="tasks"

// vložení vytvořeného tlačítka do vybraného elementu na stránce
tasks.appendChild(buttonDivide);



/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají.
 *
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here

const compare = (firstNumber, secondNumber) => {
    if (secondNumber == firstNumber) {
        results.innerText = `The numbers are the same.`;
    } else if (firstNumber > secondNumber) {
        results.innerText = `The first number is bigger.`;
    } else {
        results.innerText = `The second number is bigger.`;
    }
};

const buttonCompare = document.createElement('button');
// nastavení textu tlačítka
buttonCompare.innerText = 'Comparison';
// nastavení atributu id tlačítka
buttonCompare.setAttribute('id', 'task-5');
// nabindování funkce na událost click tlačítka
buttonCompare.addEventListener('click', () => {
    const comparison = compare(20, 220);
});
tasks.appendChild(buttonCompare);
/**
 * 6) I can clearly see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší
 * nebo rovno 730, včetě nuly. Používejte for cyklus.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here

const multiply = () => {
    results.innerText = null;

    for (let i = 0; i <= 730; i = i + 13) {
        results.innerText += (`${i}` + `, `);

    };
};
const buttonMultiply = document.createElement('button');
buttonMultiply.innerText = 'Multiply_13';
buttonMultiply.setAttribute('id', 'task-6')
buttonMultiply.addEventListener('click', () => {
    const multiple = multiply();
});
tasks.appendChild(buttonMultiply);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const area = (radius) => {
    results.innerText = `Circle area is ` + radius * radius * Math.PI;
};
const buttonArea = document.createElement('button');
buttonArea.innerText = 'Circle area';
buttonArea.setAttribute('id', 'task-7')
buttonArea.addEventListener('click', () => {
    const circleArea = area(2);
});
tasks.appendChild(buttonArea);



/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here


const volume = (radius, height) => {
    results.innerText = `The volume of cone is ` + 1 / 3 * Math.PI * radius * radius * height;
};
const buttonVolume = document.createElement('button');
buttonVolume.innerText = 'Cone volume';
buttonVolume.setAttribute('id', 'task-8')
buttonVolume.addEventListener('click', () => {
    const coneVolume = volume(2, 4);
});
tasks.appendChild(buttonVolume);



/**
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const triangle = (a, b, c) => {

    results.innerText = (a + b > c && a + c > b && b + c > a)
    results.innerText += (`, the lengths are: ` + a + `, ` + b + `, ` + c + `.`);



};
const buttonTriangle = document.createElement('button');
buttonTriangle.innerText = 'Yes/No triangle';
buttonTriangle.setAttribute('id', 'task-9')
buttonTriangle.addEventListener('click', () => {
    triangle(2, 1, 4);

});
tasks.appendChild(buttonTriangle);



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

const isTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
};

const getTriangleArea = (a, b, c) => {
    if (!isTriangle(a, b, c)) {
        return `Not a valid triangle`;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
};

const displayHeroicArea = (a, b, c) => {
    const resultsContainer = document.querySelector('#results');
    const result = getTriangleArea(a, b, c);

    if (typeof result === 'string') {
        resultsContainer.innerText = result;
    } else {
        resultsContainer.innerText = `Area of a triangle (${a}, ${b}, ${c}) is: ${result.toFixed(2)}`;
    }
};

const buttonHeroic = document.createElement('button');
buttonHeroic.innerText = 'Task 10';
buttonHeroic.setAttribute('id', 'task-10');

buttonHeroic.addEventListener('click', () => {
    displayHeroicArea(3, 4, 5);
});

tasks.appendChild(buttonHeroic);
