
var backgroundImg,backgroundImg2;
var gameState = 0;
var patient, game,doctor;
var first;
var distance = 0;
var patientdisplay,positionX,positionY;
var saved = 0;
var notsaved = 0;
var doctorImg,doctorImg1,doctorImg2,doctorImg3,patientImg,patientImg1,patientImg2,patientImg3,needle,needleImg;
var doctors,doctor1,doctors,patient1,covid,covidImg,restartImg,restart;
function preload(){
backgroundImg = loadImage("images/HospitalRoom2.png"); 
backgroundImg2 = loadImage("images/frontdesk.jpg"); 
doctorImg = loadImage("images/Doctor1.png");
patientImg = loadImage("images/Patient1.png");
patientImg1 = loadImage("images/Patient2.png");
patientImg2 = loadImage("images/Patient3.png");
patientImg3 = loadImage("images/Patient4.png");
covidImg = loadImage("images/Covid.png");
needleImg = loadImage("images/needle.png");
restartImg = loadImage("images/restart.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.start();
}

function draw() {
  background(backgroundImg);
  
    game.play();
 
  if(gameState === 2){
    game.end();
  }
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}