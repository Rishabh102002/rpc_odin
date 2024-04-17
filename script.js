const array = ["Rock", "Paper", "Scissors"]
function getComputerChoice(){
    let index = Math.floor(Math.random() * 3);
    return array[index];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "Draw!"
    }
    else{
        switch(playerSelection){
            case "Rock":
                if(computerSelection === 'Paper'){
                    return "You Lose! Paper beats Rock";
                }
                else{
                    return "You Win! Rock beat Paper";
                }
                break;
            case "Paper":
                if(computerSelection === 'Rock'){
                    return "You Win! Paper beats Rock";
                }
                else{
                    return "You Lose! Scissors beat Paper";
                }
                break;
            case "Scissors":
                if(computerSelection === 'Rock'){
                    return "You Lose! Rock beat Scissors";
                }
                else{
                    return "You Win! Scissors beat Paper";
                }
                break;
        }
    }
}

function caseFix(input){
    let str = input.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

function playGame(){
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i =1; i<=5; i++){
        let input = prompt("Please enter your choice for "+ i +" round :")
        let ps = caseFix(input);
        let cs = getComputerChoice();
        let result = playRound(ps,cs);
        console.log("ROUND",i);
        console.log("You choose: ",ps,"   |   ","The computer choose: ",cs);
        console.log(result);
        let x = result.slice(4,7);
        if( x === "Win" ){
            playerPoints+=1
        }
        else if(x === "Los"){
            computerPoints+=1
        }
    }
    if(playerPoints == computerPoints){
        console.log("Its a Draw The player and computer both scored: ",playerPoints);
    }
    else if(playerPoints> computerPoints){
        console.log("PLAYER WON THE GAME! with ",playerPoints," points.");
        console.log("While the computer scored ",computerPoints, "points.");
    }
    else{
        console.log("PLAYER LOST THE GAME! with",playerPoints," points.");
        console.log("While the computer scored ",computerPoints, "points.");
    }
}

playGame();