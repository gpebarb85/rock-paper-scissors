//make a function for computerPlay
const choiceArray = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)]
    return computerChoice;
} 

//write a function to compare player vs comp and return winner
function playRound(player, computer) {
    if (player === null || player === undefined) {
        return 'Forfeit! Computer Wins!';
    } else if ((player.toLowerCase() === 'rock' && computer === 'rock') || 
    (player.toLowerCase() === 'paper' && computer=== 'paper') || 
    (player.toLowerCase() === 'scissors' && computer === 'scissors')) {
        return 'It\'s a Tie!';
    } else if ((player.toLowerCase() === 'rock' && computer === 'paper') ||
     (player.toLowerCase() === 'paper' && computer === 'scissors') ||
     (player.toLowerCase() === 'scissors' && computer === 'rock')) {
         return 'You Lose!';
     } else if ((player.toLowerCase() === 'rock' && computer === 'scissors') ||
     (player.toLowerCase() === 'paper' && computer === 'rock') ||
     (player.toLowerCase() === 'scissors' && computer === 'paper')) {
         return 'You Win!'
     } else {
         return 'You must choose Rock, Paper, or Scissors!'
     };
    
}
//console.log(playRound());
    
//write a function for game with 5 rounds
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let rounds = 5; rounds > 0 ; rounds--) {
        let computerSelection = computerPlay(); 
        let playerSelection = prompt('Are you ready to play?! Enter Rock, Paper, or Scissors:');
        let game = playRound(playerSelection, computerSelection);
        if (game === 'You Win!') {
            playerScore += 1;
            alert(game);
        } else if (game === 'You Lose!' || game === 'Forfeit! Computer Wins!') {
            computerScore += 1;
            alert(game);
        } else {
            ++rounds;
            alert(game);
        };
     
    };
}
console.log(game());

//write function to compare player/comp scores and declare winner
let winner = (player, computer) => {
    if (player < computer) {
        return 'After 5 rounds, the computer has bested you! Best of luck next time!';
    } else if (player > computer) {
        return 'After 5 rounds, you have bested the computer! Congratulations!';
    } else {
        return 'After 5 rounds, the result is a stalemate! Keep your wits about you and try again!';
    };
};
alert(winner(playerScore, computerScore));