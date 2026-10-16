// Arrays and object notation
// Tyler Lam
// October 7, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, w, h, speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  w = 50;
  h = 100;
  speed = 3;
}

function draw() {
  background(220);
  moveCharacter();
  showCharacter();
}

function showCharacter() {
  fill("blue");
  rect(x, y, w, h);
}

function moveCharacter() {
  if (keyIsDown("w") || keyIsDown(UP_ARROW)) {
    y -= speed;
  }
  if (keyIsDown("s") || keyIsDown(DOWN_ARROW)) {
    y += speed;
  }
  if (keyIsDown("d") || keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }
  if (keyIsDown("a") || keyIsDown(LEFT_ARROW)) {  
    x -= speed;
  }
}
