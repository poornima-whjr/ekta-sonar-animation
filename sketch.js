var START = 2;
var PLAY = 1;
var END = 0;

var submarine;
var submarineImg;
var sea;
var invBg;
var gameState = 2;
var obstacleGroup;
var start, startImg;
var play, playImg;
var gameOver, gameOverImg;

var sonar, theme;
var jumpSound;

var diverImg, whaleImg;
var score = 0;


var wall;
var sonarimg, sonarobj

function preload() {
  submarineImg = loadImage("images/sub.png")
  seaImg = loadImage("images/bg.png");
  diverImg = loadImage("images/obs2.png");
  whaleImg = loadImage("images/obs1.png");
  startImg = loadImage("images/1120358.jpg");
  playImg = loadImage("images/Play.png");
  gameOverImg = loadImage("images/over.png")
  sonar = loadSound("sounds/sonar.mp3");
  theme = loadSound("sounds/theme.mp3")
  jumpSound = loadSound("sounds/jump.mp3")
  sonarimg = loadAnimation("images/sonar/1.gif",
                           "images/sonar/2.gif",
                           "images/sonar/3.gif",
                           "images/sonar/4.gif",
                           "images/sonar/5.gif",
                           "images/sonar/6.gif",
                           "images/sonar/7.gif",
                           "images/sonar/8.gif",
                           "images/sonar/9.gif",
                           "images/sonar/10.gif",
                           "images/sonar/11.gif",
                           "images/sonar/12.gif",
                           "images/sonar/13.gif",
                           "images/sonar/14.gif",
                           "images/sonar/15.gif",
                           "images/sonar/16.gif",
                           "images/sonar/17.gif",
                           "images/sonar/18.gif",
                           "images/sonar/19.gif",
                           "images/sonar/20.gif",
                           "images/sonar/21.gif",
                           "images/sonar/22.gif",
                           "images/sonar/23.gif",
                           "images/sonar/24.gif",
                           "images/sonar/25.gif",
                           "images/sonar/26.gif",
                           "images/sonar/27.gif",
                           "images/sonar/28.gif",
                           "images/sonar/29.gif",
                           "images/sonar/30.gif",
                           "images/sonar/31.gif",
                           "images/sonar/32.gif",
                           "images/sonar/33.gif",
                           "images/sonar/35.gif",
                           "images/sonar/36.gif",
                           "images/sonar/37.gif",
                           "images/sonar/38.gif",
                           "images/sonar/39.gif",
                           "images/sonar/40.gif",
                           "images/sonar/41.gif",
                           "images/sonar/42.gif",
                           "images/sonar/43.gif",
                           "images/sonar/44.gif",
                           "images/sonar/45.gif",
                           "images/sonar/46.gif",
                           "images/sonar/47.gif",
                           "images/sonar/48.gif",
                           "images/sonar/49.gif",
                           "images/sonar/50.gif",
                           "images/sonar/51.gif",
                           "images/sonar/52.gif",
                           "images/sonar/53.gif",
                           "images/sonar/54.gif",
                           "images/sonar/55.gif",
                           "images/sonar/56.gif",
                           "images/sonar/57.gif",
                           "images/sonar/58.gif",
                           "images/sonar/59.gif",
                           "images/sonar/60.gif",
                           "images/sonar/61.gif",
                           "images/sonar/62.gif",
                           "images/sonar/63.gif",
                           "images/sonar/64.gif",
                           "images/sonar/65.gif",
                           "images/sonar/66.gif",
                           "images/sonar/67.gif",
                           "images/sonar/68.gif",
                           "images/sonar/69.gif",
                           "images/sonar/70.gif",
                           "images/sonar/81.gif",
                           "images/sonar/82.gif",
                           "images/sonar/83.gif",
                           "images/sonar/84.gif",
                           "images/sonar/85.gif",
                           "images/sonar/86.gif",
                           "images/sonar/87.gif",
                           "images/sonar/88.gif",
                           "images/sonar/89.gif",
                           "images/sonar/90.gif",
                           "images/sonar/91.gif",
                           "images/sonar/92.gif",
                           "images/sonar/93.gif",
                           "images/sonar/94.gif",
                           "images/sonar/95.gif",
                           "images/sonar/96.gif",
                           "images/sonar/97.gif",
                           "images/sonar/98.gif",
                           "images/sonar/99.gif",
                           "images/sonar/100.gif",
                           "images/sonar/101.gif",
                           "images/sonar/102.gif",
                           "images/sonar/103.gif",
                           "images/sonar/104.gif",
                           "images/sonar/105.gif",
                           "images/sonar/106.gif",
                           "images/sonar/107.gif",
                           "images/sonar/108.gif",
                           "images/sonar/109.gif",
                           "images/sonar/110.gif",
                           "images/sonar/111.gif",
                           "images/sonar/112.gif",
                           "images/sonar/113.gif",
                           "images/sonar/114.gif",
                           "images/sonar/115.gif",
                           "images/sonar/116.gif",
                           "images/sonar/117.gif"
                         )
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sea = createSprite(500, windowHeight / 2, 10, 10);
  sea.addImage(seaImg);
  start = createSprite(windowWidth / 2, windowHeight / 1.9, 20, 20);
  start.addImage(startImg);

  gameOver = createSprite(windowWidth / 2, windowHeight / 2, 10, 10);
  gameOver.addImage(gameOverImg);

  play = createSprite(windowWidth / 2, windowHeight / 1.25, 20, 20);
  play.addImage(playImg);
  play.scale = 0.5;

  submarine = createSprite(windowWidth / 6, windowHeight / 2, 5, 5);
  submarine.addImage(submarineImg);

  submarine.scale = 1.5;
  invBg = createSprite(windowWidth / 2, windowHeight, windowWidth, 20);

  wall = createSprite(-150, height / 2, 10, height)

  obstacleGroup = new Group();

  theme.setVolume(0.1);

  sonarobj=createSprite(width - 150, 100)
  sonarobj.addAnimation("spinning",sonarimg)
  sonarobj.scale =0.5


  submarine.setCollider("rectangle", 0, 20, 300, 70)
  submarine.debug = false;
}

function draw() {

  

  if (gameState === START) {
    start.visible = true;
    play.visible = true;
    submarine.visible = false;
    sea.visible = false;
    gameOver.visible = false;
    submarine.y = windowHeight / 2;
    if (mousePressedOver(play)) {
      theme.loop()
      gameState = PLAY;
    }
  }


  if (gameState === PLAY) {
    start.visible = false;
    play.visible = false;
    submarine.visible = true;
    sea.visible = true;

    sea.velocityX = -20;

    if (sea.x < 0) {

      sea.x = sea.width / 2;
    }


    if (keyWentDown("up")) {
      submarine.velocityY = -10;
    }
    if (keyWentUp("up")) {
      submarine.velocityY = 0;

    }
    if (keyWentUp("down")) {
      submarine.velocityY = 0;
    }
    if (keyWentDown("down")) {
      submarine.velocityY = 10;
    }
    invBg.visible = false;

    obstacles();



    for (var i = 0; i < obstacleGroup.length; i++) {

      var xpos =  (width-150) + (obstacleGroup.get(i).x -submarine.x)*0.2
      var ypos = submarine.y - obstacleGroup.get(i).y
      console.log(xpos)
      console.log(ypos)
      
    }


    obstacleGroup.overlap(wall, increaseScore)



    if (submarine.isTouching(obstacleGroup)) {
      theme.stop()
      gameState = END;
    }


  }


  if (gameState === END) {
    sea.velocityX = 0;
    obstacleGroup.destroyEach();
    gameOver.visible = true;
    submarine.velocityY = 0;
    if (mousePressedOver(gameOver)) {
      reset();
    }

  }
  drawSprites();
  fill("white");
  textSize(20);
  text("Score= " + score, 30, 20);
  
  //image(sonarimg, width-250,50,200,150)

}

function increaseScore(obs) {
  score = score + 10
  obs.remove()
  //sonar.stop()
  jumpSound.play()
}

function obstacles() {

  if (World.frameCount % 120 === 0) {
    var obstacle = createSprite(width, 200, 20, 20);
    obstacle.y = Math.round(random(100, 900));
    //create switch statement
    rand = Math.round(random(1, 2));
    switch (rand) {
      case 1: obstacle.addImage(whaleImg);
        obstacle.setCollider("rectangle", 0, 0, 650, 200)
        break;
      case 2: obstacle.addImage(diverImg);
        break;
      default: break;


    }

    obstacle.velocityX = -(20 + (score / 2));
    obstacle.scale = 0.5;
    obstacle.depth = submarine.depth + 1;
    obstacleGroup.add(obstacle);
    obstacle.debug = false;
  }
}

function reset() {
  gameState = START;
  score = 0;

}