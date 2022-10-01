const GameOptions = ['Rock', 'Paper', 'Scissors'];

//setting the players choice functions
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    return GameOptions[i];
};

//transforming the values from funtions to variables
var ComputerSelection = "";
// var PlayerSelection = getPlayerChoice();
var PlayerSelection = "";

//setting win varables
var ComputerWins = 0;
var PlayerWins = 0;

function playerwins() {
    let poop = "";
    for (let i = PlayerWins; i > 0; i--) {
        poop = poop + "X ";
    };
    return poop;
};
function computerwins() {
    let poop = "";
    for (let i = ComputerWins; i > 0; i--) {
        poop = poop + "X ";
    };
    return poop;
};

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
            ComputerWins++;
            computerwins()
            CheckWins()
            return ComputerWins;
        } else {
            document.getElementById("change").innerHTML = "The CPU chose Scissors so you won!!!";
            PlayerWins++;
            playerwins();
            CheckWins()
            return PlayerWins; 
        };
    } else if (human === "paper") {
        if (cpu === "scissors") {
            document.getElementById("change").innerHTML = "The CPU chose Scissors so you lost!!!";
            ComputerWins++;
            computerwins()
            CheckWins()
            return ComputerWins;
        } else {
            document.getElementById("change").innerHTML = "The CPU chose Rock so you won!!!";
            PlayerWins++;
            playerwins();
            CheckWins()
            return PlayerWins;
        };
    } else if (human === "scissors") {
        if (cpu === "rock") {
            document.getElementById("change").innerHTML = "The CPU chose Rock so you lost!!!";
            ComputerWins++;
            computerwins()
            CheckWins()
            return ComputerWins;
        } else {
            document.getElementById("change").innerHTML = "The CPU chose Paper so you won!!!";
            PlayerWins++;
            playerwins();
            CheckWins()
            return PlayerWins;
        };
    };
    
};


function rock() {
    PlayerSelection = "Rock"
    ComputerSelection = getComputerChoice();
    play(ComputerSelection, PlayerSelection);
};
function paper() {
    PlayerSelection = "Paper"
    ComputerSelection = getComputerChoice();
    play(ComputerSelection, PlayerSelection);
};
function scissors() {
    PlayerSelection = "Scissors"
    ComputerSelection = getComputerChoice();
    play(ComputerSelection, PlayerSelection);
};



function CheckWins() {
        document.getElementById("p").innerHTML = "Player: " + playerwins();
        document.getElementById("c").innerHTML = "CPU: " + computerwins();
    if (ComputerWins === 5 || PlayerWins === 5) {
        if (ComputerWins === 5) {
            document.getElementById("loss").style.opacity = 1;
            document.getElementById("loss").style.zIndex = 1000;
        } else {
            document.getElementById("win").style.opacity = 1;
            document.getElementById("win").style.zIndex = 1000;
        };
    };
};
