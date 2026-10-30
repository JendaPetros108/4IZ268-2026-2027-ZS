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
const yearBirth = 2000;
const yearNow = new Date().getFullYear();
console.log(`Pepe is ${yearNow - yearBirth} years old.`);


/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const celsius = 20;
const fahrenheiht = 68;
const fromCelsiusToFahr = (celsius * 9)/5 + 32;
const fromFahrToCelsius = (fahrenheiht - 32)*5/9;

console.log(`${celsius}°C = ${fromCelsiusToFahr}°F`);
console.log(`${fahrenheiht}°F = ${fromFahrToCelsius}°C`);

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

const getAge = (yearBirth) => {
    const text = (`Pepe is ${yearNow - yearBirth} years old.`);
    console.log(text);
    return text;
};

const convertCelsiusToFahr = (celsius) => {
    const text = (`${celsius}°C = ${fromCelsiusToFahr}°F`);
    console.log(text);
    return text;
};

const convertFahrToCelsius = (fahrenheiht) => {
    const text = (`${fahrenheiht}°F = ${fromFahrToCelsius}°C`);
    console.log(text);
    return text;
};

getAge(2000);
getAge(1995);

convertCelsiusToFahr(20);
convertCelsiusToFahr(30);

convertFahrToCelsius(68);
convertFahrToCelsius(86);

const buttonAge = document.createElement('button');
buttonAge.innerText = "Uloha 1 (Pepe's age)";
buttonAge.setAttribute('id', 'task-1');
buttonAge.addEventListener('click', () => {
    getAge(2000);
});

const buttonCelsius = document.createElement('button');
buttonCelsius.innerText = "Úloha 2 (Celsius to Fahr)";
buttonCelsius.setAttribute('id', 'task-2a')
buttonCelsius.addEventListener('click', () => {
    convertCelsiusToFahr(20);
});

const buttonFahr = document.createElement('button');
buttonFahr.innerText = "Úloha 2 (Fahr to Celsius)";
buttonFahr.setAttribute('id', 'task-2b')
buttonFahr.addEventListener('click', () => {
    convertFahrToCelsius(68);
});

const tasks = document.querySelector('#tasks');
tasks.appendChild(buttonAge);
tasks.appendChild(buttonCelsius);
tasks.appendChild(buttonFahr);


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const division = (x,y) => {
    if (y == 0 || x == 0) {
        return 'Nelze dělit nulou';
    } else {
        const resultx = (x / y) * 100;
        const resulty = (y/x) * 100;
        return `${x} je ${resultx.toFixed(2)}% z ${y}; ${y} je ${resulty.toFixed(2)}% z ${x}`;
    }
};

const inputX = document.createElement('input');
inputX.setAttribute('id', 'input-x');
inputX.setAttribute('type', 'number');
inputX.setAttribute('placeholder', 'Číslo X');

const inputY = document.createElement('input');
inputY.setAttribute('id', 'input-y');
inputY.setAttribute('type', 'number');
inputY.setAttribute('placeholder', 'Číslo Y');

const buttonDivision = document.createElement('button');
buttonDivision.innerText = "Úloha 3 (Division)";
buttonDivision.setAttribute('id', 'task-3')
buttonDivision.addEventListener('click', () => {
    const x = Number(inputX.value);
    const y = Number(inputY.value);
    document.querySelector('#results').innerText = division(x,y);
});

tasks.appendChild(inputX);
tasks.appendChild(inputY);
tasks.appendChild(buttonDivision);

/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here
const greaterThan = (x,y) => {
    if (x > y) {
        return `${x} je větší než ${y}`;
    };
    if (x == y) {
        return `${x} se rovná ${y}`;
    }
    else {
        return `${x} je menší než ${y}`;
    }
};

const buttonGreaterThan = document.createElement('button');
buttonGreaterThan.innerText = "Úloha 4 (Greater than)";
buttonGreaterThan.setAttribute('id', 'task-4')
buttonGreaterThan.addEventListener('click', () => {
    document.querySelector('#results').innerText = `${greaterThan(5.5, 3.3)}; ${greaterThan(1/2, 5/3)}; ${greaterThan(4, 4)}`;
});
tasks.appendChild(buttonGreaterThan);


/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const addition = () => {
    const multiples = [];
    for (let x = 0; x <= 730; x += 13) {
        multiples.push(x);
    }
    return multiples.join(', ');
};

const buttonAddition = document.createElement('button');
buttonAddition.innerText = "Úloha 5 (Addition)";
buttonAddition.setAttribute('id', 'task-5')
buttonAddition.addEventListener('click', () => {
    document.querySelector('#results').innerText = addition();
});
tasks.appendChild(buttonAddition);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const circleArea = (radius) => {
    const area = Math.PI * radius * radius;
    return area.toFixed(2);
};
const buttonCircle = document.createElement('button');
buttonCircle.innerText = 'Úloha 6 (Circle Area)';
buttonCircle.setAttribute('id', 'task-6');

buttonCircle.addEventListener('click', () => {
    document.querySelector('#results').innerText =
        `Obsah kruhu s poloměrem 5 je ${circleArea(5)}.`;
});

document.querySelector('#tasks').appendChild(buttonCircle);

/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const coneVolume = (radius, height) => {
    const volume = (1 / 3) * Math.PI * radius ** 2 * height;
    return volume.toFixed(2);
};
const buttonCone = document.createElement('button');
buttonCone.innerText = 'Úloha 7 (Cone Volume)';
buttonCone.setAttribute('id', 'task-7');

buttonCone.addEventListener('click', () => {
    document.querySelector('#results').innerText =
        `Objem kužele s poloměrem 5 a výškou 10 je ${coneVolume(5, 10)}.`;
});

document.querySelector('#tasks').appendChild(buttonCone);



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
    const result =
        a + b > c &&
        a + c > b &&
        b + c > a;
    return result;
};

const buttonTriangle = document.createElement('button');
buttonTriangle.innerText = 'Úloha 8 (Triangle)';
buttonTriangle.setAttribute('id', 'task-8');

buttonTriangle.addEventListener('click', () => {
    const a = 3;
    const b = 4;
    const c = 5;

    document.querySelector('#results').innerText =
        `a=${a}, b=${b}, c=${c} je trojúhelník: ${isTriangle(a, b, c)}`;
});

document.querySelector('#tasks').appendChild(buttonTriangle);

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

const triangleArea = (a, b, c) => {
    const results = document.querySelector('#results');

    if (!isTriangle(a, b, c)) {
        results.innerText = 'Zadané délky netvoří trojúhelník.';
        return false;
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(
        s * (s - a) * (s - b) * (s - c)
    );

    results.innerText =
        `Obsah trojúhelníku o stranách ${a}, ${b}, ${c} je ${area.toFixed(2)}.`;

    return true;
};

const buttonTriangleArea = document.createElement('button');

buttonTriangleArea.innerText =
    'Úloha 10 (Heron Formula)';

buttonTriangleArea.setAttribute('id', 'task-10');

buttonTriangleArea.addEventListener('click', () => {
    triangleArea(3, 4, 5);
});

document.querySelector('#tasks')
    .appendChild(buttonTriangleArea);