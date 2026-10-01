// Interactive Scene: Random Cookie Clicker
// Tyler Lam
// September 22, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let startBackground;
let playBackground;
let font;
let cookie;
let cookieScale = 0.4;
let gameState = "notPlaying";
let score;
let cookieX;
let cookieY;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  startBackground = await loadImage('images/plains.png');
  playBackground = await loadImage('images/bakery.jpg');
  font = await loadFont('fonts/pixelgame.otf');
  cookie = await loadImage('images/cookie.png');
  cookieX = random(windowWidth - cookie.width * cookieScale);
  cookieY = random(windowHeight - cookie.height * cookieScale);
}

function draw() {
  if (gameState === "notPlaying") {
    startScreen();
  }
  else if (gameState === "playing") {
    startGame();
  }
  //Start screen with "press to play" If the mouse is pressed inside this
  //"Press to play," then move get rid of it
  //background with title "click the cookie" + score count so 0 at first
  //have cookie spawn somewhere on the screen
  //once first cookie is clicked get rid of "click the cookie"
  //if cookie clicked +1 to score count
  //press "r" to reset score and go back to press to play screen
}

function startScreen() {
  background(startBackground);
  randomCookieClicker();
  pressToPlay();
}

function pressToPlay() {
  let msg = "Press To Play";
  let startX = windowWidth/2;
  let startY = windowHeight/2;
  textSize(windowWidth/20);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(font);
  text(msg, startX, startY);
  let tWidth = textWidth(msg) + 20;
  let tHeight = textSize();
  noFill();
  strokeWeight(tHeight/10);
  rect(startX, startY, tWidth, tHeight);
  if (mouseIsPressed && mouseX > startX - tWidth/2 && mouseX < startX + tWidth/2 && mouseY > startY - tHeight/2 && mouseY < startY + tHeight/2) {
    gameState = "playing";
  }
}

function randomCookieClicker() {
  textSize(windowWidth/10);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(font);
  text("RANDOM COOKIE CLICKER", windowWidth/2, windowHeight/4);
}

function startGame() {
  background(playBackground);
  scoreCount();
  spawnCookie();
}

function spawnCookie() {
  image(cookie, cookieX, cookieY, cookie.width * cookieScale, cookie.height * cookieScale);
}

function scoreCount() {
  score = 0;
  textSize(windowWidth/20);
  stroke(0);
  fill(115, 100, 50);
  text("score: " + score, windowWidth/2, windowHeight/10);
}

function keyPressed() {
  if (key === 'r') {
    gameState = "notPlaying";
    score = 0;
  }
}