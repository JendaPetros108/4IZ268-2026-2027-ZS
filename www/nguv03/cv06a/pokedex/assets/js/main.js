const heading1 = document.querySelector('#heading-1');
const pokemonsContainer = document.querySelector('#pokemons-container');
const pokemonForm = document.querySelector('#pokemon-form');
const removeAllButton = document.querySelector('#remove-all');
removeAllButton.addEventListener('click', () => {
    pokemonsContainer.innerHTML = '';
});

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(pokemonForm);
    const pokemonName = formData.get('pokemonName');
    
    const pokemonElement = document.createElement('div');
    pokemonElement.textContent = pokemonName;
    pokemonElement.addEventListener('click', () => {
        heading1.textContent = pokemonName;
        pokemonElement.classList.add('highlighted');
    });
    const pokemonRemoveButton = document.createElement('button');
    pokemonRemoveButton.textContent = 'Remove';
    pokemonRemoveButton.addEventListener('click', () => {
        pokemonElement.remove();
    });
    pokemonElement.appendChild(pokemonRemoveButton);

    pokemonsContainer.appendChild(pokemonElement);

});