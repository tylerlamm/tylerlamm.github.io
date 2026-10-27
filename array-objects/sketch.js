// Arrays and object notation
// Tyler Lam
// October 7, 2026
//
// Extra for Experts:
// - Change the cursor into a hammer
// - Moles stay up for a random time and wait in between. The moles are random using millis
// - Played with text
// - 2 second get ready delay at the start of the game

let gameState = "notPlaying";
let startBackground, playBackground, moleHole, clickToPlay, title, hammer, mole, bounceHouse, pixelGame;
let hammerScale = 0.5;
let moleScale = 0.8;
let score = 0;
let nextMoleTime = 0;
let holes = [];
let lives = 3;
let moleTime = 750;

async function setup() {
  createCanvas(1000, 750);
  startBackground = await loadImage('images/start_bg.png');
  playBackground = await loadImage('images/whackamole.png');
  moleHole = await loadImage('images/mole_hole.png');
  hammer = await loadImage('images/hammer.png');
  mole = await loadImage('images/mole.png');
  bounceHouse = await loadFont('fonts/bounce-house-regular.otf');
  pixelGame = await loadFont('fonts/pixelgame.otf');
  noCursor();
  createHoles();
}

function draw() {
  if (gameState === "notPlaying") {
    startScreen();
  }
  else if (gameState === "playing") {
    playScreen();
  }
  else if (gameState === "gameOver") {
    gameOverScreen();
  }
}

function startScreen() {
  background(startBackground);
  push();
  imageMode(CENTER);
  image(moleHole, 500, 550);
  textAlign(CENTER);
  textFont(bounceHouse);
  textSize(60);
  text("Click to play!", 500, 400);
  textSize(100);
  text("WHACK-A-MOLE", 500, 200);
  pop();
}

function playScreen() {
  background(playBackground);
  drawHoles();
  updateMoles()
  drawMoles()
  showScore();
  push();
  imageMode(CENTER)
  image(hammer, mouseX, mouseY, hammer.width * hammerScale, hammer.height * hammerScale);
  pop();
}

function gameOverScreen() {
  background(playBackground);
  push();
  fill(255);
  stroke(0);
  strokeWeight(6);
  textAlign(CENTER);  
  textSize(70);
  text("GAME OVER", 500, 300);
  textSize(40);
  text("Score: " + score, 500, 370);
  text("Click to play again", 500, 440);
  pop();
}

function createHoles() {
  holes.push({holeX: 375, holeY: 400, holeW: 130, holeH: 50, moleUp: false, moleUpTime: 0});
  holes.push({holeX: 625, holeY: 400, holeW: 130, holeH: 50, moleUp: false, moleUpTime: 0});
  holes.push({holeX: 250, holeY: 525, holeW: 135, holeH: 55, moleUp: false, moleUpTime: 0});
  holes.push({holeX: 500, holeY: 525, holeW: 135, holeH: 55, moleUp: false, moleUpTime: 0});
  holes.push({holeX: 750, holeY: 525, holeW: 135, holeH: 55, moleUp: false, moleUpTime: 0});
  holes.push({holeX: 375, holeY: 660, holeW: 150, holeH: 55, moleUp: false, moleUpTime: 0});
  holes.push({holeX: 625, holeY: 660, holeW: 150, holeH: 55, moleUp: false, moleUpTime: 0});
}

function drawHoles() {
  for (let hole of holes) {
    fill(0);
    ellipse(hole.holeX, hole.holeY, hole.holeW, hole.holeH);
  }
}

function updateMoles() {
  let anyMoleUp = false
//check every hole to see if any mole is up
  for (let hole of holes) {
    if (hole.moleUp) {
      anyMoleUp = true;
    }
  }
  //if no mole is up, pick random hole to put a mole in
  if (!anyMoleUp && millis() > nextMoleTime) {
    let pickedHole = random(holes);
    pickedHole.moleUp = true;
    pickedHole.moleUpTime = millis();
  }
//if a mole has been up for over a second, push it down
  for (let hole of holes) {
    if (hole.moleUp && millis() - hole.moleUpTime > moleTime){
      hole.moleUp = false;
      nextMoleTime = millis() + random(500, 1500);
      lives -= 1;
      if (lives <= 0) {
        gameState = "gameOver";
      }
    }
  }
}

function drawMoles() {
  for (let hole of holes) {
    if (hole.moleUp) {
      let moleW = mole.width * moleScale;
      let moleH = mole.height * moleScale;
      image(mole, hole.holeX - moleW / 2, hole.holeY - moleH, moleW, moleH);
    }
  }
}

function showScore() {
  fill(255);
  stroke(0);
  strokeWeight(4);
  textSize(60);
  textFont(pixelGame);
  text("Score: " + score, 30, 60);
  text("Lives: " + lives, 800, 60);
}

function mousePressed() {
  if (gameState === "notPlaying") {
    gameState = "playing";
    nextMoleTime = millis() + 2000;
  }
  else if (gameState === "playing") {
    for (let hole of holes) {
      if (hole.moleUp && dist(mouseX, mouseY, hole.holeX, hole.holeY - 60) < 55) {
        score += 1;
        hole.moleUp = false;
        nextMoleTime = millis() + random(500, 1500);
        moleTime = max(moleTime - 20, 350);
      }
    }
  }
  else if (gameState === "gameOver") {
    score = 0;
    lives = 3;
    moleTime = 750;
    gameState = "playing";
    nextMoleTime = millis() + 2000;
  }
}