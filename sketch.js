//variables
var bg1,bg2,bg3,bg4

var oz,ozRun,ozJump,ozSlide
var table1,table2
function preload() {
  bg1 = loadImage("images/room1.jpg")
  bg2 = loadImage("images/room2.jpg")
  bg3 = loadImage("images/room3.jpg")
  bg4 = loadImage("images/room4.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  oz = createSprite(windowHeight-200, 200, 50, 50);





}

function draw() {
  background(bg1);  
  

  
  
  
  drawSprites();
}

//like spawn obstacles in tres same like that make your obstacles