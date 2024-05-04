const prev = document.querySelector('.prev');//create a constant which hold .prev value
const submit = document.querySelector('#submit');//create a constant which hold #submit DOM value
const remain = document.querySelector('.remain');// create a constant which hold .remain value
let num = parseInt((Math.random()*100 +1));// genrate a integer
const userinput =document.querySelector('#enter'); //create a constant which hold .enter  value i.e value enter by user
const lowOrHi = document.querySelector('.lowOrHi');//create a constant which hold .lowOrhi value
const startOver = document.querySelector('.resultParas');// create a constant which hold .resultParas value
const p = document.createElement('p');// selecting a paragraph
let prevguess= [];// creating a variable array to store the guesses or user input 
let tot_play=1;// number of total time guess or enter value
let playGame = true;// the player play the game or not
if(playGame){//  this is a function to start the game 
    submit.addEventListener('click',function(evt){
        evt.preventDefault();// disable all the default setting of evet parameter
        const guess = parseInt(userinput.value);// create a const for user input 
        validateGuess(guess) ;// send the guess for validation
    })
}
function validateGuess (guess){
         if(isNaN(guess)){// if guess is number return false else true 
            alert(`Please Enter a Valid number${userinput}`);// send a msg into the browser
         }
         else if(guess<1 ||guess>100){// checking the range of input value
            alert('Please Enter a number in range of 1-100')
         }
         else {
            prevguess.push(guess);// push the value in prevguess array
            if(tot_play===11){// check the it is last chance or not 
                display_guess(guess);// clean up the value of all element 
                display_msg(`Game Over . Random Number was ${num}`);// disply the msg
                endGame();// finish the game 
            }
            else {
                display_guess(guess);// cleaning and updating 
                checkGuess(guess);// give the feedback according to user input
            }
         }
}
function checkGuess(guess){//  evaluate and give feedback display accouding to user
        if (guess===num) {
            display_msg(`You guessed it Right ${num}`);
            endGame();
        }
        else if (guess<num){
            display_msg(`Number is TOOO LOW `);
        }
        else if (guess>num){
            display_msg(`Number is TOOO High `);
        }
}
function display_guess(guess){
    userinput.value ='';// clean the user input 
    prev.innerHTML += `${guess}, `// add in prev element html
    tot_play++;// increment the value of number of guesses
    remain.innerHTML= `${11- tot_play}; `// assign new remaining time 
}
function  display_msg(msg){
    lowOrHi.innerHTML= `<h2>${msg}</h2>`;// display msg in new tag h2 creating
}

function endGame() {// finishing the game
    userinput.value ='';//erase the value of user input
    userinput.setAttribute('disabled','');// event click is disableding
    p.classList.add('button');// creating a new class (html) button
    p.innerHTML= `<h2 id ="newGame">Start new Game</h2> `;
    startOver.appendChild(p);
    playGame= false;
    newGame();
}
function newGame(){// starting new game
       const newGameButt = document.querySelector('#newGame'); //selecting a id new Game and store it variable 
       newGameButt.addEventListener('click',function(evt){// create an event click  int new Game Buttun  
       num =parseInt(Math.random()*100 +1);// create a random number 
       prevguess =[];// reasign with null
       tot_play =1;
       prev.innerHTML = '';
       remain.innerHTML =`${11-tot_play}`// Total Remaining  number of Game 
       userinput.removeAttribute('disabled');// remove user input button the user input number
       startOver.removeChild(p);// Remove  start over child
       playGame = true;
    })
}