//Grid variables
let tileCount;
let locx;
let locy;

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
  tileCount = height*0.07
  locx = width/2;
  locy = height/2;
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
         fill(0);
    } else {
        fill(255);
        }
      }
    }
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}

function ramblingNotions(){
  let i = int(random(myNotions.notions.length));
  //myVoice.speak(myNotions.notions[i].title);
  myVoice.speak(myNotions.notions[i].text);
}
