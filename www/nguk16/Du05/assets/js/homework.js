
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
const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');
console.log('Ahoj světe');

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here

const pepeAge = 77;
const birthYear = new Date().getFullYear() - pepeAge;
console.log(`Pepa se narodil v roce ${birthYear}, proto mu je ${pepeAge}.`);





/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20 =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const tempC = 20;
const tempF = (tempC * 9 / 5) + 32;
console.log(`${tempC}°C = ${tempF}°F`)


const tempFTwo = 100;
const tempCTwo = (tempFTwo - 32) * 5 /9;
console.log(`${tempFTwo}°F = ${tempCTwo}°C`)

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
const getPepesAge = (birthYear) => {
    const pepeAge = new Date().getFullYear() - birthYear;
    const message = `Pepovi je ${pepeAge} let (rok narození: ${birthYear}).`;
    console.log(message);
    results.innerText = message;

};
const buttonTaskOne = document.createElement(`button`);
buttonTaskOne.innerText = 'Pepe';
buttonTaskOne.addEventListener('click', () => getPepesAge(2000));
tasks.appendChild(buttonTaskOne);

const wtf = (tempC) => {
    const tempF = (tempC * 9 / 5) + 32;
    const backToC = (tempF - 32) * 5 / 9;
    const result = `teplota ${backToC}°C se rovna  ${tempF}°F.`;
    console.log(result);
    results.innerText = result;
}
const buttonTaskTwo = document.createElement(`button`);
buttonTaskTwo.innerText = 'C na F';
buttonTaskTwo.addEventListener('click', () => wtf(100));
tasks.appendChild(buttonTaskTwo);

const wtfTwo = (tempF) => {
    const tempC = (tempF - 32) * 5 / 9; 
    const backToF = (tempC * 9 / 5) + 32;
    const resultWto = `teplota ${backToF}°F se rovna  ${tempC}°C.`;
    console.log(resultWto);
    results.innerText = resultWto;
}
const buttonTaskTwoOne = document.createElement(`button`);
buttonTaskTwoOne.innerText = 'F na C';
buttonTaskTwoOne.addEventListener('click', () => wtfTwo(90));
tasks.appendChild(buttonTaskTwoOne);


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
    if (b === 0) {
        const error = `nelze delit nulou.`;
        console.log(error);
        results.innerText = error;
        return;
    }
    const calculate = (a / b) * 100;
    const message = `${a} je ${calculate.toFixed(2)}% z ${b}.`;
    console.log(message);
        results.innerText = message;
};
const buttonTaskFour = document.createElement(`button`);
buttonTaskFour.innerText= 'procenta';
buttonTaskFour.addEventListener('click', () => calculatePercentage(100,50));
tasks.appendChild(buttonTaskFour);

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
    if (a > b) {
        const bigger =`cislo ${a} je vetsi nez ${b}.`;
        results.innerText = bigger;
    } else if (a < b) {
        const smaller = `Číslo ${a} je mensi nez ${b}.`;
        console.log(smaller);
            results.innerText = smaller;

    } else {
        const same =`cisla se rovnaji ${a.toFixed(2)} = ${b.toFixed(2)}.`;
        console.log(same);
        results.innerText = same;
    }
};
const buttonTaskFive = document.createElement(`button`);
buttonTaskFive.innerText= 'Cela cisla';
buttonTaskFive.addEventListener('click', () => compareNumbers(100,10));
tasks.appendChild(buttonTaskFive);

const buttonTaskFiveOne = document.createElement(`button`);
buttonTaskFiveOne.innerText= 'desetina';
buttonTaskFiveOne.addEventListener('click', () => compareNumbers(100.5,193.23));
tasks.appendChild(buttonTaskFiveOne);

const buttonTaskFiveTwo = document.createElement(`button`);
buttonTaskFiveTwo.innerText= 'zlomky';
buttonTaskFiveTwo.addEventListener('click', () => compareNumbers(10/3,10/3));
tasks.appendChild(buttonTaskFiveTwo);




/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const pattern = () => {
    let thirteen = "";
    for (let i = 0; i <= 730; i += 13) {
        thirteen += i+ ", ";
    }
    console.log(thirteen);
    results.innerText = thirteen;
}

const buttonTaskSix = document.createElement(`button`);
buttonTaskSix.innerText= 'nasobky';
buttonTaskSix.addEventListener('click', () => pattern());
tasks.appendChild(buttonTaskSix);

/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const calculateArea = (radius) => {
    const area = Math.PI *(radius * radius);
    const message = `obsah kruznice je ${area.toFixed(2)}, pokud jeji polomer je ${radius}`;
    console.log(message);
    results.innerText = message;
}

const buttonTaskSeven = document.createElement(`button`);
buttonTaskSeven.innerText= 'obsah kruznice';
buttonTaskSeven.addEventListener('click', () => calculateArea(10));
tasks.appendChild(buttonTaskSeven);



/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const calculateVolume = (height, radius) => {
    const area = (1/3) * Math.PI * (radius * radius) * height;
    const message = `objem kužele je ${area.toFixed(2)}, pokud jeho polomer je ${radius} a vyska ${height}`;
    console.log(message);
    results.innerText = message;
}

const buttonTaskEight = document.createElement(`button`);
buttonTaskEight.innerText= 'objem kuzelu';
buttonTaskEight.addEventListener('click', () => calculateVolume(10,10));
tasks.appendChild(buttonTaskEight);


/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const isTriangle = (a,b,c) => {
    let result;
    if (a + b > c && a + c > b && b + c > a) {
        const message = `z delky stran: ${a}, ${b}, ${c} ano`;
        console.log(message)
        results.innerText = message;
        return true;
    } else {
        const message = `z delky stran: ${a}, ${b}, ${c} ne`;
        console.log(message)
        results.innerText = message;
        return false;
    }
}

const buttonTaskNine = document.createElement(`button`);
buttonTaskNine.innerText= 'trojuhelnik?';
buttonTaskNine.addEventListener('click', () => isTriangle(1,2,3));
tasks.appendChild(buttonTaskNine);


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
const calculateHeron = (a, b, c) => {
    
    if (isTriangle(a, b, c)) {
        const valid = `jde to spocitat se stranami ${a}, ${b}, ${c} .`;
        console.log(valid);
        results.innerText = valid;
        
    } else {
        const errorMsg = `nelze spocitat se stranami ${a}, ${b}, ${c} .`;
        console.log(errorMsg);
        results.innerText = errorMsg;
        return;
    }

//   - krok 1.3 - spočítejte obsah trojúhelníku podle Heronovy vzorce a výsledek uložte do proměnné
    const cir = (a + b + c) / 2;
    const area = Math.sqrt(cir * (cir - a) * (cir - b) * (cir - c));
//   - krok 1.4 - vypište výsledek na místo pro výpis výsledků
    const heroic = `obsah je ${area.toFixed(2)}.`
    console.log(heroic);
    results.innerText = heroic;
}
// - krok 2 - vytvořte tlačítko
// - krok 3 - nabindujte na toto tlačítko callback, ve kterém zavoláte implementovanou funkci pro výpočet a výpis výsledků
// - krok 4 - tlačítko umístěte na stránku
// - krok 5 - otestujte řešení klikáním na tlačítko
const buttonTaskTen = document.createElement(`button`);
buttonTaskTen.innerText= 'Heroic';
buttonTaskTen.addEventListener('click', () => calculateHeron(2,2,3));
tasks.appendChild(buttonTaskTen);