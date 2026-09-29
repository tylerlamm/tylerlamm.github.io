// Interactive Scene: Random Cookie Clicker
// Tyler Lam
// September 22, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg;
let font;
let cookieScale = 0.5;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  bg = await loadImage('images/plains.png');
  font = await loadFont('fonts/Pixel Game.otf');
  cookie = await loadImage('images/cookie.png');
}

function draw() {
  background(bg);
  mainTitle();
  showCookie();
  //background with title "click the cookie"
  //have cookie spawn somewhere on the screen
  //number of times clicked showing somewhere
  //if cookie clicked +1 to number
}

function pressToPlay() {
  textSize(100);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(font);
  text("Press To Play", windowWidth/2, windowHeight/2);
}

function randomCookieClicker() {
  textSize(200);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(font);
  text("RANDOM COOKIE CLICKER", windowWidth/2, windowHeight/4);
}

function mainTitle() {
  randomCookieClicker();
  pressToPlay();
  let tWidth = textWidth(text);
  let tHeight = textSize();
  noFill();
  strokeWeight(8);
  rect(windowWidth/2, windowHeight/2, tWidth, tHeight);
}

function startGame() {

}

function showCookie() {
  image(cookie, windowWidth/2, windowHeight/2, cookie.width * cookieScale, cookie.height * cookieScale);
}