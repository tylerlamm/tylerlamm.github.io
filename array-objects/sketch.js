// Arrays and object notation
// Tyler Lam
// October 7, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//pseudo code:
//1. each hole is an object and put all the holes into an array
//2. pick randomly from that array then push out a mole
//3. if mole is clicked within the time limit, go back down. else go make it go back down itself
//4. game timer where at the end of the time, it shows a score 

let gameState = "notPlaying";
let startBackground, playBackground, moleHole, clickToPlay, title, hammer, mole;
let hammerScale = 0.25;
let holes = [];


async function setup() {
  createCanvas(1000, 750);
  startBackground = await loadImage('images/start_bg.png');
  playBackground = await loadImage('images/whackamole.png');
  moleHole = await loadImage('images/mole_hole.png');
  hammer = await loadImage('images/hammer.png');
  mole = await loadImage('images/mole.png');
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
}

function startScreen() {
  background(startBackground);
  push();
  imageMode(CENTER);
  image(moleHole, 500, 550);
  pop();
}

function playScreen() {
  background(playBackground);
  push();
  imageMode(CENTER);
  image(hammer, mouseX, mouseY, hammer.width * hammerScale, hammer.height * hammerScale);
  pop();
  drawHoles();
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
}

function mousePressed() {
  if (gameState === "notPlaying") {
    gameState = "playing";
  }
}