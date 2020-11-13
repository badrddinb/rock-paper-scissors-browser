let playerScore = 0
let computerScore = 0

function computerPlay() {
    let randomOption = Math.floor(Math.random() * 3)
    if (randomOption < 3) return randomOption
    else computerPlay()
}

function playerPlay(randomOption) {
    switch (randomOption) {
        case "Rock":
            return 0
        case "Paper":
            return 1
        case "Scissors":
            return 2
        default:
            return -1
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerScore > 4 || computerScore > 4) {
        if (playerScore > computerScore) return "You Win the game!"
        if (computerScore > playerScore) return "You Lose the game!"
    }

    if (playerSelection === 0) {
        if (computerSelection === 0) {
            return "Draw! Same choice: Rock"
        } else if (computerSelection === 1) {
            computerScore++
            return "You Lose! Paper beats Rock"
        } else if (computerSelection === 2) {
            playerScore++
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === 1) {
        if (computerSelection === 0) {
            playerScore++
            return "You Win! Paper beats Rock"
        } else if (computerSelection === 1) {
            return "Draw! Same choice: Paper"
        } else if (computerSelection === 2) {
            computerScore++
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection === 2) {
        if (computerSelection === 0) {
            computerScore++
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection === 1) {
            playerScore++
            return "You Win! Scissors beats Paper"
        } else if (computerSelection === 2) {
            return "Draw! Same choice: Scissors"
        }
    } else {
        return "Unvalid value!"
    }
}

function displayResults(results) {
    const display = document.querySelector('#display')

    const p = document.createElement('p')
    p.textContent = results

    display.appendChild(p)
}

function game(choice) {
    
    let playerChoice = playerPlay(choice)
    let computerChoice = computerPlay()



    let results = playRound(playerChoice, computerChoice)

    displayResults(results)
}

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
        game(e.target.textContent)
    }
})