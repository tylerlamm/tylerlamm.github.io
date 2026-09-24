// Interactive Scene: Random Cookie Clicker
// Tyler Lam
// September 22, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let bg;
let font;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = await loadImage('images/plains.png');
  font = await loadFont()
}

function draw() {
  background(bg);
  mainTitle();
  //background with title "click the cookie"
  //have cookie spawn somewhere on the screen
  //number of times clicked showing somewhere
  //if cookie clicked +1 to number
}

function mainTitle() {
  textSize(64);
  fill(0);
  textAlign(CENTER, CENTER)
  text("click the cookie!", windowWidth/2, windowHeight/6);
}