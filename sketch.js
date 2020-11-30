const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  

  ground1= new Ground(600,780,1200,40)
  ground2= new Ground(970,350,210,10)
  ground3= new Ground(570,550,270,10)

box1= new Box(490,530,"skyblue")
box2= new Box(520,530,"skyblue")
box3= new Box(550,530,"skyblue")
box4= new Box(580,530,"skyblue")
box5= new Box(610,530,"skyblue")
box6= new Box(640,530,"skyblue")
box7= new Box(670,530,"skyblue")

box8= new Box(520,490,"pink")
box9= new Box(550,490,"pink")
box10= new Box(580,490,"pink")
box11= new Box(610,490,"pink")
box12= new Box(640,490,"pink")

box13= new Box(550,450,"green")
box14= new Box(580,450,"green")
box15= new Box(610,450,"green")

box16= new Box(580,410,"gray")

box17= new Box(900,320,"pink")
box18= new Box(930,320,"pink")
box19= new Box(960,320,"pink")
box20= new Box(990,320,"pink")
box21= new Box(1020,320,"pink")

box22= new Box(930,280,"green")
box23= new Box(960,280,"green")
box24= new Box(990,280,"green")

box25= new Box(960,240,"skyblue")

polygon=Bodies.circle(200,420,20,{density:1})
World.add(world,polygon)
imageMode (CENTER)
polygonimg=loadImage("polygon.png")

slings= new Sling(this.polygon,{x:200,y:350})

  Engine.run(engine);
}

function draw() {
  
  background(0);  
  
  ground1.display()
  ground2.display()
  ground3.display()

  box1.display()
  box2.display()
  box7.display() 
  box3.display()
  box4.display()
  box5.display()
  box6.display()

  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  
  box13.display()
  box14.display()
  box15.display()

  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
 
  box22.display()
  box23.display()
  box24.display()
  
  box25.display()
 image (polygonimg,polygon.position.x,polygon.position.y,40,40) 



 drawSprites();

 slings.display()
 textSize(25)
 text(mouseX+";"+mouseY,mouseX,mouseY)
 text("press space, for a second chance",180,57)
}

function mouseDragged()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slings.fly()
}

function keyPressed()

{
  if (keyCode===32)
  {
    slings.attach(this.polygon)
  }
}






