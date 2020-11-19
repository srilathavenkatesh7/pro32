const  Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world;
var box1,box2;
var slingshot1,ground1;
var score=0;

function preload(){
  backimg=loadImage("back.jpg");
}

function setup() {
  createCanvas(1000,800);
  
  engine=Engine.create();
  world=engine.world;
ground1=new Ground(870,750,180,10);
ground2=new Ground(390,258,180,10);
ground3=new Ground(500,740,400,10);
ground4=new Ground(800,340,240,10);
box1=new Box(330,235,30,40);
box2=new Box(360,235,30,40);
box3=new Box(390,235,30,40);
box4=new Box(420,235,30,40);
box5=new Box(450,235,30,40);
box6=new Box(360,195,30,40);
box7=new Box(390,195,30,40);
box8=new Box(420,195,30,40);
box9=new Box(390,155,30,40);

box11=new Box(810,723,30,40);
box12=new Box(840,723,30,40);
box13=new Box(870,723,30,40);
box14=new Box(900,723,30,40);
box15=new Box(930,723,30,40);
box16=new Box(840,683,30,40);
box17=new Box(870,683,30,40);
box18=new Box(900,683,30,40);
box19=new Box(870,643,30,40);

box20=new Box(340,713,40,40);
box21=new Box(380,713,40,40);
box22=new Box(420,713,40,40);
box23=new Box(460,713,40,40);
box24=new Box(500,713,40,40);
box25=new Box(540,713,40,40);
box26=new Box(580,713,40,40);
box27=new Box(620,713,40,40);
box28=new Box(660,713,40,40);
box29=new Box(380,673,40,40);
box30=new Box(420,673,40,40);
box31=new Box(460,673,40,40);
box32=new Box(500,673,40,40);
box33=new Box(540,673,40,40);
box34=new Box(580,673,40,40);
box35=new Box(620,673,40,40);
box36=new Box(420,633,40,40);
box37=new Box(460,633,40,40);
box38=new Box(500,633,40,40);
box39=new Box(540,633,40,40);
box40=new Box(580,633,40,40);
box41=new Box(460,673,40,40);
box42=new Box(500,673,40,40);
box43=new Box(540,673,40,40);
box44=new Box(500,713,40,40);

box45=new Box(720,305,60,60);
box46=new Box(780,305,60,60);
box47=new Box(840,305,60,60);
box48=new Box(780,245,60,60);
polygon1=new Polygon();
slingshot1=new SlingShot(polygon1.body,{x:100,y:400});

}
function draw() {
  background(backimg); 
  push ();
  stroke (40)
  fill ("green");
  text("SCORE :"+score,750,40);
  pop () 
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  polygon1.display();
  slingshot1.display();
 
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
  box33.score();
  box34.score();
  box35.score();
  box36.score();
  box37.score();
  box38.score();
  box39.score();
  box40.score();
  box41.score();
  box42.score();
  box43.score();
  box44.score();
  box45.score();
  box46.score();
  box47.score();
  box48.score();
  

}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(polygon1.body);
  }
}


async function backgroundimg(){
  var response=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>0600 && hour<1800){
    image (backimg,240,400);
    tint(255,230);
  }else {
    image (backimg,240,400);
    tint(255,50);
  }
}