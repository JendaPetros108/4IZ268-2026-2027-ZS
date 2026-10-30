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

// Pomocné prvky a funkce pro úlohy 1–10
const tasksContainer = document.querySelector('#tasks');
const resultsContainer = document.querySelector('#results');

// Vypíše text na konzoli a zároveň ho přidá do místa pro výsledky (nebo do zadaného kontejneru)
const printResult = (text, container = resultsContainer) => {
  console.log(text);
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  container.appendChild(paragraph);
};

// Vytvoří tlačítko s id a textem, nabinduje na něj callback (událost click) a umístí ho do #tasks
const createTaskButton = (id, label, callback) => {
  const button = document.createElement('button');
  button.innerText = label;
  button.setAttribute('id', id);
  button.addEventListener('click', callback);
  tasksContainer.appendChild(button);
};

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození,
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných
 * používejte smysluplnou angličtinu.
 */
const pepeBirthYear = 1990;

const printPepesAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  const pepeAge = currentYear - birthYear;
  printResult(`Pepe se narodil v roce ${birthYear}, je mu tedy ${pepeAge} let.`);
};

createTaskButton('task-1', "Uloha 1 (Pepe's age)", () => printPepesAge(pepeBirthYear));

/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak.
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32.
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9.
 */
const printCelsiusToFahrenheit = (celsius) => {
  const fahrenheit = Math.round((celsius * 9 / 5 + 32) * 100) / 100;
  printResult(`${celsius}°C = ${fahrenheit}°F`);
};

const printFahrenheitToCelsius = (fahrenheit) => {
  const celsius = Math.round(((fahrenheit - 32) * 5 / 9) * 100) / 100;
  printResult(`${fahrenheit}°F = ${celsius}°C`);
};

createTaskButton('task-2-cf', 'Uloha 2 (C -> F)', () => printCelsiusToFahrenheit(20));
createTaskButton('task-2-fc', 'Uloha 2 (F -> C)', () => printFahrenheitToCelsius(68));

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
// Řešení: funkce a tlačítka jsou u jednotlivých úloh (1, 2, 4–10) a využívají
// pomocné funkce printResult() a createTaskButton() výše.

/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla.
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2);
 * Pozor na dělení nulou!
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
const printPercentage = (part, whole) => {
  if (whole === 0) {
    printResult('Nelze dělit nulou!');
    return;
  }
  const percentage = ((part / whole) * 100).toFixed(2);
  printResult(`${part} je ${percentage}% z ${whole}`);
};

createTaskButton('task-4', 'Uloha 4 (podíl v %)', () => printPercentage(21, 42));
createTaskButton('task-4-zero', 'Uloha 4 (dělení nulou)', () => printPercentage(5, 0));

/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají.
 *
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
const printWhoIsBigger = (a, b) => {
  if (a > b) {
    printResult(`${a} je větší než ${b}`);
  } else if (a < b) {
    printResult(`${b} je větší než ${a}`);
  } else {
    printResult(`${a} a ${b} se rovnají`);
  }
};

const comparisonPairs = [
  [7, 3],
  [2.5, 2.75],
  [1 / 2, 1 / 3],
  [4, 4],
];

comparisonPairs.forEach(([a, b], index) => {
  createTaskButton(`task-5-${index + 1}`, `Uloha 5 (${a} vs ${b})`, () => printWhoIsBigger(a, b));
});

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší
 * nebo rovno 730, včetě nuly. Používejte for cyklus.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
const printMultiplesOf13 = (limit) => {
  const multiples = [];
  for (let number = 0; number <= limit; number += 13) {
    multiples.push(number);
  }
  printResult(`Násobky 13 menší nebo rovno ${limit}: ${multiples.join(', ')}`);
};

createTaskButton('task-6', 'Uloha 6 (násobky 13)', () => printMultiplesOf13(730));

/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
const printCircleArea = (radius) => {
  const area = Math.PI * radius ** 2;
  printResult(`Obsah kružnice o poloměru ${radius} je ${area.toFixed(2)}`);
};

createTaskButton('task-7', 'Uloha 7 (obsah kružnice)', () => printCircleArea(5));

/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
const printConeVolume = (height, radius) => {
  const volume = (Math.PI * radius ** 2 * height) / 3;
  printResult(`Objem kužele s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}`);
};

createTaskButton('task-8', 'Uloha 8 (objem kužele)', () => printConeVolume(10, 3));

/**
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
const isTriangle = (a, b, c) => {
  const allPositive = a > 0 && b > 0 && c > 0;
  return allPositive && a + b > c && a + c > b && b + c > a;
};

const printIsTriangle = (a, b, c) => {
  const result = isTriangle(a, b, c);
  printResult(`Strany a=${a}, b=${b}, c=${c} -> ${result ? 'ano (true)' : 'ne (false)'}`);
  return result;
};

const triangleSides = [
  [3, 4, 5],
  [1, 2, 3],
  [2, 2, 2],
];

triangleSides.forEach(([a, b, c], index) => {
  createTaskButton(`task-9-${index + 1}`, `Uloha 9 (${a}, ${b}, ${c})`, () => printIsTriangle(a, b, c));
});

/**
 * 10) Heroic performance. Vytvořte funkci, která vypočte a vypíše obsah trojúhelníka podle Heronova vzorce,
 * tj. funkce dostane délky všech 3 stran. Použijte přitom předchozí validaci v úloze č. 9, tj. počítejte pouze,
 * když to má smysl. Hint: funkce pro odmocninu je Math.sqrt().
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// - krok 1 - vytvořte funkci
//   - krok 1.1 - pomocí selektoru vyberte container pro výpis výsledků a uložte ho do proměnné
//   - krok 1.2 - zvalidujte vstupní argumenty pomocí funkce z úlohy č. 9
//     - v případě nevalidních hodnot vypište chybovou hlášku na místo pro výpis výsledků a funkci ukončete
//     - v případě validních hodnot pokračujte s výpočtem
//   - krok 1.3 - spočítejte obsah trojúhelníku podle Heronovy vzorce a výsledek uložte do proměnné
//   - krok 1.4 - vypište výsledek na místo pro výpis výsledků
const printTriangleArea = (a, b, c) => {
  const container = document.querySelector('#results');

  if (!isTriangle(a, b, c)) {
    printResult(`Ze stran ${a}, ${b}, ${c} nelze sestavit trojúhelník.`, container);
    return;
  }

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  printResult(`Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}`, container);
};

// - krok 2 - vytvořte tlačítko
// - krok 3 - nabindujte na toto tlačítko callback, ve kterém zavoláte implementovanou funkci pro výpočet a výpis výsledků
// - krok 4 - tlačítko umístěte na stránku
createTaskButton('task-10-ok', 'Uloha 10 (3, 4, 5)', () => printTriangleArea(3, 4, 5));
createTaskButton('task-10-invalid', 'Uloha 10 (1, 2, 3)', () => printTriangleArea(1, 2, 3));

// - krok 5 - otestujte řešení klikáním na tlačítko
