function computerPlay (choice) {
    return Math.random ();
}

/*function computerPlay() {
    if (Math.floor(Math.random() * 3) === 2) {
        return('Rock');
    } else if (Math.floor(Math.random() * 3) === 1) {
        return('Paper');
    } else {
        return('Sissors')
    }
}
*/

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

    /*if ((playerScore >= 3) && (computerScore < 3)){
        console.log('You win it all');
    } else if ((computerScore >= 3) && (playerScore < 3)){
        console.log('You lost it all');
    }
    */


    for (let i = 0; i < 5; i++) {
     
    
        function playRound(playerSelection, computerSelection) {

           
        
            if (playerSelection === computerSelection){
                console.log('It is a tie');
                computerScore++
                playerScore++
            } else if (
                (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
                (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') ||
                (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')
            ){
                 console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
                 playerScore++
                
            } else {
               console.log('You loose! ' + computerSelection + ' beats ' + playerSelection);
               computerScore++
            }
            console.log('Player Score: ' + playerScore);
            console.log('Computer Score: ' + computerScore);
              
          }

          if ((i == 4) && (playerScore > computerScore)){
            console.log('You win it all');
        } else if ((i == 4) && (playerScore < computerScore)){
            console.log('You lost it all');
        } else if ((i == 4) && (playerScore = computerScore)){
            console.log('It all ends in a tie');
        }
          
          const playerSelection = prompt('Rock, Paper, Scissors?');
          const computerSelection = computerPlay();
          console.log(playRound(playerSelection, computerSelection));
          
          

     }


}