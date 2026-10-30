        //    0123456789012
const text = 'Barrack Obama';
const textLength = text.length;
const searchedIndex = text.indexOf('k O');
const partOne = text.slice(0, 7);
const partTwo = text.slice(8);
const [firstName, lastName] = text.split(' ');
const remainingText = text.slice(-5);

const newText = text.replace('Barrack', 'Michelle');
const anotherText = text.replace(/a/g, 'X');
const upperCaseText = text.toUpperCase();
const lowerCaseText = text.toLowerCase();

const words = ['one', 'two', 'three', 'four'];
const sentence = words.join('-');

const whiteSpaceText = '  this is a sentence   with whitespaces outside    ';
const cleanedText = whiteSpaceText.trim();

console.log({ text });

const createString = (value) => {
    return `President ${value} was elected twice`;
};

console.log(createString('Barrack Obama'));
console.log(createString('Donald Trump'));

console.log({
    whiteSpaceText,
    cleanedText,
    text,
    textLength,
    searchedIndex,
    partOne,
    partTwo,
    firstName,
    lastName,
    remainingText,
    newText,
    anotherText,
    upperCaseText,
    lowerCaseText,
    sentence,
});