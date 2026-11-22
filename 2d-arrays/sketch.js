// 2d Arrays Multiplayer Connect Four
// Tyler Lam
// November 16, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = "notPlaying";
let font;
let rows, columns, cellSize;
let board = []; //0 = empty, 1 = player 1, 2 = player 2...
let playerColors = ["white", "red", "yellow", "blue", "green"];
let currentPlayer = 1;
let numPlayers;

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

function createBoard() {
  board = [];
  for (let r = 0; r < rows; r++) {
    let newRow = [];
    for (let c = 0; c < columns; c++) {
      newRow.push(0);
    }
    board.push(newRow);
  }
}

function drawGameBoard() {
  background("gray")
  for (let r=0;r<rows;r++) {
    for (let c=0;c<columns;c++) {
      fill(playerColors[board[r][c]]); //color depends on whats in that spot
      ellipse(cellSize/2 + c*cellSize, cellSize/2 + r*cellSize, cellSize , cellSize);
    }
  }
}

function keyPressed() {
  // column and row size depending on how many players
  if (key === "2") {
    numPlayers = 2;
    rows = 6;
    columns = 7;
    cellSize = 132;
    startGame();
  }
  else if (key === "3") {
    numPlayers = 3;
    rows = 8;
    columns = 10;
    cellSize = 100;
    startGame();
  }
  else if (key === "4") {
    numPlayers = 4;
    rows = 10;
    columns = 12;
    cellSize = 80
    startGame();
  }

}

function mousePressed() {
  if (gameState === "Playing") {
    // which column was clicked
    let c = floor(mouseX / cellSize);

    // ignore click outside the board
    if (c < 0 || c >= columns) {
      return;
    }

    // start at bottom row and move up until theres an empty spot
    for (let r = rows - 1; r >= 0; r--) {
      if (board[r][c] === 0) {
        board[r][c] = currentPlayer;
        currentPlayer++;
          if (currentPlayer > numPlayers) {
            currentPlayer = 1;
          }
        break;
      }
    }
  }
}

function startGame() {
  createBoard();
  resizeCanvas(columns * cellSize, rows * cellSize);
  gameState = "Playing";
  currentPlayer = 1;
}