const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');

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
const age = 21;
if (typeof age !== 'undefined') {
    console.log(`Popovi je ${age}`);
}




/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak.
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32.
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9.
 */
// Solution here

const fahrenheiht = 99;
const celsius = 24;

console.log(celsius * 9 / 5 - 32);
console.log(fahrenheiht - 32 * 5 / 9);


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

const helloWorld = () => {
    console.log('Ahoj světe');
}
const pepasAge = (age) => {
    console.log(`Popovi je ${age}`);
}
const toFahrenheit = (celsius) => {
    console.log(celsius * 9 / 5 - 32);
}
const toCelsius = (fahrenheiht) => {
    console.log(fahrenheiht - 32 * 5 / 9);
}

helloWorld();
helloWorld();

pepasAge(22);
pepasAge(99);
pepasAge(32);

toFahrenheit(43);
toFahrenheit(120);
toFahrenheit(-2);

toCelsius(300);
toCelsius(60);
toCelsius(-10);

//hello
const buttonHello = document.createElement('button');
buttonHello.innerText = 'Say hello';
buttonHello.setAttribute('id', 'task-0');
buttonHello.addEventListener('click', () => {
    helloWorld();
});
tasks.appendChild(buttonHello);

//pepa age
const buttonPepa = document.createElement('button');
buttonPepa.innerText = 'vek pepy je?';
buttonPepa.setAttribute('id', 'task-1');
buttonPepa.addEventListener('click', () => {
    pepasAge(22);
});
tasks.appendChild(buttonPepa);

//to fahrnheit
const buttonTofahrnheit = document.createElement('button');
buttonTofahrnheit.innerText = 'Kolik je fahrnheitu kdyz je 22C?';
buttonTofahrnheit.setAttribute('id', 'task-2');
buttonTofahrnheit.addEventListener('click', () => {
    toFahrenheit(22);
});
tasks.appendChild(buttonTofahrnheit);

//toCelsius
const buttonToCelsius = document.createElement('button');
buttonToCelsius.innerText = 'Kolik je fahrnheitu kdyz je 22F?';
buttonToCelsius.setAttribute('id', 'task-3');
buttonToCelsius.addEventListener('click', () => {
    toCelsius(22);
});
tasks.appendChild(buttonToCelsius);

/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla.
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2);
 * Pozor na dělení nulou!
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here

const percentage = (num1, num2) => {
    let percent = num1 * (num2 / 100);
    percent = percent.toFixed(2);
    return `${num1} je ${percent} % z ${num2}`;
}

const buttonPercentage = document.createElement('button');
buttonPercentage.innerText = 'Kolik procent je 34 z 85?';
buttonPercentage.setAttribute('id', 'task-4');
buttonPercentage.addEventListener('click', () => {
    console.log(percentage(34, 85));
});
tasks.appendChild(buttonPercentage);


/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají.
 *
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here

const whoBigger = (num1, num2) => {
    if (num1 > num2) {
        return `cislo ${num1} je vetsi nez ${num2}`;
    } else if (num2 > num1) {
        return `cislo ${num2} je vetsi nez ${num1}`;
    } else {
        return `cisla jsou stejna`;
    }
}

const buttonWhoBigger1 = document.createElement('button');
buttonWhoBigger1.innerText = 'Ktere cislo je vetsi? 32, 88';
buttonWhoBigger1.setAttribute('id', 'task-5');
buttonWhoBigger1.addEventListener('click', () => {
    const resWhoBigger1 = document.createElement('div')
    resWhoBigger1.innerText = whoBigger(32, 88)
    results.appendChild(resWhoBigger1)
});
tasks.appendChild(buttonWhoBigger1);

const buttonWhoBigger2 = document.createElement('button');
buttonWhoBigger2.innerText = 'Ktere cislo je vetsi? 90, 10';
buttonWhoBigger2.setAttribute('id', 'task-6');
buttonWhoBigger2.addEventListener('click', () => {
    const resWhoBigger2 = document.createElement('div')
    resWhoBigger2.innerText = whoBigger(90, 10)
    results.appendChild(resWhoBigger2)
});
tasks.appendChild(buttonWhoBigger2);

const buttonWhoBigger3 = document.createElement('button');
buttonWhoBigger3.innerText = 'Ktere cislo je vetsi? 44, 44';
buttonWhoBigger3.setAttribute('id', 'task-6');
buttonWhoBigger3.addEventListener('click', () => {
    const resWhoBigger3 = document.createElement('div')
    resWhoBigger3.innerText = whoBigger(44, 44)
    results.appendChild(resWhoBigger3)
});
tasks.appendChild(buttonWhoBigger3);

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší
 * nebo rovno 730, včetě nuly. Používejte for cyklus.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here

console.log("nasobky 13 do 730")
for (let i = 0; i <= 730; i = i + 13) {
    console.log(i);
}




/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const circleArea = (radius) => {
    if (radius < 0)
        return "polomer nemuze byt mensi nez 0";

    return Math.PI * Math.pow(radius, 2);
}

const btnCircleArea = document.createElement('button');
btnCircleArea.innerText = 'obsah kruznice, polomer 15';
btnCircleArea.setAttribute('id', 'task-7');
btnCircleArea.addEventListener('click', () => {
    const resCircleArea = document.createElement('div')
    resCircleArea.innerText = circleArea(5)
    results.appendChild(resCircleArea)
});
tasks.appendChild(btnCircleArea);



/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const coneVolume = (height, radius) => {
    if (radius < 0)
        return "polomer nemuze byt mensi nez 0";
    if (height < 0)
        return 'vyska musi byt vetsi nez 0';

    return (Math.PI * Math.pow(radius, 2) * height) / 3;
}

const btnConeVolume = document.createElement('button');
btnConeVolume.innerText = 'obsah kuzele, polomer 12, vyska 5';
btnConeVolume.setAttribute('id', 'task-8');
btnConeVolume.addEventListener('click', () => {
    const resConeVolume = document.createElement('div')
    resConeVolume.innerText = coneVolume(5, 12)
    results.appendChild(resConeVolume)
});
tasks.appendChild(btnConeVolume);



/**
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const isItTriangle = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0)
        return "toto nemuze byt trojuhelnik, strana nesmi byt nulova nebo zaporna";


    return (a + b > c) && (b + c > a) && (a + c > b);
}

const btnTriangle1 = document.createElement('button');
btnTriangle1.innerText = 'trojuhelnik 4,5,8';
btnTriangle1.setAttribute('id', 'task-9');
btnTriangle1.addEventListener('click', () => {
    const resTriangle1 = document.createElement('div')
    resTriangle1.innerText = `strany 4,5,8 tvori trojuhelnik: ${isItTriangle(4, 5, 8)}`
    results.appendChild(resTriangle1)
});
tasks.appendChild(btnTriangle1);

const btnTriangle2 = document.createElement('button');
btnTriangle2.innerText = 'trojuhelnik 4,5,9';
btnTriangle2.setAttribute('id', 'task-10');
btnTriangle2.addEventListener('click', () => {
    const resTriangle2 = document.createElement('div')
    resTriangle2.innerText = `strany 4,5,9 tvori trojuhelnik: ${isItTriangle(4, 5, 9)}`
    results.appendChild(resTriangle2)
});
tasks.appendChild(btnTriangle2);


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

const heronArea = (a, b, c) => {
    if (!isItTriangle(a, b, c))
        return "Neni to trojuhelnik nemuzu pocitat";

    const s = (a + b + c) / 2;
    const S = Math.sqrt(s * (s - a) * (s - b) * (s - c))

    return S;
}

const btnHeron1 = document.createElement('button');
btnHeron1.innerText = 'heron 4,5,9';
btnHeron1.setAttribute('id', 'task-11');
btnHeron1.addEventListener('click', () => {
    const resHeron = document.createElement('div')
    resHeron.innerText = `strany 4,5,9 obsah pomoci herona: ${heronArea(4, 5, 9)}`
    results.appendChild(resHeron)
});
tasks.appendChild(btnHeron1);

const btnHeron2 = document.createElement('button');
btnHeron2.innerText = 'heron 4,5,8';
btnHeron2.setAttribute('id', 'task-12');
btnHeron2.addEventListener('click', () => {
    const resHeron = document.createElement('div')
    resHeron.innerText = `strany 4,5,8 obsah pomoci herona: ${heronArea(4, 5, 8)}`
    results.appendChild(resHeron)
});
tasks.appendChild(btnHeron2);