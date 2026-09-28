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
  bg = await loadImage('images/plains.png');
  font = await loadFont('fonts/Pixel Game.otf');
  cookie = await loadImage('images/cookie.png');
}

function draw() {
  background(bg);
  mainTitle();
  spawnCookie();
  //background with title "click the cookie"
  //have cookie spawn somewhere on the screen
  //number of times clicked showing somewhere
  //if cookie clicked +1 to number
}

function mainTitle() {
  textSize(80);
  fill(0);
  textAlign(CENTER, CENTER);
  textFont(font);
  text("click the cookie!", windowWidth/2, windowHeight/8);
}

function showCookie() {
  image(cookie, 50, 50, cookie.width * cookieScale, cookie.height * cookieScale);
} 