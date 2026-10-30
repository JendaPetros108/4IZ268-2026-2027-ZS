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
console.log("Hello, world!");

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození,
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných
 * používejte smysluplnou angličtinu.
 */
// Solution here
const pepasYearOfBirth = 1997;
const pepasAge = new Date().getFullYear() - pepasYearOfBirth;

console.log(`Pepa is ${pepasAge} years old.`);

/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak.
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32.
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9.
 */
// Solution here
const tempCelsius = 20;
const tempFahrenheiht = 68;

const celsiusToFahrenheiht = (tempCelsius * 9 / 5) + 32;
const fahrenheihtToCelsius = (tempFahrenheiht - 32) * 5 / 9;

console.log(`${tempCelsius} Celsius is ${celsiusToFahrenheiht} Fahrenheiht\n` +
  `${tempFahrenheiht} FahrenHeiht is ${fahrenheihtToCelsius} Celsius`);

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
const tasksDiv = document.querySelector('#tasks');

function announceAge(name, yearOfBirth) {
  const formatedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const age = new Date().getFullYear() - yearOfBirth;
  console.log(`${formatedName} is ${age} years old.${age > 25 ? " Oof!" : ""}`);
}

const buttonAnnounceAge = document.createElement('button')
buttonAnnounceAge.innerText = "Uloha 1 (Pepa's age)";
buttonAnnounceAge.setAttribute('id', 'task-1');
buttonAnnounceAge.addEventListener("click", () => announceAge("pEpA", 1997));
tasksDiv.appendChild(buttonAnnounceAge);

function convertCelsiusToFahrenheiht(num) {
  console.log(`${num} Celsius is ${(num * 9 / 5) + 32} Fahrenheiht`);
}
function convertFahrenheihtToCelsius(num) {
  console.log(`${num} Fahrenheiht is ${(num - 32) * 5 / 9} Celsius`);
}

const buttonCToF = document.createElement('button')
buttonCToF.innerText = "Uloha 2 (Celsius na Fahrenheiht)";
buttonCToF.setAttribute('id', 'task-2-a');
buttonCToF.addEventListener("click", () => convertCelsiusToFahrenheiht(20));
tasksDiv.appendChild(buttonCToF);

const buttonFToC = document.createElement('button')
buttonFToC.innerText = "Uloha 2 (Fahrenheiht na Celsium)";
buttonFToC.setAttribute('id', 'task-2-b');
buttonFToC.addEventListener("click", () => convertFahrenheihtToCelsius(68));
tasksDiv.appendChild(buttonFToC);

/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla.
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2);
 * Pozor na dělení nulou!
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const resultsDiv = document.querySelector('#results');

function getPercentage(a, b) {
  if (b === 0) {
    resultsDiv.textContent = "Can not divide by zero!";
    throw new Error("Attempted division by zero, this incident will be reported! You are DONE buddy!");
  }

  resultsDiv.textContent = `${a} / ${b} = ${(a / b).toFixed(2) * 100}%`;
}

const buttonGetPercentage = document.createElement('button')
buttonGetPercentage.innerText = "Uloha 4 (%CENSORED%)";
buttonGetPercentage.setAttribute('id', 'task-4');
buttonGetPercentage.addEventListener("click", () => getPercentage(21, 42));
tasksDiv.appendChild(buttonGetPercentage);

/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají.
 *
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here
function getLarger(a, b) {
  switch (true) {
    case a == b: // lax equality to match 4 to 4.0 and such (also means true and 1 would equal, but eh, im not gonna bother with guiarding that)
      resultsDiv.textContent = `${a} a ${b} si jsou rovny`;
      break;
    case a > b:
      resultsDiv.textContent = `${a} je větší než ${b}`;
      break;
    case b > a:
      resultsDiv.textContent = `${b} je větší než ${a}`;
      break;
    default:
      resultsDiv.textContent = `No idea what you fed this, but neither ${a} or ${b} are bigger nor are they equal.`
      break;
  }
}

const buttonGetLarger = document.createElement('button');
buttonGetLarger.innerText = "Uloha 5 (Kdo z Koho)";
buttonGetLarger.setAttribute('id', 'task-5');
buttonGetLarger.addEventListener("click", () => getLarger(4, 4.1));
tasksDiv.appendChild(buttonGetLarger);

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší
 * nebo rovno 730, včetě nuly. Používejte for cyklus.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
function getMultiplesOf13() {
  let str = "";

  for (let num = 0; num <= 730; num += 13) {
    str = `${str}${str.length < 1 ? "" : ", "}${num}`;
    resultsDiv.textContent = str;
  }
}

const buttonGetMultiplesOf13 = document.createElement('button');
buttonGetMultiplesOf13.innerText = "Uloha 6 (I can cleary see the pattern)";
buttonGetMultiplesOf13.setAttribute('id', 'task-6');
buttonGetMultiplesOf13.addEventListener("click", () => getMultiplesOf13());
tasksDiv.appendChild(buttonGetMultiplesOf13);

/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here
function getCircleSurface(radius) {
  resultsDiv.textContent = `Obsah kružníce o poloměru ${radius} jednotek je ${Math.PI * (radius ** 2)} jednotek^2`;
}

const buttonGetCircleSurface = document.createElement('button');
buttonGetCircleSurface.innerText = "Uloha 7 (Around and about)";
buttonGetCircleSurface.setAttribute('id', 'task-7');
buttonGetCircleSurface.addEventListener("click", () => getCircleSurface(5));
tasksDiv.appendChild(buttonGetCircleSurface);

/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here
function getVolumeCone(height, radius) {
  resultsDiv.textContent = `Objem kuželu o poloměru ${radius} jednotek a výšce ${height} jednotek je ${Math.PI * (radius ** 2) * height / 3} jednotek^3`;
}

const buttonGetVolumeCone = document.createElement('button');
buttonGetVolumeCone.innerText = "Uloha 8 (Another dimension)";
buttonGetVolumeCone.setAttribute('id', 'task-8');
buttonGetVolumeCone.addEventListener("click", () => getVolumeCone(8, 5));
tasksDiv.appendChild(buttonGetVolumeCone);

/**
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here
function isTriangleValid(a, b, c) {
  const isValid = a + b > c && a + c > b && b + c > a;
  resultsDiv.textContent = `Pro úsečky: ${a}, ${b} a ${c} ${isValid ? "" : "ne" }existuje validní trojúhelník`;
  return isValid;
}

const buttonIsTriangleValid = document.createElement('button');
buttonIsTriangleValid.innerText = "Uloha 9 (Not sure if triangle)";
buttonIsTriangleValid.setAttribute('id', 'task-9');
buttonIsTriangleValid.addEventListener("click", () => isTriangleValid(8, 5, 2));
tasksDiv.appendChild(buttonIsTriangleValid);

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
function getTriangleArea(a, b, c) {
  // updates the text content, since I opted to make the functions mutate the DOM instead of mutating it after the call
  // doesn't matter since we will mutate it again before exiting the scope of this function, but still should be noted
  if (!isTriangleValid(a, b, c)) {
    return; // not remutating the results div here, the message would be the same as what isTriangleValid already set there
  }

  // as per https://en.wikipedia.org/wiki/Heron%27s_formula
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  resultsDiv.textContent = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area} jednotek^2.`;
}

const buttonGetTriangleArea = document.createElement('button');
buttonGetTriangleArea.innerText = "Uloha 10 (Heroic performance)";
buttonGetTriangleArea.setAttribute('id', 'task-10');
buttonGetTriangleArea.addEventListener("click", () => getTriangleArea(8, 5, 4));
tasksDiv.appendChild(buttonGetTriangleArea);
