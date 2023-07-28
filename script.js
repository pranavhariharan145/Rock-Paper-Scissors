function getComputerChoice()
{
    let x = Math.floor((Math.random() * 10))
    // 123 456 789computerSelection
    if (x<=3)
    {
        return "rock"
    }
    else if(x>=7)
    {
        return "paper"
    }
    else
    {
        return "scissor"
    }
}
let playerpoints = 0;
let computerpoints = 0;
function playRound(a, b)
{
    if (a == b)
    {
        console.log("Draw")
        playerpoints ++;
        computerpoints ++;

    }
    else if (a == "rock" && b == "scissor" || a == "paper" && b == "rock" || a == "scissor" && b == "paper")
    {
        playerpoints ++;
        return(`You Won!! ${a} beats ${b}`)
        
    }
    else if(b == "rock" && a == "scissor" || b == "paper" && a == "rock" || b == "scissor" && a == "paper"){
        computerpoints ++;
        return(`You Lose!! ${b} beats ${a}`)

    }
    else{
        return("Please Enter Approprite Answer!!")
    }
}
// Single game
//document.getElementById("button-rock").addEventListener("click", myFunction);
//document.querySelector(".button-rock").addEventListener("click, ")

function singlegame()
{
    const playerSelection = prompt("Enter a Choice: ");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player points: ${playerpoints}`)
    console.log(`Computer points: ${computerpoints}`)
}

for (let i = 0; i < 5; i++)
{
    console.log("----------------------------")
    console.log(`Round ${i+1}`)
    singlegame()
}

if (playerpoints > computerpoints)
{
    console.log("Congratulations!! You Won the Game")
}
else if (playerpoints < computerpoints){
    console.log("You Lose the Game")
}
else{
    console.log("Its DRAW!!")
}




