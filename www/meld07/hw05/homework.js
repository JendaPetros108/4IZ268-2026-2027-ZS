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

// Pomocné funkce: výpis do místa pro výsledky a vytvoření tlačítka
const showResult = (text) => {
  const results = document.querySelector('#results');
  results.innerText = text;
};

const addButton = (id, label, callback) => {
  const button = document.createElement('button');
  button.innerText = label;
  button.setAttribute('id', id);
  button.addEventListener('click', () => {
    callback();
  });
  const tasks = document.querySelector('#tasks');
  tasks.appendChild(button);
};


/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
const pepeBirthYear = 2000;
const currentYear = new Date().getFullYear();
console.log(`Pepa se narodil v roce ${pepeBirthYear}, takže je mu ${currentYear - pepeBirthYear} let.`);


/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
const tempCelsius = 20;
const tempFahrenheit = tempCelsius * 9 / 5 + 32;
console.log(`${tempCelsius}°C = ${tempFahrenheit}°F`);

const otherFahrenheit = 68;
const otherCelsius = (otherFahrenheit - 32) * 5 / 9;
console.log(`${otherFahrenheit}°F = ${otherCelsius}°C`);


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
const printAge = (name, birthYear) => {
  const age = new Date().getFullYear() - birthYear;
  console.log(`${name} se narodil v roce ${birthYear}, takže je mu ${age} let.`);
};

const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = celsius * 9 / 5 + 32;
  console.log(`${celsius}°C = ${fahrenheit}°F`);
};

const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  console.log(`${fahrenheit}°F = ${celsius}°C`);
};

addButton('task-1', "Úloha 1 (Pepe's age)", () => printAge('Pepa', 2000));
addButton('task-2a', 'Úloha 2 (°C → °F)', () => celsiusToFahrenheit(20));
addButton('task-2b', 'Úloha 2 (°F → °C)', () => fahrenheitToCelsius(68));


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
const getPercentage = (part, whole) => {
  if (whole === 0) {
    showResult('Nulou dělit nelze!');
    return null;
  }
  const ratio = part / whole;
  showResult(`${part} je ${(ratio * 100).toFixed(2)}% z ${whole}`);
  return ratio;
};

addButton('task-4a', 'Úloha 4 (21 z 42)', () => getPercentage(21, 42));
addButton('task-4b', 'Úloha 4 (5 z 0)', () => getPercentage(5, 0));


/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
const compareNumbers = (a, b) => {
  if (a > b) {
    showResult(`${a} je větší než ${b}`);
  } else if (a < b) {
    showResult(`${b} je větší než ${a}`);
  } else {
    showResult(`${a} a ${b} se rovnají`);
  }
};

addButton('task-5a', 'Úloha 5 (celá čísla 7 vs 3)', () => compareNumbers(7, 3));
addButton('task-5b', 'Úloha 5 (desetinná 2.5 vs 2.75)', () => compareNumbers(2.5, 2.75));
addButton('task-5c', 'Úloha 5 (zlomky 1/2 vs 2/4)', () => compareNumbers(1 / 2, 2 / 4));
addButton('task-5d', 'Úloha 5 (záporná -4 vs -9)', () => compareNumbers(-4, -9));


/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
const printMultiplesOf13 = () => {
  const multiples = [];
  for (let i = 0; i <= 730; i += 13) {
    multiples.push(i);
  }
  showResult(multiples.join(', '));
};

addButton('task-6', 'Úloha 6 (násobky 13)', () => printMultiplesOf13());


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
const circleArea = (radius) => {
  const area = Math.PI * radius * radius;
  showResult(`Obsah kruhu s poloměrem ${radius} je ${area.toFixed(2)}`);
  return area;
};

addButton('task-7', 'Úloha 7 (obsah kruhu, r = 5)', () => circleArea(5));


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
const coneVolume = (height, radius) => {
  const volume = (1 / 3) * Math.PI * radius * radius * height;
  showResult(`Objem kužele s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}`);
  return volume;
};

addButton('task-8', 'Úloha 8 (objem kužele, v = 10, r = 3)', () => coneVolume(10, 3));


/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
const isTriangle = (a, b, c) => {
  const result = a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
  showResult(`a = ${a}, b = ${b}, c = ${c}: ${result ? 'ano' : 'ne'}`);
  return result;
};

addButton('task-9a', 'Úloha 9 (3, 4, 5)', () => isTriangle(3, 4, 5));
addButton('task-9b', 'Úloha 9 (1, 2, 10)', () => isTriangle(1, 2, 10));


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
// - krok 2 - vytvořte tlačítko
// - krok 3 - nabindujte na toto tlačítko callback, ve kterém zavoláte implementovanou funkci pro výpočet a výpis výsledků
// - krok 4 - tlačítko umístěte na stránku
// - krok 5 - otestujte řešení klikáním na tlačítko

// krok 1
const heronArea = (a, b, c) => {
  // krok 1.1
  const results = document.querySelector('#results');
  // krok 1.2
  if (!isTriangle(a, b, c)) {
    results.innerText = `Ze stran ${a}, ${b}, ${c} nelze sestavit trojúhelník!`;
    return;
  }
  // krok 1.3
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  // krok 1.4
  results.innerText = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}`;
};

// krok 2
const buttonHeron = document.createElement('button');
buttonHeron.innerText = 'Úloha 10 (Heronův vzorec 3, 4, 5)';
buttonHeron.setAttribute('id', 'task-10');
// krok 3
buttonHeron.addEventListener('click', () => {
  heronArea(3, 4, 5);
});
// krok 4
document.querySelector('#tasks').appendChild(buttonHeron);
