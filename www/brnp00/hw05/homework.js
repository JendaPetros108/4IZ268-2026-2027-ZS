console.log('Ahoj světe');

const containerTasks = document.querySelector('#tasks');
const outputBox = document.querySelector('#results');

// 1. Pepeho věk
const pepeYear = 1997;
const currentYear = new Date().getFullYear();
const pepeYearsOld = currentYear - pepeYear;
console.log(`Pepovi je ${pepeYearsOld} let.`);

const showPepeAge = (bornYear) => {
  const years = new Date().getFullYear() - bornYear;
  const sentence = `Pepovi je ${years} let.`;
  console.log(sentence);
  return sentence;
};

const btnPepe = document.createElement('button');
btnPepe.innerText = 'Věk Pepy';
btnPepe.id = 'task-1';
btnPepe.addEventListener('click', () => {
  outputBox.innerText = showPepeAge(1997);
});
containerTasks.appendChild(btnPepe);

// 2. Převody teplot
const toFahr = (celsius) => {
  const fahr = (celsius * 9) / 5 + 32;
  const txt = `${celsius}°C = ${fahr}°F`;
  console.log(txt);
  return txt;
};

const toCels = (fahrenheit) => {
  const cels = ((fahrenheit - 32) * 5) / 9;
  const txt = `${fahrenheit}°F = ${cels}°C`;
  console.log(txt);
  return txt;
};

toFahr(22);
toCels(80);

const btnCtoF = document.createElement('button');
btnCtoF.innerText = 'Převod na °F';
btnCtoF.id = 'task-2a';
btnCtoF.addEventListener('click', () => {
  outputBox.innerText = toFahr(22);
});
containerTasks.appendChild(btnCtoF);

const btnFtoC = document.createElement('button');
btnFtoC.innerText = 'Převod na °C';
btnFtoC.id = 'task-2b';
btnFtoC.addEventListener('click', () => {
  outputBox.innerText = toCels(80);
});
containerTasks.appendChild(btnFtoC);

// 4. Procenta
const calcPercentage = (val, max) => {
  if (max === 0) {
    outputBox.innerText = 'Dělení nulou nelze provést!';
    return;
  }
  const pct = ((val / max) * 100).toFixed(2);
  outputBox.innerText = `${val} odpovídá ${pct}% z celku ${max}`;
};

const btnPct = document.createElement('button');
btnPct.innerText = 'Výpočet procent';
btnPct.id = 'task-4';
btnPct.addEventListener('click', () => {
  calcPercentage(32, 128);
});
containerTasks.appendChild(btnPct);

// 5. Porovnání hodnot
const findGreater = (x, y) => {
  if (x > y) {
    outputBox.innerText = `První číslo (${x}) je větší než druhé (${y})`;
  } else if (y > x) {
    outputBox.innerText = `Druhé číslo (${y}) je větší než první (${x})`;
  } else {
    outputBox.innerText = `Hodnoty ${x} a ${y} jsou stejné`;
  }
};

const btnCompInt = document.createElement('button');
btnCompInt.innerText = 'Porovnat celá čísla';
btnCompInt.id = 'task-5a';
btnCompInt.addEventListener('click', () => findGreater(18, 9));
containerTasks.appendChild(btnCompInt);

const btnCompDec = document.createElement('button');
btnCompDec.innerText = 'Porovnat desetinná';
btnCompDec.id = 'task-5b';
btnCompDec.addEventListener('click', () => findGreater(5.25, 5.75));
containerTasks.appendChild(btnCompDec);

const btnCompFrac = document.createElement('button');
btnCompFrac.innerText = 'Porovnat zlomky';
btnCompFrac.id = 'task-5c';
btnCompFrac.addEventListener('click', () => findGreater(4 / 5, 5 / 6));
containerTasks.appendChild(btnCompFrac);

const btnCompEq = document.createElement('button');
btnCompEq.innerText = 'Porovnat shodná';
btnCompEq.id = 'task-5d';
btnCompEq.addEventListener('click', () => findGreater(40, 40));
containerTasks.appendChild(btnCompEq);

// 6. Násobky 13
const listMultiples13 = () => {
  const arr = [];
  for (let n = 0; n <= 730; n += 13) {
    arr.push(n);
  }
  const res = arr.join(', ');
  console.log(res);
  outputBox.innerText = res;
};

const btnMulti = document.createElement('button');
btnMulti.innerText = 'Násobky 13';
btnMulti.id = 'task-6';
btnMulti.addEventListener('click', listMultiples13);
containerTasks.appendChild(btnMulti);

// 7. Obsah kruhu
const getCircleSurface = (radius) => {
  const surface = (Math.PI * radius * radius).toFixed(2);
  outputBox.innerText = `Plocha kruhu pro poloměr ${radius} je ${surface}`;
};

const btnCircle = document.createElement('button');
btnCircle.innerText = 'Plocha kruhu';
btnCircle.id = 'task-7';
btnCircle.addEventListener('click', () => getCircleSurface(4.5));
containerTasks.appendChild(btnCircle);

// 8. Objem kuželu
const getConeSpace = (h, r) => {
  const vol = ((1 / 3) * Math.PI * r * r * h).toFixed(2);
  outputBox.innerText = `Objem kuželu (výška ${h}, poloměr ${r}) je ${vol}`;
};

const btnCone = document.createElement('button');
btnCone.innerText = 'Objem kuželu';
btnCone.id = 'task-8';
btnCone.addEventListener('click', () => getConeSpace(10, 3));
containerTasks.appendChild(btnCone);

// 9. Trojúhelníková nerovnost
const isTriangleValid = (a, b, c) => {
  const ok = a + b > c && a + c > b && b + c > a;
  console.log(`Trojúhelník [${a}, ${b}, ${c}]: ${ok}`);
  return ok;
};

const btnTriValid = document.createElement('button');
btnTriValid.innerText = 'Test trojúhelníku (platný)';
btnTriValid.id = 'task-9a';
btnTriValid.addEventListener('click', () => {
  const valid = isTriangleValid(7, 24, 25);
  outputBox.innerText = `Lze postavit trojúhelník ze stran 7, 24, 25? ${valid ? 'Ano' : 'Ne'}`;
});
containerTasks.appendChild(btnTriValid);

const btnTriInvalid = document.createElement('button');
btnTriInvalid.innerText = 'Test trojúhelníku (neplatný)';
btnTriInvalid.id = 'task-9b';
btnTriInvalid.addEventListener('click', () => {
  const valid = isTriangleValid(2, 3, 8);
  outputBox.innerText = `Lze postavit trojúhelník ze stran 2, 3, 8? ${valid ? 'Ano' : 'Ne'}`;
});
containerTasks.appendChild(btnTriInvalid);

// 10. Heronův vzorec
const calcHeron = (a, b, c) => {
  if (!isTriangleValid(a, b, c)) {
    outputBox.innerText = `Ze stran ${a}, ${b}, ${c} nelze trojúhelník vytvořit!`;
    return;
  }
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
  outputBox.innerText = `Obsah trojúhelníku (${a}, ${b}, ${c}) je ${area}`;
};

const btnHeronValid = document.createElement('button');
btnHeronValid.innerText = 'Heronův vzorec (platný)';
btnHeronValid.id = 'task-10a';
btnHeronValid.addEventListener('click', () => calcHeron(7, 24, 25));
containerTasks.appendChild(btnHeronValid);

const btnHeronInvalid = document.createElement('button');
btnHeronInvalid.innerText = 'Heronův vzorec (chyba)';
btnHeronInvalid.id = 'task-10b';

btnHeronInvalid.addEventListener('click', () => calcHeron(2, 3, 8));
containerTasks.appendChild(btnHeronInvalid);
