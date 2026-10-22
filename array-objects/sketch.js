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
let startBackground, playBackground, moleHole, clickToPlay, title;

async function setup() {
  createCanvas(1000, 750);
  startBackground = await loadImage('images/start_bg.png');
  playBackground = await loadImage('images/whackamole.png');
  moleHole = await loadImage('images/mole_hole.png');
  clickToPlay = await loadImage('images/click_to_play.png');
  title = await loadImage('images/title.png');
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
  image(title, 500, 100);
  image(clickToPlay, 500, 320);
  image(moleHole, 500, 550);
  pop();
}

function playScreen() {
  background(playBackground);
  line(0, 0, 520, 630);
}

function pushMole() {
  let hole1 = {
    moleX: 300,
    moleY: 370
  };

  let hole2 = {
    moleX: 550,
    moleY: 370
  };

  let hole3 = {
    moleX: 150,
    moleY: 500
  };

  let hole4 = {
    moleX: 400,
    moleY: 500
  };

  let hole5 = {
    moleX: 650,
    moleY: 500
  };
  
  let hole6 = {
    moleX: 270,
    moleY: 630
  };

  let hole7 = {
    moleX: 520,
    moleY: 630
  };

  let holes = [hole1, hole2, hole3, hole4, hole5, hole6, hole7];
  
  for (let hole of random(holes)) {
    
  }
}

function mousePressed() {
  if (gameState === "notPlaying") {
    gameState = "playing";
  }
}
