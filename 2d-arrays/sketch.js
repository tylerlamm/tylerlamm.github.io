// 2d Arrays Multiplayer Connect Four
// Tyler Lam
// November 16, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = "notPlaying";
let font;
let rows, columns, cellSize;
let canvasWidth, canvasHeight;

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
  background("gray");
  textAlign(CENTER, CENTER);
  textSize(70);
  textFont(jungleFont);
  text("2 Player Game: Press 2", 450, 700*0.25);
  text("3 Player Game: Press 3", 450, 700/2);
  text("4 Player Game: Press 4", 450, 700*0.75);
}

function drawGameBoard() {
  background("black");
  for (let i=0;i<rows;i++) {
    for (let j=0;j<columns;j++) {
      fill("white");
      ellipse(cellSize/2 + i*cellSize, cellSize/2 + j*cellSize, cellSize , cellSize);
    }
  }
}

function dropChip() {
  // let emptyGrid = [];
  // for (let y = 0; y < columns; y++) {
  //   emptyGrid.push([]);
  //   for (let x = 0; x < rows; x++) {
  //     emptyGrid[y].push(0);
  //   }
  // }
  // return emptyGrid;
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  console.log(x, y);
  
}

function keyPressed() {
  if (key === "2") { 
    rows = 7;
    columns = 6;
    cellSize = 130;
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
    cellSize = 80;
    gameState = "Playing";
  }

}
