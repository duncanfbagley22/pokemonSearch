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
                change: -1,
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
            accuracy: null,
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
                stat: 'evasion'
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
pokemon1name = 'machop';
pokemon2name = 'squirtle';

let pokemon1id;
let pokemon2id;

if (pokemon1name === 'machop') {pokemon1id = 0} else if (pokemon1name === 'squirtle') {pokemon1id = 1} else if (pokemon1name === 'diglett') {pokemon1id = 2} else if (pokemon1name === 'dratini') {pokemon1id = 3};
if (pokemon2name === 'machop') {pokemon2id = 0} else if (pokemon2name === 'squirtle') {pokemon2id = 1} else if (pokemon2name === 'diglett') {pokemon2id = 2} else if (pokemon2name === 'dratini') {pokemon2id = 3};

// Set initial pokemon stat bases //
const level = 15;
const pokemon1hpbase = pokemonChoices[pokemon1id].stats.hp;
const pokemon1attackbase = pokemonChoices[pokemon1id].stats.attack;
const pokemon1defensebase = pokemonChoices[pokemon1id].stats.defense;
const pokemon1speedbase = pokemonChoices[pokemon1id].stats.speed;
const pokemon1specialbase = pokemonChoices[pokemon1id].stats.special;
const pokemon1Back = pokemonChoices[pokemon1id].back_sprite;
const pokemon1Front = pokemonChoices[pokemon1id].front_sprite;
const pokemon1move1 = pokemonChoices[pokemon1id].moves.move1.name;
const pokemon1move2 = pokemonChoices[pokemon1id].moves.move2.name;
const pokemon1move3 = pokemonChoices[pokemon1id].moves.move3.name;
const pokemon1move4 = pokemonChoices[pokemon1id].moves.move4.name;

let pokemon1evs = {
    hp: 10,
    attack: 10,
    defense: 10,
    speed: 10,
    special: 10
}

let pokemon1stats = {
    attackStat: 2,
    defenseStat: 2,
    speedStat: 2,
    specialStat: 2,
    evasionStat: 3,
    accuracyStat: 3
}

const pokemon1ivs = {
    hp: Math.floor(Math.random()*32),
    attack: Math.floor(Math.random()*32),
    defense: Math.floor(Math.random()*32),
    speed: Math.floor(Math.random()*32),
    special: Math.floor(Math.random()*32)
}

const pokemon2hpbase = pokemonChoices[pokemon2id].stats.hp;
const pokemon2attackbase = pokemonChoices[pokemon2id].stats.attack;
const pokemon2defensebase = pokemonChoices[pokemon2id].stats.defense;
const pokemon2speedbase = pokemonChoices[pokemon2id].stats.speed;
const pokemon2specialbase = pokemonChoices[pokemon2id].stats.special;
const pokemon2Back = pokemonChoices[pokemon2id].back_sprite;
const pokemon2Front = pokemonChoices[pokemon2id].front_sprite;
const pokemon2move1 = pokemonChoices[pokemon2id].moves.move1.name;
const pokemon2move2 = pokemonChoices[pokemon2id].moves.move2.name;
const pokemon2move3 = pokemonChoices[pokemon2id].moves.move3.name;
const pokemon2move4 = pokemonChoices[pokemon2id].moves.move4.name;

let pokemon2evs = {
    hp: 10,
    attack: 10,
    defense: 10,
    speed: 10,
    special: 10
}

let pokemon2stats = {
    attackStat: 2,
    defenseStat: 2,
    speedStat: 2,
    specialStat: 2,
    evasionStat: 3,
    accuracyStat: 3
}

const pokemon2ivs = {
    hp: Math.floor(Math.random()*32),
    attack: Math.floor(Math.random()*32),
    defense: Math.floor(Math.random()*32),
    speed: Math.floor(Math.random()*32),
    special: Math.floor(Math.random()*32)
}


function calculateHP (base, iv, ev, level) {
    return Math.floor(.01*(2*base + iv + Math.floor(0.25*ev))*level) + level + 10
}

function calculateStat (base, iv, ev, level) {
    return Math.floor(.01*(2*base + iv + Math.floor(0.25*ev))*level) + 5
}

let pokemon1hp, pokemon1attack, pokemon1defense, pokemon1special, pokemon1speed;
let pokemon2hp, pokemon2attack, pokemon2defense, pokemon2special, pokemon2speed;

function getPokemonData () {
        pokemon1hp = calculateHP(pokemon1hpbase, pokemon1ivs.hp, pokemon1evs.hp, level);
        pokemon1attack = calculateStat(pokemon1attackbase, pokemon1ivs.attack, pokemon1evs.attack, level);
        pokemon1defense = calculateStat(pokemon1defensebase, pokemon1ivs.defense, pokemon1evs.defense, level);
        pokemon1special = calculateStat(pokemon1specialbase, pokemon1ivs.special, pokemon1evs.special, level);
        pokemon1speed = calculateStat(pokemon1speedbase, pokemon1ivs.speed, pokemon1evs.speed, level);
        pokemon2hp = calculateHP(pokemon2hpbase, pokemon2ivs.hp, pokemon2evs.hp, level);
        pokemon2attack = calculateStat(pokemon2attackbase, pokemon2ivs.attack, pokemon2evs.attack, level);
        pokemon2defense = calculateStat(pokemon2defensebase, pokemon2ivs.defense, pokemon2evs.defense, level);
        pokemon2special = calculateStat(pokemon2specialbase, pokemon2ivs.special, pokemon2evs.special, level);
        pokemon2speed = calculateStat(pokemon2speedbase, pokemon2ivs.speed, pokemon2evs.speed, level);
};

const inputButton = document.getElementById('input_button');

inputButton.addEventListener("click", function() {
    getPokemonData();
    document.getElementById('pokemon_name').textContent = pokemon1name;
    document.getElementById('pokemon_level').textContent = level;
    document.getElementById('pokemon_hp').textContent = pokemon1hp;
    document.getElementById('pokemon_attack').textContent = pokemon1stats.attackStat;
    document.getElementById('pokemon_defense').textContent = pokemon1stats.defenseStat;
    document.getElementById('pokemon_special').textContent = pokemon1stats.specialStat;
    document.getElementById('pokemon_speed').textContent = pokemon1stats.speedStat;
    document.getElementById('pokemon_accuracy').textContent = pokemon1stats.accuracyStat;
    document.getElementById('pokemon_evasion').textContent = pokemon1stats.evasionStat;
    document.getElementById('pokemon1move1').innerHTML = pokemon1move1;
    document.getElementById('pokemon1move2').innerHTML = pokemon1move2;
    document.getElementById('pokemon1move3').innerHTML = pokemon1move3;
    document.getElementById('pokemon1move4').innerHTML = pokemon1move4;
    document.getElementById('pokemonBack1').src = pokemon1Back;
    document.getElementById('pokemon_name_two').textContent = pokemon2name;
    document.getElementById('pokemon_level_two').textContent = level;
    document.getElementById('pokemon_hp_two').textContent = pokemon2hp;
    document.getElementById('pokemon_attack_two').textContent = pokemon2stats.attackStat;
    document.getElementById('pokemon_defense_two').textContent = pokemon2stats.defenseStat;
    document.getElementById('pokemon_special_two').textContent = pokemon2stats.specialStat;
    document.getElementById('pokemon_speed_two').textContent = pokemon2stats.speedStat;
    document.getElementById('pokemon_accuracy_two').textContent = pokemon2stats.accuracyStat;
    document.getElementById('pokemon_evasion_two').textContent = pokemon2stats.evasionStat;
    document.getElementById('pokemonFront2').src = pokemon2Front;
    document.getElementById('pokemon2move1').innerHTML = pokemon2move1;
    document.getElementById('pokemon2move2').innerHTML = pokemon2move2;
    document.getElementById('pokemon2move3').innerHTML = pokemon2move3;
    document.getElementById('pokemon2move4').innerHTML = pokemon2move4;
});

const moveButtons = document.querySelectorAll(".movebutton")

const moveVariables = {
    "pokemon1move1": pokemon1move1,
    "pokemon1move2": pokemon1move2,
    "pokemon1move3": pokemon1move3,
    "pokemon1move4": pokemon1move4,
    "pokemon2move1": pokemon2move1,
    "pokemon2move2": pokemon2move2,
    "pokemon2move3": pokemon2move3,
    "pokemon2move4": pokemon2move4,
    "pokemon1name": pokemon1name,
    "pokemon2name": pokemon2name
};

function getPokemonName(moveVariableName) {
    const parts = moveVariableName.split("move");
    const pokemonNameVariable = parts[0] + "name";
    return pokemonNameVariable;
}

moveButtons.forEach(move => {
    move.addEventListener("click", function() {
        const selectedMoveName = moveVariables[this.id];
        const selectedPokemonName = moveVariables[getPokemonName(this.id)];
        const order = this.id.charAt(7);
        let pokemonIndex;
        if (selectedPokemonName === 'machop') {pokemonIndex = 0} else if (selectedPokemonName === 'squirtle') {pokemonIndex = 1} else if (selectedPokemonName === 'diglett') {pokemonIndex = 2} else if (selectedPokemonName === 'dratini') {pokemonIndex = 3};
        const moveIndex = 'move' + findMoveIndex(selectedPokemonName, selectedMoveName);
        alert (`${selectedPokemonName} used ${selectedMoveName}!, and this is pokemon ${order} and has an index of ${pokemonIndex}. The move is ${moveIndex}`);
        if (order === '1') {userMove(moveIndex, pokemon1id, pokemon2id)} else {opponentMove(moveIndex, pokemon2id, pokemon1id)};
    });
});

function userMove (moveIndex, userPokemon, opponentPokemon){
    let randomForCritical = Math.random();
    let _critical, _stab;
    let _power = pokemonChoices[userPokemon].moves[moveIndex].power;
    if (pokemonChoices[userPokemon].type === pokemonChoices[userPokemon].moves[moveIndex].type) {_stab = 1.5} else {_stab = 1};
    let _effectiveness = typeChart[pokemonChoices[userPokemon].moves[moveIndex].type][pokemonChoices[opponentPokemon].type];
    if (randomForCritical > .0417) {_critical=1} else {_critical=2};
    if (pokemonChoices[userPokemon].moves[moveIndex].category === 'status' && pokemonChoices[userPokemon].moves[moveIndex].target === 'user') {
        alert(`this would change the user's ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat} by ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}`)

    } else if (pokemonChoices[userPokemon].moves[moveIndex].category === 'status' && pokemonChoices[userPokemon].moves[moveIndex].target === 'opponent') {
        alert(`this would change the opponent's ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat} by ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}`)
    } else if (pokemonChoices[userPokemon].moves[moveIndex].category === 'physical') {
        let _attack = pokemonChoices[userPokemon].stats.attack * pokemon1stats.attackStat;
        let _defense = pokemonChoices[opponentPokemon].stats.defense * pokemon1stats.defenseStat;
        alert(`physical move with a power of ${_power}, attack stat is ${_attack}, defense stat is ${_defense}, effectiveness is ${_effectiveness}, stab is ${_stab} and critical is ${_critical}`);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        pokemon2hp = Math.max(pokemon2hp - _damage, 0);
        alert (`damage would be ${_damage} and the opponent's hp would now be ${pokemon2hp}`)
    } else if(pokemonChoices[userPokemon].moves[moveIndex].category === 'special') {
        let _attack = pokemonChoices[userPokemon].stats.special * pokemon1stats.specialStat;
        let _defense = pokemonChoices[opponentPokemon].stats.special * pokemon1stats.specialStat;
        alert(`special move with a power of ${_power}, attack stat is ${_attack}, defense stat is ${_defense}, effectiveness is ${_effectiveness}, stab is ${_stab} and critical is ${_critical}`);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        pokemon2hp = Math.max(pokemon2hp - _damage, 0);
        alert (`damage would be ${_damage} and the opponent's hp would now be ${pokemon2hp}`)
    } 
}

function opponentMove (moveIndex, opponentPokemon, userPokemon){
    let randomForCritical = Math.random();
    let _critical, _stab;
    let _power = pokemonChoices[opponentPokemon].moves[moveIndex].power;
    if (pokemonChoices[opponentPokemon].type === pokemonChoices[opponentPokemon].moves[moveIndex].type) {_stab = 1.5} else {_stab = 1};
    let _effectiveness = typeChart[pokemonChoices[opponentPokemon].moves[moveIndex].type][pokemonChoices[userPokemon].type];
    if (randomForCritical > .0417) {_critical=1} else {_critical=2};
    if (pokemonChoices[opponentPokemon].moves[moveIndex].category === 'status' && pokemonChoices[opponentPokemon].moves[moveIndex].target === 'user') {
        alert(`this would change the user's ${pokemonChoices[opponentPokemon].moves[moveIndex].stat_changes.stat} by ${pokemonChoices[opponentPokemon].moves[moveIndex].stat_changes.change}`)
    } else if (pokemonChoices[opponentPokemon].moves[moveIndex].category === 'status' && pokemonChoices[opponentPokemon].moves[moveIndex].target === 'opponent') {
        alert(`this would change the opponent's ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.stat} by ${pokemonChoices[userPokemon].moves[moveIndex].stat_changes.change}`)
    } else if (pokemonChoices[opponentPokemon].moves[moveIndex].category === 'physical') {
        let _attack = pokemonChoices[opponentPokemon].stats.attack * pokemon2stats.attackStat;
        let _defense = pokemonChoices[userPokemon].stats.defense * pokemon2stats.defenseStat;
        alert(`physical move with a power of ${_power}, attack stat is ${_attack}, defense stat is ${_defense}, effectiveness is ${_effectiveness}, stab is ${_stab} and critical is ${_critical}`);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        pokemon1hp = Math.max(pokemon1hp - _damage, 0);
        alert (`damage would be ${_damage} and the opponent's hp would now be ${pokemon1hp}`)
    } else if(pokemonChoices[opponentPokemon].moves[moveIndex].category === 'special') {
        let _attack = pokemonChoices[opponentPokemon].stats.special * pokemon2stats.specialStat;
        let _defense = pokemonChoices[userPokemon].stats.special * pokemon2stats.specialStat;
        alert(`special move with a power of ${_power}, attack stat is ${_attack}, defense stat is ${_defense}, effectiveness is ${_effectiveness}, stab is ${_stab} and critical is ${_critical}`);
        let _damage = (((((2*level*_critical)/5+2)*_power*(_attack/_defense))/50)+2)*_stab*_effectiveness;
        _damage = Math.round(_damage);
        pokemon1hp = Math.max(pokemon1hp - _damage, 0);
        alert (`damage would be ${_damage} and the opponent's hp would now be ${pokemon1hp}`)
    } 
}

function findMoveIndex(pokemonName, moveName) {
    const pokemon = pokemonChoices.find(pokemon => pokemon.id === pokemonName);
    if (pokemon) {
        const moveIndex = Object.keys(pokemon.moves).findIndex(move => pokemon.moves[move].name === moveName);
        return moveIndex !== -1 ? moveIndex + 1 : -1;
    } else {
        return -1;
    }
}







