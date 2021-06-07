console.log("app connected")

var x_widht = 200
var canvasHeight = window.innerHeight
var canvasWidth = window.innerWidth

var tangesTop = canvasHeight / canvasWidth
var tangesBot = canvasWidth / canvasHeight

var paddingHor = (x_widht / 2) / (Math.sin(Math.atan(tangesTop)))
var paddingVer = (x_widht / 2) / (Math.sin(Math.atan(tangesBot)))

var animatedObjects = []

// empty triangles set-up
// top
var etT_1_x = paddingHor
var etT_1_y = 0

var etT_2_x = canvasWidth - paddingHor
var etT_2_y = 0

var etT_3_x = canvasWidth / 2
var etT_3_y = tangesTop * ((canvasWidth - (2 * paddingHor)) / 2)

//right

var etR_1_x = canvasWidth
var etR_1_y = paddingVer

var etR_2_x = canvasWidth
var etR_2_y = canvasHeight - paddingVer

var etR_3_x = canvasWidth - (((canvasHeight - (2 * paddingVer)) / 2) * tangesBot)
var etR_3_y = canvasHeight / 2

//left

var etL_1_x = 0
var etL_1_y = paddingVer

var etL_2_x = 0
var etL_2_y = canvasHeight - paddingVer

var etL_3_x = ((canvasHeight - (2 * paddingVer)) / 2) * tangesBot
var etL_3_y = canvasHeight / 2

//bottom

var etB_1_x = paddingHor
var etB_1_y = canvasHeight

var etB_2_x = canvasWidth - paddingHor
var etB_2_y = canvasHeight

var etB_3_x = canvasWidth / 2
var etB_3_y = canvasHeight - (tangesTop * ((canvasWidth - (2 * paddingHor)) / 2))


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


// draws

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(5)
  strokeWeight(5);
  background(0);
  document.getElementById("defaultCanvas0").style.display = "block"
}

// mousePressed

function draw() {

  var d_x1 = random(canvasWidth)
  var d_y1 = random(canvasHeight)

  while (isInsideX(d_x1, d_y1)) {
    console.log("randomizing")
    d_x1 = random(canvasWidth)
    d_y1 = random(canvasHeight)
  }

  var drawing_options = ["line", "line_curved", "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle",
    "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle",
    "circle", "square", "square_round", "rectangle", "rectangle_round", "triangle"]
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

  if (drawing_option == "line_curved") {

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


  /*   noFill()
    stroke(255)
    triangle(etT_1_x, etT_1_y, etT_2_x, etT_2_y, etT_3_x, etT_3_y);
    triangle(etR_1_x, etR_1_y, etR_2_x, etR_2_y, etR_3_x, etR_3_y);
    triangle(etL_1_x, etL_1_y, etL_2_x, etL_2_y, etL_3_x, etL_3_y);
    triangle(etB_1_x, etB_1_y, etB_2_x, etB_2_y, etB_3_x, etB_3_y); */

}

function keyPressed() {
  noLoop();
}

