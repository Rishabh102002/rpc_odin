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

function showPlayerChoice(palyerChoice) {
    const div = document.querySelector("#result");
    const para = document.createElement("p");
  console.log(palyerChoice)
    switch(palyerChoice){
        case "Rock":
            para.textContent = "You choose Rock: ✊";
            break;
        case "Paper":
            para.textContent = "You choose Paper: 🤚";
            break;
        case "Scissors":
            para.textContent = "You choose Scissors: ✌️";
            break;
    }

    div.insertBefore(para, div.firstChild) 
}

function showComputerChoice(computerChoice){
    const div = document.querySelector("#result");
    const para = document.createElement("p");
    switch(computerChoice){
        case "Rock":
            para.textContent = "The computer has chosen Rock: ✊";
            break;
        case "Paper":
            para.textContent = "The computer has chosen Paper: 🤚";
            break;
        case "Scissors":
            para.textContent = "The computer has chosen Scissors: ✌️";
            break;
    }
    div.insertBefore(para, div.firstChild)
}

function showResult(palyerChoice,computerChoice){
    const div = document.querySelector("#result");
    const result = document.createElement("p");
    result.textContent = playRound(palyerChoice,computerChoice);
    if(result.textContent.slice(0,7) === "You Win"){
        result.style.cssText ="color: white; background: #6ccc4b ; padding: 8px;";
    }
    else if (result.textContent.slice(0,7) === "You Los"){
        result.style.cssText ="color: white; background: #db2c32 ; padding: 8px;";
    }
    else{
        result.style.cssText ="color: white; background: #e0c358 ; padding: 8px;";
    }

    div.insertBefore(result, div.firstChild)

    const lineBreak = document.createElement("hr")
    div.insertBefore(lineBreak, div.firstChild)
}


function playGame(palyerChoice){
    const computerChoice = getComputerChoice();
    showPlayerChoice(palyerChoice);
    showComputerChoice(computerChoice);
    showResult(palyerChoice,computerChoice);
}


const buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", () => playGame(button.value));
    
});
