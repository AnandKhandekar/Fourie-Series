time  = 0;
wave = [];
history = [];


let slider;

function setup() {
  createCanvas(800, 400);
  slider = createSlider (1, 10, 1);
}

function draw() {
  background(150);
  translate(100,200);
 
  
  let x = 0;
  let y = 0;
  
  for(let i=0; i< slider.value(); i++){
    let prevx = x;
    let prevy = y;
    
    let n = 2 * i + 1 ;
    let radius = 75 * ( 4/ ( n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    
 
  stroke(25,150,10);
  noFill();
  ellipse(prevx,prevy,radius*2);
  
  //fill(255);
  stroke(5,0,100);
  strokeWeight(1);
  line(prevx,prevy,x,y);
  stroke(255,0,0);
  strokeWeight(1);
  ellipse(x,y,8);
   
  var v = createVector(x-200,y);

 
   } 
  
  wave.unshift(y);
  
  
  translate(200,0);
  line(x-200,y,0, wave[0]);
  
  beginShape();
  for(i=0;i<wave.length;i++){
    stroke(255,204,0);
    strokeWeight(4);
    vertex(i,wave[i]);
  }
    endShape();
  

  time += 0.03;
}  
  if(wave.length >500){
    wave.pop();
  }  