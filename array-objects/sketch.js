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
let startBackground, playBackground, moleHole, clickToPlay, title, hammer;
let hammerScale = 0.25;
let holes = [];


async function setup() {
  createCanvas(1000, 750);
  startBackground = await loadImage('images/start_bg.png');
  playBackground = await loadImage('images/whackamole.png');
  moleHole = await loadImage('images/mole_hole.png');
  clickToPlay = await loadImage('images/click_to_play.png');
  title = await loadImage('images/title.png');
  hammer = await loadImage('images/hammer.png');
  noCursor(); 
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
  push();
  imageMode(CENTER);
  image(hammer, mouseX, mouseY, hammer.width * hammerScale, hammer.height * hammerScale);
  pop();
}

function createHoles() {
  holes.push({moleX: 300, moleY: 370});
  holes.push({moleX: 550, moleY: 370});
  holes.push({moleX: 150, moleY: 500});
  holes.push({moleX: 400, moleY: 500});
  holes.push({moleX: 650, moleY: 500});
  holes.push({moleX: 270, moleY: 630});
  holes.push({moleX: 520, moleY: 630});
}

function pushHoles() {
  for (let hole of holes) {
    
  }
}


function mousePressed() {
  if (gameState === "notPlaying") {
    gameState = "playing";
  }
}
