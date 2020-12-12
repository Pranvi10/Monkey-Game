var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup,obstacleGroup;
var survivalTime = 0;
var message = "Hi this is Pranvi"

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(80,315,20,20); 
  monkey.addAnimation("moving",monkey_running); 
  monkey.scale = 0.1 
  
  ground = createSprite(400,350,900,10); 
  ground.velocityX = -4; 
  ground.x = ground.width/2; 
  console.log(ground.x); 
  
 bananaGroup= new Group();

}

function draw() {
  background("green");

  if(keyDown("space") && monkey.y>=100){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY  + 0.8;
  
if(ground.x < 0) {
  ground.x = ground.width/2;
}
  
  console.log(message);
  
  monkey.collide(ground);
  
  spawnObstacles();
  spawnbanana();
  
  drawSprites();
  
  textSize("20");
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SURVIVALTIME: "+survivalTime,100,50); 
}

function spawnObstacles(){
  if(World.frameCount % 80 ===0) {
   var obstacle =createSprite(400,330,10,40);
    obstacle.velocityX = -3;
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 230;
  }
}

function spawnbanana() {
 if(World.frameCount % 80 === 0) {
   var banana = createSprite(400,350,10,40);
   banana.y = random(120,200);
   banana.velocityX = -6;
   banana.addImage("banana", bananaImage);
   banana.scale = 0.08;
   banana.lifetime = 134;
   bananaGroup.add(banana);
 }
}