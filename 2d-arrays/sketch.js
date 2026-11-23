// 2d Arrays Multiplayer Connect Four
// Tyler Lam
// November 16, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameState = "notPlaying"; // "not playing" = start screen, "playing" = in game, "won" = game over
let font;
let rows, columns, cellSize;
let board = []; //0 = empty, 1 = player 1, 2 = player 2...
let playerColors = ["white", "red", "yellow", "blue", "green"];
let currentPlayer = 1;
let numPlayers;
let topBar = 80;

async function setup() {
  createCanvas(1000, 800);
  jungleFont = await loadFont("jungle.otf");
}

function draw() {
  if (gameState === "notPlaying") {
    startScreen();
  }
  else if (gameState === "Playing" || gameState === "won") {
    drawGameBoard();
  }
}

function startScreen() {
  // menu to pick 2, 3, 4 players
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
      ellipse(cellSize/2 + c*cellSize, topBar + cellSize/2 + r*cellSize, cellSize , cellSize);
    }
  }
  fill(playerColors[currentPlayer]);
  stroke("black");
  strokeWeight(4);
  textSize(50);
  if (gameState === "won") {
    text("Player " + currentPlayer + " Wins!", width / 2, topBar / 2);
  }
  else {
  text("Player " + currentPlayer + "'s Turn", width / 2, topBar / 2);
  }
  strokeWeight(1);
}

function checkWin(player) {
  // 4 ways a player can win: horizonatal, vertical, diagonal right, diagonal left
  let directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] !== player) {
        continue;
      }
      for (let d of directions) {
        let dr = d[0];
        let dc = d[1];
        // where the 4th piece would be
        let endR = r + 3 * dr;
        let endC = c + 3 * dc;
        // skip if the line would go off board
        if (endR < 0 || endR >= rows || endC < 0 || endC >= columns) {
          continue;
        }
        // check next 3 spots in this direction
        if (board[r + dr][c + dc] === player &&
            board[r + 2 * dr][c + 2 * dc] === player &&
            board[r + 3 * dr][c + 3 * dc] === player) {
          return true;
        }
      }
    }
  }
  return false;
}

function keyPressed() {
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
        if (checkWin(currentPlayer)) {
          gameState = "won";
        }
        else {
          currentPlayer++;
          if (currentPlayer > numPlayers) {
          currentPlayer = 1;
          }
        }
        break;
      }
    }
  }
}

function startGame() {
  createBoard();
  resizeCanvas(columns * cellSize, rows * cellSize + topBar);
  gameState = "Playing";
  currentPlayer = 1;
}