function computerPlay() {
    if (Math.floor(Math.random() * 3) === 2) {
        return('rock');
    } else if (Math.floor(Math.random() * 3) === 1) {
        return('paper');
    } else {
        return('scissors')
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let finalScore = 0;

    for (let i = 0; i < 5; i++) {
     
    
        function playRound(playerSelection, computerSelection) {
           
            if (playerSelection === computerSelection){
                console.log('It is a tie');
                computerScore++
                playerScore++
                finalScore++
            } else if (
                (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
                (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') ||
                (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')
            ){
                 console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
                 playerScore++
                 finalScore++
                
            } else {
               console.log('You loose! ' + computerSelection + ' beats ' + playerSelection);
               computerScore++
               finalScore++
            }
            console.log('Player Score: ' + playerScore);
            console.log('Computer Score: ' + computerScore); 
          }
        
          const playerSelection = prompt('Rock, Paper, Scissors?');
          const computerSelection = computerPlay();
         /* console.log(playRound(playerSelection, computerSelection)); */
          
          

     }
     if ((finalScore == 5) && (playerScore > computerScore)){
        console.log('You win it all!!!');
    } else if ((finalScore == 5) && (playerScore < computerScore)){
        console.log('You lost it all!!!');
    } else if ((finalScore == 5) && (playerScore = computerScore)){
        console.log('It all ends in a tie!!!');
    }

}
game();