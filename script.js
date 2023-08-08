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
        return "Draw"
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
function singlegame(playerSelection)
{
    const computerSelection = getComputerChoice();
    //updating computer selection on display
    document.querySelector(".cselection").textContent = `Computer Chose: ${computerSelection}`;
    document.querySelector(".pselection").textContent = `Human Chose: ${playerSelection}`; 
    
    console.log(playRound(playerSelection, computerSelection));
    document.querySelector(".score1-text").textContent = `${playerpoints}`;
    document.querySelector(".score2-text").textContent = `${computerpoints}`;
    if (playerpoints > 5)
    {
        document.querySelector(".header-text").textContent = "Congratulations you won the game!!!";
    }
    else if (computerpoints > 5)
    {
        document.querySelector(".header-text").textContent = "You Lose the game!!!";
    }


}
document.querySelector(".buttonrock").addEventListener("click",function(){
    singlegame("rock")
}
);
document.querySelector(".buttonpaper").addEventListener("click",function(){
    singlegame("paper")
}
);
document.querySelector(".buttonscissor").addEventListener("click",function(){
    singlegame("scissor")

}

);
