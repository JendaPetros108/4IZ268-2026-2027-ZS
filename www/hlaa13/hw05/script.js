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

const pepesBirthday = 2000
const currentYear = new Date().getFullYear()
console.log(`Pepes age is ${currentYear-pepesBirthday}`)




/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const celsius = 20
const fahrenheiht = 0

console.log(`Original temperature in celsius is ${celsius} and converted to fahrenheiht is ${celsius*9/5+32}`)
console.log(`Original temperature in fahrenheiht is ${fahrenheiht} and converted to celsius is ${(fahrenheiht-32)*5/9}`)


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

const sayPepesAge = (birthYear) =>{
    const results = document.querySelector('#results');
    const currentYear = new Date().getFullYear()
    results.innerText = `Pepes age is ${currentYear-birthYear}`
}

const sayCelsiusAndFahrenheiht = (celsius,fahrenheiht) =>{
    const results = document.querySelector('#results');
    results.innerText = `Original temperature in celsius is ${celsius} and converted to fahrenheiht is ${celsius*9/5+32} and Original temperature in fahrenheiht is ${fahrenheiht} and converted to celsius is ${(fahrenheiht-32)*5/9}`
}

const buttonSayAge = document.createElement('button');
buttonSayAge.innerText = 'Task 1';
buttonSayAge.setAttribute('id', 'task-1');
buttonSayAge.addEventListener('click', () => {
    sayPepesAge(2000);
});
const tasks = document.querySelector('#tasks');
tasks.appendChild(buttonSayAge);
tasks.appendChild(document.createElement('br'));

const buttonSayCelsius = document.createElement('button');
buttonSayCelsius.innerText = 'Task 2';
buttonSayCelsius.setAttribute('id', 'task-2');
buttonSayCelsius.addEventListener('click', () => {
    sayCelsiusAndFahrenheiht(20,0);
});
tasks.appendChild(buttonSayCelsius);
tasks.appendChild(document.createElement('br'));


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here

const percentage = (a,b) =>{
    const results = document.querySelector('#results');
    let result = ""
    if(b==0){
        result = "Nelze dělit 0"
    }else{
        result = `Number ${a} is ${(a/b*100).toFixed(2)}% of number ${b}`
    }
    results.innerText = result
}

const buttonPercentage = document.createElement('button');
buttonPercentage.innerText = 'Task 4';
buttonPercentage.setAttribute('id', 'task-4');
buttonPercentage.addEventListener('click', () => {
    percentage(10,20);
});
tasks.appendChild(buttonPercentage);
tasks.appendChild(document.createElement('br'));


/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here

const biggerNumber = (a,b) => {
    let result = ""
    if (a>b){
        result = `number ${a} is bigger than ${b}`
    }else if (a<b) {
        result = `number ${b} is bigger than ${a}`
    } else {
        result = `number ${a} and ${b} are same`
    }
    const results = document.querySelector('#results');
    results.innerText = result
}

var buttonBiggerNumber = document.createElement('button');
buttonBiggerNumber.innerText = 'Task 5 (whole numbers)';
buttonBiggerNumber.setAttribute('id', 'task-5-1');
buttonBiggerNumber.addEventListener('click', () => {
    biggerNumber(10,20);
});
tasks.appendChild(buttonBiggerNumber);
tasks.appendChild(document.createElement('br'));

buttonBiggerNumber = document.createElement('button');
buttonBiggerNumber.innerText = 'Task 5 (decimal numbers)';
buttonBiggerNumber.setAttribute('id', 'task-5-2');
buttonBiggerNumber.addEventListener('click', () => {
    biggerNumber(3.4,5.6);
});
tasks.appendChild(buttonBiggerNumber);
tasks.appendChild(document.createElement('br'));

buttonBiggerNumber = document.createElement('button');
buttonBiggerNumber.innerText = 'Task 5 (fractions)';
buttonBiggerNumber.setAttribute('id', 'task-5-3');
buttonBiggerNumber.addEventListener('click', () => {
    biggerNumber(4/3,7/2);
});
tasks.appendChild(buttonBiggerNumber);
tasks.appendChild(document.createElement('br'));

buttonBiggerNumber = document.createElement('button');
buttonBiggerNumber.innerText = 'Task 5 (same umbers)';
buttonBiggerNumber.setAttribute('id', 'task-5-4');
buttonBiggerNumber.addEventListener('click', () => {
    biggerNumber(2,2);
});
tasks.appendChild(buttonBiggerNumber);
tasks.appendChild(document.createElement('br'));


/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here

const divisionThirteen = () =>{
    let result = ""
    for(let i = 0;i<=730;i++){
        if(i%13==0){
            result.length == 0 ? result+=`${i}`:result+=`,${i}`
        }
    }
    const results = document.querySelector('#results');
    results.innerText = result
}

const buttonDivisionThirteen = document.createElement('button');
buttonDivisionThirteen.innerText = 'Task 6';
buttonDivisionThirteen.setAttribute('id', 'task-6');
buttonDivisionThirteen.addEventListener('click', () => {
    divisionThirteen();
});
tasks.appendChild(buttonDivisionThirteen);
tasks.appendChild(document.createElement('br'));



/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here


const areaOfCircle = (r) =>{
    const results = document.querySelector('#results');
    results.innerText = r*r*Math.PI
}

const buttonAreaOfCircle = document.createElement('button');
buttonAreaOfCircle.innerText = 'Task 7';
buttonAreaOfCircle.setAttribute('id', 'task-7');
buttonAreaOfCircle.addEventListener('click', () => {
    areaOfCircle(10);
});
tasks.appendChild(buttonAreaOfCircle);
tasks.appendChild(document.createElement('br'));


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const areaOfCone = (r,h) =>{
    const results = document.querySelector('#results');
    results.innerText = 1/3*Math.PI*r*r*h
}

const buttonAreaOfCone = document.createElement('button');
buttonAreaOfCone.innerText = 'Task 8';
buttonAreaOfCone.setAttribute('id', 'task-8');
buttonAreaOfCone.addEventListener('click', () => {
    areaOfCone(10,5);
});
tasks.appendChild(buttonAreaOfCone);
tasks.appendChild(document.createElement('br'));



/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here


const trianglePossible = (a,b,c) =>{
    let result = false
    if (a+b>c && a+c>b && b+c>a){
        result = true
    }
    return result
}

const buttonTrianglePossible = document.createElement('button');
buttonTrianglePossible.innerText = 'Task 9';
buttonTrianglePossible.setAttribute('id', 'task-9');
buttonTrianglePossible.addEventListener('click', () => {
    const a = 5 
    const b = 10
    const c = 15
    const result = trianglePossible(a,b,c);
    const results = document.querySelector('#results');
    results.innerText = `triangle with lenght of ${a} for a, ${b} for b, ${c} for c ` + (result ? "can be created": "cant be created")
});
tasks.appendChild(buttonTrianglePossible);
tasks.appendChild(document.createElement('br'));


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


const heronsFormula = (a,b,c) =>{
    let possible = trianglePossible(a,b,c)
    const results = document.querySelector('#results');
    if (!possible){
        results.innerText = `triangle cant be made for values: ${a} for a, ${b} for b, ${c} for c`
        return;
    }
    let semiperimeter = (a+b+c)/2
    let result = Math.sqrt(semiperimeter*(semiperimeter-a)*(semiperimeter-b)*(semiperimeter-c))
    results.innerText = `result of herons formula is ${result}`
}

const buttonHeronsFormula = document.createElement('button');
buttonHeronsFormula.innerText = 'Task 10';
buttonHeronsFormula.setAttribute('id', 'task-10');
buttonHeronsFormula.addEventListener('click', () => {
    heronsFormula(6,10,15);
});
tasks.appendChild(buttonHeronsFormula);
tasks.appendChild(document.createElement('br'));