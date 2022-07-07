let toss = document.querySelector("#toss");
let playp1 = document.querySelector('#after_toss_one');
let toss_result = document.querySelector('#toss_result');
let toss_holder = document.querySelector('.toss');
let start = document.querySelector('#start')

// for player one
// startGame
let ballCounter1 = document.querySelector('#ball_counter');

// run counter for one
let runCouOne = document.querySelector('#run_counterOne');
// wicket counter for one
let wicCouOne = document.querySelector('#wicket_counterOne');
// end for player one
//=================================================================
// for player two
let runCounter2 = document.querySelector('#run_counterTwo');
let ballCounters = document.querySelector('#ball_c');
let wicketCounter2 = document.querySelector('#wicket_counter');

// ===============================================================
// special event
let eventSpecial = document.querySelector('#eventSp');
// v1
// ================================================================
let tossRandom;

// v1
toss.addEventListener('click', () => {
    tossRandom = Math.ceil(Math.random() * 2);
    // console.log(tossRandom)
    if (tossRandom == 1) {
        toss_result.innerHTML = 'Batting'
        playp1.innerHTML = 'Bating';

    } else if(tossRandom == 2) {
        toss_result.innerHTML = 'Bowling'
        playp1.innerHTML = 'Bowling';
        }

})
// to start the process
start.addEventListener('click', () => {
    if (tossRandom == 1) {
        playp1.removeAttribute("disabled");
        toss_holder.classList.add('holder');
    } else if (tossRandom == 2) {
        playp1.removeAttribute("disabled");
        toss_holder.classList.add('holder');
    } 
})
// to start the process
//player one 
let mainRandom2 = 0;
let playerTwoRun = 0;
let tolat_wicket_player_2 = 0;
// player one 
// player two
let mainRandom = 0;
let pOneRun = 0;
let tolat_wicket_player_1 = 0;
// player two
let overScore = document.querySelector('#overScore');
function playerOne() {
    // c
        let run = Math.ceil(Math.random() * 8);
        console.log(run)
        
        if (run == 0) {
            pOneRun += 1;
            runCouOne.innerHTML = pOneRun;
            overScore.innerHTML += " 1"
        } else if (run == 1) {
            pOneRun += 2;
            runCouOne.innerHTML = pOneRun;
            overScore.innerHTML += " 2"
        } else if(run == 2){
            pOneRun += 3
            runCouOne.innerHTML = pOneRun;
            overScore.innerHTML += "  3"
        } else if(run == 3){
            pOneRun += 4;
            runCouOne.innerHTML = pOneRun;
            eventSpecial.innerHTML = 'Fourrrrrrr!';
            overScore.innerHTML += " 4"
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
         
        } else if(run == 4){
            pOneRun += 5;
            runCouOne.innerHTML = pOneRun;

            mainRandom -= 1;
            eventSpecial.innerHTML = 'No ball! Free hit!!';
            overScore.innerHTML += " 4n"
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
        } else if(run == 5){
            pOneRun += 6;
            runCouOne.innerHTML = pOneRun;
            eventSpecial.innerHTML = 'Siiiixxxx';
            overScore.innerHTML += " 6"
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
        
        } else if(run == 6){
            pOneRun += 0;
            runCouOne.innerHTML = pOneRun;
            eventSpecial.innerHTML = 'Dot ballll!!!';
            overScore.innerHTML += "  0"
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
        
        } else if(run == 7){
            tolat_wicket_player_1 += 1;
            wicCouOne.innerHTML = tolat_wicket_player_1;
            eventSpecial.innerHTML = 'Caugth!!';
            overScore.innerHTML += " w"
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
       
        }else if(run == 8){
            tolat_wicket_player_1 += 1;
            wicCouOne.innerHTML = tolat_wicket_player_1;
     
            eventSpecial.innerHTML = 'Boldedddd!!';
            overScore.innerHTML += " w"
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
        }
        mainRandom += 1;
    ballCounter1.innerHTML = mainRandom;
    batOrBall()
    
}
let overScoreTwo = document.querySelector('#overScore2')
function playerTwo() {
    let run = Math.ceil(Math.random() * 8);
        console.log(run)

        if (run == 0) {
            playerTwoRun += 1;
            runCounter2.innerHTML = playerTwoRun;
            overScoreTwo.innerHTML += ' 1';
        } else if (run == 1) {
            playerTwoRun += 2;
            runCounter2.innerHTML = playerTwoRun;
            overScoreTwo.innerHTML += ' 2';
        } else if(run == 2){
            playerTwoRun += 3;
            runCounter2.innerHTML = playerTwoRun;
            overScoreTwo.innerHTML += ' 3';
        } else if(run == 3){
            playerTwoRun += 4;
            runCounter2.innerHTML = playerTwoRun;
            eventSpecial.innerHTML = 'Fourrrrrrr!';
            overScoreTwo.innerHTML += ' 4';
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
          
        } else if(run == 4){
            playerTwoRun += 5;
            runCounter2.innerHTML = playerTwoRun;
            mainRandom2 -= 1;
            eventSpecial.innerHTML = 'No ball! Free hit!!';
            overScoreTwo.innerHTML += ' 4n';
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
        } else if(run == 5){
            playerTwoRun += 6;
            runCounter2.innerHTML = playerTwoRun;
            eventSpecial.innerHTML = 'Siiiixxxx';
            overScoreTwo.innerHTML += ' 6';
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
    
        } else if(run == 6){
            playerTwoRun += 0;
            runCounter2.innerHTML = playerTwoRun;
            eventSpecial.innerHTML = 'Dot ballll!!!';
            overScoreTwo.innerHTML += ' 0';
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
           
        } else if(run == 7){
            tolat_wicket_player_2 += 1;
            wicketCounter2.innerHTML = tolat_wicket_player_2;
            eventSpecial.innerHTML = 'Caugth!!';
            overScoreTwo.innerHTML += ' w';
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
    
        }else if(run == 8){
           tolat_wicket_player_2 += 1;
            wicketCounter2.innerHTML = tolat_wicket_player_2;
            eventSpecial.innerHTML = 'Boldedddd!!';
            overScoreTwo.innerHTML += ' w';
            setTimeout(() => {
                eventSpecial.innerHTML = ''
            }, 3000)
        }
 
        mainRandom2 += 1;
    ballCounters.textContent = mainRandom2;
   
    batOrBall();
}
// starting the game
function batOrBall() {
    if (mainRandom2 == 6 && mainRandom == 0) {
        alert("It's your turn to Bat!!!");
        playp1.innerHTML = 'Batting';
    } else if (mainRandom == 6 && mainRandom2 == 0) {
        alert("Let's have some fun with bowling!!")
        playp1.innerHTML = 'Bowling';
}
}

// 
playp1.addEventListener('click', () => {    
    if (mainRandom == 6 && tossRandom == 1 || tolat_wicket_player_1 == 5) {
        if (mainRandom2 == 6 || tolat_wicket_player_2 == 5) {
            if (pOneRun < playerTwoRun) {
                eventSpecial.innerHTML = 'You lost the game!!'
            } else if (pOneRun == playerTwoRun) {
                eventSpecial.innerHTML = 'Match drow!!'
            } else {
                eventSpecial.innerHTML = 'You won the game!!'
            }
            return;  
        } else {
            if (playerTwoRun > pOneRun) {
                alert("You lost the game!");
                eventSpecial.innerHTML = "You lost the game!!"
                return;
            } else {
                playerTwo();
                return;
            }
            
        }
           
    } else if (mainRandom2 == 6 && tossRandom == 2 || tolat_wicket_player_2 == 5) {
        if (mainRandom == 6 || tolat_wicket_player_1 == 5) {
            if (pOneRun < playerTwoRun) {
                alert("You lost the game!!")
                eventSpecial.innerHTML = 'You lost the game!!'
            } else if (pOneRun == playerTwoRun) {
                alert("Match drow")
                eventSpecial.innerHTML = 'Match drow!!'
            } else {
                alert("You won the game");
                eventSpecial.innerHTML = 'You won the game!'
            }
            // result
            return;  
        } else {
            if (pOneRun > playerTwoRun) {
                alert('You won the game!!');
                eventSpecial.innerHTML = 'You won the game!'
                return;
            } else {
                playp1.innerHTML = 'Batting'
                playerOne();
                return;
            }
            
        }
      
    }
    // main
    if (tossRandom == 1) {
        playerOne();
    } else if (tossRandom == 2) {
        playerTwo()
    }
})

