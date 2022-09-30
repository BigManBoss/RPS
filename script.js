const GameOptions = ['Rock', 'Paper', 'Scissors'];

//setting the players choice functions
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    return GameOptions[i];
};

//transforming the values from funtions to variables
var ComputerSelection = getComputerChoice();
// var PlayerSelection = getPlayerChoice();

var PlayerSelection = "";

//play function sees what the players chose and sees who wins
//I loweredcased everything (I didnt need to)
function play(cpu, human) {
    cpu = cpu.toLowerCase();
    human = human.toLowerCase();
    if (cpu === human) {
        document.getElementById("change").innerHTML = "You both chose " + ComputerSelection + ", try again!";
    } else if (human === "rock") {
        if (cpu === "paper") {
            document.getElementById("change").innerHTML = "The CPU chose Paper so you lost!!!";
        } else {
            document.getElementById("change").innerHTML = "The CPU chose Scissors so you won!!!";
        };
    } else if (human === "paper") {
        if (cpu === "scissors") {
            document.getElementById("change").innerHTML = "The CPU chose Scissors so you lost!!!";
        } else {
            document.getElementById("change").innerHTML = "The CPU chose Rock so you won!!!";
        };
    } else if (human === "scissors") {
        if (cpu === "rock") {
            document.getElementById("change").innerHTML = "The CPU chose Rock so you lost!!!";
        } else {
            document.getElementById("change").innerHTML = "The CPU chose Paper so you won!!!";
        };
    }
};


function rock() {
    PlayerSelection = "Rock"
    play(ComputerSelection, PlayerSelection);
}
function paper() {
    PlayerSelection = "Paper"
    play(ComputerSelection, PlayerSelection);
}
function scissors() {
    PlayerSelection = "Scissors"
    play(ComputerSelection, PlayerSelection);
}