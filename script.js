// global constants
const clueStartHoldTime = 1000; //how long to hold each clue's light/sound
const clueStartPauseTime = 333; //how long to pause in between clues
const nextStartClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const intervalTime = 6000;

//golbal variables
var clueHoldTime = clueStartHoldTime; //how long to hold each clue's light/sound
var cluePauseTime = clueStartPauseTime; //how long to pause in between clues
var nextClueWaitTime = nextStartClueWaitTime; //how long to wait before starting playback of the clue sequence

var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0

var guessCounter = 0;
var wrongCounter = 0;

var timer;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}


function stopGame(){
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");  
  
  clueHoldTime = clueStartHoldTime; 
  cluePauseTime = clueStartPauseTime; 
  nextClueWaitTime = nextStartClueWaitTime; 
  
  wrongCounter = 0;
  clearInterval(timer);
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
  

}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clearInterval(timer);
  
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  timer = setInterval(loseGame, intervalTime);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!!!!");
}

function guess(btn){
  console.log("user guessed: " + btn);

  if(!gamePlaying){
    return;
  }
  else{
    if(pattern[guessCounter] == btn){
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          winGame();
        }else{
          progress++;
          clueHoldTime /= 1.15;
          cluePauseTime /= 1.15;
          clueHoldTime /= 1.15;
          playClueSequence();
        }
      }else{
        guessCounter++;
      }
    }else{
      wrongCounter++;
      if(wrongCounter == 3)
      {
        loseGame();
      }
      playClueSequence();
    }
  }
}    
