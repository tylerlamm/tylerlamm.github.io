// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 20;
    this.diameter = 20;
    this.color = "red";
  }

  display() {
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed;
    }
  }
}

let deans;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  deans = new Walker(width/2, height/2);
  tyler = new Walker(300, 400);
  tyler.color = "green";
  noStroke();
}

function draw() {
  deans.move();
  tyler.move();
  deans.display();
  tyler.display();
}
