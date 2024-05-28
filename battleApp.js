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

// List of Pokemon //
const pokemonChoices = [
    {
    id: "machop",
    front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/66.png",
    type: 'fighting',
    stats: {
        hp:70,
        attack:80,
        defense:50,
        speed:35,
        special:35
    },
    moves: {
        move1: {
            name: 'karate-chop',
            accuracy: 100,
            power: 50,
            type: 'fighting',
            category: 'physical',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
        move2: {
            name: 'strength',
            accuracy: 100,
            power:80,
            type: 'normal',
            category: 'physical',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
        move3: {
            name: 'leer',
            accuracy: 100,
            power: null,
            type: 'normal',
            category: 'status',
            stat_changes: {
                change: -1,
                stat: 'defense'
            },
            priority: 0,
            target: 'opponent'
        },
        move4: {
            name: 'double-team',
            accuracy: null,
            power: null,
            type: 'normal',
            category: 'status',
            stat_changes: {
                change: 1,
                stat: 'evasion'
            },
            priority: 0,
            target: 'user'
        },
    }
    },
    {
    id: "squirtle",
    front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    type: 'water',
    stats: {
        hp:44,
        attack:48,
        defense:65,
        speed:43,
        special:57
    },
    moves: {
        move1: {
            name: 'water-gun',
            accuracy: 100,
            power: 40,
            type: 'water',
            category: 'special',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
        move2: {
            name: 'bite',
            accuracy: 100,
            power:60,
            type: 'dark',
            category: 'physical',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
        move3: {
            name: 'tail-whip',
            accuracy: 100,
            power: null,
            type: 'normal',
            category: 'status',
            stat_changes: {
                change: -1,
                stat: 'defense'
            },
            priority: 0,
            target: 'opponent'
        },
        move4: {
            name: 'withdraw',
            accuracy: null,
            power: null,
            type: 'water',
            category: 'status',
            stat_changes: {
                change: 1,
                stat: 'defense'
            },
            priority: 0,
            target: 'user'
        },
    }
    },
    {
    id: "diglett",
    front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
    type: 'ground',
    stats: {
        hp:10,
        attack:55,
        defense:25,
        speed:95,
        special:40
    },
    moves: {
        move1: {
            name: 'scratch',
            accuracy: 100,
            power: 40,
            type: 'normal',
            category: 'physical',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
        move2: {
            name: 'sand attack',
            accuracy: 100,
            power: null,
            type: 'ground',
            category: 'status',
            stat_changes: {
                change: -1,
                stat: 'accuracy'
            },
            priority: 0,
            target: 'opponent'
        },
        move3: {
            name: 'growl',
            accuracy: 100,
            power: null,
            type: 'normal',
            category: 'status',
            stat_changes: {
                change: -1,
                stat: 'attack'
            },
            priority: 0,
            target: 'opponent'
        },
        move4: {
            name: 'earthquake',
            accuracy: 100,
            power: 100,
            type: 'ground',
            category: 'physical',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
    }
    },
    {
    id: "dratini",
    front_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    back_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png",
    type: 'dragon',
    stats: {
        hp:41,
        attack:64,
        defense:45,
        speed:50,
        special:50
    },
    moves: {
        move1: {
            name: 'swift',
            accuracy: 10000,
            power: 40,
            type: 'normal',
            category: 'special',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
        move2: {
            name: 'leer',
            accuracy: 100,
            power: null,
            type: 'normal',
            category: 'status',
            stat_changes: {
                change: -1,
                stat: 'defense'
            },
            priority: 0,
            target: 'opponent'
        },
        move3: {
            name: 'agility',
            accuracy: null,
            power: null,
            type: 'psychic',
            category: 'status',
            stat_changes: {
                change: 1,
                stat: 'speed'
            },
            priority: 0,
            target: 'user'
        },
        move4: {
            name: 'slam',
            accuracy: 75,
            power: 80,
            type: 'normal',
            category: 'physical',
            stat_changes: null,
            priority: 0,
            target: 'opponent'
        },
    }
    }
];

// Type Effectiveness Chart //
let typeChart = {
    "normal": {
      "normal": 1,
      "water": 1,
      "fighting": 1,
      "ground": 1,
      "psychic": 1,
      "dragon": 1,
      "dark": 1
    },
    "water": {
      "normal": 1,
      "water": 0.5,
      "fighting": 1,
      "ground": 2,
      "psychic": 1,
      "dragon": 0.5,
      "dark": 1
    },
    "fighting": {
      "normal": 2,
      "water": 1,
      "fighting": 1,
      "ground": 1,
      "psychic": 0.5,
      "dragon": 1,
      "dark": 2
    },
    "ground": {
      "normal": 1,
      "water": 1,
      "fighting": 1,
      "ground": 1,
      "psychic": 1,
      "dragon": 1,
      "dark": 1,
    },
    "psychic": {
      "normal": 1,
      "water": 1,
      "fighting": 2,
      "ground": 1,
      "psychic": 0.5,
      "dragon": 1,
      "dark": 0
    },
    "dragon": {
      "normal": 1,
      "water": 1,
      "fighting": 1,
      "ground": 1,
      "psychic": 1,
      "dragon": 2,
      "dark": 1
    },
    "dark": {
      "normal": 1,
      "water": 1,
      "fighting": 0.5,
      "ground": 1,
      "psychic": 2,
      "dragon": 1,
      "dark": 0.5
    }
  };
// Get Pokemon Names and IDs //
//const pokemon1name = prompt("Select pokemon 1: machop, squirtle, diglett, or dratini");
//const pokemon2name = prompt("Select pokemon 2: machop, squirtle, diglett, or dratini");
let pokemon1name;
let pokemon2name;
let pokemon1id;
let pokemon2id;
let pokemon1hpbase, pokemon1attackbase, pokemon1defensebase, pokemon1speedbase, pokemon1specialbase, pokemon1Back, pokemon1Front, moveVariables;
let pokemon2hpbase, pokemon2attackbase, pokemon2defensebase, pokemon2speedbase, pokemon2specialbase, pokemon2Back, pokemon2Front, moveVariables2;
let pokemon1move1, pokemon1move2, pokemon1move3, pokemon1move4, pokemon2move1, pokemon2move2, pokemon2move3, pokemon2move4

const firstPokemonButton = document.querySelectorAll(".select-pokemon-list");
const secondPokemonButton = document.querySelectorAll(".select-pokemon-list2");
const inputButton = document.getElementById('input_button');

firstPokemonButton.forEach(pokemon => {
    pokemon.addEventListener("click", function () {
        pokemon1name = this.id;
        if (pokemon1name === 'machop') {pokemon1id = 0} else if (pokemon1name === 'squirtle') {pokemon1id = 1} else if (pokemon1name === 'diglett') {pokemon1id = 2} else if (pokemon1name === 'dratini') {pokemon1id = 3};
        pokemon1hpbase = pokemonChoices[pokemon1id].stats.hp;
        pokemon1attackbase = pokemonChoices[pokemon1id].stats.attack;
        pokemon1defensebase = pokemonChoices[pokemon1id].stats.defense;
        pokemon1speedbase = pokemonChoices[pokemon1id].stats.speed;
        pokemon1specialbase = pokemonChoices[pokemon1id].stats.special;
        pokemon1Back = pokemonChoices[pokemon1id].back_sprite;
        pokemon1Front = pokemonChoices[pokemon1id].front_sprite;
        pokemon1move1 = pokemonChoices[pokemon1id].moves.move1.name;
        pokemon1move2 = pokemonChoices[pokemon1id].moves.move2.name;
        pokemon1move3 = pokemonChoices[pokemon1id].moves.move3.name;
        pokemon1move4 = pokemonChoices[pokemon1id].moves.move4.name;
        moveVariables = {
            "pokemon1move1": pokemon1move1,
            "pokemon1move2": pokemon1move2,
            "pokemon1move3": pokemon1move3,
            "pokemon1move4": pokemon1move4,
            "pokemon1name": pokemon1name
        };
        document.getElementById('pokemon1').style.visibility = 'hidden';
        document.getElementById('pokemon2').style.visibility = 'visible';

    })
})

secondPokemonButton.forEach(pokemon => {
    pokemon.addEventListener("click", function () {
        pokemon2name = this.id;
        pokemon2name = pokemon2name.substring(0, pokemon2name.length - 1)
        if (pokemon2name === 'machop') {pokemon2id = 0} else if (pokemon2name === 'squirtle') {pokemon2id = 1} else if (pokemon2name === 'diglett') {pokemon2id = 2} else if (pokemon2name === 'dratini') {pokemon2id = 3}
        pokemon2hpbase = pokemonChoices[pokemon2id].stats.hp;
        pokemon2attackbase = pokemonChoices[pokemon2id].stats.attack;
        pokemon2defensebase = pokemonChoices[pokemon2id].stats.defense;
        pokemon2speedbase = pokemonChoices[pokemon2id].stats.speed;
        pokemon2specialbase = pokemonChoices[pokemon2id].stats.special;
        pokemon2Back = pokemonChoices[pokemon2id].back_sprite;
        pokemon2Front = pokemonChoices[pokemon2id].front_sprite;
        pokemon2move1 = pokemonChoices[pokemon2id].moves.move1.name;
        pokemon2move2 = pokemonChoices[pokemon2id].moves.move2.name;
        pokemon2move3 = pokemonChoices[pokemon2id].moves.move3.name;
        pokemon2move4 = pokemonChoices[pokemon2id].moves.move4.name;
        moveVariables2 = {
            "pokemon2move1": pokemon2move1,
            "pokemon2move2": pokemon2move2,
            "pokemon2move3": pokemon2move3,
            "pokemon2move4": pokemon2move4,
            "pokemon2name": pokemon2name
        };
        document.getElementById('pokemon2').style.visibility = 'hidden';
        inputButton.style.visibility = 'visible';

    })
})

// Set initial pokemon stat bases //
const level = 15;

// Set user pokemon EVs //
let pokemon1evs = {
    hp: 5,
    attack: 5,
    defense: 5,
    speed: 5,
    special: 5
}

// Set user pokemon IVs //
const pokemon1ivs = {
    hp: Math.floor(Math.random()*32),
    attack: Math.floor(Math.random()*32),
    defense: Math.floor(Math.random()*32),
    speed: Math.floor(Math.random()*32),
    special: Math.floor(Math.random()*32)
}

// Set user pokemon stat multiplier values //
let pokemon1stats = {
    attackMultiplierN: 2,
    attackMultiplierD: 2,
    defenseMultiplierN: 2,
    defenseMultiplierD: 2,
    speedMultiplierN: 2,
    speedMultiplierD: 2,
    specialMultiplierN: 2,
    specialMultiplierD: 2,
    evasionMultiplierN: 2,
    evasionMultiplierD: 2,
    accuracyMultiplierN: 2,
    accuracyMultiplierD: 2
}

// Set opponent pokemon EVs //
let pokemon2evs = {
    hp: 5,
    attack: 5,
    defense: 5,
    speed: 5,
    special: 5
}

// Set opponent pokemon IVs //
const pokemon2ivs = {
    hp: Math.floor(Math.random()*32),
    attack: Math.floor(Math.random()*32),
    defense: Math.floor(Math.random()*32),
    speed: Math.floor(Math.random()*32),
    special: Math.floor(Math.random()*32)
}

// Set opponent pokemon stat multiplier values //
let pokemon2stats = {
    attackMultiplierN: 2,
    attackMultiplierD: 2,
    defenseMultiplierN: 2,
    defenseMultiplierD: 2,
    speedMultiplierN: 2,
    speedMultiplierD: 2,
    specialMultiplierN: 2,
    specialMultiplierD: 2,
    evasionMultiplierN: 2,
    evasionMultiplierD: 2,
    accuracyMultiplierN: 2,
    accuracyMultiplierD: 2
}

// Function to calculate the actual HP for a pokemon //
function calculateHP (base, iv, ev, level) {
    return Math.floor(.01*(2*base + iv + Math.floor(0.25*ev))*level) + level + 10
}

// Function to calculate the actual stats for a pokemon //
function calculateStat (base, iv, ev, level) {
    return Math.floor(.01*(2*base + iv + Math.floor(0.25*ev))*level) + 5
}

let pokemon1hp, pokemon1attack, pokemon1defense, pokemon1special, pokemon1speed, pokemon2hp, pokemon2attack, pokemon2defense, pokemon2special, pokemon2speed, pokemon1attackinitial, pokemon1defenseinitial, pokemon1specialinitial, pokemon1speedinitial, pokemon2attackinitial, pokemon2defenseinitial, pokemon2specialinitial, pokemon2speedinitial, pokemon1hpcurrent, pokemon2hpcurrent, pokemon1hpinitial, pokemon2hpinitial;

// Function to set initial values for both pokemon //
function setPokemonData () {
        pokemon1hpinitial = calculateHP(pokemon1hpbase, pokemon1ivs.hp, pokemon1evs.hp, level);
        pokemon1hpcurrent = pokemon1hpinitial;
        pokemon1attack = calculateStat(pokemon1attackbase, pokemon1ivs.attack, pokemon1evs.attack, level);
        pokemon1attackinitial = pokemon1attack;
        pokemon1defense = calculateStat(pokemon1defensebase, pokemon1ivs.defense, pokemon1evs.defense, level);
        pokemon1defenseinitial = pokemon1defense;
        pokemon1special = calculateStat(pokemon1specialbase, pokemon1ivs.special, pokemon1evs.special, level);
        pokemon1specialinitial = pokemon1special;
        pokemon1speed = calculateStat(pokemon1speedbase, pokemon1ivs.speed, pokemon1evs.speed, level);
        pokemon1speedinitial = pokemon1speed;
        pokemon2hpinitial = calculateHP(pokemon2hpbase, pokemon2ivs.hp, pokemon2evs.hp, level);
        pokemon2hpcurrent = pokemon2hpinitial;
        pokemon2attack = calculateStat(pokemon2attackbase, pokemon2ivs.attack, pokemon2evs.attack, level);
        pokemon2attackinitial = pokemon2attack;
        pokemon2defense = calculateStat(pokemon2defensebase, pokemon2ivs.defense, pokemon2evs.defense, level);
        pokemon2defenseinitial = pokemon2defense;
        pokemon2special = calculateStat(pokemon2specialbase, pokemon2ivs.special, pokemon2evs.special, level);
        pokemon2specialinitial = pokemon2special;
        pokemon2speed = calculateStat(pokemon2speedbase, pokemon2ivs.speed, pokemon2evs.speed, level);
        pokemon2speedinitial = pokemon2speed;
};

// Populate initial values for each pokemon //
const textField = document.getElementById("text-field");

inputButton.addEventListener("click", function() {
        setPokemonData();
        document.getElementById('pokemon_name').textContent = pokemon1name.toUpperCase();
        document.getElementById('pokemon_level').textContent = level;
        document.getElementById('pokemon_hp_initial').textContent = pokemon1hpinitial;
        document.getElementById('pokemon_hp_current').textContent = pokemon1hpcurrent;
        document.getElementById('pokemon1move1').innerHTML = pokemon1move1.toUpperCase();
        document.getElementById('pokemon1move2').innerHTML = pokemon1move2.toUpperCase();
        document.getElementById('pokemon1move3').innerHTML = pokemon1move3.toUpperCase();
        document.getElementById('pokemon1move4').innerHTML = pokemon1move4.toUpperCase();
        document.getElementById('pokemonBack1').src = pokemon1Back;
        document.getElementById('pokemon_name_two').textContent = pokemon2name.toUpperCase();
        document.getElementById('pokemon_level_two').textContent = level;
        document.getElementById('pokemonFront2').src = pokemon2Front;
        document.getElementById('battle-field').style.visibility = 'visible';
        document.getElementById('input_button').style.visibility = 'hidden';
        textField.textContent = `Wild ${pokemon2name.toUpperCase()} appeared!`;
        setTimeout(function() {
            document.getElementById("move-selection").style.visibility = 'visible';
            textField.textContent = '';
        }, 2000);
});

// Function to return the index of a move for a specific pokemon //
function findMoveIndex(pokemonName, moveName) {
    const pokemon = pokemonChoices.find(pokemon => pokemon.id === pokemonName);
    if (pokemon) {
        const moveIndex = Object.keys(pokemon.moves).findIndex(move => pokemon.moves[move].name === moveName);
        return moveIndex !== -1 ? moveIndex + 1 : -1;
    } else {
        return -1;
    }
}

const moveButtons = document.querySelectorAll(".movebuttonselection");
const healthBarFill = document.getElementById('health-bar-fill');
const healthBarFill2 = document.getElementById('health-bar-fill-2');


function updateHealthBar(currenthp, initialhp) {
    const healthPercentage = (currenthp / initialhp) * 100;
    healthBarFill.style.width = healthPercentage + '%';
    if (healthPercentage > 50) {
        healthBarFill.style.backgroundColor = 'green';
    } else if (healthPercentage > 20) {
        healthBarFill.style.backgroundColor = '#ffe000';
    } else {
        healthBarFill.style.backgroundColor = 'red';
    }
}

function updateHealthBar2(currenthp, initialhp) {
    const healthPercentage = (currenthp / initialhp) * 100;
    healthBarFill2.style.width = healthPercentage + '%';
    if (healthPercentage > 50) {
        healthBarFill2.style.backgroundColor = 'green';
    } else if (healthPercentage > 20) {
        healthBarFill2.style.backgroundColor = '#ffe000';
    } else {
        healthBarFill2.style.backgroundColor = 'red';
    }
}

moveButtons.forEach(move => {
    move.addEventListener("click", function() {
        pokemon1attack = pokemon1attackinitial * (pokemon1stats.attackMultiplierN/pokemon1stats.attackMultiplierD);
        pokemon1defense = pokemon1defenseinitial * (pokemon1stats.defenseMultiplierN/pokemon1stats.defenseMultiplierD);
        pokemon1special = pokemon1specialinitial * (pokemon1stats.specialMultiplierN/pokemon1stats.specialMultiplierD);
        pokemon1speed = pokemon1speedinitial * (pokemon1stats.speedMultiplierN/pokemon1stats.speedMultiplierD);
        pokemon2attack = pokemon2attackinitial * (pokemon2stats.attackMultiplierN/pokemon2stats.attackMultiplierD);
        pokemon2defense = pokemon2defenseinitial * (pokemon2stats.defenseMultiplierN/pokemon2stats.defenseMultiplierD);
        pokemon2special = pokemon2specialinitial * (pokemon2stats.specialMultiplierN/pokemon2stats.specialMultiplierD);
        pokemon2speed = pokemon2speedinitial * (pokemon2stats.speedMultiplierN/pokemon2stats.speedMultiplierD);

        setTimeout(function() {
            document.getElementById("move-selection").style.visibility = 'hidden';
        }, 500);

        const selectedMoveName = moveVariables[this.id];
        const selectedPokemonName = pokemon1name;

        const moveIndex = 'move' + findMoveIndex(selectedPokemonName, selectedMoveName);

        let randForOpponent = Math.floor(Math.random() * 4)+1
        let opponentMoveIndex = 'move' + randForOpponent;
        let opponentMoveName = moveVariables2['pokemon2move' + randForOpponent];
        let opponentPokemonName = pokemon2name;

            if (pokemon1speed >= pokemon2speed) {
                setTimeout(function() {
                    textField.textContent = `${selectedPokemonName.toUpperCase()} used ${selectedMoveName.toUpperCase()}!`;
                }, 500);
                setTimeout(function() {                
                    userMove(moveIndex, pokemon1id, pokemon2id);
                }, 2000);
                setTimeout(function() {
                    if (pokemon2hpcurrent*1===0) {updateHealthBar2(pokemon2hpcurrent, pokemon2hpinitial); textField.textContent = `${opponentPokemonName.toUpperCase()} fainted!`} else {
                    setTimeout(function() {
                        updateHealthBar2(pokemon2hpcurrent, pokemon2hpinitial);
                        textField.textContent = `${opponentPokemonName.toUpperCase()} used ${opponentMoveName.toUpperCase()}!`;
                    }, 3000);
                    setTimeout(function() {
                        opponentMove(opponentMoveIndex, pokemon2id, pokemon1id);
                    }, 4000);
                    setTimeout(function() {
                        updateHealthBar(pokemon1hpcurrent, pokemon1hpinitial);
                        document.getElementById('pokemon_hp_current').innerHTML = pokemon1hpcurrent;
                        if (pokemon1hpcurrent*1===0) {textField.textContent = `${selectedPokemonName.toUpperCase()} fainted!`};
                    }, 8000);};
                },3000);
            }
            else {
                setTimeout(function() {
                    textField.textContent = `${opponentPokemonName.toUpperCase()} used ${opponentMoveName.toUpperCase()}!`;
                }, 500);
                setTimeout(function() {
                    opponentMove(opponentMoveIndex, pokemon2id, pokemon1id);
                }, 2000);
                setTimeout(function() {
                if (pokemon1hpcurrent*1===0) {updateHealthBar(pokemon1hpcurrent, pokemon1hpinitial); textField.textContent = `${selectedPokemonName.toUpperCase()} fainted!`} else {
                    setTimeout(function() {
                        updateHealthBar(pokemon1hpcurrent, pokemon1hpinitial);
                        document.getElementById('pokemon_hp_current').textContent = pokemon1hpcurrent;
                    }, 3000);
                    setTimeout(function() {
                        textField.textContent = `${selectedPokemonName.toUpperCase()} used ${selectedMoveName.toUpperCase()}!`;
                    }, 4000);
                    setTimeout(function() {
                        userMove(moveIndex, pokemon1id, pokemon2id);
                        updateHealthBar2(pokemon2hpcurrent, pokemon2hpinitial);
                        if (pokemon2hpcurrent*1===0) {textField.textContent = `${opponentPokemonName.toUpperCase()} fainted!`};
                    }, 8000);};
                }, 3000);
            }

            setTimeout(function() {
                if (pokemon1hpcurrent*1 > 0 && pokemon2hpcurrent*1 > 0) {
                textField.textContent = '';
                document.getElementById("move-selection").style.visibility = 'visible';}
                else {document.getElementById("move-selection").style.visibility = 'hidden';
                setTimeout(function() {
                    textField.textContent = `Reload page to restart!`;
                }, 5000);
                }
            }, 12000);
    });
});

function userMove (moveIndex, userPokemon, opponentPokemon){
    let randomForCritical = Math.random();
    let _critical, _stab;
    let _power = pokemonChoices[userPokemon].moves[moveIndex].power;
    if (pokemonChoices[userPokemon].type === pokemonChoices[userPokemon].moves[moveIndex].type) {_stab = 1.5} else {_stab = 1};
    let _effectiveness = typeChart[pokemonChoices[userPokemon].moves[moveIndex].type][pokemonChoices[opponentPokemon].type];
    if (randomForCritical > .0417) {_critical=1} else {_critical=2};
    let _hit = pokemonChoices[userPokemon].moves[moveIndex].accuracy * (pokemon1stats.accuracyMultiplierN/pokemon1stats.accuracyMultiplierD) * (1/(pokemon2stats.evasionMultiplierN/pokemon2stats.evasionMultiplierD))
    let _hitRand = Math.floor(Math.random()*100)+1;
    
    if (pokemonChoices[userPokemon].moves[moveIndex].category === 'status' && pokemonChoices[userPokemon].moves[moveIndex].target === 'user') {
        let impactedStatN = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierN';
        let impactedStatD = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierD';
        if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] > 1) {
        {pokemon1stats[impactedStatN] = pokemon1stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] < 1) {
        {pokemon1stats[impactedStatD] = pokemon1stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change} 
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change > 0) {
        {pokemon1stats[impactedStatN] = pokemon1stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change};
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change < 0) {
        {pokemon1stats[impactedStatD] = pokemon1stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}
        };
        if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] > 4) {
            pokemon1stats[impactedStatN] = 8; textField.textContent='Nothing happened!';
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] < .25) {
            pokemon1stats[impactedStatD] = 8; textField.textContent='Nothing happened!'
        } else{
            textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()}'s ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat.toUpperCase()} rose!`;
        };
    } else if (pokemonChoices[userPokemon].moves[moveIndex].category === 'status' && pokemonChoices[userPokemon].moves[moveIndex].target === 'opponent') {
        let impactedStatN = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierN';
        let impactedStatD = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierD';
        if (_hit<_hitRand) {textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()} missed!`} else {
        if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] > 1) {
        {pokemon2stats[impactedStatN] = pokemon2stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] < 1) {
        {pokemon2stats[impactedStatD] = pokemon2stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change} 
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change > 0) {
        {pokemon2stats[impactedStatN] = pokemon2stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change};
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change < 0) {
        {pokemon2stats[impactedStatD] = pokemon2stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change};
        };
        if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] > 4) {
            pokemon2stats[impactedStatN] = 8; textField.textContent='Nothing happened!';
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] < .25) {
            pokemon2stats[impactedStatD] = 8; textField.textContent='Nothing happened!';
        } else {
            textField.textContent=`${pokemonChoices[opponentPokemon].id.toUpperCase()}'s ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat.toUpperCase()} fell!`;
        }
        }; 
    } else if (pokemonChoices[userPokemon].moves[moveIndex].category === 'physical') {
        let _attack = pokemonChoices[userPokemon].stats.attack * (pokemon1stats.attackMultiplierN/pokemon1stats.attackMultiplierD);
        let _defense = pokemonChoices[opponentPokemon].stats.defense * (pokemon2stats.defenseMultiplierN/pokemon2stats.defenseMultiplierD);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        if (_hit<_hitRand) {
            textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()} missed!`
        } else {
            pokemon2hpcurrent = Math.max(pokemon2hpcurrent - _damage, 0);
            if (_critical === 2) {textField.textContent='Critical hit!'};
            if (_effectiveness > 1) {textField.textContent=`It's super effective!`};
            if (_effectiveness < 1) {textField.textContent=`It's not very effective!`};
        };

    } else if(pokemonChoices[userPokemon].moves[moveIndex].category === 'special') {
        let _attack = pokemonChoices[userPokemon].stats.special * (pokemon1stats.specialMultiplierN/pokemon1stats.specialMultiplierD);
        let _defense = pokemonChoices[opponentPokemon].stats.special * (pokemon2stats.specialMultiplierN/pokemon2stats.specialMultiplierD);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        if (_hit<_hitRand) {
            textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()} missed!`
        } else {
            pokemon2hpcurrent = Math.max(pokemon2hpcurrent - _damage, 0);
            if (_critical === 2) {textField.textContent='Critical hit!'};
            if (_effectiveness > 1) {textField.textContent=`It's super effective!`};
            if (_effectiveness < 1) {textField.textContent=`It's not very effective!`};
        };
    } 
}

function opponentMove (moveIndex, userPokemon, opponentPokemon){
    let randomForCritical = Math.random();
    let _critical, _stab;
    let _power = pokemonChoices[userPokemon].moves[moveIndex].power;
    if (pokemonChoices[userPokemon].type === pokemonChoices[userPokemon].moves[moveIndex].type) {_stab = 1.5} else {_stab = 1};
    let _effectiveness = typeChart[pokemonChoices[userPokemon].moves[moveIndex].type][pokemonChoices[opponentPokemon].type];
    if (randomForCritical > .0417) {_critical=1} else {_critical=2};
    let _hit = pokemonChoices[userPokemon].moves[moveIndex].accuracy * (pokemon2stats.accuracyMultiplierN/pokemon2stats.accuracyMultiplierD) * (1/(pokemon1stats.evasionMultiplierN/pokemon1stats.evasionMultiplierD))
    let _hitRand = Math.floor(Math.random()*100)+1;
    
    if (pokemonChoices[userPokemon].moves[moveIndex].category === 'status' && pokemonChoices[userPokemon].moves[moveIndex].target === 'user') {
        let impactedStatN = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierN';
        let impactedStatD = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierD';
        if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] > 1) {
        {pokemon2stats[impactedStatN] = pokemon2stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] < 1) {
        {pokemon2stats[impactedStatD] = pokemon2stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change} 
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change > 0) {
        {pokemon2stats[impactedStatN] = pokemon2stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change};
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change < 0) {
        {pokemon2stats[impactedStatD] = pokemon2stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}
        };
        if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] > 4) {
            pokemon2stats[impactedStatN] = 8; textField.textContent='Nothing happened!';
        } else if (pokemon2stats[impactedStatN]/pokemon2stats[impactedStatD] < .25) {
            pokemon2stats[impactedStatD] = 8; textField.textContent='Nothing happened!';
        } else{
            textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()}'s ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat.toUpperCase()} rose!`;
        };

    } else if (pokemonChoices[userPokemon].moves[moveIndex].category === 'status' && pokemonChoices[userPokemon].moves[moveIndex].target === 'opponent') {
        let impactedStatN = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierN';
        let impactedStatD = pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat + 'MultiplierD';
        if (_hit<_hitRand) {textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()} missed!`} else {
        if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] > 1) {
        {pokemon1stats[impactedStatN] = pokemon1stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] < 1) {
        {pokemon1stats[impactedStatD] = pokemon1stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change} 
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change > 0) {
        {pokemon1stats[impactedStatN] = pokemon1stats[impactedStatN] + pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change};
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] === 1 && pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change < 0) {
        {pokemon1stats[impactedStatD] = pokemon1stats[impactedStatD] - pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change};
        };
        if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] > 4) {
            pokemon1stats[impactedStatN] = 8; textField.textContent='Nothing happened!';
        } else if (pokemon1stats[impactedStatN]/pokemon1stats[impactedStatD] < .25) {
            pokemon1stats[impactedStatD] = 8; textField.textContent='Nothing happened!';
        } else {
            textField.textContent=`${pokemonChoices[opponentPokemon].id.toUpperCase()}'s ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat.toUpperCase()} fell!`;
        }
        } 
    } else if (pokemonChoices[userPokemon].moves[moveIndex].category === 'physical') {
        let _attack = pokemonChoices[userPokemon].stats.attack * (pokemon2stats.attackMultiplierN/pokemon2stats.attackMultiplierD);
        let _defense = pokemonChoices[opponentPokemon].stats.defense * (pokemon1stats.defenseMultiplierN/pokemon1stats.defenseMultiplierD);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        if (_hit<_hitRand) {
            textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()} missed!`
        } else {
            pokemon1hpcurrent = Math.max(pokemon1hpcurrent - _damage, 0);
            if (_critical === 2) {textField.textContent='Critical hit!'};
            if (_effectiveness > 1) {textField.textContent=`It's super effective!`};
            if (_effectiveness < 1) {textField.textContent=`It's not very effective!`};
        };

    } else if(pokemonChoices[userPokemon].moves[moveIndex].category === 'special') {
        let _attack = pokemonChoices[userPokemon].stats.special * (pokemon2stats.specialMultiplierN/pokemon2stats.specialMultiplierD);
        let _defense = pokemonChoices[opponentPokemon].stats.special * (pokemon1stats.specialMultiplierN/pokemon1stats.specialMultiplierD);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        if (_hit<_hitRand) {
            textField.textContent=`${pokemonChoices[userPokemon].id.toUpperCase()} missed!`
        } else {
            pokemon1hpcurrent = Math.max(pokemon1hpcurrent - _damage, 0);
            if (_critical === 2) {textField.textContent='Critical hit!'};
            if (_effectiveness > 1) {textField.textContent=`It's super effective!`};
            if (_effectiveness < 1) {textField.textContent=`It's not very effective!`};
        };
    } 
}










