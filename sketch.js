
 
 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
 
 var particals = [] ;
 var plinkos = [];
 var divisions = [];
 
 var score  = 0;
 var divisionsHeight = 300;
 
 
 
 function setup() {
   createCanvas(480,800);
  
   engine = Engine.create();
   world = engine.world;
 
   ground = new Ground(240,730,800,10);
 
   for (var j=40; j<=width; j=j+50 ){
     plinkos.push(new Plinko(j,75,10));
   }
   
   for (var j=15; j<=width-10; j=j+50 ){
     plinkos.push(new Plinko(j,175,10));
   }
 
   for (var j=40; j<=width; j=j+50 ){
     plinkos.push(new Plinko(j,275,10));
   }
 
   for (var j=15; j<=width-10; j=j+50 ){
     plinkos.push(new Plinko(j,375,10));
   }
    
   for (var k=0; k<=width; k = k+80){
     divisions.push(new Division(k,height-divisionsHeight/2,10,150));
   }
 
 
 
 
 
 }
 
 function draw() {
   background(0); 
   textSize(20)
   text("Score : "+score,20,30);
 
   Engine.update(engine);
   
   for (var j=0; j<plinkos.length; j++ ){
     plinkos[j].display();
   }
 
   for (var k=0; k<divisions.length; k++ ){
     divisions[k].display();
   }
 
   ground.display();
 
   if(frameCount%60 === 0){
 
     particals.push(new Partical( random(width/2-10,width/2+10),10,10));
     score++;
   }
   
   for (var k=0; k<particals.length; k++ ){ 
    particals[k].display();
   }
 
 
 
   drawSprites();
 }
 
 