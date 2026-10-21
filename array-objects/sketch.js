// Arrays and object notation
// Tyler Lam
// October 7, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, w, h, speed, shared;
let time = 0;
let deltatime = 0.01;
const TIME_OFFSET = 100000;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  let shared;
  await partyConnect("wss://demoserver.p5party.org", "array-objects");
  shared = await partyLoadShared("shared", { x: 100, y: 100 });
  noStroke();
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  w = 50; 
  h = 100;
  speed = 10;
}

function draw() {
  background(220);
  moveCharacter();
  showCharacter();
  let x = noise(time) * width;
  let y = noise(time + TIME_OFFSET) * height;
  fill("black");
  circle(x, y, 50);

  time += deltatime;
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
