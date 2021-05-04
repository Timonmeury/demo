let r = 255;
let y = 0;
let b = 120;
let century;
let monument;


function preload(){
  century = loadFont('data/Century-Schoolbook-Std-Regular.otf');
  monument = loadFont('data/MonumentGrotesk-Medium.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(y)
  tSize=70;
  textFont(century);
  textSize(tSize);
  textAlign(LEFT);
  frameRate(10);
}


function draw() {
  
  translate(0, 0);
  
  noStroke();  
  background(y);

  noFill();
  stroke(r);

  fill(255); 
  //text('PRESS "a" TO BEGIN', width/100, height/11.5);
  //text('PRESS "b" TO CLEAR', width/100, height-10);


  
  
  //Slide_Stroke
  stroke(255);
  strokeWeight(2);
  line(mouseX, 0, mouseX, height);
  line(mouseX, 0, width, height);


  
  //Stroke_1
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  //Stroke_2
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  //Stroke_3
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  //Stroke_4
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  //Stroke_5
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  //Stroke_6
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  //Stroke_7
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  //Stroke_8
  stroke(r);
  strokeWeight(2); 
  line(random(0, mouseX), random(0, mouseX), random(0, mouseX), random(0, mouseX));
  
  
  
  //Circles
  
  noStroke();
  fill(255);
  ellipse(random(20, mouseX-20), random(20, mouseX-20), 40, 40);
  fill(255);
  ellipse(random(20, mouseX-20), random(20, mouseX-20), 40, 40);
  fill(255);
  ellipse(random(20, mouseX-20), random(20, mouseX-20), 40, 40);
  fill(255);
  ellipse(random(20, mouseX-20), random(20, mouseX-20), 40, 40);
  
  
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
