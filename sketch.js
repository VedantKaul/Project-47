var player, player1_Img, player2_Img, game, form;
var gameState = 0;
var playerCount;
var allPlayers;
var distance;
var database;


function preload(){
  player1_Img = loadImage("Player1.png");
  player2_Img = loadImage("Player2.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  form = new Form();

  gameState === 0;
}

function draw() {
  console.log("Hello");
  if (playerCount = 2) {
  game.update(1);
  }
  if(gameState === 0){
  form.display();
  }
  if(gameState === 1){
  clear();
  game.play();
  }

}