function computerPlay() {
    if (Math.floor(Math.random() * 3) === 2) {
        return('rock');
    } else if (Math.floor(Math.random() * 3) === 1) {
        return('paper');
    } else {
        return('scissors')
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

function playRound(e) {
    const playerChoice = e.target.textContent.toLowerCase();
    const computerChoice = computerPlay();
    console.log( computerScore + playerScore)
    

    if (playerChoice === computerChoice){
        console.log('It is a tie');
        resultsP.textContent = 'It is a tie';
        score.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
        finalResult.textContent = '';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ){
        playerScore++
        console.log('You win! ' + playerChoice + ' beats ' + computerChoice);
        resultsP.textContent = 'You win! ' + playerChoice + ' beats ' + computerChoice;
        score.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
        finalResult.textContent = '';
    } else {
        computerScore++
        console.log('You loose! ' + computerChoice + ' beats ' + playerChoice);
        resultsP.textContent = 'You loose! ' + computerChoice + ' beats ' + playerChoice;
        score.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
        finalResult.textContent = '';
    }

    if (playerScore === 5 && playerScore > computerScore){
        finalResult.textContent = 'YOU WIN IT ALL';
        reset();
    } else if (
        computerScore === 5 && computerScore > playerScore){
            finalResult.textContent = 'YOU LOOSE IT ALL';
            reset();
        } else if (
            playerScore === 5 && computerScore === 5){
            finalResult.textContent = 'IT ALL ENDS IN A TIE';
            reset();
        }
        
}

//UI
const container = document.querySelector('#container');

const mainHeader = document.createElement('h2');
mainHeader.textContent = "Rock, Paper, Scissors";
container.appendChild(mainHeader);

const smallDiv = document.createElement('div');
container.appendChild(smallDiv);
const btnRock = document.createElement('button');
btnRock.textContent = "Rock";
smallDiv.appendChild(btnRock);
const btnPaper = document.createElement('button');
btnPaper.textContent = "Paper";
smallDiv.appendChild(btnPaper);
const btnScissors = document.createElement('button');
btnScissors.textContent = "Scissors";
smallDiv.appendChild(btnScissors);

const mediumDiv = document.createElement('div');
container.appendChild(mediumDiv);
const resultsP = document.createElement('p');
mediumDiv.appendChild(resultsP);

const mediumDivTwo = document.createElement('div');
container.appendChild(mediumDivTwo);
const score = document.createElement('p');
mediumDiv.appendChild(score);

const bottomDiv = document.createElement('div');
container.appendChild(bottomDiv);
const finalResult = document.createElement('p');
bottomDiv.appendChild(finalResult);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));



