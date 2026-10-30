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

const pepeBirthYear = '2000'
const currentYear = new Date().getFullYear();
const pepeAge = currentYear - pepeBirthYear;
console.log('Pepe is currently ${pepeAge} years old');

/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const TempC = 36;
const TempF = 100;

const tempConvertC = (TempF - 32) * 5 / 9;
console.log(`${TempF}°F =  ${tempConvertC}°C`);

const tempConvertF = TempC * 9 / 5 + 32;
console.log(`${TempC}°C =  ${tempConvertF}°F`);



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


function AgeCalc(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  if(!isNaN(yearOfBirth)) {
    const currentAge = currentYear - yearOfBirth;
    return currentAge;
  } else {
    return "Year of birth not provided";
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
    return "unexpected unit";
  }
}

const buttonPepeAge = document.createElement('button');
buttonPepeAge.innerText = 'Get Pepe\'s age';
buttonPepeAge.setAttribute('id', 'task-1');
buttonPepeAge.addEventListener('click', () => {
  console.log('Pepe is currently' + AgeCalc("2000") + 'years old');
});

const buttonTemp = document.createElement('button');
buttonTemp.innerText = 'Convert temperature';
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

const calculatePercentage = (part, total) => {
  if (total === 0) {
    return "Dělení nulou není možné.";
  }
  const percentage = ((part / total) * 100).toFixed(2);
  return `${part} je ${percentage}% z ${total}`;
};

const buttonPercentage = document.createElement('button');
buttonPercentage.innerText = 'Calculate percentage';
buttonPercentage.setAttribute('id', 'task-4');
buttonPercentage.addEventListener('click', () => {
  console.log(calculatePercentage(21, 42));
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



const compareNumbers = (a, b) => {
  if (a > b) {
    return `${a} je větší než ${b}`;
  } else if (b > a) {
    return `${b} je větší než ${a}`;
  } else {
    return `Čísla ${a} a ${b} se rovnají`;
  }
};

const buttonCompare1 = document.createElement('button');
buttonCompare1.innerText = 'Compare 10 and 5';
buttonCompare1.setAttribute('id', 'task-5-1');
buttonCompare1.addEventListener('click', () => {
  console.log(compareNumbers(10, 5));
});
tasks.appendChild(buttonCompare1);

const buttonCompare2 = document.createElement('button');
buttonCompare2.innerText = 'Compare 3.5 and 7.2';
buttonCompare2.setAttribute('id', 'task-5-2');
buttonCompare2.addEventListener('click', () => {
  console.log(compareNumbers(3.5, 7.2));
});
tasks.appendChild(buttonCompare2);

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here


const printMultiplesOf13 = () => {
  for (let i = 0; i <= 730; i += 13) {
    console.log(i);
  }
};

const buttonMultiples = document.createElement('button');
buttonMultiples.innerText = 'Multiples of 13';
buttonMultiples.setAttribute('id', 'task-6');
buttonMultiples.addEventListener('click', () => {
  printMultiplesOf13();
});
tasks.appendChild(buttonMultiples);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here


const circleArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};

const buttonCircle = document.createElement('button');
buttonCircle.innerText = 'Circle Area (r=5)';
buttonCircle.setAttribute('id', 'task-7');
buttonCircle.addEventListener('click', () => {
  console.log(`Obsah kružnice s poloměrem 5 je ${circleArea(5).toFixed(2)}`);
});
tasks.appendChild(buttonCircle);


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here


const coneVolume = (radius, height) => {
  return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
};

const buttonCone = document.createElement('button');
buttonCone.innerText = 'Cone Volume (r=3, h=5)';
buttonCone.setAttribute('id', 'task-8');
buttonCone.addEventListener('click', () => {
  console.log(`Objem kuželu s poloměrem 3 a výškou 5 je ${coneVolume(3, 5).toFixed(2)}`);
});
tasks.appendChild(buttonCone);


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
  console.log(`Strany: a = ${a}, b = ${b}, c = ${c}`);
  const isValid = (a + b > c) && (a + c > b) && (b + c > a);
  console.log(`Lze sestavit trojúhelník: ${isValid ? 'ano (true)' : 'ne (false)'}`);
  return isValid;
};

const buttonTriangle = document.createElement('button');
buttonTriangle.innerText = 'Check Triangle (3, 4, 5)';
buttonTriangle.setAttribute('id', 'task-9');
buttonTriangle.addEventListener('click', () => {
  isTriangle(3, 4, 5);
});
tasks.appendChild(buttonTriangle);


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

const calculateHeronArea = (a, b, c) => {
  const resultContainer = document.querySelector('#result');

  if (!isTriangle(a, b, c)) {
    resultContainer.textContent = `Chyba: Z hodnot ${a}, ${b}, ${c} nelze sestavit trojúhelník.`;
    return;
  }

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  resultContainer.textContent = `Obsah trojúhelníku se stranami (${a}, ${b}, ${c}) je ${area.toFixed(2)}.`;
};

const buttonHeron = document.createElement('button');
buttonHeron.textContent = 'Výpočet obsahu (3, 4, 5)';
buttonHeron.id = 'task-10';

buttonHeron.addEventListener('click', () => {
  calculateHeronArea(3, 4, 5);
});

const tasksContainer = document.querySelector('#tasks');
tasksContainer.appendChild(buttonHeron);