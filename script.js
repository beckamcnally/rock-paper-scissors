

let win = 0 
let ties = 0 
let losses = 0
let options = ['R', 'S', 'P']

let outcome


function game() {
let userChoice = window.prompt('Enter R, S, or P')
userChoice = userChoice.toUpperCase()

if (!options.includes(userChoice) || userChoice === !userChoice) {
  alert('Please make a valid selection')
  game()
}




let index = Math.floor(Math.random() * options.length)
let compChoice = options[index]



  if (userChoice === compChoice) {
    outcome = "tie"
    ties++
  }

  if (userChoice === "S" && compChoice === "P") {
    outcome = "win"
    win++
  }

    if (userChoice === "P" && compChoice === "R") {
    outcome = "win"
    win++
  }

    if (userChoice === "R" && compChoice === "S") {
    outcome = "win"
    win++
  }

    if (compChoice === "S" && userChoice === "P") {
    outcome = "loose"
    losses++
  }

      if (compChoice === "P" && userChoice === "R") {
    outcome = "loose"
    losses++
  }

      if (compChoice === "R" && userChoice === "S") {
    outcome = "loose"
    losses++
  }





alert(`The computer has chosen ${compChoice}, you ${outcome}`)
alert(`Stats: \nWins: ${win} \nLosses: ${losses} \nTies: ${ties}`)
let playAgain = confirm('Would you like to play again')

if (playAgain) {
  game()
}
}

game()