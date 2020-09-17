var database;
var gameState = 0;
var playerCount;
var allPlayers;
var player1, player2;
var form, player, game;
var players;
var policeImg, thiefImg, trackImg;


function preload(){
  policeImg = loadImage("car.png");
  thiefImg = loadImage("thief.png");
  trackImg = loadImage("track.jpg");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 20);

 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
 console.log(playerCount)

}

function draw() {
  background(255,255,255); 
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

  }
  if(gameState === 2){
    game.end();
  }
  
  

}