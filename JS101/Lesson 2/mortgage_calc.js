const readline = require('readline-sync');
let running = true;

function insertChar(tempString) {
    return `=> ${tempString}`;
}

function validLoaninput(num) {
    console.log(num);
    console.log(typeof(num));
    if (typeof(num) === 'number') {
        return true;
    } else {
        return false;
    }
}

function invalidNumber(number) {
    return number.trimStart() === '' || Number.isNaN(Number(number));
}

function promptUserForLoan() {
    console.log(insertChar('Please enter your desired loan amount:'));
    let tempLoanAmount = readline.question();
    while (invalidNumber(tempLoanAmount)) {
        console.log(insertChar('Invalid loan amount'));
        console.log(insertChar('Please enter your desired loan amount:'));
        tempLoanAmount = readline.question();
    }
    return tempLoanAmount;
}

function promptUserForAPR() {
    console.log(insertChar('Please enter your desired APR (EX: %5 = 5):'));
    let tempAPR = readline.question();
    while (invalidNumber(tempAPR)) {
        console.log(insertChar('Invalid APR'));
        console.log(insertChar('Please enter your desired APR (EX: %5 = 5):'));
        tempAPR = readline.question();
    }
    return tempAPR;
}

function promptUserForLoanDuration() {
    console.log(insertChar('Please enter your desired loan duration in months:'));
    let tempDuration = readline.question();
    while (invalidNumber(tempDuration)) {
        console.log(insertChar('Invalid loan duration'));
        console.log(insertChar('Please enter your desired loan duration in months:'));
        tempDuration = readline.question();
    }
    return tempDuration;
}

function calcMonthlyPayment(amount, apr, duration) {
    let APRcalced = apr / 100 / 12;
    return amount * (APRcalced / (1 - Math.pow((1 + APRcalced), (-duration))));
}

//Greet
console.log(insertChar('Welcome to my Morrgage Calculator!'));
while (running) {
    console.log(insertChar('Lets set up your loan'));
    //prompt for info
    //check for valid loan amount
    let loanAmount = promptUserForLoan();
    let loanAPR = promptUserForAPR();
    let loanDuration = promptUserForLoanDuration();
    //calc monthly intrest
    let monthPayment = calcMonthlyPayment(Number(loanAmount), Number(loanAPR), Number(loanDuration));
    console.log(insertChar(`Your monthly payment will be: $${monthPayment.toFixed(2)}`));
    //Check if you want to calculate another loan
    console.log(insertChar('Would you like to start another loan? (Y/N)'));
    running = readline.question();
    if (running === 'N') {
        running = '';
    }
}