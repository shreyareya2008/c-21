var PLAY = 1;
var END = 0;
var gameState = PLAY;

var rabbit, rabbit_running, rabbit_jump;
var background, invisibleGround, backgroundImage;

var snakeGroup 
var snakeGroup, snake1, snake2, snake3, snake4;

var score;
var gameOverImg,restartImg


function preload(){
  rabbit_running = loadAnimation("walking rabbit.gif");
  rabbit_jump = loadAnimation("jump rabbit.png");
  
  backgroundImage = loadImage("background.jpg");
  
  snake1 = loadImage("snake 1.png");
  snake2 = loadImage("snake 2.gif");
   snake3 = loadImage("snake 3.png");
  snake4 = loadImage("snake 4.png");
  
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("game over.gif")
    
}

function setup() {
  createCanvas(600, 200);

  var message = "This is a message";
 console.log(message)
  
  rabbit = createSprite(50,160,20,50);
  rabbit.addAnimation("running", rabbit_running);
  trex.addAnimation("jump", rabbit_jump);
  

  rabbit.scale = 0.5;
  
  background = createSprite(200,180,400,20);
  background.addImage("background",backgroundImage);
  background.x = background.width /2;
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  gameOver.scale = 0.5;
  restart.scale = 0.5;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  snakeGroup = createGroup();
  
  
  rabbit.setCollider("rectangle",0,0,trex.width,trex.height);
 rabbit.debug = true
  
  score = 0;
  
}



  function draw() { 

    background(180);
   text("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){

    gameOver.visible = false;
    restart.visible = false;
    
    background.velocityX = -(4 + 3* score/100)
    
    score = score + Math.round(getFrameRate()/60);
    
    if(score>0 && score%100 === 0){
          }
    
    if (background.x < 0){
      background.x = background.width/2;
    }
    
    
    if(keyDown("space")&& rabbit.y >= 100) {
        rabbit.velocityY = -12;
        
    }
    
    
    rabbit.velocityY = rabbit.velocityY + 0.8
  
    spawnsnake();
    
    if(snakeGroup.isTouching(rabbit)){
       gameState = END;

      
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
   
  rabbit.changeAnimation("jump", rabbit_jump);
  
   
   
    background.velocityX = 0;
    rabbit.velocityY = 0
    
   

  snakeGroup.setLifetimeEach(-1);
   
   snakeGroup.setVelocityXEach(0);
      
 }



rabbit.collide(invisibleGround);

if(mousePressedOver(restart)) {
    reset();
  }


drawSprites();
}

function reset(){
console.log("restart the game"); 
gameState=PLAY;
gameOver.visible=false;
restart.visible=false;
snakeGroup.destroyEach();
rabbit.changeAnimation("running",rabbit_running);
score=0;

}

function spawnsnake(){
  if (frameCount % 60 === 0){
    var snake = createSprite(600,165,10,40);
    snake.velocityX = -(6 + score/100);
    
    var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: snake.addImage(snake1);
               break;
       case 2: snake.addImage(snake2);
               break;
       case 3: snake.addImage(snake3);
               break;
       case 4: snake.addImage(snake4);
               break;
       default: break;
     }
    
                
     snake.scale = 0.5;
     snake.lifetime = 300;
    
    
     snakeGroup.add(snake);
  }
 }
 
 

          
          
  



























