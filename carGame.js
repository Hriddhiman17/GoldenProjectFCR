class carGame{
  
  constructor(){  
  track = createSprite(200, 25, 400, 400);
  track.addImage(track_Img);
  track.scale = 8;
  
  playerCar = createSprite(85, 300, 50, 100);
  playerCar.addImage(blueCar);
  playerCar.scale = 0.75;
  
  carsGroup = createGroup();
  fuelGroup = createGroup();
  
  gameState = "play";
  
    bomb = createSprite(playerCar.x, playerCar.y-25);
    bomb.addImage(bomb_Img);
    bomb.scale = 0.75;
    bomb.visible = false;
      
    fuelColl = 5;
    score = 0;
  }

display(event) {

  bomb.x = playerCar.x;
  bomb.y = playerCar.y-25;

  if(track.y > 400){
    track.y = track.height/2;
  }
  if(gameState === "play"){
    track.velocityY = 6;
    // back.play();

    score += 1;
  if(keyDown(LEFT_ARROW) && playerCar.x === 325){
     playerCar.x = 205;
  }
  if(keyDown(LEFT_ARROW) && playerCar.x === 205){
     playerCar.x = 85;
  }
    
  if(keyDown(RIGHT_ARROW) && playerCar.x === 205){
     playerCar.x = 325;
  }
  if(keyDown(RIGHT_ARROW) && playerCar.x === 85){
     playerCar.x = 205;
  }
  if(playerCar.isTouching(fuelGroup)){
    fuelGroup.destroyEach();
    fuelColl += 1;
  }
    if(playerCar.isTouching(carsGroup)){
      // gameState = "end";
      fuelColl -= 1;
      carsGroup.destroyEach();
    }
 
    if(fuelColl <= 0){
      gameState = "end";
    }
    if(frameCount%40 === 0){
    var cars = createSprite();
    cars.y = 0;
    cars.scale = 0.75;
    cars.velocityY = 6;
    cars.lifetime = 90;
    
    cars.depth = bomb.depth;
    bomb.depth = bomb.depth+1;
    
    var rand = Math.round(random(1, 4));
    var randX = Math.round(random(1, 3));
    switch(randX){
      case 1 : cars.x = 85;
        break;
      case 2 : cars.x = 205;
        break;
      case 3 : cars.x = 325;
        break;
      default: break;
    }
    switch(rand){
      case 1 : cars.addImage(yellowCar);
        break;
      case 2 : cars.addImage(blueCar);
        break;
      case 3 : cars.addImage(greenCar);
        break;
      case 4 : cars.addImage(orangeCar);
        break;
      default:break;
    }
    carsGroup.add(cars);
    
    
  }

  if(frameCount%60 === 0){
    var fuel = createSprite();
    fuel.addImage(fuel_Img);
    fuel.y = 0;
    fuel.scale = 0.75;
    fuel.velocityY = 6;
    fuel.lifetime = 90;
    
    var randy = Math.round(random(1, 3));
    switch(randy){
      case 1 : fuel.x = 85;
        break;
      case 2 : fuel.x = 205;
        break;
      case 3 : fuel.x = 325;
        break;
      default: break;
    }

    fuelGroup.add(fuel);
    
  }
  if(gameState === "end"){
    carsGroup.setVelocityYEach(0);
    carsGroup.setLifetimeEach(-1);
    fuelGroup.setVelocityYEach(0);
    fuelGroup.setLifetimeEach(-1);
    track.velocityY = 0;
    bomb.visible = true;
    // fuelColl -= 1;
    restart = createButton("Press SPACE TO RESTART");
    restart.position(0, 10);

    stroke("red");
    fill("red");
    textSize(24);
    text("Press SPACE to restart", 150, 200);
  }

  if(mousePressedOver(restart)){
    // reset();
    console.log("error");
  }
}
}
static reset(){
  if(gameState === "end" && keyPressed){
    score = 0;
    fuelColl = 5;
    gameState = "play";
    bomb.visible = false;
    carsGroup.destroyEach();
    fuelGroup.destroyEach();
  }
}
}