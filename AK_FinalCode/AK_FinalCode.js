let chatter;
let mono;

var radio;

var message=[];
var letter,size,rand,speed,xposition, yposition;

//A
var aX = 600;
var aY = 300;
var aDirectionX= 1;
var aDirectionY= -1;
var aSpeed = 1.2;

//B
var bX = 150;
var bY = 500;
var bDirectionX= 1;
var bDirectionY= -1;
var bSpeed = 1;

//F
var fX = 700;
var fY = 390;
var fDirectionX= -1;
var fDirectionY= 1;
var fSpeed = 0.9;

//K
var kX = 100;
var kY = 90;
var kDirectionX= -1;
var kDirectionY= 1;
var kSpeed = 1.2;

//Z
var zX = 500;
var zY = 110;
var zDirectionX= 1;
var zDirectionY= -1;
var zSpeed = 1.3;

//V
var vX = 700;
var vY = 500;
var vDirectionX= 1;
var vDirectionY= -1;
var vSpeed = 1.2;

//E
var eX = 800;
var eY = 90;
var eDirectionX= -1;
var eDirectionY= 1;
var eSpeed = 1.1;

//R
var rX = 850;
var rY = 700;
var rDirectionX= 1;
var rDirectionY= -1;
var rSpeed = 0.8;

//C
var cX = 450;
var cY = 200;
var cDirectionX= 1;
var cDirectionY= -1;
var cSpeed = 1;

//T
var tX = 55;
var tY = 600;
var tDirectionX= -1;
var tDirectionY= 1;
var tSpeed = 1;

//H
var hX = 355;
var hY = 100;
var hDirectionX= -1;
var hDirectionY= 1;
var hSpeed = 1;

//Q
var qX = 255;
var qY = 400;
var qDirectionX= 1;
var qDirectionY= -1;
var qSpeed = 1;

//M
var mX = 755;
var mY = 200;
var mDirectionX= 1;
var mDirectionY= -1;
var mSpeed = 1;

function preload(){
  chatter = loadFont('data/Chatter-Regular.ttf');
  mono = loadFont('data/Quadrant-Text-Mono-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(255);
  textFont(mono);
  textSize(width/1000);
  xposition = 10;
  yposition = 20;
  size=width/50;
  soundFormats('mp3', 'ogg');
  radio = loadSound('data/AK-Recording.mp3', loaded);
}

function loaded(){
  radio.setVolume(0.1);
}


function draw() {
  background(0);

  for (var i=0; i<message.length ; i++){
  message[i].display();

 }
 
 radio.rate(random(0.45,0.9));

  push();
  textFont(mono);
  textSize(width/60);
  noStroke();
  fill(0, 0, 255);
  text(millis()/1000, 10, height-10);
  textAlign(RIGHT);
  text(key, width-10, height-10);
  textSize(width/90);
  text('PRESS ANY KEY TO BEGIN', width-10, 17);
  text('PRESS LEFT ARROW TO ERASE', width-10, 32);
  text('PRESS DOWN ARROW TO PLAY AUDIO', width-10, 47);
  text('PRESS UP ARROW TO STOP AUDIO', width-10, 62);
  pop();
  
  //motion
  aX = aX + (aDirectionX*aSpeed);
  aY = aY + (aDirectionY*aSpeed);
  bX = bX + (bDirectionX*bSpeed);
  bY = bY + (bDirectionY*bSpeed);
  fX = fX + (fDirectionX*fSpeed);
  fY = fY + (fDirectionY*fSpeed);
  kX = kX + (kDirectionX*kSpeed);
  kY = kY + (kDirectionY*kSpeed);
  zX = zX + (zDirectionX*zSpeed);
  zY = zY + (zDirectionY*zSpeed);
  vX = vX + (vDirectionX*vSpeed);
  vY = vY + (vDirectionY*vSpeed);
  eX = eX + (eDirectionX*eSpeed);
  eY = eY + (eDirectionY*eSpeed);
  rX = rX + (rDirectionX*rSpeed);
  rY = rY + (rDirectionY*rSpeed);
  cX = cX + (cDirectionX*cSpeed);
  cY = cY + (cDirectionY*cSpeed);
  tX = tX + (tDirectionX*tSpeed);
  tY = tY + (tDirectionY*tSpeed);
  hX = hX + (hDirectionX*hSpeed);
  hY = hY + (hDirectionY*hSpeed);
  qX = qX + (qDirectionX*qSpeed);
  qY = qY + (qDirectionY*qSpeed);
  mX = mX + (mDirectionX*mSpeed);
  mY = mY + (mDirectionY*mSpeed);
  
  push();
  textFont(chatter);
  textSize(width/25);
  text('a', aX, aY);
  text('b', bX, bY);
  text('f', fX, fY);
  text('k', kX, kY);
  text('z', zX, zY);
  text('v', vX, vY);
  text('e', eX, eY);
  text('r', rX, rY);
  text('c', cX, cY);
  text('t', tX, tY);
  text('h', hX, hY);
  text('q', qX, qY);
  text('m', mX, mY);
  pop();
  
  push();
  stroke(255);
  strokeWeight(0.7);
  line(aX, aY, bX, bY);
  line(aX, aY, fX, fY);
  line(fX, fY, kX, kY);
  line(bX, bY, kX, kY);
  line(bX, bY, zX, zY);
  line(aX, aY, kX, kY);
  line(vX, vY, zX, zY);
  line(fX, fY, zX, zY);
  line(eX, eY, vX, vY);
  line(rX, rY, zX, zY);
  line(rX, rY, eX, eY);
  line(cX, cY, vX, vY);
  line(aX, aY, cX, cY);
  line(bX, bY, eX, eY);
  line(cX, cY, tX, tY);
  line(fX, fY, tX, tY);
  line(tX, tY, vX, vY);
  line(hX, hY, rX, rY);
  line(hX, hY, zX, zY);
  line(qX, qY, rX, rY);
  line(qX, qY, tX, tY);
  line(hX, hY, mX, mY);
  line(rX, rY, mX, mY);
  line(mX, mY, tX, tY);
  pop();
  
  push();
  textFont(mono);
  textSize(width/110);
  fill(0, 0, 255);
  text('U+0041',aX+37, aY-37);
  text('U+0046',fX+37, fY-37);
  text('U+004B',kX+37, kY-37);
  text('U+0042',bX+37, bY-37);
  text('U+005A',zX+37, zY-37);
  text('U+0056',vX+37, vY-37);
  text('U+0045',eX+37, eY-37);
  text('U+0052',rX-13, rY+2);
  text('U+0043',cX-13, cY+2);
  text('U+0054',tX-13, tY+2);
  text('U+0048',hX-13, hY+2);
  text('U+0051',qX-13, qY+2);
  text('U+004D',mX-13, mY+2);
  pop();
  
  //A
  if(aX < 0){//off the left of the screen
    aDirectionX = aDirectionX*-1;
  }
  
  if(aX > width-60){//off the right of the screen
    aDirectionX = aDirectionX*-1;
  }
  
  if(aY < 40){//off the top of the screen
    aDirectionY = aDirectionY*-1;
  }
  
  if(aY > height){//off the bottom of the screen
    aDirectionY = aDirectionY*-1;
  }
  
  //B
  if(bX < 0){//off the left of the screen
    bDirectionX = bDirectionX*-1;
  }
  
  if(bX > width-60){//off the right of the screen
    bDirectionX = bDirectionX*-1;
  }
  
  if(bY < 40){//off the top of the screen
    bDirectionY = bDirectionY*-1;
  }
  
  if(bY > height){//off the bottom of the screen
    bDirectionY = bDirectionY*-1;
  }
  
  //F
  if(fX < 0){//off the left of the screen
    fDirectionX = fDirectionX*-1;
  }
  
  if(fX > width-60){//off the right of the screen
    fDirectionX = fDirectionX*-1;
  }
  
  if(fY < 40){//off the top of the screen
    fDirectionY = fDirectionY*-1;
  }
  
  if(fY > height){//off the bottom of the screen
    fDirectionY = fDirectionY*-1;
  }
  
  //K
  if(kX < 0){//off the left of the screen
    kDirectionX = kDirectionX*-1;
  }
  
  if(kX > width-60){//off the right of the screen
    kDirectionX = kDirectionX*-1;
  }
  
  if(kY < 40){//off the top of the screen
    kDirectionY = kDirectionY*-1;
  }
  
  if(kY > height){//off the bottom of the screen
    kDirectionY = kDirectionY*-1;
  }
  
  //Z
  if(zX < 0){//off the left of the screen
    zDirectionX = zDirectionX*-1;
  }
  
  if(zX > width-60){//off the right of the screen
    zDirectionX = zDirectionX*-1;
  }
  
  if(zY < 40){//off the top of the screen
    zDirectionY = zDirectionY*-1;
  }
  
  if(zY > height){//off the bottom of the screen
    zDirectionY = zDirectionY*-1;
  }
  
  //V
  if(vX < 0){//off the left of the screen
    vDirectionX = vDirectionX*-1;
  }
  
  if(vX > width-60){//off the right of the screen
    vDirectionX = vDirectionX*-1;
  }
  
  if(vY < 40){//off the top of the screen
    vDirectionY = vDirectionY*-1;
  }
  
  if(vY > height){//off the bottom of the screen
    vDirectionY = vDirectionY*-1;
  }
  
  //E
  if(eX < 0){//off the left of the screen
    eDirectionX = eDirectionX*-1;
  }
  
  if(eX > width-60){//off the right of the screen
    eDirectionX = eDirectionX*-1;
  }
  
  if(eY < 40){//off the top of the screen
    eDirectionY = eDirectionY*-1;
  }
  
  if(eY > height){//off the bottom of the screen
    eDirectionY = eDirectionY*-1;
  }
  
  //R
  if(rX < 0){//off the left of the screen
    rDirectionX = rDirectionX*-1;
  }
  
  if(rX > width-60){//off the right of the screen
    rDirectionX = rDirectionX*-1;
  }
  
  if(rY < 40){//off the top of the screen
    rDirectionY = rDirectionY*-1;
  }
  
  if(rY > height){//off the bottom of the screen
    rDirectionY = rDirectionY*-1;
  }
  
  //C
  if(cX < 0){//off the left of the screen
    cDirectionX = cDirectionX*-1;
  }
  
  if(cX > width-60){//off the right of the screen
    cDirectionX = cDirectionX*-1;
  }
  
  if(cY < 40){//off the top of the screen
    cDirectionY = cDirectionY*-1;
  }
  
  if(cY > height){//off the bottom of the screen
    cDirectionY = cDirectionY*-1;
  }
  
  //T
  if(tX < 0){//off the left of the screen
    tDirectionX = tDirectionX*-1;
  }
  
  if(tX > width-60){//off the right of the screen
    tDirectionX = tDirectionX*-1;
  }
  
  if(tY < 40){//off the top of the screen
    tDirectionY = tDirectionY*-1;
  }
  
  if(tY > height){//off the bottom of the screen
    tDirectionY = tDirectionY*-1;
  }
  
  //H
  if(hX < 0){//off the left of the screen
    hDirectionX = hDirectionX*-1;
  }
  
  if(hX > width-60){//off the right of the screen
    hDirectionX = hDirectionX*-1;
  }
  
  if(hY < 40){//off the top of the screen
    hDirectionY = hDirectionY*-1;
  }
  
  if(hY > height){//off the bottom of the screen
    hDirectionY = hDirectionY*-1;
  }
  
  //Q
  if(qX < 0){//off the left of the screen
    qDirectionX = qDirectionX*-1;
  }
  
  if(qX > width-60){//off the right of the screen
    qDirectionX = qDirectionX*-1;
  }
  
  if(qY < 40){//off the top of the screen
    qDirectionY = qDirectionY*-1;
  }
  
  if(qY > height){//off the bottom of the screen
    qDirectionY = qDirectionY*-1;
  }
  
  //M
  if(mX < 0){//off the left of the screen
    mDirectionX = mDirectionX*-1;
  }
  
  if(mX > width-60){//off the right of the screen
    mDirectionX = mDirectionX*-1;
  }
  
  if(mY < 40){//off the top of the screen
    mDirectionY = mDirectionY*-1;
  }
  
  if(mY > height){//off the bottom of the screen
    mDirectionY = mDirectionY*-1;
  }
  
  push();
  blendMode(MULTIPLY);
  textFont(chatter);
  textSize(width/1.75);
  textAlign(CENTER);
  fill(255,255,0);
  text(key, width/2, height/2+height/4);
  pop();
  
  push();
  blendMode(MULTIPLY);
  textFont(chatter);
  textSize(width/1.75);
  textAlign(CENTER);
  fill(255,255,0);
  text(key, width/2, height/2+height/2.8);
  pop();
  
  push();
  blendMode(OVERLAY);
  textFont(chatter);
  textSize(width/1.5);
  textAlign(CENTER);
  fill(255,255,0);
  text(key, width/2, height/2+height/4);
  pop();
  
  push();
  blendMode(DIFFERENCE);
  textFont(chatter);
  textSize(width/2);
  textAlign(CENTER);
  fill(255,255,0);
  text(key, width/2, height/2+height/4);
  pop();
  
}

function keyTyped(){

 message.push(new words (xposition, yposition, 70, key, 1));

 xposition+=15;
 yposition=20;
 
 if(xposition>width-width/4){
 message=[];
 xposition = 10;
 yposition = 20;
 }
 }



class words {

 constructor(x, y, size, letter, speed){

  this.x= x;

  this.y= y;

  this.textSize=size;

  this.letter=letter;

  this.speed=speed;
 }
 
 display() {

  textSize(20);

  text(this.letter, this.x, this.y);

 }
 }
 
 function keyPressed(){

 if (keyCode === LEFT_ARROW){

  message=[];
  xposition = 10;
  yposition = 20;

 }
 
 if (keyCode === UP_ARROW){
 radio.stop();
 }
 
 if (keyCode === DOWN_ARROW){
 radio.loop();
 }
 
 }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
