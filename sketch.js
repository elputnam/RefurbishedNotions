//Grid variables
let tileCount;
let locx;
let locy;
let hue1;
let voice;


//Text variables
let myNotions = [];

//Txt to Speech
var  myVoice = new p5.Speech();
// myVoice.onStart = speechStarted;



function preload(){
  //Load notions
  myNotions = loadJSON("notions.json", myNotions);
  // myVoice =  new p5.Speech('Microsoft Zira - English (United States)', ramblingNotions);
 }

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  tileCount = height*0.1
  locx = width/2;
  locy = height/2;
  frameRate(10);
  amplitude = new p5.Amplitude();
  //setVoice(1);
  //myVoice.listVoices();
  
}

function draw() {
  // console.log(frameCount);
  background(0);
  grid();
  hue1 = random(360);
  // myVoice.onEnd = reStart();
  // ramblingNotions();
  // myVoice.listVoices();
}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      noStroke();
      rect(posX, posY, height/tileCount);
      
      var toggle = floor(random(1, 3));
       if (toggle == 1){
         //fill(random(360), 100, 50);
         fill(hue1, random(100), random(100));
    } else {
        fill(random(255));
        }
      }
    }
  }


function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}

function ramblingNotions(){
  
  voice = floor(random(myNotions.notions.length));
  console.log(voice);
  // console.log(myNotions.notions.length);
  // myVoice.speak(myNotions.notions[i].title);
  
  myVoice.setRate(0.8);
  myVoice.setVolume(0.7);
  myVoice.speak(myNotions.notions[voice].text);
 

  // amplitude.setInput();
  // tileCount = map(level, 0, 1, height*0.07, height*0.1)
}

function reStart(){
  ramblingNotions();
}



function mouseClicked(){
  ramblingNotions();
  let fs = fullscreen();
  fullscreen(!fs);
  }
  


