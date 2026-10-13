// Collision Demo

let hit = false;
let pepsi;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  pepsi = await loadImage("images/pepsi.webp");
  imageMode(CENTER);
  noStroke();
}

function draw() {
  background(255);

  hit = collideRectCircle(300, 400, 200, 150, mouseX, mouseY, 100);

  if (hit) {
    fill("red");
  }
  else {
    fill("black");
  }

  image(pepsi, mouseX, mouseY, 100, 100);
  rect(300, 400, 200, 150);
}