// 2d Arrays Multiplayer Connect Four
// Tyler Lam
// November 16, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = notStarted;
let grid;
let font;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  bounceHouse = await loadFont("bounce-house-regular.otf");
}

function draw() {
  startScreen();
  drawGameBoard();
}

function startScreen() {
  background(0, 150, 150);

  textAlign(CENTER, CENTER);
  textSize(70);
  textFont(bounceHouse);
  text("2 Player Game: Press 2", width/2, height * 0.25);
  text("3 Player Game: Press 3", width/2, height/2);
  text("4 Player Game: Press 4", width/2, height * 0.75);
}

function drawGameBoard() {
  for (let x = 0;x < grid;x++) {

  }
}

function keyPressed() {
  if (keyPressed === "2") {
    //make game board 7x6
  }
  if (keyPressed === "2") {
    //make game board 7x6
  }
  if (keyPressed === "2") {
    //make game board 7x6
  }
}