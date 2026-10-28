const firstNumber = 123;
const secondNumber = 456;
console.log(firstNumber);
console.log(secondNumber);
const isVisible = true;
const isHidden = false;
console.log(typeof isVisible);
console.log(typeof isHidden);


undefined;
null;
const book = {
    title: 'Harry Potter and the Chamber of Secrets',
    price: 100,
    currency: 'CZK',
    published: true,
    display: () => {
        console.log(book.title);
        console.log(book.price);
        console.log(book.currency);
        console.log(book.published);
    },
};
book.display();

const multiply = (firstNumber, secondNumber) => {
    const result = firstNumber * secondNumber;
    return result;
};

const result1 = multiply(4, 5);
const result2 = multiply(6, 7);
const result3 = multiply(8, 9);
console.log(result1);
console.log(result2);
console.log(result3);


const countries = ['Czech republic', 'Poland', 'Mexico', 'Canada'];
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);

for (const country of countries) {
    console.log(country);
}
for (let i = 0; i < countries.length; i += 1) {
    const country = countries[i];
    console.log(country);
}
countries.forEach((country) => {
    console.log(country);
});

const fullName = 'Barrack Obama';
const age = 80;
const sentence = `The name of the person is ${fullName} and he is ${age} years old`;
console.log(sentence);


const heading1 = document.querySelector('#heading-1');
const carMakeInput = document.querySelector('input[name="make"]');
const carModelInput = document.querySelector('input[name="model"]');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
    const carMake = carMakeInput.value;
    const carModel = carModelInput.value;
    const sentence = `Your favorit car is ${carMake} ${carModel}`;
    heading1.textContent = sentence;
});




