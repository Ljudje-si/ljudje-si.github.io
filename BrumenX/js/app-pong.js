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

// draws

function draw() {

  
  strokeCap(SQUARE);
  strokeWeight(bounceXWeight);

  fill(random(255), random(255), random(255));
  noStroke();
  stroke(random(255), random(255), random(255))
  line(bounceX, bounceY, bounceX - (bounceXSize / 2), bounceY + (bounceXSize / 2))
  line(bounceX, bounceY, bounceX + (bounceXSize / 2), bounceY - (bounceXSize / 2))
  line(bounceX, bounceY, bounceX - (bounceXSize / 2), bounceY - (bounceXSize / 2))
  line(bounceX, bounceY, bounceX + (bounceXSize / 2), bounceY + (bounceXSize / 2))

  bounceX = bounceX + bounceSpeedX;
  bounceY = bounceY + bounceSpeedY;

  if (bounceX > canvasWidth - bounceXSize) {
    bounceSpeedX = -6;
    bounceXSize = random(100)
    bounceXWeight = random(50)
  }

  if (bounceX < bounceXSize) {
    bounceSpeedX = 6;
    color(0, 0, 0, 0)
    bounceXSize = random(100)
    bounceXWeight = random(50)
  }

  if (bounceY > canvasHeight - bounceXSize) {
    bounceSpeedY = -5;
    color(0, 0, 0, 0)
    bounceXSize = random(100)
    bounceXWeight = random(50)
  }

  if (bounceY < bounceXSize) {
    bounceSpeedY = 5;
    color(0, 0, 0, 0)
    bounceXSize = random(100)
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

