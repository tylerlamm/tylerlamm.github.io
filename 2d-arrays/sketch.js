// 2d Arrays Multiplayer Connect Four
// Tyler Lam
// November 16, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = notStarted;
let grid, font, cellSize;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  jungleFont = await loadFont("jungle.otf");
}

function draw() {
  startScreen();
  drawGameBoard();
}

function startScreen() {
  background(0, 150, 120);
  textAlign(CENTER, CENTER);
  textSize(70);
  textFont(jungleFont);
  text("2 Player Game: Press 2", width/2, height*0.25);
  text("3 Player Game: Press 3", width/2, height/2);
  text("4 Player Game: Press 4", width/2, height*0.75);
}

function drawGameBoard() {
  let gameBoardArray= [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (keyPressed === '2') {

      }
      else if (grid[y][x] === 1) {
        fill('black');
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}
