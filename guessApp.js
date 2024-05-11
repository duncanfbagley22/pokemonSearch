//Set the variables for the locations of the things that will change//
const pokemonName = document.getElementById('pokemon_name');
const pokemonImg = document.getElementById('pokemon_img');
const button = document.getElementById('next_pokemon');
const enter = document.getElementById('inputButton');

let pokemonToGuess;

// Set the initial values of the things that will change //
button.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random()*152);
    pokemonName.textContent = '???';
    button.textContent = 'Next Pokemon'
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
    .then(response => response.json())
    .then(data => {
        pokemonImg.src = data.sprites.front_default;
        pokemonToGuess = data.name.charAt(0).toUpperCase()+data.name.slice(1).toLowerCase();})
    .catch(error => console.error('Error fetching data:', error));
    pokemonImg.style.filter = 'contrast(0%) brightness(0%)';
    document.getElementById('inputPokemon').value = '';
});

// Answer Results //
enter.addEventListener("click", function () {
    let guess = document.getElementById('inputPokemon').value.toLowerCase();
    if (guess === pokemonToGuess.toLowerCase())
        {alert("Correct!")} else 
        {alert(`Nope it was ${pokemonToGuess}!`)};
    pokemonName.textContent = pokemonToGuess;
    pokemonImg.style.filter = 'contrast(100%) brightness(100%)'
});

// Close Navigation Menu //
let closeNav = document.getElementById('nav-text-close');

closeNav.addEventListener("click", function () {
    document.querySelector(".left-side-nav").style.display = "none";
    document.querySelector(".nav-toggle").style.display = "block";
});

// Open Navigation Menu //

let openNav = document.getElementById('nav-toggle');

openNav.addEventListener("click", function () {
    document.querySelector(".left-side-nav").style.display = "block";
    document.querySelector(".nav-toggle").style.display = "none";
});