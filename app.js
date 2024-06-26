
// Set an initial value for the first pokemon //
let initialPokemon = {
    name: "Charizard",
    typeOne: "Fire",
    typeTwo: "Flying",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/6.ogg",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
}
// Colors for Type Background //
const typeColors = [
    ['Normal', '#AAB09F'],
    ['Fire', '#EA7A3C'],
    ['Water', '#539AE2'],
    ['Electric', '#E5C531'],
    ['Grass', '#71C558'],
    ['Ice', '#70CBD4'],
    ['Fighting', '#CB5F48'],
    ['Poison', '#B468B7'],
    ['Ground', '#CC9F4F'],
    ['Flying', '#7DA6DE'],
    ['Psychic', '#E5709B'],
    ['Bug', '#94BC4A'],
    ['Rock', '#B2A061'],
    ['Ghost', '#846AB6'],
    ['Dragon', '#6A7BAF'],
    ['Dark', '#736C75'],
    ['Steel', '#89A1B0'],
    ['Fairy', '#E397D1']
]

// Function to get the color for a type //
function getColorForType(type) {
    const entry = typeColors.find(entry => entry[0] === type);
    return entry ? entry[1] : null;
}


// Sets the stored list variable and values equal to the locally stored list //
let storedSearchList = localStorage.getItem('searchedPokemon');
let searchList = document.getElementById('searches');

if (storedSearchList) {
    storedSearchList = JSON.parse(storedSearchList);
} else {
    storedSearchList = ['Charizard'];
    localStorage.setItem('searchedPokemon', JSON.stringify(storedSearchList));
}


function initialUpdate(item){
    let li = document.createElement("li");
    li.innerText = item.charAt(0).toUpperCase()+item.slice(1).toLowerCase();
    searchList.prepend(li);
};

storedSearchList.reverse().forEach(initialUpdate);




//Set the variables for the locations of the things that will change//
const pokemonName = document.getElementById('pokemon_name');
const pokemonTypeOne = document.getElementById('pokemon_type_one');
const pokemonTypeTwo = document.getElementById('pokemon_type_two');
const pokemonImg = document.getElementById('pokemon_img');
const audioSource = document.getElementById('pokemonAudio')


// Set the initial values of the things that will change //

let item;

document.addEventListener('DOMContentLoaded', function () {
    item = initialPokemon;
    pokemonImg.src = item.img;
    pokemonName.textContent = item.name;
    pokemonTypeOne.textContent = item.typeOne;
    pokemonTypeTwo.textContent = item.typeTwo; 
    audioSource.src = item.cry
});

// Click the input button go have a new pokemon show up, or returns an alert if invalid pokemon //
const inputButton = document.getElementById('inputButton')

document.addEventListener("DOMContentLoaded", function() {
    inputButton.addEventListener("click", function() {
        let newPokemonButton = document.getElementById('inputPokemon').value.toLowerCase();
        fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemonButton}/`)
        .then(response => response.json())
        .then(data => {
            pokemonImg.src = data.sprites.front_default;
            pokemonName.textContent = data.name.charAt(0).toUpperCase()+data.name.slice(1).toLowerCase();
            pokemonTypeOne.textContent = data.types[0].type.name.charAt(0).toUpperCase()+data.types[0].type.name.slice(1).toLowerCase();
            pokemonTypeOne.style.backgroundColor = getColorForType(data.types[0].type.name.charAt(0).toUpperCase()+data.types[0].type.name.slice(1).toLowerCase());
            audioSource.src = data.cries.latest;
            if (data.types[1] == null) {pokemonTypeTwo.textContent = 'N/A'; pokemonTypeTwo.style.backgroundColor = 'white'} else {
            pokemonTypeTwo.textContent = data.types[1].type.name.charAt(0).toUpperCase()+data.types[1].type.name.slice(1).toLowerCase();
            pokemonTypeTwo.style.backgroundColor = getColorForType(data.types[1].type.name.charAt(0).toUpperCase()+data.types[1].type.name.slice(1).toLowerCase());}
            
            storedSearchList.unshift(data.name.charAt(0).toUpperCase()+data.name.slice(1).toLowerCase());
            localStorage.setItem('searchedPokemon', JSON.stringify(storedSearchList));

            let li = document.createElement("li");
            li.innerText = newPokemonButton.charAt(0).toUpperCase()+newPokemonButton.slice(1).toLowerCase();
            searchList.prepend(li);
        })
        .catch(error => alert('Invalid Pokemon'));
    });
});


// Click the "Go to Info" Button to go to the Bulbapedia page //
document.addEventListener("DOMContentLoaded", function() {
    let externalButton = document.getElementById('external_button');
    externalButton.addEventListener("click", function () {
    window.open(`https://bulbapedia.bulbagarden.net/wiki/${document.getElementById('pokemon_name').textContent}_(Pok%C3%A9mon)`, '_blank');
    });
});

// Click the "Play Cry" button to play audio of the pokemon's cry//
let playSoundButton = document.getElementById('play-sound-button');
playSoundButton.addEventListener("click", function() {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.load();
        audioPlayer.play();
});

// Click the "Clear Recent History" button to clear the local storage list //
let clearButton = document.getElementById('clearButton');

clearButton.addEventListener("click", function () {
    localStorage.clear();
    storedSearchList = [];
    document.getElementById("searches").innerHTML = "";
    console.log('buttonclicked')
});


// Click the random button to have a random pokemon appear and added to previous searches //
const randomButton = document.getElementById('randomizer-button')

document.addEventListener("DOMContentLoaded", function() {
    randomButton.addEventListener("click", function() {
        let randomNumber = Math.floor(Math.random()*1026)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
        .then(response => response.json())
        .then(data => {
            pokemonImg.src = data.sprites.front_default;
            pokemonName.textContent = data.name.charAt(0).toUpperCase()+data.name.slice(1).toLowerCase();
            pokemonTypeOne.textContent = data.types[0].type.name.charAt(0).toUpperCase()+data.types[0].type.name.slice(1).toLowerCase();
            pokemonTypeOne.style.backgroundColor = getColorForType(data.types[0].type.name.charAt(0).toUpperCase()+data.types[0].type.name.slice(1).toLowerCase());
            audioSource.src = data.cries.latest;
            if (data.types[1] == null) {pokemonTypeTwo.textContent = 'N/A'; pokemonTypeTwo.style.backgroundColor = 'white'} else {
            pokemonTypeTwo.textContent = data.types[1].type.name.charAt(0).toUpperCase()+data.types[1].type.name.slice(1).toLowerCase();
            pokemonTypeTwo.style.backgroundColor = getColorForType(data.types[1].type.name.charAt(0).toUpperCase()+data.types[1].type.name.slice(1).toLowerCase());}
            
            storedSearchList.unshift(data.name.charAt(0).toUpperCase()+data.name.slice(1).toLowerCase());
            localStorage.setItem('searchedPokemon', JSON.stringify(storedSearchList));

            let li = document.createElement("li");
            li.innerText = pokemonName.textContent.charAt(0).toUpperCase()+pokemonName.textContent.slice(1).toLowerCase();
            searchList.prepend(li);
            
            if (storedSearchList.length > 20) {storedSearchList.pop(); searchList.removeChild(searchList.lastChild)}
        })
        .catch(error => console.error('Error fetching data:', error));
    });
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
