// const clickMeButton = document.querySelector('#click-me-button');

// // console.log(clickMeButton);

// clickMeButton.addEventListener('click', () => {
//     console.log('Clicked on clickMeButton');
// });


// console.log('argument1', 'argument2', 'argument3');

// // funkce / function
// const multiply = (arg1, arg2) => {
//     console.log(arg1, arg2);
//     const result = arg1 * arg2;
//     return result;
// };

// const multiplyResult = multiply(15, 4);
// console.log('multiplyResult', multiplyResult);


const heading1 = document.querySelector('#heading-1');
const nameInput = document.querySelector('input[name="username"]'); // null
const passwordInput = document.querySelector('input[name="password"]');
const submitButton = document.querySelector('#submit-button');

console.log(heading1, nameInput, passwordInput, submitButton);

submitButton.addEventListener('click', () => {
    const nameInputValue = nameInput.value;
    const passwordInputValue = passwordInput.value;
    console.log(nameInputValue, passwordInputValue);
    heading1.textContent = `username: ${nameInputValue}, password: ${passwordInputValue}`;
});





const book = {
    title: 'Harry Potter and the Chamber of Secrets',
    published: true,
    price: 100,
    currency: 'USD',
    display: () => {
        const message = `This book is ${book.title} and it costs ${book.price} ${book.currency}`;
        console.log(message);
    },
};

book.display();

const countries = ['Czech Republic', 'Slovakia', 'Poland'];

console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);

for (const country of countries) {
    console.log(country);
}