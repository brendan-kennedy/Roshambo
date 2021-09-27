const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

class Move{ 
    constructor(name, beats){ 
        this.name = name 
        this.beats = beats
    }
}

class Rock extends Move{ 
    constructor(){
    super ('rock','scissors')} 
}

class Paper extends Move{ 
    constructor(){
        super ('paper','rock')}    
}

class Scissors extends Move{ 
    constructor(){
        super ('scissors','paper')}    
}

function getRandomMove() { 
    let computerMove = {}
    var number = Math.floor(Math.random() * 3)
    if (number === 0){ 
        return new Rock()
    }else if (number === 1 ){ 
        return new Paper()
    }else { 
        return new Scissors()
    }

    return null
}

function playGame (playerMove, computerMove) { 
    if (playerMove.beats === computerMove.name ){ 
       return 'Player wins! '
   }else if( playerMove.name === computerMove.name){ 
       return 'Draw! '
   }else{ 
       return 'Player loses!'
   }
}

// Start of gameplay logic

let playerMove = {}

if (argv.move === "rock") {
    playerMove = new Rock()
} else if (argv.move === "paper") {
    playerMove = new Paper()
} else if (argv.move === "scissors") {
    playerMove = new Scissors()
}

let computerMove = getRandomMove()

let result = playGame(playerMove, computerMove)

console.log("Playing a game of Roshambo against the computer.")
console.log(`Player throws ${playerMove.name}`)
console.log(`Computer throws ${computerMove.name}`)
console.log(result)




