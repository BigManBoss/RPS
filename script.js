console.log("Hello World!");
const GameOptions = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    return i;
};

console.log(GameOptions[getComputerChoice()]);