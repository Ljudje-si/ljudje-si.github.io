console.log("app connected")

var x_widht
var height
var width
var heightMargin
var widthMargin

var objectSizeFactor

var tangesTop
var tangesBot

var paddingHor
var paddingVer

// empty triangles set-up
// top
var etT_1_x
var etT_1_y

var etT_2_x
var etT_2_y

var etT_3_x
var etT_3_y

//right

var etR_1_x
var etR_1_y

var etR_2_x
var etR_2_y

var etR_3_x
var etR_3_y

//left

var etL_1_x
var etL_1_y

var etL_2_x
var etL_2_y

var etL_3_x
var etL_3_y

//bottom

var etB_1_x
var etB_1_y

var etB_2_x
var etB_2_y

var etB_3_x
var etB_3_y

// limits
var etT_3_y_org
var etL_3_x_org

// setup

function drawLine(d_x1, d_y1) {

  var l_x1 = d_x1
  var l_y1 = d_y1

  if ((l_x1 <= width / 2) && (l_y1 <= height / 2)) {
    var l_x2 = random(width / 2, width)
    var l_y2 = random(height / 2, height)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(width / 2, width)
      l_y2 = random(height / 2, height)
    }
  }

  if ((l_x1 > width / 2) && (l_y1 <= height / 2)) {
    var l_x2 = random(width / 2)
    var l_y2 = random(height / 2, height)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(width / 2)
      l_y2 = random(height / 2, height)
    }
  }

  if ((l_x1 > width / 2) && (l_y1 > height / 2)) {
    var l_x2 = random(width / 2)
    var l_y2 = random(height / 2)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(width / 2)
      l_y2 = random(height / 2)
    }
  }

  if ((l_x1 <= width / 2) && (l_y1 > height / 2)) {
    var l_x2 = random(width / 2, width)
    var l_y2 = random(height / 2)
    while (isInsideX(l_x2, l_y2)) {
      l_x2 = random(width / 2, width)
      l_y2 = random(height / 2)
    }
  }

  strokeWeight(random(10) * objectSizeFactor);

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

    if ((points[i - 1].x <= width / 2) && (points[i - 1].y <= height / 2)) {
      var lc_x = random(width / 2, width)
      var lc_y = random(height / 2, height)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(width / 2, width)
        lc_y = random(height / 2, height)
      }

    }

    if ((points[i - 1].x > width / 2) && (points[i - 1].y <= height / 2)) {
      var lc_x = random(width / 2)
      var lc_y = random(height / 2, height)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(width / 2)
        lc_y = random(height / 2, height)
      }
    }

    if ((points[i - 1].x > width / 2) && (points[i - 1].y > height / 2)) {
      var lc_x = random(width / 2)
      var lc_y = random(height / 2)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(width / 2)
        lc_y = random(height / 2)
      }
    }

    if ((points[i - 1].x <= width / 2) && (points[i - 1].y > height / 2)) {
      var lc_x = random(width / 2, width)
      var lc_y = random(height / 2)
      while (isInsideX(lc_x, lc_y)) {
        lc_x = random(width / 2, width)
        lc_y = random(height / 2)
      }
    }

    points[i] = createVector(lc_x, lc_y);
  }

  stroke(random(255), random(255), random(255));
  noFill();
  strokeWeight(random(3) * objectSizeFactor);

  for (var i = 0; i < lc_num - 3; i++) {
    beginShape();
    curveVertex(points[i].x, points[i].y);
    curveVertex(points[i + 1].x, points[i + 1].y);
    curveVertex(points[i + 2].x, points[i + 2].y);
    curveVertex(points[i + 3].x, points[i + 3].y);
    endShape();
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
    for (h = 0; h < height; h++) {
      if (isInsideX(i, h) == false) {
        set(i, h, pixColor);
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
    for (w = 0; w < width; w++) {
      if (isInsideX(w, i) == false) {
        set(w, i, pixColor);
        //set(w + random(30), i + random(30), pixColor)
      }
    }
    pixWidth = 0
  }
  updatePixels()
}

function changeX(draw) {

  x_widht = random(200)
  widthMargin = random(etL_3_x_org - x_widht)
  console.log("widthMargin: " + widthMargin)
  heightMargin = random(etT_3_y_org - x_widht)
  console.log("heightMargin: " + heightMargin)

  etT_1_x = paddingHor + widthMargin
  etT_1_y = heightMargin

  etT_2_x = width - paddingHor - widthMargin
  etT_2_y = heightMargin

  etT_3_x = width / 2
  etT_3_y = (tangesTop * ((width - (2 * (paddingHor + widthMargin))) / 2)) + heightMargin

  //right

  etR_1_x = width - widthMargin
  etR_1_y = paddingVer + heightMargin

  etR_2_x = width - widthMargin
  etR_2_y = height - paddingVer - heightMargin

  etR_3_x = width - (((height - (2 * (paddingVer + heightMargin))) / 2) * tangesBot) - widthMargin
  etR_3_y = height / 2

  //left

  etL_1_x = widthMargin
  etL_1_y = paddingVer + heightMargin

  etL_2_x = widthMargin
  etL_2_y = height - paddingVer - heightMargin

  etL_3_x = (((height - (2 * (paddingVer + heightMargin))) / 2) * tangesBot) + widthMargin
  etL_3_y = height / 2

  //bottom

  etB_1_x = paddingHor + widthMargin
  etB_1_y = height - heightMargin

  etB_2_x = width - paddingHor - widthMargin
  etB_2_y = height - heightMargin

  etB_3_x = width / 2
  etB_3_y = height - (tangesTop * ((width - (2 * (paddingHor + widthMargin))) / 2)) - heightMargin

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
  widthMargin = 0
  heightMargin = 0

  etT_1_x = paddingHor + widthMargin
  etT_1_y = heightMargin

  etT_2_x = width - paddingHor - widthMargin
  etT_2_y = heightMargin

  etT_3_x = width / 2
  etT_3_y = (tangesTop * ((width - (2 * (paddingHor + widthMargin))) / 2)) + heightMargin

  //right

  etR_1_x = width - widthMargin
  etR_1_y = paddingVer + heightMargin

  etR_2_x = width - widthMargin
  etR_2_y = height - paddingVer - heightMargin

  etR_3_x = width - (((height - (2 * (paddingVer + heightMargin))) / 2) * tangesBot) - widthMargin
  etR_3_y = height / 2

  //left

  etL_1_x = widthMargin
  etL_1_y = paddingVer + heightMargin

  etL_2_x = widthMargin
  etL_2_y = height - paddingVer - heightMargin

  etL_3_x = (((height - (2 * (paddingVer + heightMargin))) / 2) * tangesBot) + widthMargin
  etL_3_y = height / 2

  //bottom

  etB_1_x = paddingHor + widthMargin
  etB_1_y = height - heightMargin

  etB_2_x = width - paddingHor - widthMargin
  etB_2_y = height - heightMargin

  etB_3_x = width / 2
  etB_3_y = height - (tangesTop * ((width - (2 * (paddingHor + widthMargin))) / 2)) - heightMargin

}

function redOverlay() {
  loadPixels()
  for (let i = 0; i < width; i++) {
    for (let h = 0; h < height; h++) {
      var pixColor = color(get(i, h))
      var newColor = color(red(pixColor), 0, 0)
      set(i, h, newColor)
    }
  }
  updatePixels()
}

function saveXCanvas() {
  redOverlay()
  var newDate = new Date()
  var saveDate = 'BrumenX' + '-' + newDate.getDate() + '.' + (newDate.getMonth() + 1) + '.' + newDate.getFullYear() + '-' + (newDate.getHours() + 1) + 'h' + newDate.getMinutes() + 'm' + newDate.getSeconds() + 's'
  saveCanvas(String(saveDate), 'jpg');
}

function setup() {

  createCanvas(1, 1);
  frameRate(300)
  strokeWeight(5);
  background(0);
  rectMode(CENTER);
  document.getElementById("defaultCanvas0").style.display = "block"

  strokeWeight(5);
  stroke(255);
  line(0, height, width, 0);
  line(0, 0, width, height);

  noLoop();

}

function canvasSizeInput(w, h) {
  canvas_width = parseInt(w) * (window.devicePixelRatio * 96) / 25.4
  canvas_height = parseInt(h) * (window.devicePixelRatio * 96) / 25.4
  resizeCanvas(canvas_width, canvas_height);

  document.getElementById("canvas_setup").style.display = "none"

  objectSizeFactor = height / 1000

  x_widht = 200 * objectSizeFactor
  heightMargin = 0
  widthMargin = 0

  console.log(width)
  console.log(height)

  tangesTop = height / width
  tangesBot = width / height

  paddingHor = (x_widht / 2) / (Math.sin(Math.atan(tangesTop)))
  paddingVer = (x_widht / 2) / (Math.sin(Math.atan(tangesBot)))

  // empty triangles set-up
  // top
  etT_1_x = paddingHor + widthMargin
  etT_1_y = heightMargin

  etT_2_x = width - paddingHor - widthMargin
  etT_2_y = heightMargin

  etT_3_x = width / 2
  etT_3_y = (tangesTop * ((width - (2 * (paddingHor + widthMargin))) / 2)) + heightMargin

  //right

  etR_1_x = width - widthMargin
  etR_1_y = paddingVer + heightMargin

  etR_2_x = width - widthMargin
  etR_2_y = height - paddingVer - heightMargin

  etR_3_x = width - (((height - (2 * (paddingVer + heightMargin))) / 2) * tangesBot) - widthMargin
  etR_3_y = height / 2

  //left

  etL_1_x = widthMargin
  etL_1_y = paddingVer + heightMargin

  etL_2_x = widthMargin
  etL_2_y = height - paddingVer - heightMargin

  etL_3_x = (((height - (2 * (paddingVer + heightMargin))) / 2) * tangesBot) + widthMargin
  etL_3_y = height / 2

  //bottom

  etB_1_x = paddingHor + widthMargin
  etB_1_y = height - heightMargin

  etB_2_x = width - paddingHor - widthMargin
  etB_2_y = height - heightMargin

  etB_3_x = width / 2
  etB_3_y = height - (tangesTop * ((width - (2 * (paddingHor + widthMargin))) / 2))


  etT_3_y_org = tangesTop * ((width - (2 * paddingHor)) / 2)
  etL_3_x_org = ((height - (2 * paddingVer)) / 2) * tangesBot

  loop();

}

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

var drawing_tools = ["reset", "save", "save", "save",
  "triReset", "fixX", "changeX", "changeXDraw", "x_curved", "growPixel", "xline", "vhlines", "line", "line_curved", "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle",
  "triReset", "fixX", "changeX", "changeXDraw", "x_curved", "growPixel", "xline", "vhlines", "line", "line_curved", "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle",
  "triReset", "fixX", "changeX", "changeXDraw", "x_curved", "growPixel", "xline", "vhlines", "line", "line_curved", "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle"]
var drawing_tool = "xline"

var drawCounter = 0
var drawCounterLimit = Math.floor(Math.random() * 5)

var gp_x
var gp_y
var gpColor

// ------- draws -------

function draw() {

  // random tool

  strokeCap(ROUND);

  var d_x1 = random(width)
  var d_y1 = random(height)

  while (isInsideX(d_x1, d_y1)) {
    console.log("randomizing")
    d_x1 = random(width)
    d_y1 = random(height)
  }

  if (drawCounter > drawCounterLimit) {
    drawing_tool = drawing_tools[Math.floor(Math.random() * drawing_tools.length)];
    drawCounter = 0
    drawCounterLimit = Math.floor(Math.random() * 5)
    console.log(drawing_tool)
  }

  drawCounter++
  x_widht = drawCounter * 3

  if (drawing_tool == "save") {
    saveXCanvas()
    drawCounter = 101
  }

  if (drawing_tool == "x_curved") {
    strokeWeight(random(10) * objectSizeFactor)
    noFill()
    stroke(random(255), random(255), random(255))
    if (random(0, 2) > 1) {
      bezier(0, 0, random(width / 4), random(height / 4), random(width / 4 * 3, width), random(height / 4 * 3, height), width, height);
    }
    else {
      bezier(width, 0, random(width / 4 * 3, width), random(height / 4), random(width / 4), random(height / 4 * 3, height), 0, height);
    }
  }

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

  if (drawing_tool == "reset") {
    background(0);
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
    circle(gp_x, gp_y, drawCounter * 10 * objectSizeFactor)
  }

  if (drawing_tool == "vhlines") {
    var LinesStart = random(width)
    vlines(LinesStart, random(LinesStart, width))
    LinesStart = random(height)
    hlines(LinesStart, random(LinesStart, height))
  }

  if (drawing_tool == "xline") {
    strokeWeight(drawCounter * 3 * objectSizeFactor);
    stroke(255);
    line(0, height, width, 0);
    line(0, 0, width, height);
  }

  if (drawing_tool == "circle") {
    noStroke()
    fill(random(255), random(255), random(255))
    circle(d_x1, d_y1, random(100) * objectSizeFactor)
  }

  if (drawing_tool == "square") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100) * objectSizeFactor
    rect(d_x1, d_y1, rectWidth, rectWidth)
  }

  if (drawing_tool == "square_round") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100) * objectSizeFactor
    var rectRound = random(100) * objectSizeFactor
    rect(d_x1, d_y1, rectWidth, rectWidth, rectRound, rectRound, rectRound, rectRound)
  }

  if (drawing_tool == "rectangle") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100) * objectSizeFactor
    var rectHeight = random(100) * objectSizeFactor
    rect(d_x1, d_y1, rectWidth, rectHeight)
  }

  if (drawing_tool == "rectangle_round") {
    noStroke()
    fill(random(255), random(255), random(255))
    var rectWidth = random(100) * objectSizeFactor
    var rectHeight = random(100) * objectSizeFactor
    var rectRound = random(100) * objectSizeFactor
    rect(d_x1, d_y1, rectWidth, rectHeight, rectRound, rectRound, rectRound, rectRound)
  }

  if (drawing_tool == "triangle") {
    noStroke()
    fill(random(255), random(255), random(255))
    var triWidth = random(100) * objectSizeFactor
    var triHeight = random(100) * objectSizeFactor
    triangle(d_x1, d_y1, d_x1 + (triWidth / 2), d_y1 + (triHeight), d_x1 - (triWidth / 2), d_y1 + (triHeight))
  }

  if (drawing_tool == "line") {
    drawLine(d_x1, d_y1)
  }

  if (drawing_tool == "line_curved") {
    drawLineCurved(d_x1, d_y1)
  }

}

function keyPressed() {
  if (keyCode === 83) {
    saveXCanvas()
    console.log("drawing saved and stopped")
    noLoop();
  }
}

