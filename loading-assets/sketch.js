// Loading images and sounds

let zombieImg;
let zombieSound;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  zombieImg = await loadImage('zombie.png');
  zombieSound = await loadSound('zombie-1.wav');
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(zombieImg, width/2, height/2);
}

function mousePressed() {
  zombieSound.play();
}