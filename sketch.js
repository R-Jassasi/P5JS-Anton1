var cnv;

let x,y,d;

let yellow =['rgba(246, 184, 80, 0.85)','rgba(251, 225, 106, .85)','rgba(246, 236, 176, 0.85)'];
let randColy;

let yellow2 =['rgba(246, 184, 80, 0.5)','rgba(251, 225, 106, .5)','rgba(246, 236, 176, 0.5)'];
let randColy2;

let blue = ['rgba(6, 19, 60, 0.5)','rgba(33, 131, 192, 0.5)','rgba(73, 193, 239, 0.5)','rgba(198, 231, 248, 0.5)','rgba(240, 249, 254, 0.5)']
let randColb;
let blue2 = ['rgba(6, 19, 60, 0.2)','rgba(33, 131, 192, 0.2)','rgba(73, 193, 239, 0.2)','rgba(198, 231, 248, 0.2)','rgba(240, 249, 254, 0.2)']
let randColb2;


let shape1;
let rectaArr = [];


function centerCanvas(){
  var x = (windowWidth-width)/2;
  var y = (windowHeight-height)/2;
  cnv.position(x,y);
}

function setup() {
  cnv = createCanvas(800,800);
  centerCanvas();
  background('rgba(6, 19, 60, 1)');

  //shape1= new recta();

  for(let i = 0; i < 800; i++){
    rectaArr.push(new recta(random(50,500),height/2,random(5,30)));
  }
  

}

function windowResized(){
  centerCanvas();
}





function draw() {


 // shape1.display();

 for(let x = 0; x < 50; x++){
   for(let y = 0; y < 50; y++ ){
     backdraw();
   }
 }


 for(let x = 0; x < 7; x++){
  for(let y = 0; y < 7; y++ ){
    lineray();
  }
 }



  for(let i = 0; i < 800; i++){
   rectaArr[i].display();
  }

 


 

  

  noLoop();
 

 

}


function display(){
}


function backdraw(){
 push();


 randColb2 = random(blue2.length);
 randColb2 = floor(randColb2);

 x=random(0,width);
 y=random(0,height);
 d=random(20,50);
 fill(blue2[randColb2]);
 noStroke();
 rect(x,y,d,d);
 ellipse(x*2,y*2,d,d);
 pop();
 
 

 
}

function lineray(){
  randColb = random(blue.length);
  randColb = floor(randColb);

  randColy2 = random(yellow2.length);
  randColy2 = floor(randColy2);
  x=random(0,800);
  y=random(0,800);
  d=random(20,50);
 
 stroke(yellow2[randColy2]);
 strokeWeight(1.6);
 line (800,800,x,y);

 push();
 strokeWeight(1);
 stroke('rgba(243, 136, 168, 0.5)');
 line(0,800,x,y);

 pop();

 push();
 strokeWeight(1);
 stroke('rgba(28, 12, 3, 0.5)');
 line(800,0,x,y);
 pop();
 
 
 
}





class recta{

  constructor(startX,startY,startSize){
    this.transX= startX;
    this.transY= startY;
    this.size = startSize;
    this.angle = random(0.5,4);
   

  }

  display(){
    background(0,0);
    rotate(PI*this.angle);

    randColy = random(yellow.length);
    randColy = floor(randColy);

    fill(yellow[randColy]);
    noStroke();
    ellipse(this.transX,this.transY,this.size,this.size);

    
     
  }

}



