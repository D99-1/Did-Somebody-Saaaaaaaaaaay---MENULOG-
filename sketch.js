var bg,bg2,uloc,ulocimg,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("1.jpg")
  ulocimg = loadImage("3.gif")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  uloc = createSprite(500,250,50,50);
  uloc.addImage(ulocimg)
  uloc.visible = false;
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
 //   text("TREASURE UNLOCKED",250, 200);
    uloc.visible = true;
  }

  drawSprites()
}