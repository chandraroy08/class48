
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rulesimg;
var startbtn;
var backgroundi;
var tank1
var tank2
function preload(){
  backgroundimg=loadImage("backgrnd.jpg")
  tank1img=loadImage("tank1.png")

  tank2img=loadImage("tank2.png")

  bg3img=loadImage("bg3.jpeg")
}


function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;


  backgroundi = createSprite(400,400,800,800);
  backgroundi.addImage(backgroundimg)
  backgroundi.visible=false
  backgroundi.scale = 5;

  bg3 = createSprite(400,400,800,800);
  bg3.addImage(bg3img)
  bg3.visible=false
  bg3.scale = 5;




rulesimg = createImg ("RULES.jpg");
rulesimg.position(100,100);
rulesimg.size(800,800);



startbtn = createImg ("startbtn.jpg");
startbtn.position(680,90);
startbtn.size(70,70);
startbtn.mouseClicked(bg)










}




function draw() {
  background("white");  

  Engine.update(engine)


 if(mousePressedOver(tank1)){
   tank2.visible=false
   backgroundi.visible=false
   tank1.x=500
   tank1.y=600
   bg3.visible=true
 }
 if(mousePressedOver(tank2)){
  tank1.visible=false
  backgroundi.visible=false
  tank2.x=500
  tank2.y=600
  bg3.visible=true
}

  


  drawSprites();
}

function bg(){
  backgroundi = createSprite(400,400,800,800);
  backgroundi.addImage(backgroundimg)
  backgroundi.visible=true
  backgroundi.scale = 5;
  rulesimg.hide()
  startbtn.hide()
  tank1= createSprite(300,100)
  tank1.addImage(tank1img)
  tank1.scale=0.8
  tank2=createSprite(300,300)
  tank2.addImage(tank2img)
  tank2.scale=0.5

  textSize(50)
  text("choose any one",200,200)

console.log ("check")

}

