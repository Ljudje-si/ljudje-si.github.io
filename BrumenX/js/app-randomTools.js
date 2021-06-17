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


/* A utility function to calculate area of triangle formed by (x1, y1),
(x2, y2) and (x3, y3) */
function area(x1, y1, x2, y2, x3, y3) {
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

/* A function to check whether point P(x, y) lies inside the triangle formed
by A(x1, y1), B(x2, y2) and C(x3, y3) */
function isInside(x1, y1, x2, y2, x3, y3, x, y) {

  /* Calculate area of triangle ABC */
  let A = area(x1, y1, x2, y2, x3, y3);

  /* Calculate area of triangle PBC */
  let A1 = area(x, y, x2, y2, x3, y3);

  /* Calculate area of triangle PAC */
  let A2 = area(x1, y1, x, y, x3, y3);

  /* Calculate area of triangle PAB */
  let A3 = area(x1, y1, x2, y2, x, y);

  /* Check if sum of A1, A2 and A3 is same as A */
  return (10 > Math.abs(A - (A1 + A2 + A3)));
}

function isInsideX(l_x, l_y) {
  if (
    isInside(etT_1_x, etT_1_y, etT_2_x, etT_2_y, etT_3_x, etT_3_y, l_x, l_y) == true ||
    isInside(etR_1_x, etR_1_y, etR_2_x, etR_2_y, etR_3_x, etR_3_y, l_x, l_y) == true ||
    isInside(etL_1_x, etL_1_y, etL_2_x, etL_2_y, etL_3_x, etL_3_y, l_x, l_y) == true ||
    isInside(etB_1_x, etB_1_y, etB_2_x, etB_2_y, etB_3_x, etB_3_y, l_x, l_y) == true) {
    return true
  }
  else {
    return false
  }
}


// setup

function randomObjects(num) {

  for (i = 0; i < num; i++) {

    var d_x1 = random(canvasWidth)
    var d_y1 = random(canvasHeight)

    while (isInsideX(d_x1, d_y1)) {
      console.log("randomizing")
      d_x1 = random(canvasWidth)
      d_y1 = random(canvasHeight)
    }

    var drawing_options = ["blob", "line", "line_curved", "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle"]

    var drawing_option = drawing_options[Math.floor(Math.random() * drawing_options.length)];

    if (drawing_option == "circle") {
      noStroke()
      fill(random(255), random(255), random(255))
      circle(d_x1, d_y1, random(100))
    }

    if (drawing_option == "square") {
      noStroke()
      fill(random(255), random(255), random(255))
      var rectWidth = random(100)
      rect(d_x1, d_y1, rectWidth, rectWidth)
    }

    if (drawing_option == "square_round") {
      noStroke()
      fill(random(255), random(255), random(255))
      var rectWidth = random(100)
      var rectRound = random(100)
      rect(d_x1, d_y1, rectWidth, rectWidth, rectRound, rectRound, rectRound, rectRound)
    }

    if (drawing_option == "rectangle") {
      noStroke()
      fill(random(255), random(255), random(255))
      var rectWidth = random(100)
      var rectHeight = random(100)
      rect(d_x1, d_y1, rectWidth, rectHeight)
    }

    if (drawing_option == "rectangle_round") {
      noStroke()
      fill(random(255), random(255), random(255))
      var rectWidth = random(100)
      var rectHeight = random(100)
      var rectRound = random(100)
      rect(d_x1, d_y1, rectWidth, rectHeight, rectRound, rectRound, rectRound, rectRound)
    }

    if (drawing_option == "triangle") {
      noStroke()
      fill(random(255), random(255), random(255))
      var triWidth = random(100)
      var triHeight = random(100)
      triangle(d_x1, d_y1, d_x1 + (triWidth / 2), d_y1 + (triHeight), d_x1 - (triWidth / 2), d_y1 + (triHeight))
    }

    if (drawing_option == "line") {
      drawLine(d_x1, d_y1)
    }

    if (drawing_option == "line_curved") {
      drawLineCurved(d_x1, d_y1)
    }

    if (drawing_option == "blob") {
      drawBlob(d_x1, d_y1)
    }

  }

}

function drawLine(d_x1, d_y1) {

  var l_x1 = d_x1
  var l_y1 = d_y1

  if ((l_x1 <= canvasWidth / 2) && (l_y1 <= canvasHeight / 2)) {
    var l_x2 = random(canvasWidth / 2, canvasWidth)
    var l_y2 = random(canvasHeight / 2, canvasHeight)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(canvasWidth / 2, canvasWidth)
      l_y2 = random(canvasHeight / 2, canvasHeight)
    }
  }

  if ((l_x1 > canvasWidth / 2) && (l_y1 <= canvasHeight / 2)) {
    var l_x2 = random(canvasWidth / 2)
    var l_y2 = random(canvasHeight / 2, canvasHeight)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(canvasWidth / 2)
      l_y2 = random(canvasHeight / 2, canvasHeight)
    }
  }

  if ((l_x1 > canvasWidth / 2) && (l_y1 > canvasHeight / 2)) {
    var l_x2 = random(canvasWidth / 2)
    var l_y2 = random(canvasHeight / 2)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(canvasWidth / 2)
      l_y2 = random(canvasHeight / 2)
    }
  }

  if ((l_x1 <= canvasWidth / 2) && (l_y1 > canvasHeight / 2)) {
    var l_x2 = random(canvasWidth / 2, canvasWidth)
    var l_y2 = random(canvasHeight / 2)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(canvasWidth / 2, canvasWidth)
      l_y2 = random(canvasHeight / 2)
    }
  }

  strokeWeight(random(10));

  stroke(random(255), random(255), random(255));
  line(l_x1, l_y1, l_x2, l_y2);
}

function drawLineCurved(d_x1, d_y1) {

  var lc_num = 8
  var points = [];
  var lc_x = d_x1
  var lc_y = d_y1
  points[0] = createVector(lc_x, lc_y);

  for (var i = 1; i < lc_num; i++) {

    if ((points[i - 1].x <= canvasWidth / 2) && (points[i - 1].y <= canvasHeight / 2)) {
      var lc_x = random(canvasWidth / 2, canvasWidth)
      var lc_y = random(canvasHeight / 2, canvasHeight)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(canvasWidth / 2, canvasWidth)
        lc_y = random(canvasHeight / 2, canvasHeight)
      }

    }

    if ((points[i - 1].x > canvasWidth / 2) && (points[i - 1].y <= canvasHeight / 2)) {
      var lc_x = random(canvasWidth / 2)
      var lc_y = random(canvasHeight / 2, canvasHeight)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(canvasWidth / 2)
        lc_y = random(canvasHeight / 2, canvasHeight)
      }
    }

    if ((points[i - 1].x > canvasWidth / 2) && (points[i - 1].y > canvasHeight / 2)) {
      var lc_x = random(canvasWidth / 2)
      var lc_y = random(canvasHeight / 2)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(canvasWidth / 2)
        lc_y = random(canvasHeight / 2)
      }
    }

    if ((points[i - 1].x <= canvasWidth / 2) && (points[i - 1].y > canvasHeight / 2)) {
      var lc_x = random(canvasWidth / 2, canvasWidth)
      var lc_y = random(canvasHeight / 2)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(canvasWidth / 2, canvasWidth)
        lc_y = random(canvasHeight / 2)
      }
    }

    points[i] = createVector(lc_x, lc_y);
  }

  stroke(random(255), random(255), random(255));
  noFill();
  strokeWeight(random(3));

  for (var i = 0; i < lc_num - 3; i++) {
    beginShape();
    curveVertex(points[i].x, points[i].y);
    curveVertex(points[i + 1].x, points[i + 1].y);
    curveVertex(points[i + 2].x, points[i + 2].y);
    curveVertex(points[i + 3].x, points[i + 3].y);
    endShape();
  }
}

function drawBlob(d_x1, d_y1) {

  console.log("blob")

  var lc_num = 24
  var blob_rad = 100
  var points = [];
  var lc_x = d_x1
  var lc_y = d_y1
  var lc_center = createVector(lc_x, lc_y);
  points[0] = lc_center

  for (var i = 1; i < lc_num; i++) {

    var lc_x = random(lc_center.x, lc_center.x + blob_rad)
    var lc_y = random(lc_center.y, lc_center.y + blob_rad)
    while (isInsideX(lc_x, lc_y)) {
      var lc_x = random(lc_center.x, lc_center.x + blob_rad)
      var lc_y = random(lc_center.y, lc_center.y + blob_rad)
    }

    points[i] = createVector(lc_x, lc_y);
  }

  noStroke();
  fill(random(255), random(255), random(255));

  for (var i = 0; i < lc_num - 3; i++) {
    beginShape();
    curveVertex(points[i].x, points[i].y);
    curveVertex(points[i + 1].x, points[i + 1].y);
    curveVertex(points[i + 2].x, points[i + 2].y);
    curveVertex(points[i + 3].x, points[i + 3].y);
    endShape(CLOSE);
  }
}

function vlines(start, end) {
  loadPixels()
  var pixColor
  var pixHeight = 0
  for (let i = start; i < end; i++) {
    while (isInsideX(i, pixHeight)) {
      pixHeight++;
    }
    pixColor = get(i, pixHeight)
    for (h = 0; h < canvasHeight; h++) {
      if (isInsideX(i, h) == false) {
        set(i, h, pixColor);
        //set(i + random(30), h + random(30), pixColor);
      }
    }
    pixHeight = 0
  }
  updatePixels()
}

function hlines(start, end) {
  loadPixels()
  var pixColor
  var pixWidth = 0
  for (let i = start; i < end; i++) {
    while (isInsideX(i, pixWidth)) {
      pixWidth++;
    }
    pixColor = get(i, pixWidth)
    for (w = 0; w < canvasWidth; w++) {
      if (isInsideX(w, i) == false) {
        set(w, i, pixColor);
        //set(w + random(30), i + random(30), pixColor)
      }
    }
    pixWidth = 0
  }
  updatePixels()
}

function scatter() {
  loadPixels()
  var blackColor = color(0, 0, 0);
  var whiteColor = color(255, 255, 255);
  for (let i = 0; i < canvasWidth; i++) {
    for (let h = 0; h < canvasHeight; h++) {
      if (isInsideX(i, h) == false) {
        var pixColor = color(get(i, h))
        if (pixColor != blackColor && pixColor != whiteColor) {
          //set(i, h, blackColor)
          set(i + random(100), h + random(100), pixColor)
          set(i - random(100), h - random(100), pixColor)

        }
      }
    }
  }
  updatePixels()
}

function hgradient() {
  loadPixels()
  var pixColor
  var startR = random(255)
  var startG = random(255)
  var pixWidth = 0
  for (let i = random(canvasWidth); i < random(canvasWidth) * 10; i++) {
    for (w = random(canvasHeight); w < random(canvasHeight) * 10; w++) {
      pixColor = color(startR + w, startG + i, 0)
      set(w, i, pixColor);
    }
    pixWidth = 0
  }
  updatePixels()
}

function changeX(draw) {

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

  if (draw == 1) {
    fill(random(255), random(255), random(255))
    noStroke()
    triangle(etT_1_x, etT_1_y, etT_2_x, etT_2_y, etT_3_x, etT_3_y);
    triangle(etR_1_x, etR_1_y, etR_2_x, etR_2_y, etR_3_x, etR_3_y);
    triangle(etL_1_x, etL_1_y, etL_2_x, etL_2_y, etL_3_x, etL_3_y);
    triangle(etB_1_x, etB_1_y, etB_2_x, etB_2_y, etB_3_x, etB_3_y);
  }

}

function FixX() {

  x_widht = 200
  canvasWidthMargin = 0
  canvasHeightMargin = 0

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

}

function blur() {
  let v = 1.0 / random(20.0);
  let kernel = [[v, v, v], [v, v, v], [v, v, v]];


  loadPixels();

  for (let x = 1; x < canvasWidth; x++) {
    for (let y = 1; y < canvasHeight; y++) {
      let sum = 0;

      for (kx = -1; kx <= 1; kx++) {
        for (ky = -1; ky <= 1; ky++) {
          let xpos = x + kx;
          let ypos = y + ky;

          let val = red(get(xpos, ypos));

          sum += kernel[kx + 1][ky + 1] * val;
          console.log("working")
        }
      }

      set(x, y, color(sum));
    }
  }
  updatePixels();

}


function setup() {

  createCanvas(canvasWidth, canvasHeight);
  frameRate(300)
  strokeWeight(5);
  background(0);
  rectMode(CENTER);
  document.getElementById("defaultCanvas0").style.display = "block"

  strokeWeight(5);
  stroke(255);
  line(0, canvasHeight, canvasWidth, 0);
  line(0, 0, canvasWidth, canvasHeight);

}

var drawing_tools = ["resetWhite", "triReset", "reset", "save", "fixX", "changeX", "changeXDraw", "hgradient", "growPixel", "scatter", "xline", "vhlines", "line", "line_curved", "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle"]
var drawing_tool = "xline"

var drawCounter = 0
var drawCounterLimit = Math.floor(Math.random() * 100)

var gp_x
var gp_y
var gpColor

//bouncing object
var bounceX = 50;
var bounceSpeedX = 5;
var bounceY = 50;
var bounceSpeedY = 5;
var bounceXSize = 24
var bounceXWeight = 5
var bounceXMaxWeight = 30



// ------- draws -------

function draw() {

  // bounce object

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
    bounceXWeight = random(bounceXMaxWeight)
  }

  if (bounceX < bounceXSize) {
    bounceSpeedX = 6;
    color(0, 0, 0, 0)
    bounceXSize = random(100)
    bounceXWeight = random(bounceXMaxWeight)
  }

  if (bounceY > canvasHeight - bounceXSize) {
    bounceSpeedY = -5;
    color(0, 0, 0, 0)
    bounceXSize = random(100)
    bounceXWeight = random(bounceXMaxWeight)
  }

  if (bounceY < bounceXSize) {
    bounceSpeedY = 5;
    color(0, 0, 0, 0)
    bounceXSize = random(100)
    bounceXWeight = random(bounceXMaxWeight)
  }

  // random tool

  strokeCap(ROUND);

  var d_x1 = random(canvasWidth)
  var d_y1 = random(canvasHeight)

  while (isInsideX(d_x1, d_y1)) {
    console.log("randomizing")
    d_x1 = random(canvasWidth)
    d_y1 = random(canvasHeight)
  }

  if (drawCounter > drawCounterLimit) {
    drawing_tool = drawing_tools[Math.floor(Math.random() * drawing_tools.length)];
    drawCounter = 0
    drawCounterLimit = Math.floor(Math.random() * 50)
    console.log(drawing_tool)
  }

  drawCounter++
  x_widht = drawCounter * 3

  if (drawing_tool == "triReset") {
    FixX()
    noStroke()
    fill(0)
    triangle(etT_1_x, etT_1_y, etT_2_x, etT_2_y, etT_3_x, etT_3_y);
    triangle(etR_1_x, etR_1_y, etR_2_x, etR_2_y, etR_3_x, etR_3_y);
    triangle(etL_1_x, etL_1_y, etL_2_x, etL_2_y, etL_3_x, etL_3_y);
    triangle(etB_1_x, etB_1_y, etB_2_x, etB_2_y, etB_3_x, etB_3_y);
    drawCounter = 101
  }

  if (drawing_tool == "resetWhite") {
    background(255);
    drawCounter = 101
  }

  if (drawing_tool == "reset") {
    background(0);
    drawCounter = 101
  }

  /*   if (drawing_tool == "blur") {
      blur();
      drawCounter = 101
    } */

  if (drawing_tool == "save") {
    var newDate = new Date()
    var saveDate = 'BrumenX' + '-' + newDate.getDate() + '.' + (newDate.getMonth() + 1) + '.' + newDate.getFullYear() + '-' + (newDate.getHours()+1) + 'h' + newDate.getMinutes() + 'm' + newDate.getSeconds() + 's'
    saveCanvas(String(saveDate), 'jpg');
    drawCounter = 101
  }

  if (drawing_tool == "fixX") {
    FixX()
    drawCounter = 101
  }

  if (drawing_tool == "changeXDraw") {
    changeX(1)
  }

  if (drawing_tool == "changeX") {
    changeX(0)
    drawCounter = 101
  }

  if (drawing_tool == "hgradient") {
    hgradient()
    drawCounter = 101
  }

  if (drawing_tool == "growPixel") {
    if (drawCounter == 1) {
      loadPixels()
      gp_x = d_x1
      gp_y = d_y1
      gpColor = get(gp_x, gp_y)
      updatePixels()
    }
    fill(gpColor)
    noStroke()
    circle(gp_x, gp_y, drawCounter * 10)
  }

  if (drawing_tool == "scatter") {
    scatter()
    drawCounter = 101
  }

  if (drawing_tool == "vhlines") {
    var LinesStart = random(canvasWidth)
    vlines(LinesStart, random(LinesStart, canvasWidth))
    LinesStart = random(canvasHeight)
    hlines(LinesStart, random(LinesStart, canvasHeight))
  }

  if (drawing_tool == "xline") {
    strokeWeight(drawCounter * 3);
    stroke(255);
    line(0, canvasHeight, canvasWidth, 0);
    line(0, 0, canvasWidth, canvasHeight);
  }

  if (drawing_tool == "circle") {
    noStroke()
    fill(random(255), random(255), random(255))
    circle(d_x1, d_y1, random(100))
  }

  if (drawing_tool == "square") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100)
    rect(d_x1, d_y1, rectWidth, rectWidth)
  }

  if (drawing_tool == "square_round") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100)
    var rectRound = random(100)
    rect(d_x1, d_y1, rectWidth, rectWidth, rectRound, rectRound, rectRound, rectRound)
  }

  if (drawing_tool == "rectangle") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100)
    var rectHeight = random(100)
    rect(d_x1, d_y1, rectWidth, rectHeight)
  }

  if (drawing_tool == "rectangle_round") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100)
    var rectHeight = random(100)
    var rectRound = random(100)
    rect(d_x1, d_y1, rectWidth, rectHeight, rectRound, rectRound, rectRound, rectRound)
  }

  if (drawing_tool == "triangle") {
    noStroke()
    fill(random(255), random(255), random(255))
    var triWidth = random(100)
    var triHeight = random(100)
    triangle(d_x1, d_y1, d_x1 + (triWidth / 2), d_y1 + (triHeight), d_x1 - (triWidth / 2), d_y1 + (triHeight))
  }

  if (drawing_tool == "line") {
    drawLine(d_x1, d_y1)
  }

  if (drawing_tool == "line_curved") {
    drawLineCurved(d_x1, d_y1)
  }

  if (drawing_tool == "blob") {
    drawBlob(d_x1, d_y1)
  }


  /*   noFill()
    stroke(255)
    triangle(etT_1_x, etT_1_y, etT_2_x, etT_2_y, etT_3_x, etT_3_y);
    triangle(etR_1_x, etR_1_y, etR_2_x, etR_2_y, etR_3_x, etR_3_y);
    triangle(etL_1_x, etL_1_y, etL_2_x, etL_2_y, etL_3_x, etL_3_y);
    triangle(etB_1_x, etB_1_y, etB_2_x, etB_2_y, etB_3_x, etB_3_y); */

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

