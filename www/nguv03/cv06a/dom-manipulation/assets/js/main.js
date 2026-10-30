// DOM = document object model
const body = document.querySelector('body');
const heading1 = document.querySelector('h1');

const newButton = document.createElement('button');
newButton.textContent = 'Click me';
newButton.classList.add('btn');
newButton.setAttribute('id', 'click-me-button');
newButton.addEventListener('click', () => {
    heading1.textContent = 'You clicked!';
});
newButton.addEventListener('mouseover', () => {
    heading1.textContent = 'You hovered!';
});
newButton.addEventListener('mouseout', () => {
    heading1.textContent = 'You left!';
});
body.appendChild(newButton);




const registrationForm = document.querySelector('#registration-form');
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    const email = formData.get('email');
    console.log(email);
});

