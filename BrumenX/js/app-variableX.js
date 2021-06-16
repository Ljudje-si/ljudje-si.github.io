console.log("app connected")

var x_widht = 200
var canvasHeight = window.innerHeight
var canvasWidth = window.innerWidth
var canvasHeightMargin = 0
var canvasWidthMargin = 0

var tangesTop = canvasHeight / canvasWidth
var tangesBot = canvasWidth / canvasHeight

var paddingHor = (x_widht / 2) / (Math.sin(Math.atan(tangesTop)))
var paddingVer = (x_widht / 2) / (Math.sin(Math.atan(tangesBot)))

var animatedObjects = []

// empty triangles set-up
// top
var etT_1_x = paddingHor + canvasWidthMargin
var etT_1_y = canvasHeightMargin

var etT_2_x = canvasWidth - paddingHor - canvasWidthMargin
var etT_2_y = canvasHeightMargin

var etT_3_x = canvasWidth / 2
var etT_3_y = (tangesTop * ((canvasWidth - (2 * (paddingHor + canvasWidthMargin))) / 2)) + canvasHeightMargin

//right

var etR_1_x = canvasWidth - canvasWidthMargin
var etR_1_y = paddingVer + canvasHeightMargin

var etR_2_x = canvasWidth - canvasWidthMargin
var etR_2_y = canvasHeight - paddingVer - canvasHeightMargin

var etR_3_x = canvasWidth - (((canvasHeight - (2 * (paddingVer + canvasHeightMargin))) / 2) * tangesBot) - canvasWidthMargin
var etR_3_y = canvasHeight / 2

//left

var etL_1_x = canvasWidthMargin
var etL_1_y = paddingVer + canvasHeightMargin

var etL_2_x = canvasWidthMargin
var etL_2_y = canvasHeight - paddingVer - canvasHeightMargin

var etL_3_x = (((canvasHeight - (2 * (paddingVer + canvasHeightMargin))) / 2) * tangesBot) + canvasWidthMargin
var etL_3_y = canvasHeight / 2

//bottom

var etB_1_x = paddingHor + canvasWidthMargin
var etB_1_y = canvasHeight - canvasHeightMargin

var etB_2_x = canvasWidth - paddingHor - canvasWidthMargin
var etB_2_y = canvasHeight - canvasHeightMargin

var etB_3_x = canvasWidth / 2
var etB_3_y = canvasHeight - (tangesTop * ((canvasWidth - (2 * (paddingHor + canvasWidthMargin))) / 2))

// limits
var etT_3_y_org = tangesTop * ((canvasWidth - (2 * paddingHor)) / 2)
var etL_3_x_org = ((canvasHeight - (2 * paddingVer)) / 2) * tangesBot


// setup

function setup() {

  createCanvas(canvasWidth, canvasHeight);
  frameRate(300)
  strokeWeight(5);
  background(0);
  document.getElementById("defaultCanvas0").style.display = "block"

  strokeWeight(5);
  stroke(255);
  line(canvasWidthMargin, canvasHeight - canvasHeightMargin, canvasWidth - canvasWidthMargin, canvasHeightMargin);
  line(canvasWidthMargin, canvasHeightMargin, canvasWidth - canvasWidthMargin, canvasHeight - canvasHeightMargin);

  fill(random(255), random(255), random(255))
  noStroke()
  triangle(etT_1_x, etT_1_y, etT_2_x, etT_2_y, etT_3_x, etT_3_y);
  triangle(etR_1_x, etR_1_y, etR_2_x, etR_2_y, etR_3_x, etR_3_y);
  triangle(etL_1_x, etL_1_y, etL_2_x, etL_2_y, etL_3_x, etL_3_y);
  triangle(etB_1_x, etB_1_y, etB_2_x, etB_2_y, etB_3_x, etB_3_y);

}

function changeX() {

  x_widht = random(200)
  canvasWidthMargin = random(etL_3_x_org - x_widht)
  console.log("canvasWidthMargin: " + canvasWidthMargin)
  canvasHeightMargin = random(etT_3_y_org - x_widht)
  console.log("canvasHeightMargin: " + canvasHeightMargin)

  etT_1_x = paddingHor + canvasWidthMargin
  etT_1_y = canvasHeightMargin

  etT_2_x = canvasWidth - paddingHor - canvasWidthMargin
  etT_2_y = canvasHeightMargin

  etT_3_x = canvasWidth / 2
  etT_3_y = (tangesTop * ((canvasWidth - (2 * (paddingHor + canvasWidthMargin))) / 2)) + canvasHeightMargin

  //right

  etR_1_x = canvasWidth - canvasWidthMargin
  etR_1_y = paddingVer + canvasHeightMargin

  etR_2_x = canvasWidth - canvasWidthMargin
  etR_2_y = canvasHeight - paddingVer - canvasHeightMargin

  etR_3_x = canvasWidth - (((canvasHeight - (2 * (paddingVer + canvasHeightMargin))) / 2) * tangesBot) - canvasWidthMargin
  etR_3_y = canvasHeight / 2

  //left

  etL_1_x = canvasWidthMargin
  etL_1_y = paddingVer + canvasHeightMargin

  etL_2_x = canvasWidthMargin
  etL_2_y = canvasHeight - paddingVer - canvasHeightMargin

  etL_3_x = (((canvasHeight - (2 * (paddingVer + canvasHeightMargin))) / 2) * tangesBot) + canvasWidthMargin
  etL_3_y = canvasHeight / 2

  //bottom

  etB_1_x = paddingHor + canvasWidthMargin
  etB_1_y = canvasHeight - canvasHeightMargin

  etB_2_x = canvasWidth - paddingHor - canvasWidthMargin
  etB_2_y = canvasHeight - canvasHeightMargin

  etB_3_x = canvasWidth / 2
  etB_3_y = canvasHeight - (tangesTop * ((canvasWidth - (2 * (paddingHor + canvasWidthMargin))) / 2)) - canvasHeightMargin

  fill(random(255), random(255), random(255))
  noStroke()
  triangle(etT_1_x, etT_1_y, etT_2_x, etT_2_y, etT_3_x, etT_3_y);
  triangle(etR_1_x, etR_1_y, etR_2_x, etR_2_y, etR_3_x, etR_3_y);
  triangle(etL_1_x, etL_1_y, etL_2_x, etL_2_y, etL_3_x, etL_3_y);
  triangle(etB_1_x, etB_1_y, etB_2_x, etB_2_y, etB_3_x, etB_3_y);

}

// draws

function draw() {

  strokeWeight(5);
  stroke(255);
  line(canvasWidthMargin, canvasHeight - canvasHeightMargin, canvasWidth - canvasWidthMargin, canvasHeightMargin);
  line(canvasWidthMargin, canvasHeightMargin, canvasWidth - canvasWidthMargin, canvasHeight - canvasHeightMargin);

  changeX()
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

