const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'sciccors'];

let stillPlaying = true;

function prompt(msg) {
    console.log(`=> ${msg}`);
}

function computeWinner(compsChoice, userChoice) {
    switch (compsChoice) {
        case 'rock':
            if (userChoice === 'paper') {
                return `User wins with ${userChoice} over ${compsChoice}`
            } else if (userChoice === 'sciccors') {
                return `User loses with ${userChoice} under ${compsChoice}`
            } else {
                return `Tied with ${userChoice} and ${compsChoice}`
            }
            break;
        case 'paper':
            if (userChoice === 'sciccors') {
                return `User wins with ${userChoice} over ${compsChoice}`
            } else if (userChoice === 'rock') {
                return `User loses with ${userChoice} under ${compsChoice}`
            } else {
                return `Tied with ${userChoice} and ${compsChoice}`
            }
            break;
        case 'sciccors':
            if (userChoice === 'rock') {
                return `User wins with ${userChoice} over ${compsChoice}`
            } else if (userChoice === 'paper') {
                return `User loses with ${userChoice} under ${compsChoice}`
            } else {
                return `Tied with ${userChoice} and ${compsChoice}`
            }
            break;
        default:
            break;
    }
}

function compsChoice() {
    return VALID_CHOICES[Math.floor((Math.random() * VALID_CHOICES.length))];
}

prompt('Welcome to RPS\n Please pick a valid choice of rock paper or sciccors');
while (stillPlaying) {
    userChoice = readline.question();
    while (!VALID_CHOICES.includes(userChoice)) {
        prompt('Not a valid choice. Please choose rock paper or sciccors');
        userChoice = readline.question();
    }
    let tempCompsChoice = compsChoice();
    prompt(`The computer threw ${tempCompsChoice}`)

    prompt(computeWinner(tempCompsChoice, userChoice));

    prompt('Would you like to play again? (Y or Enter to quit)');
    stillPlaying = readline.question();
}