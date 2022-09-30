const GameOptions = ['Rock', 'Paper', 'Scissors'];

//setting the players choice functions
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    return i;
};
function getPlayerChoice() {

};

//transforming the values from funtions to variables
var ComputerSelection = getComputerChoice();
// var PlayerSelection = getPlayerChoice();

var PlayerSelection = getPlayerChoice();

//play function sees what the players chose and sees who wins
function play(cpu, human) {
    cpu = cpu.toLowerCase();
    human = human.toLowerCase();
    if (cpu === human) {
        console.log("You both chose " + ComputerSelection + " , try again!");
    } else if (human === "rock") {
        if (cpu === "paper") {
            console.log("The CPU chose Paper so you lost!!!");
        } else {
            console.log("The CPU chose Scissors so you won!!!");
        };
    } else if (human === "paper") {
        if (cpu === "scissors") {
            console.log("The CPU chose Scissors so you lost!!!");
        } else {
            console.log("The CPU chose Rock so you won!!!");
        };
    } else if (human === "scissors") {
        if (cpu === "rock") {
            console.log("The CPU chose Rock so you lost!!!");
        } else {
            console.log("The CPU chose Paper so you won!!!");
        };
    }
};