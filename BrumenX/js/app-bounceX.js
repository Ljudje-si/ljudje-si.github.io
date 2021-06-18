console.log("app connected")

var canvasHeight = window.innerHeight
var canvasWidth = window.innerWidth

var bounceX = 50;
var bounceSpeedX = 5;
var bounceY = 50;
var bounceSpeedY = 5;

var bounceXSize = 24
var bounceXWeight = 5

// setup

function setup() {

  createCanvas(canvasWidth, canvasHeight);
  frameRate(300)
  strokeWeight(bounceXWeight);
  background(0);
  document.getElementById("defaultCanvas0").style.display = "block"

  rectMode(CENTER);

}

function brumenLogo() {

  noStroke()

  circle(2 + bounceX, 2 + bounceY, 4)
  circle(7 + bounceX, 2 + bounceY, 4)
  circle(12 + bounceX, 2 + bounceY, 4)
  circle(17 + bounceX, 2 + bounceY, 4)

  circle(2 + bounceX, 7 + bounceY, 4)
  circle(7 + bounceX, 7 + bounceY, 4)
  circle(12 + bounceX, 7 + bounceY, 4)
  circle(17 + bounceX, 7 + bounceY, 4)

  circle(2 + bounceX, 12 + bounceY, 4)
  circle(7 + bounceX, 12 + bounceY, 4)
  circle(12 + bounceX, 12 + bounceY, 4)
  circle(17 + bounceX, 12 + bounceY, 4)
  circle(22 + bounceX, 12 + bounceY, 4)
  circle(27 + bounceX, 12 + bounceY, 4)
  circle(32 + bounceX, 12 + bounceY, 4)
  circle(37 + bounceX, 12 + bounceY, 4)

  circle(2 + bounceX, 17 + bounceY, 4)
  circle(7 + bounceX, 17 + bounceY, 4)
  circle(12 + bounceX, 17 + bounceY, 4)
  circle(17 + bounceX, 17 + bounceY, 4)
  circle(32 + bounceX, 17 + bounceY, 4)
  circle(37 + bounceX, 17 + bounceY, 4)

  circle(2 + bounceX, 22 + bounceY, 4)
  circle(7 + bounceX, 22 + bounceY, 4)
  circle(12 + bounceX, 22 + bounceY, 4)
  circle(17 + bounceX, 22 + bounceY, 4)
  circle(32 + bounceX, 22 + bounceY, 4)
  circle(37 + bounceX, 22 + bounceY, 4)

  circle(2 + bounceX, 27 + bounceY, 4)
  circle(7 + bounceX, 27 + bounceY, 4)
  circle(12 + bounceX, 27 + bounceY, 4)
  circle(17 + bounceX, 27 + bounceY, 4)
  circle(22 + bounceX, 27 + bounceY, 4)
  circle(27 + bounceX, 27 + bounceY, 4)
  circle(32 + bounceX, 27 + bounceY, 4)
  circle(37 + bounceX, 27 + bounceY, 4)

  circle(2 + bounceX, 32 + bounceY, 4)
  circle(7 + bounceX, 32 + bounceY, 4)
  circle(12 + bounceX, 32 + bounceY, 4)
  circle(17 + bounceX, 32 + bounceY, 4)
  circle(22 + bounceX, 32 + bounceY, 4)
  circle(27 + bounceX, 32 + bounceY, 4)
  circle(32 + bounceX, 32 + bounceY, 4)
  circle(37 + bounceX, 32 + bounceY, 4)

  circle(2 + bounceX, 37 + bounceY, 4)
  circle(7 + bounceX, 37 + bounceY, 4)
  circle(12 + bounceX, 37 + bounceY, 4)
  circle(17 + bounceX, 37 + bounceY, 4)
  circle(22 + bounceX, 37 + bounceY, 4)
  circle(27 + bounceX, 37 + bounceY, 4)
  circle(32 + bounceX, 37 + bounceY, 4)
  circle(37 + bounceX, 37 + bounceY, 4)
}

// draws

function draw() {


  strokeCap(SQUARE);
  strokeWeight(bounceXWeight);

  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255))
  /* line(bounceX, bounceY, bounceX - (bounceXSize / 2), bounceY + (bounceXSize / 2))
  line(bounceX, bounceY, bounceX + (bounceXSize / 2), bounceY - (bounceXSize / 2))
  line(bounceX, bounceY, bounceX - (bounceXSize / 2), bounceY - (bounceXSize / 2))
  line(bounceX, bounceY, bounceX + (bounceXSize / 2), bounceY + (bounceXSize / 2)) */

  brumenLogo()


  bounceX = bounceX + bounceSpeedX;
  bounceY = bounceY + bounceSpeedY;

  if (bounceX > canvasWidth - bounceXSize - 18) {
    bounceSpeedX = -5;
    //bounceXSize = random(100)
    bounceXWeight = random(50)
  }

  if (bounceX < bounceXSize - 18) {
    bounceSpeedX = 5;
    color(0, 0, 0, 0)
    //bounceXSize = random(100)
    bounceXWeight = random(50)
  }

  if (bounceY > canvasHeight - bounceXSize - 18) {
    bounceSpeedY = -5;
    color(0, 0, 0, 0)
    //bounceXSize = random(100)
    bounceXWeight = random(50)
  }

  if (bounceY < bounceXSize - 18) {
    bounceSpeedY = 5;
    color(0, 0, 0, 0)
    //bounceXSize = random(100)
    bounceXWeight = random(50)
  }

}

function keyPressed() {
  console.log("drawing stopped")
  noLoop();
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop()
}

