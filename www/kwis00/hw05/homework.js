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

console.log('Hello World!');

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození,
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných
 * používejte smysluplnou angličtinu.
 */

// Solution here
const yearOfBirth = "2012";
const currYear = new Date().getFullYear();
console.log(currYear);
const age = currYear - yearOfBirth;
console.log(`Pepe is currently ${age} years old!`);

/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak.
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32.
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9.
 */
// Solution here

const testTempC = 23;
const testTempF = 102;
// convert to celsius
const temperatureC = (testTempF - 32) * 5 / 9;
console.log(`${testTempF}°F =  ${temperatureC}°C`);
// convert to fahrenheit
const temperatureF = testTempC * 9 / 5 + 32;
console.log(`${testTempC}°C =  ${temperatureF}°F`);


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
 */
 // deklarace a implementace funkce
const sayHello = () => {
  console.log('What\'s up');
};

// vytvoření tlačítka
const buttonSayHello = document.createElement('button');
// nastavení textu tlačítka
buttonSayHello.innerText = 'Say Hello';
// nastavení atributu id tlačítka
buttonSayHello.setAttribute('id', 'task-0');
// nabindování funkce na událost click tlačítka
buttonSayHello.addEventListener('click', () => {
  sayHello();
});

// výběr existujícího elementu na stránce s id="tasks"
const tasks = document.querySelector('#tasks');
// vložení vytvořeného tlačítka do vybraného elementu na stránce
tasks.appendChild(buttonSayHello);

// Solution here

function pepeAgeMsg(yearOfBirth) {
  const currYear = new Date().getFullYear();
  if(!isNaN(yearOfBirth)) {
    const age = currYear - yearOfBirth;
    return `Pepe is currently ${age} years old!`;
  } else {
    return "Year of birth not provided buster";
  }
}

function tempConvert(temp, unit) {
  if (unit === "F") {
    const tempC = (temp - 32) * 5 / 9;
    return `${temp}°F =  ${tempC}°C`;
  } else if (unit === "C") {
    const tempF = temp * 9 / 5 + 32;
    return `${temp}°C =  ${tempF}°F`;
  } else {
    return "invalid unit bucko";
  }
}

const buttonPepeAge = document.createElement('button');
buttonPepeAge.innerText = 'Get Pepe\'s age';
buttonPepeAge.setAttribute('id', 'task-1');
buttonPepeAge.addEventListener('click', () => {
  console.log(pepeAgeMsg("1995"));
});

const buttonTemp = document.createElement('button');
buttonTemp.innerText = 'Convert some temperature!';
buttonTemp.setAttribute('id', 'task-2');
buttonTemp.addEventListener('click', () => {
  console.log(tempConvert(35, "C"));
});

tasks.appendChild(buttonPepeAge);
tasks.appendChild(buttonTemp);

/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla.
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2);
 * Pozor na dělení nulou!
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
function percentage(int1, int2) {
  if (int2 !=0) {
    const result = int1.toFixed(2) / int2.toFixed(2);
    const result_perc = (result * 100).toFixed(2);
    return `${int1} je ${result_perc}% z ${int2}`;
  } else {
    return "Try not dividing by 0 lol";
  }
}
const resultsDiv = document.querySelector("#results");
const result04 = document.createElement('p');
result04.setAttribute('id', 'result-4');
resultsDiv.appendChild(result04);

const buttonPercentage = document.createElement('button');
buttonPercentage.innerText = "Get a percentage";
buttonPercentage.setAttribute('id', 'task-4');
buttonPercentage.addEventListener('click', () => {
  result04.textContent = `${percentage(420, 2137)}`;
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
function numCompare(num1, num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return `try using real numbers next time`;
  } else if (num1 === num2) {
    return `${num1} equals ${num2} (duh)`;
  } else if (num1 > num2) {
    return `${num1} is bigger than ${num2}`;
  } else if (num1 < num2) {
    return `${num2} is bigger than ${num1}`;
  }
}

const buttonCompare1 = document.createElement('button');
const buttonCompare2 = document.createElement('button');
const buttonCompare3 = document.createElement('button');
const buttonCompare4 = document.createElement('button');

buttonCompare1.innerText = 'Try comparing NaN';
buttonCompare2.innerText = 'Try comparing equal nums';
buttonCompare3.innerText = 'Go bananas with the numbers';
buttonCompare4.innerText = 'Don\'t let me stop you';

buttonCompare1.setAttribute('id', 'task-5-1');
buttonCompare2.setAttribute('id', 'task-5-2');
buttonCompare3.setAttribute('id', 'task-5-3');
buttonCompare4.setAttribute('id', 'task-5-4');

buttonCompare1.addEventListener('click', () => {
  console.log(numCompare('dasf', 'dsf'));
});
buttonCompare2.addEventListener('click', () => {console.log(numCompare(12, 12.00))});
buttonCompare3.addEventListener('click', () => {console.log(numCompare(8.03453, 9/3));});
buttonCompare4.addEventListener('click', () => {console.log(numCompare(1/4, 120000000));});

tasks.appendChild(buttonCompare1);
tasks.appendChild(buttonCompare2);
tasks.appendChild(buttonCompare3);
tasks.appendChild(buttonCompare4);

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší
 * nebo rovno 730, včetě nuly. Používejte for cyklus.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
function multOf13() {
  for (let i = 0; i*13 <= 730; i++) {
    console.log(i * 13);
  }
}


const buttonMultOf13 = document.createElement('button');
buttonMultOf13.innerText = 'Friday the 13th is such a good movie am i right';
buttonMultOf13.setAttribute('id', 'task-6');
buttonMultOf13.addEventListener('click', () => {multOf13();});
tasks.appendChild(buttonMultOf13);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here
function ringArea(radius) {
  return (Math.PI * radius **2).toFixed(4);
}

const buttonRadius = document.createElement('button');
buttonRadius.innerText = 'You spin me right ROUND baby right ROUND';
buttonRadius.setAttribute('id', 'task-7');
buttonRadius.addEventListener('click', () => {console.log(ringArea(3));});
tasks.appendChild(buttonRadius);



/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here
function coneVolume(height, radius) {
  return ringArea(radius)*height/3;
}

const buttonConeVolume = document.createElement('button');
buttonConeVolume.innerText = 'Check out the traffic CONE sax guy';
buttonConeVolume.setAttribute('id', 'task-8');
buttonConeVolume.addEventListener('click', () => {console.log(coneVolume(21,37));});
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
function checkTriangle(a,b,c) {
  if(a+b>c && a+c>b && b+c>b && a>0 && b>0 && c>0) {
    return true;
  } else {
    return false;
  }
}

const buttonValidTriangle = document.createElement('button');
buttonValidTriangle.innerText = 'Triangle validity (ran out of shape references)';
buttonValidTriangle.setAttribute('id', 'task-9');
buttonValidTriangle.addEventListener('click', () => {console.log(checkTriangle(2,2,1));});
tasks.appendChild(buttonValidTriangle);


/**
 * 10) Heroic performance. Vytvořte funkci, která vypočte a vypíše obsah trojúhelníka podle Heronova vzorce,
 * tj. funkce dostane délky všech 3 stran. Použijte přitom předchozí validaci v úloze č. 9, tj. počítejte pouze,
 * když to má smysl. Hint: funkce pro odmocninu je Math.sqrt().
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here
function iNeedAHero(a,b,c) {
  if(!checkTriangle(a,b,c)) {
    return "Enter a valid triangle brotherman";
  }
    const s = (a+b+c)/2;
    return Math.sqrt(s * (s-a) * (s-b) * (s-c));
}

const result10 = document.createElement('p');
result10.setAttribute('id', 'result-4');
resultsDiv.appendChild(result10);

const buttonHero = document.createElement('button');
buttonHero.innerText = "Call Batman (He knows how to use Heron's formula)";
buttonHero.setAttribute('id', 'task-4');
buttonHero.addEventListener('click', () => {
  result10.textContent = `${iNeedAHero(6,10,8)}`;
});
tasks.appendChild(buttonHero);

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


