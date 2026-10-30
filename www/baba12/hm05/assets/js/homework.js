/* HOMEWORK */
/**
 * 0) Pre-preparacion.
 * - Vytvořte HTML stránku s nadpisem h1 "JavaScript is awesome!" 
 * - Na stránce vytvořte místo pro umístění jednotlivých spouštěčů úkolů - tlačítek (tj. div, který má id s hodnotou "tasks" - <div id="tasks"></div>). 
 * - Na stránce vytvořte místo pro výpis výsledků úkolů (div, který má id s hodnotou "result" - <div id="results"></div>).
 * 
 * - Připojte tento homework.js soubor k vytvořené HTML stránce pomocí tagu <script> (viz LAB) a vyzkoušejte/** */

console.log('Ahoj světe');



/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here


const birthYear = 2008;
const thisYear = new Date().getFullYear();

console.log(`Pepa se narodil v roce ${birthYear} a je mu ${thisYear - birthYear} let.`);




/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const celsiusValue = 20;
const fahrenheitValue = 68;

const celsiusToFahrenheit = celsiusValue * 9 / 5 + 32;
const fahrenheitToCelsius = (fahrenheitValue - 32) * 5 / 9;


console.log(celsiusValue + '°C = ' + celsiusToFahrenheit + '°F');
console.log(fahrenheitValue + '°F = ' + fahrenheitToCelsius + '°C ');




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
const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');



const printPepesAge = (birthYear) => {
  const thisYear = new Date().getFullYear();
  const pepesAge = thisYear - birthYear;
  const output = `Pepa se narodil v roce ${birthYear} a je mu ${pepesAge} let.`;
  console.log(output)
  results.innerText = output;

};

const convertCelsius = (celsius) => {
  const fahrenheit = celsius * 9 / 5 + 32;
  const output = `${celsius}°C = ${fahrenheit}°F`;
  console.log(output);
  results.innerText = output;
};

const convertFahrenheit = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  const output = `${fahrenheit}°F = ${celsius}°C`;
  console.log(output);
  results.innerText = output;
};


printPepesAge(2008);
printPepesAge(1973);
convertCelsius(20);
convertCelsius(100);
convertFahrenheit(68);
convertFahrenheit(59);
results.innerText = '';


const createButton = (id, label, action) => {
  const button = document.createElement('button');
  button.innerText = label;
  button.setAttribute('id', id);
  button.setAttribute('type', 'button');
  button.addEventListener('click', action);
  tasks.appendChild(button);
};

createButton('task-1', "1  - Pepe's age", () => printPepesAge(2008));
createButton('task-2', '2 - Celsius to Fahrenheit', () => convertCelsius(20));
createButton('task-2-f', '2 - Fahrenheit to Celsius', () => convertFahrenheit(68));


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla.
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2);
 * Pozor na dělení nulou!
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here

const calcpercentage = (part, total) => {
  if (total === 0) {
    results.innerText = 'Nelze dělit nulou';
    return;
  }
};

const calcResult = (part, total) => {
  results.innerText = `Podil cisla ${part} z cisla ${total} je ${(part / total * 100).toFixed(2)}%`;
  return calcResult;
}



createButton('task-4', "4  - Dělení nulou", () => { calcpercentage(20, 0); });
createButton('task-4.1', "4.1  - Dělení", () => { calcResult(20, 73); });


/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají.
 *
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here

const compare = (number1, number2) => {
  if (number1 > number2) {
    results.innerText = `${number1} je větší než ${number2}.`;
  } else if (number1 < number2) {
    results.innerText = `${number1} je menší než ${number2}.`;
  } else if (number1 = number2) {
    results.innerText = `${number1} se rovná ${number2}.`;
  }
}

createButton('task-5', "5  - Celá čísla", () => { compare(20, 14); });
createButton('task-5.1', "5.1  - Desetinná čísla", () => { compare(9.5, 7.3); });
createButton('task-5.2', "5.2  - Zlomky", () => { compare(3 / 5, 7 / 4); });
createButton('task-5.3', "5.3  - Stejná čísla", () => { compare(5, 5); });

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší
 * nebo rovno 730, včetě nuly. Používejte for cyklus.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here

const calcmultiples = () => {
  const multiples = [];
  for (let number = 0; number <= 730; number += 13) {
    multiples.push(number);
  }
  results.innerText = multiples.join(', ');
}

createButton('task-6', "6 - Násobky 13", () => { calcmultiples(); });

/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const calcCircleArea = (radius) => {
  const area = Math.PI * radius ** 2;
  results.innerText = `Obsah kruhu s poloměrem ${radius} je ${area.toFixed(2)}.`;
};
createButton('task-7', "7 - Obsah kruhu", () => calcCircleArea(9));


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr.
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const calcConeVolume = (height, radius) => {
  const volume = Math.PI * radius ** 2 * height / 3;
  results.innerText = `Objem kuželu s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}.`;
};

createButton('task-8', "8 - Objem kuželu", () => calcConeVolume(9, 4));


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
  const valid = (a + b > c && a + c > b && b + c > a);
  results.innerText = `Strany ${a}, ${b}, ${c} - lze sestavit trojúhelník: ${valid}.`;
  return valid;
};
createButton('task-9', '9 - Trojúhelník (7, 4, 9)', () => isTriangle(7, 4, 9));
createButton('task-9.1', '9.1 - Trojúhelník (2, 8, 14)', () => isTriangle(2, 8, 14));



/**
 * 10) Heroic performance. Vytvořte funkci, která vypočte a vypíše obsah trojúhelníka podle Heronova vzorce,
 * tj. funkce dostane délky všech 3 stran. Použijte přitom předchozí validaci v úloze č. 9, tj. počítejte pouze,
 * když to má smysl. Hint: funkce pro odmocninu je Math.sqrt().
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte
 * staticky.
 */
// Solution here

const calcTriangleArea = (a, b, c) => {
  if (!isTriangle(a, b, c)) {
    results.innerText = `Ze stran ${a}, ${b}, ${c} nejde vytvořit trojúhelník.`;
    return null;
  }
  const halfPerim = (a + b + c) / 2;
  const area = Math.sqrt(halfPerim * (halfPerim - a) * (halfPerim - b) * (halfPerim - c));
  results.innerText = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}.`;
  return area;
};


createButton('task-10', '10 - Heronův vzorec (7, 4, 9)', () => calcTriangleArea(7, 4, 9));
createButton('task-10.1', '10.1 - Neplatný trojúhelník', () => calcTriangleArea(2, 8, 14));

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