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
const birthYear = 1990;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
console.log(`Pepa was born in ${birthYear}, so he is ${age} years old.`);


/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const temperatureCelsius = 20;
const temperatureFahrenheit = 68;
console.log(`${temperatureCelsius}°C = ${(temperatureCelsius * 9) / 5 + 32}°F`);
console.log(`${temperatureFahrenheit}°F = ${((temperatureFahrenheit - 32) * 5) / 9}°C`);


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

// Pomocné funkce používané i v dalších úlohách
const printResult = (text) => {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  document.querySelector('#results').appendChild(paragraph);
};

const clearResults = () => {
  document.querySelector('#results').innerHTML = '';
};

const createTaskButton = (id, label, callback) => {
  const button = document.createElement('button');
  button.innerText = label;
  button.setAttribute('id', id);
  button.addEventListener('click', callback);
  document.querySelector('#tasks').appendChild(button);
};

// Úloha 1 jako funkce
const pepaAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  console.log(`Pepa was born in ${birthYear}, so he is ${age} years old.`);
};

// Úloha 2 jako funkce
const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C = ${fahrenheit}°F`);
};

const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F = ${celsius}°C`);
};

// Zavolání s různými argumenty
pepaAge(1985);
pepaAge(2001);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-40);
fahrenheitToCelsius(32);
fahrenheitToCelsius(212);

// Tlačítka
createTaskButton('task-1', "Uloha 1 (Pepa's age)", () => pepaAge(1990));
createTaskButton('task-2a', 'Uloha 2 (C → F)', () => celsiusToFahrenheit(20));
createTaskButton('task-2b', 'Uloha 2 (F → C)', () => fahrenheitToCelsius(68));


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const percentage = (a, b) => {
  clearResults();
  if (b === 0) {
    printResult('Dělení nulou není možné.');
    return;
  }
  const percent = ((a / b) * 100).toFixed(2);
  printResult(`${a} je ${percent}% z ${b}`);
  return a / b;
};

createTaskButton('task-4a', 'Uloha 4 (21 z 42)', () => percentage(21, 42));
createTaskButton('task-4b', 'Uloha 4 (1 z 3)', () => percentage(1, 3));
createTaskButton('task-4c', 'Uloha 4 (dělení nulou)', () => percentage(5, 0));


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
  clearResults();
  if (a > b) {
    printResult(`${a} je větší než ${b}`);
  } else if (a < b) {
    printResult(`${b} je větší než ${a}`);
  } else {
    printResult(`${a} a ${b} se rovnají`);
  }
};

createTaskButton('task-5a', 'Uloha 5 (celá čísla)', () => compareNumbers(7, 12));
createTaskButton('task-5b', 'Uloha 5 (desetinná)', () => compareNumbers(3.14, 2.71));
createTaskButton('task-5c', 'Uloha 5 (zlomky)', () => compareNumbers(1 / 3, 2 / 5));
createTaskButton('task-5d', 'Uloha 5 (rovnost)', () => compareNumbers(1 / 2, 0.5));


/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const multiplesOf13 = () => {
  clearResults();
  const multiples = [];
  for (let i = 0; i <= 730; i += 13) {
    multiples.push(i);
  }
  printResult(multiples.join(', '));
};

createTaskButton('task-6', 'Uloha 6 (násobky 13)', multiplesOf13);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const circleArea = (radius) => {
  clearResults();
  if (radius < 0) {
    printResult('Poloměr nemůže být záporný.');
    return;
  }
  const area = Math.PI * radius ** 2;
  printResult(`Obsah kruhu o poloměru ${radius} je ${area.toFixed(2)}`);
  return area;
};

createTaskButton('task-7a', 'Uloha 7 (r = 5)', () => circleArea(5));
createTaskButton('task-7b', 'Uloha 7 (r = 2.5)', () => circleArea(2.5));


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const coneVolume = (height, radius) => {
  clearResults();
  if (height < 0 || radius < 0) {
    printResult('Výška i poloměr musí být nezáporné.');
    return;
  }
  const volume = (Math.PI * radius ** 2 * height) / 3;
  printResult(`Objem kuželu (v = ${height}, r = ${radius}) je ${volume.toFixed(2)}`);
  return volume;
};

createTaskButton('task-8a', 'Uloha 8 (v = 10, r = 3)', () => coneVolume(10, 3));
createTaskButton('task-8b', 'Uloha 8 (v = 4, r = 1.5)', () => coneVolume(4, 1.5));


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
  const valid =
    a > 0 && b > 0 && c > 0 &&
    a + b > c && a + c > b && b + c > a;
  printResult(`a = ${a}, b = ${b}, c = ${c} → ${valid ? 'ano' : 'ne'}`);
  return valid;
};

createTaskButton('task-9a', 'Uloha 9 (3, 4, 5)', () => {
  clearResults();
  isTriangle(3, 4, 5);
});
createTaskButton('task-9b', 'Uloha 9 (1, 2, 10)', () => {
  clearResults();
  isTriangle(1, 2, 10);
});


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

// krok 1
const triangleArea = (a, b, c) => {
  // krok 1.1
  const resultsContainer = document.querySelector('#results');
  resultsContainer.innerHTML = '';

  // krok 1.2 (validace z úlohy č. 9, bez jejího výpisu)
  const valid =
    a > 0 && b > 0 && c > 0 &&
    a + b > c && a + c > b && b + c > a;
  if (!valid) {
    printResult(`a = ${a}, b = ${b}, c = ${c}: z těchto délek nelze trojúhelník sestrojit.`);
    return;
  }

  // krok 1.3
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // krok 1.4
  printResult(`a = ${a}, b = ${b}, c = ${c}: obsah trojúhelníku je ${area.toFixed(2)}`);
};

// kroky 2 až 4 (vytvoření tlačítka, callback, vložení na stránku)
createTaskButton('task-10a', 'Uloha 10 (3, 4, 5)', () => triangleArea(3, 4, 5));
createTaskButton('task-10b', 'Uloha 10 (1, 2, 10)', () => triangleArea(1, 2, 10));

// krok 5 - testování klikáním na tlačítka na stránce
