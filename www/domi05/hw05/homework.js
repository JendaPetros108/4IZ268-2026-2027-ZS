/* HOMEWORK */
const TASKS_DIV = document.querySelector( "#tasks" );
const RESULT = document.querySelector( "#result" );

/**
 * 0) Pre-preparacion.
 * - Vytvořte HTML stránku s nadpisem h1 "JavaScript is awesome!" 
 * - Na stránce vytvořte místo pro umístění jednotlivých spouštěčů úkolů - tlačítek (tj. div, který má id s hodnotou "tasks" - <div id="tasks"></div>). 
 * - Na stránce vytvořte místo pro výpis výsledků úkolů (div, který má id s hodnotou "result" - <div id="results"></div>).
 * 
 * - Připojte tento homework.js soubor k vytvořené HTML stránce pomocí tagu <script> (viz LAB) a vyzkoušejte
 * console.log('Ahoj světe');
 */
function task0() {
    console.log('Ahoj světe');    
}
const buttonTask0 = document.createElement( "button" );
buttonTask0.innerHTML = "Task 0 (pre-preparation)";
buttonTask0.addEventListener( "click", task0 );

const divTask0 = document.createElement( "div" );
divTask0.appendChild( buttonTask0 );

TASKS_DIV.appendChild( divTask0 );


/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here
function task1() {
    const birthYear = new Date( 2000, 0, 1 );
    const currDate = new Date();

    let age = currDate.getFullYear() - birthYear.getFullYear();

    const monthDiff = currDate.getMonth() - birthYear.getMonth();
    const dateDiff = currDate.getDate() - birthYear.getDate();

    if( monthDiff < 0 || (monthDiff === 0 && dateDiff < 0) ) age--;

    console.log( `Pepe is ${age} years old.`);
}
const buttonTask1 = document.createElement( "button" );
buttonTask1.innerHTML = "Task 1 (Pepe's age)";
buttonTask1.addEventListener( "click", task1 );

const divTask1 = document.createElement( "div" );
divTask1.append( buttonTask1 );

TASKS_DIV.append( divTask1 );


/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
function task2( value ) {
    const convertToF = value * 9 / 5 + 32;
    const convertToC = (value - 32) * 5 / 9;

    console.log( `${value} degrees celsius is ${convertToF} degrees fahrenheit.`);
    console.log( "or" );
    console.log( `${value} degrees fahrenheit is ${convertToC} degrees celsius.`);
}
const textInputTask2 = document.createElement( "input" );
textInputTask2.setAttribute( "placeholder", "degrees value")

const buttonTask2 = document.createElement( "button" );
buttonTask2.innerHTML = "Task 2 (WTF)";
buttonTask2.setAttribute( "placeholder", "degrees value")
buttonTask2.addEventListener( "click", () => {
    // missing validation
    const val = Number( textInputTask2.value );
    task2( val );
});

const divTask2 = document.createElement( "div" );
divTask2.append( textInputTask2, buttonTask2 );

TASKS_DIV.append( divTask2 );



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
function fncConvertToC( val ) {
    return (val - 32) * 5 / 9;
}

function fncConvertToF( val ) {
    return val * 9 / 5 + 32;
}
const textInputTask3 = document.createElement( "input" );
textInputTask3.setAttribute( "placeholder", "degrees value")

const buttonTask3a = document.createElement( "button" );
buttonTask3a.innerHTML = "Task 3 (convert to C)";
buttonTask3a.setAttribute( "placeholder", "degrees value")
buttonTask3a.addEventListener( "click", () => {
    // missing validation
    console.log( `converted is ${fncConvertToC(textInputTask3.value)} degrees celsius` )
});

const buttonTask3b = document.createElement( "button" );
buttonTask3b.innerHTML = "Task3 (convert to F)";
buttonTask3b.addEventListener( "click", () => {
    // missing validation
    console.log( `converted is ${fncConvertToF(textInputTask3.value)} degrees fahrenheit`)
});

const divTask3 = document.createElement( "div" );
divTask3.append( textInputTask3, buttonTask3a, buttonTask3b );

TASKS_DIV.append( divTask3 );



/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
function task4( num1, num2 ) {
    return (num1 / num2) * 100;
}
const textInputTask4a = document.createElement( "input" );
textInputTask4a.setAttribute( "placeholder", "number1" );
const textInputTask4b = document.createElement( "input" );
textInputTask4b.setAttribute( "placeholder", "number2" );

const buttonTask4 = document.createElement( "button" );
buttonTask4.innerHTML = "Task 4 (%CENSORED%)"
buttonTask4.addEventListener( "click", () => {
    // missing validation
    const num1 = Number(textInputTask4a.value);
    const num2 = Number(textInputTask4b.value);

    if( num2 === 0 ) {
        RESULT.innerHTML = "Nemuzem delit nulou!";
        return;
    }

    RESULT.innerHTML = `${num1} is ${task4(num1, num2)}% of ${num2}`;
});
const divTask4 = document.createElement( "div" );
divTask4.append( textInputTask4a, textInputTask4b, buttonTask4 );

TASKS_DIV.append( divTask4 );




/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here
function task5(num1, num2) {
    const res = document.getElementById( "result" );
    if( num1 > num2 ) 
        res.innerHTML = "num1 is bigger than num2";
    else if( num1 < num2 )
        res.innerHTML = "num2 is bigger than num1";
    else
        res.innerHTML = "numbers are both equal"
}
const buttonTask5a = document.createElement( "button" );
buttonTask5a.innerHTML = "Task 5 (1 vs 2)";
buttonTask5a.addEventListener( "click", () => {
    const num1 = 1;
    const num2 = 2;
    task5(num1, num2);
});
const buttonTask5b = document.createElement( "button" );
buttonTask5b.innerHTML = "Task 5 (0.1 vs 0.02)";
buttonTask5b.addEventListener( "click", () => {
    const num1 = 0.1;
    const num2 = 0.02;
    task5(num1, num2);
});
const buttonTask5c = document.createElement( "button" );
buttonTask5c.innerHTML = "Task 5 (1/2 vs 2/5)";
buttonTask5c.addEventListener( "click", () => {
    const num1 = 1/2;
    const num2 = 2/5;
    task5(num1, num2);
});
const buttonTask5d = document.createElement( "button" );
buttonTask5d.innerHTML = "Task 5 (-5 vs -10/2)";
buttonTask5d.addEventListener( "click", () => {
    const num1 = -5;
    const num2 = -10/2;
    task5(num1, num2);
});

const divTask5 = document.createElement( "div" );
divTask5.append( buttonTask5a, buttonTask5b, buttonTask5c, buttonTask5d );

TASKS_DIV.append( divTask5 );





/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
function task6() {
    for( let i = 0; i <= 730; i += 13 ) {
        console.log( i );
    }
}
const buttonTask6 = document.createElement( "button" );
buttonTask6.innerHTML = "Task 6 (I can cleary see the pattern)";
buttonTask6.addEventListener( "click", task6 );

const divTask6 = document.createElement( "div" );
divTask6.append( buttonTask6 );

TASKS_DIV.append( divTask6 );



/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
function task7( radius ) {
    return Math.PI * radius**2;
}
const buttonTask7a = document.createElement( "button" );
buttonTask7a.innerHTML = "Task 7 (radius = 5)";
buttonTask7a.addEventListener( "click", () => {
    const rad = 5;
    console.log( task7( rad ) );
});
const buttonTask7b = document.createElement( "button" );
buttonTask7b.innerHTML = "Task 7 (radius = 0.1)";
buttonTask7b.addEventListener( "click", () => {
    const rad = 0.1
    console.log( task7( rad ) );
});

const divTask7 = document.createElement( "div" );
divTask7.append( buttonTask7a, buttonTask7b );

TASKS_DIV.append( divTask7 );


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
function task8( height, radius ) {
    return (Math.PI * radius**2 * height) / 3;
}
const buttonTask8a = document.createElement( "button" );
buttonTask8a.innerHTML = "Task 8 (height = 5, radius = 3)";
buttonTask8a.addEventListener( "click", () => {
    const h = 5;
    const r = 3;
    console.log( task8( h, r ) );
});
const buttonTask8b = document.createElement( "button" );
buttonTask8b.innerHTML = "Task 8 (height = 0.3, radius = 4)";
buttonTask8b.addEventListener( "click", () => {
    const h = 0.3;
    const r = 4;
    console.log( task8( h, r ) );
});

const divTask8 = document.createElement( "div" );
divTask8.append( buttonTask8a, buttonTask8b );

TASKS_DIV.append( divTask8 );




/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
function task9( a, b, c ) {
    console.log( `${a}, ${b}, ${c}`);
    if( a + b <= c ) {
        return false;
    } 
    else if( b + c <= a ) {
        return false;
    } 
    else if( c + a <= b ) {
        return false;
    }
    return true;
}
const buttonTask9a = document.createElement( "button" );
buttonTask9a.innerHTML = "Task 9 (triangle a = 4, b = 5, c = 6)";
buttonTask9a.addEventListener( "click", () => {
    const a = 4, b = 5, c = 6;
    console.log( task9( a, b, c ) );
});
const buttonTask9b = document.createElement( "button" );
buttonTask9b.innerHTML = "Task 9 (triangle a = 1, b = 2, c = 30)";
buttonTask9b.addEventListener( "click", () => {
    const a = 1, b = 2, c = 30;
    console.log( task9( a, b, c ) );
});

const divTask9 = document.createElement( "div" );
divTask9.append( buttonTask9a, buttonTask9b );

TASKS_DIV.append( divTask9 );





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
function task10(a, b, c) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
const buttonTask10a = document.createElement( "button" );
buttonTask10a.innerHTML = "Task 10 (triangle a = 4, b = 5, c = 6)";
buttonTask10a.addEventListener( "click", () => {
    const a = 4, b = 5, c = 6;
    if( !task9(a, b, c) ) {
        RESULT.innerHTML = "Invalid values for triangle." ;
        return;
    }

    RESULT.innerHTML = `The area for triangle (a = ${a}, b = ${b}, c = ${c}) is ${task10(a, b, c)}`;
});

const buttonTask10b = document.createElement( "button" );
buttonTask10b.innerHTML = "Task 10 (triangle a = 1, b = 2, c = 30)";
buttonTask10b.addEventListener( "click", () => {
    const a = 1, b = 2, c = 30;
    if( !task9(a, b, c) ) {
        RESULT.innerHTML = "Invalid values for triangle." ;
        return;
    }

    RESULT.innerHTML = `The area for triangle (a = ${a}, b = ${b}, c = ${c}) is ${task10(a, b, c)}`;
});


const divTask10 = document.createElement( "div" );
divTask10.append( buttonTask10a, buttonTask10b );

TASKS_DIV.append( divTask10 );