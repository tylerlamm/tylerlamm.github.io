// Square moving around edge of screen
let x = 0;
let y = 0;
let speed = 10;
let size = 50;
let state = "right";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  move();
  display();
}

function move() {
  if (state === "right") {
    x += speed;
    if (x >= width - size) {
      x = width - size; 
      state = "down";
    }
  }
  else if (state === "down") {
    y += speed;
    if (y >= height - size) { 
      y = height - size; 
      state = "left"; 
    }
  }
  else if (state === "left") {
    x -= speed;
    if (x <= 0) {
      x = 0;
      state = "up";
    }
  }
  else if (state === "up") {
    y -= speed;
    if (y <= 0) {
      y = 0;
      state = "right";
    }
  }
}

function display() {
  fill(0);
  square(x, y, size);
}