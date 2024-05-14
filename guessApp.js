//Set the variables for the locations of the things that will change//
const pokemonName = document.getElementById('pokemon_name');
const pokemonImg = document.getElementById('pokemon_img');
const button = document.getElementById('next_pokemon');
const enter = document.getElementById('inputButton');
const score = document.getElementById('score');
const settings = document.getElementById('settings');
const closeSettings = document.getElementById('close-settings-box');

const gen1checkbox = document.getElementById('gen1');
const gen2checkbox = document.getElementById('gen2');
const gen3checkbox = document.getElementById('gen3');
const gen4checkbox = document.getElementById('gen4');
const gen5checkbox = document.getElementById('gen5');
const gen6checkbox = document.getElementById('gen6');
const gen7checkbox = document.getElementById('gen7');
const gen8checkbox = document.getElementById('gen8');
const gen9checkbox = document.getElementById('gen9');

let pokemonToGuess;

let numberOfPokemon = 152;

let generationRanges = [[1,151, true], 
[152,251, false], 
[252,386, false], 
[387,493, false], 
[494, 649, false], 
[650, 721, false], 
[722, 809, false], 
[810,905, false], 
[906,1025, false]]

let randomGeneration;

function getRandomNumber() {
    do {randomGeneration = Math.floor(Math.random()*generationRanges.length)} 
    while (generationRanges[randomGeneration][2] === false);
    let bottomRange = generationRanges[randomGeneration][0];
    let topRange = generationRanges[randomGeneration][1];
    return Math.floor(Math.random() * (topRange - bottomRange + 1)) + bottomRange;
}


// Update number based on the selected generations //
closeSettings.addEventListener("click", function () {
    if (!gen1checkbox.checked && !gen2checkbox.checked && !gen3checkbox.checked && !gen4checkbox.checked && !gen5checkbox.checked && !gen6checkbox.checked && !gen7checkbox.checked && !gen8checkbox.checked && !gen9checkbox.checked) {
        alert("Please Select at least One Generation")
    } else {
    
    document.querySelector(".settings-box").style.visibility = 'hidden';
    document.getElementById("inputButton").style.visibility = 'visible';
    document.getElementById("inputPokemon").style.visibility = 'visible';
    document.querySelector(".title").style.opacity = '1';
    document.querySelector(".info-container").style.opacity = '1';
    document.querySelector(".button-container").style.opacity = '1';
    document.querySelector(".left-side-nav").style.opacity = '1';
    document.getElementById("inputButton").removeAttribute("disabled", "");
    document.getElementById("inputPokemon").removeAttribute("disabled", "");
    document.getElementById("nav-toggle").removeAttribute("disabled", "");

    if (gen1checkbox.checked) {generationRanges[0][2] = true} else {generationRanges[0][2] = false};
    if (gen2checkbox.checked) {generationRanges[1][2] = true} else {generationRanges[1][2] = false};
    if (gen3checkbox.checked) {generationRanges[2][2] = true} else {generationRanges[2][2] = false};
    if (gen4checkbox.checked) {generationRanges[3][2] = true} else {generationRanges[3][2] = false};
    if (gen5checkbox.checked) {generationRanges[4][2] = true} else {generationRanges[4][2] = false};
    if (gen6checkbox.checked) {generationRanges[5][2] = true} else {generationRanges[5][2] = false};
    if (gen7checkbox.checked) {generationRanges[6][2] = true} else {generationRanges[6][2] = false};
    if (gen8checkbox.checked) {generationRanges[7][2] = true} else {generationRanges[7][2] = false};
    if (gen9checkbox.checked) {generationRanges[8][2] = true} else {generationRanges[8][2] = false};

    }

});

// Open settings menu //
settings.addEventListener("click", function () {
    document.querySelector(".settings-box").style.visibility = 'visible';
    document.querySelector(".title").style.opacity = '.1';
    document.querySelector(".info-container").style.opacity = '.1';
    document.querySelector(".button-container").style.opacity = '.1';
    document.querySelector(".left-side-nav").style.opacity = '.1';
    document.getElementById("inputButton").setAttribute("disabled", "");
    document.getElementById("inputPokemon").setAttribute("disabled", "");
    document.getElementById("nav-toggle").setAttribute("disabled", "");
    
})

// Set the initial values of the things that will change //
button.addEventListener("click", function () {
    let randomNumber = getRandomNumber();
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
    document.getElementById("inputButton").removeAttribute("disabled", "");
});

// Answer Results //
enter.addEventListener("click", function () {
    let guess = document.getElementById('inputPokemon').value.toLowerCase();
    if (guess === pokemonToGuess.toLowerCase())
        {alert("Correct!"), score.textContent++} else 
        {alert(`Nope it was ${pokemonToGuess}!`)};
    pokemonName.textContent = pokemonToGuess;
    pokemonImg.style.filter = 'contrast(100%) brightness(100%)';
    document.getElementById("inputButton").setAttribute("disabled", "");
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