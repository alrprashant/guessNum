let randomNumber = Math.floor(Math.random() * 100) + 1;


const guessField=document.querySelector(".guessField");
const guessSubmit=document.querySelector(".guessSubmit");
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
                    
let guessCount = 1;
let resetButton;

guessSubmit.addEventListener("click",checkGuess);

function checkGuess(){
    const userGuess=Number(guessField.value);
    if(guessCount===1){
        guesses.textContent="previous guesses:";

    }
    guesses.textContent=guesses.textContent+` ${userGuess}`;
    if(userGuess===randomNumber){
        lastResult.textContent="Congratulation! you got it right";
        lastResult.style.background="green";
        lowOrHi.textContent="";
        setGameOver();

    }
    else if(guessCount===10){

        lastResult.textContent="!!!Game Over!!!";
        lowOrHi.textContent="";
        setGameOver();
    }
    else{
        lastResult.textContent="Wrong !";
        lastResult.style.background="red";
        if(userGuess>randomNumber){
            lowOrHi.textContent="last guess was too high";

      }else if(userGuess<randomNumber){
        
          lowOrHi.textContent="last guess was too low";

        }

    }


   guessCount++;
   guessField.value = "";
   guessField.focus();




}

function setGameOver(){
    guessField.disabled=true;
    guessField.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",resetGame);

}

function resetGame(){
    guessCount=1;
    const resetParas=document.querySelectorAll(".resultParas");
    for(const resetPara of resetParas){
        resetPara.textContent="";
    }
  
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 100) + 1;


}





