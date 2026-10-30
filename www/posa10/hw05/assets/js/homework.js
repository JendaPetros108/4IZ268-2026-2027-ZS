console.log('Ahoj svete');

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here

const pepasYear = 2005;
const currentYear = new Date().getFullYear();
const pepasAge = currentYear - pepasYear;
console.log(`Pepa se narodil v roce ${pepasYear}, v letosnim roce ${currentYear} mu je ${pepasAge}`);



/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here

const celsius = 20;
const fareheit = 68;

const convertToFarenheit = ((celsius * 9) / 5) + 32;
const convertToCelsius = ((fareheit - 32) * 5) / 9;


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

const superTasks = document.querySelector('#tasks');

const say = () => {
    console.log('Ahoj světe');
};
const getsAge = (birthYear) => {
    return new Date().getFullYear() - birthYear;
};
console.log(getsAge(1988));
console.log(getsAge(2020));
console.log(getsAge(1999));

const celsiusToFarenheit = (celsius) => {
    return ((celsius * 9) / 5) + 32;
};
console.log(celsiusToFarenheit(15));
console.log(celsiusToFarenheit(25));
console.log(celsiusToFarenheit(35));

const farenheitToCelsius = (fareheit) => {
    return ((fareheit - 32) * 5) / 9;
};
console.log(farenheitToCelsius(104));
console.log(farenheitToCelsius(86));

const helloButton = document.createElement('button');
superTasks.appendChild(helloButton);
helloButton.innerText = 'Hello!';
helloButton.setAttribute = ('id', 'task-0');
helloButton.addEventListener('click', () => {
    say();
});

const pepasButton = document.createElement('button');
superTasks.appendChild(pepasButton);
pepasButton.innerText = 'Pepas age';
pepasButton.setAttribute = ('id', 'task-1');
pepasButton.addEventListener('click', () => {
    console.log(getsAge(pepasYear));
});

const wtCButton = document.createElement('button');
superTasks.appendChild(wtCButton);
wtCButton.innerText = 'Celsius to Farenheit';
wtCButton.setAttribute = ('id', 'task-2');
wtCButton.addEventListener('click', () => {
    console.log(celsiusToFarenheit(celsius));
});

const wtFButton = document.createElement('button');
superTasks.appendChild(wtFButton);
wtFButton.innerText = 'Fareheit to Celsius';
wtFButton.setAttribute = ('id', 'task-3');
wtFButton.addEventListener('click', () => {
    console.log(farenheitToCelsius(fareheit));
});


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here

const getCensored = (x, y) => {
    if (y === 0) {
        return 'Nulou dělit nelze.';
    }
    return (((x / y) * 100).toFixed(2));
};

console.log(getCensored(4,5));
console.log(getCensored(9,2));
console.log(getCensored(0,5));
console.log(getCensored(4,0));

const superResults = document.querySelector('#results');

const percentResult = document.createElement('p');
superResults.appendChild(percentResult);
percentResult.setAttribute('id', 'result-1');
const x = 3;
const y = 10;

const percentButton = document.createElement('button');
superTasks.appendChild(percentButton);
percentButton.innerText = 'Divide';
percentButton.setAttribute = ('id', 'task-4');
percentButton.addEventListener('click', () => {
    percentResult.textContent = `Podil cisla ${x} z cisla ${y} je ${getCensored(x,y)}%`;
});



/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here

const getBiggerNumber = (z, w) => {
    if (z === w) {
        return `Čísla ${z} a ${w} se rovnají.`;
    }
    if (z > w) {
        return `Z čísel ${z} a ${w} je větší ${z}.`;
    }
    return `Z čísel ${z} a ${w} je větší ${w}.`;
};
console.log(getBiggerNumber(0, 8));


const biggestTextInt = document.createElement('p');
superResults.appendChild(biggestTextInt);
biggestTextInt.setAttribute('id', 'result-2');
const biggestButtonInt = document.createElement('button');
superTasks.appendChild(biggestButtonInt);
biggestButtonInt.innerText = 'Whos bigger INT';
biggestButtonInt.setAttribute = ('id', 'task-5');
biggestButtonInt.addEventListener('click', () => {
    biggestTextInt.textContent = getBiggerNumber(9,1);
});
const biggestTextDeci = document.createElement('p');
superResults.appendChild(biggestTextDeci);
biggestTextDeci.setAttribute('id', 'result-3');
const biggestButtonDeci = document.createElement('button');
superTasks.appendChild(biggestButtonDeci);
biggestButtonDeci.innerText = 'Whos bigger DECI';
biggestButtonDeci.setAttribute = ('id', 'task-6');
biggestButtonDeci.addEventListener('click', () => {
    biggestTextDeci.textContent = getBiggerNumber(0.5,0.7);
});
const biggestTextFrag = document.createElement('p');
superResults.appendChild(biggestTextFrag);
biggestTextFrag.setAttribute('id', 'result-4');
const biggestButtonFrag = document.createElement('button');
superTasks.appendChild(biggestButtonFrag);
biggestButtonFrag.innerText = 'Whos bigger FRAG';
biggestButtonFrag.setAttribute = ('id', 'task-7');
biggestButtonFrag.addEventListener('click', () => {
    biggestTextFrag.textContent = getBiggerNumber(1/3,3/9);
});



/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here


const multiplyThirteen = () => {
    let multi = ' ';
    for (let i = 0; i <= 730; i += 13) {
        multi += i + ' '
        console.log(i);
    }
    return multi;
}
const thirteenText = document.createElement('p');
superResults.appendChild(thirteenText);
thirteenText.setAttribute = ('id', 'result-5');
const thirteenButton = document.createElement('button');
superTasks.appendChild(thirteenButton);
thirteenButton.innerText = 'Thrirteen multi';
thirteenButton.setAttribute = ('id', 'task-8');
thirteenButton.addEventListener('click', () => {
    thirteenText.textContent = multiplyThirteen();
});



/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const getAreaOfCircle = (radius) => {
    const pi = 3.1415926535;
    const areaOfCircle = pi * (radius * radius);
    return areaOfCircle.toFixed(2);
};

const circleAreaText = document.createElement('p');
superResults.appendChild(circleAreaText);
circleAreaText.setAttribute = ('id', 'result-6')
const circleAreaButton = document.createElement('button');
superTasks.appendChild(circleAreaButton);
circleAreaButton.innerText = 'Area of circle';
circleAreaButton.setAttribute = ('id', 'task-9');
circleAreaButton.addEventListener('click', () => {
    const radius = 10;
    console.log(getAreaOfCircle(radius));
    circleAreaText.textContent = `Obsah kruhu je: ${getAreaOfCircle(radius)}`;
});


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const getVolumeOfCone = (radius, height) => {
    if (radius === null || height === null) {
        return 'Nelze vypočítat.';
    }
    const pi = 3.1415926535;
    const volumeOfCone = (pi * (radius * radius) * height) / 3;
    return volumeOfCone.toFixed(2);
};
console.log(getVolumeOfCone(null, 8));

const coneVolumeText = document.createElement('p');
superResults.appendChild(coneVolumeText);
coneVolumeText.setAttribute = ('id', 'result-7');
const coneVolumeButton = document.createElement('button');
superTasks.appendChild(coneVolumeButton);
coneVolumeButton.innerText = 'Volume of cone';
coneVolumeButton.setAttribute = ('id', 'task-10');
coneVolumeButton.addEventListener('click', () => {
    coneVolumeText.textContent = `Objem kuželu je: ${getVolumeOfCone(5,10)}`;
});


/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const isItTriangle = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    }
    return false;
};

const isItTriangleText = document.createElement('p');
superResults.appendChild(isItTriangleText);
isItTriangleText.setAttribute = ('id', 'result-8');
const isItTriangleButton = document.createElement('button');
superTasks.appendChild(isItTriangleButton);
isItTriangleButton.innerText = 'Is is a triangle';
isItTriangleButton.setAttribute = ('id', 'task-11');
isItTriangleButton.addEventListener('click', () => {
    console.log(isItTriangle(1, 2, 10));
    isItTriangleText.textContent = isItTriangle(4, 5, 7);
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


const areaOfTriangleText = document.createElement('p');
superResults.appendChild(areaOfTriangleText);
areaOfTriangleText.setAttribute = ('id', 'result-9');

const getAreaOfTriangle = (a, b, c) => {
    if (isItTriangle(a, b, c)) {
        const s = (a + b + c) / 2;
        const areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
        return areaOfTriangleText.textContent = `Obsah trojúhelníku je ${areaOfTriangle}`;
    }
    return areaOfTriangleText.textContent = 'POZOR: Obsah nelze vypočítat.';
}

const areaOfTriangleButton = document.createElement('button');
superTasks.appendChild(areaOfTriangleButton);
areaOfTriangleButton.innerText = 'Area of triangle';
areaOfTriangleButton.setAttribute = ('id', 'task-12');
areaOfTriangleButton.addEventListener('click', () => {
    getAreaOfTriangle(10, 10, 8);
});

