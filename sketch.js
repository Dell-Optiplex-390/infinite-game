function preload(){
  dogAnimation = loadAnimation("asset/1.png", "asset/2.png", "asset/3.png", "asset/4.png");
  bgImage = loadImage("asset/background.png");
}

function setup() {
 createCanvas(700, 500);
 bg = createSprite(350, 250, 700, 500);
 bg.addImage(bgImage);
 bg.scale = 3
 bg.velocityX = -1
 dog = createSprite(70, 350, 40, 30);
 dog.addAnimation("movingDog", dogAnimation)
}

function draw() {
 background("Gray");
 if(bg.x < 100){
  bg.x = bg.width/2
 }
 drawSprites();
}