
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
createCanvas(600,600)
monkey = createSprite(80,515,20,20)
monkey.addAnimation("moving", monkey_running)
monkey.scale = 0.1
  
ground = createSprite(400,550,1500,10)
ground.velocityX=-4
ground.x=ground.width/2
console.log(ground.x)
  
   obstacleGroup=createGroup()
   bananaGroup=createGroup()
  
  
  
  
  
  
  
}


function draw() {
background("white")
stroke("green")
textSize(20)
fill("green")
text("Score ="+score,450,50)

stroke("black")
textSize(20)
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time"+survivalTime,100,50)
  
if(ground.x<0){
  ground.x=ground.width/2
}
  
  
if(keyDown("space")){
  monkey.velocityY=-10
}
  
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
obstacles()
food()
  
drawSprites() 
  
  
  
}

function obstacles(){
  if(frameCount%75===0){
    obstacle = createSprite(600,510,20,20)
    obstacle.velocityX=-4
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacleGroup.add(obstacle)
  }
}

function food(){
  if(frameCount%90===0){
    banana = createSprite(600,350,20,20)
    banana.velocityX=-4
    banana.addImage(bananaImage)
    banana.scale=0.1
    bananaGroup.add(banana)
  }
}






