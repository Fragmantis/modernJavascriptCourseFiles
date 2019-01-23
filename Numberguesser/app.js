//game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign UI min max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
    
});

//listen for guess input
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
//check if won, game over won!
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct, You Win`);
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`${winningNum} is correct, You Win!`, 'green');
    } else {
        guessesLeft -= 1;

        if(guessesLeft === 0){
            gameOver(false, `Game over, you've lost. The correct number was ${winningNum}`);
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`Game Over, you've lost.  The correct number was ${winningNum}`, 'red');
            //game over - lost
        } else {
            //Game continues answer wrong
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

        }

    }
});

//game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color ='red';
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    message.style.color = color;
    setMessage(msg);
    
    
    guessBtn.value = 'Play Again?';
    guessBtn.className += 'play-again';
}

//get winning num
function getRandomNum(min, max){
   return Math.floor(Math.random()*(max-min+1)+min);
}

//set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}