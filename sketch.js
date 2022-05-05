//Grid variables
let tileCount;
let locx;
let locy;
let hue1;

//Text variables
let myNotions = [];

//Txt to Speech
var myVoice = new p5.Speech(); // new P5.Speech object


function preload(){
  //Load notions
  myNotions = loadJSON("notions.json", myNotions);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  tileCount = height*0.1
  locx = width/2;
  locy = height/2;
  frameRate(10);
  amplitude = new p5.Amplitude();
  // myVoice.listVoices();
}

function draw() {
  background(0);
  grid();
  ramblingNotions();
  
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
         fill(hue1*30, random(100), random(100));
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
  let i = int(random(myNotions.notions.length));
  hue1 = i;
  //myVoice.speak(myNotions.notions[i].title);
  myVoice.setRate(1);
  myVoice.speak(myNotions.notions[i].text);
  // amplitude.setInput();
  // tileCount = map(level, 0, 1, height*0.07, height*0.1)
}
