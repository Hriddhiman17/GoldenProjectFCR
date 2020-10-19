var cargame, score, fuelGroup, fuelColl, back, playerCar, playerCar_Img, track, track_Img, carsGroup, gameState, restart, bomb_Img, bomb, carGameButton; 

function preload(){
  blueCar = loadImage("carGameImages/blueCar.png");
  track_Img = loadImage("carGameImages/track.png");
  greenCar = loadImage("carGameImages/greenCar.png");
  orangeCar = loadImage("carGameImages/orangeCar.png");
  yellowCar = loadImage("carGameImages/yellowCar.png");
  bomb_Img = loadImage("carGameImages/bomb.png");
  fuel_Img = loadImage("carGameImages/fuel.png");
  // back = loadSound("backgroundSound.mp3");
}
function setup(){
    createCanvas(400, 400);
    
    cargame = new carGame();

  }
function draw(){
  background(track_Img);

  cargame.display();
 drawSprites();

 stroke(0);
 fill(0);
 textSize(24);
 text("Distance Covered : " + score, 150, 25);

 stroke(0);
 fill(0);
 textSize(24);
 text("Fuel Collected : " + fuelColl, 150, 50);

}

function  keyPressed(){
  if(keyCode === 32){
    carGame.reset();
    restart.hide();
  }
}