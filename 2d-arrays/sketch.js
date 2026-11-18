// 2d Arrays Multiplayer Connect Four
// Tyler Lam
// November 16, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = "notPlaying";
let font;
let rows, columns, cellSize;

async function setup() {
  createCanvas(1000, 800);
  jungleFont = await loadFont("jungle.otf");
}

function draw() {
  if (gameState === "notPlaying") {
    startScreen();
  }
  else if (gameState === "Playing") {
    drawGameBoard();
  }
}

function startScreen() {
  background("gray")
  textAlign(CENTER, CENTER);
  textSize(70);
  textFont(jungleFont);
  text("2 Player Game: Press 2", 450, 700*0.25);
  text("3 Player Game: Press 3", 450, 700/2);
  text("4 Player Game: Press 4", 450, 700*0.75);
}

function drawGameBoard() {
  background("gray")
  for (let i=0;i<rows;i++) {
    for (let j=0;j<columns;j++) {
      fill("white")
      ellipse(cellSize/2 + i*cellSize, cellSize/2 + j*cellSize, cellSize , cellSize);
    }
  }
}

function keyPressed() {
  if (key === "2") {
    rows = 7;
    columns = 6;
    cellSize = 132;
    gameState = "Playing";
  }
  else if (key === "3") {
    rows = 10;
    columns = 8;
    cellSize = 100;
    gameState = "Playing";
  }
  else if (key === "4") {
    rows = 12;
    columns = 10;
    cellSize = 80
    gameState = "Playing";
  }

}
