function rockpaperscissors(turn){
    const rock = "Rock"
    const paper = "Paper"
    const scissors = "Scissors"

    if(turn == "r" || turn == "rock"){
        turn = rock
        console.log("You choose rock.")
    }else if(turn == "p" || turn == "paper"){
        turn = paper
        console.log("You choose paper.")
    }else if(turn == "s" || turn == "scissors"){
        turn = scissors
        console.log("You choose scissors.")
    }else{
        console.log("Invalid input. Try again!")
    }

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1
    let computerMove = ""

    switch(computerRandomNumber){
        case 1 : computerMove = "Rock"; console.log("The computer chooses rock."); break;
        case 2 : computerMove = "Paper"; console.log("The computer chooses paper.");  break
        case 3 : computerMove = "Scissors"; console.log("The computer chooses scissors.");  break
    }

    if(turn === rock && computerMove === scissors || turn === paper && computerMove === rock || turn === scissors && computerMove === paper){
        console.log("You win!")
    }else if(turn === computerMove){
        console.log("It's a draw!")
    }else(
        console.log("You lose!")
    )
}
rockpaperscissors(["p"])