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


// setup

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(300)
  strokeWeight(5);
  background(0);
  rectMode(CENTER);
  imageMode(CENTER);
  document.getElementById("defaultCanvas0").style.display = "block"
}

// random image setup

function cancelImage(img) {
  console.log(img)
  console.log("canceling img")
  img.style.display = "none"
}

function randomImage(d_x1, d_y1) {
  var randomImageWidth = Math.floor(Math.random() * 10) * 10 + 10
  var randomImageHeight = Math.floor(Math.random() * 10) * 10 + 10
  var randomImageURL = "https://picsum.photos/id/" + Math.floor(Math.random() * 1000) + "/" + randomImageWidth + "/" + randomImageHeight
  console.log(randomImageURL)

  var randomImage = document.createElement("img");
  randomImage.setAttribute("src", randomImageURL);
  randomImage.style.position = "fixed"
  randomImage.style.left = String(round(d_x1 - (randomImageWidth / 2)) + "px")
  randomImage.style.top = String(round(d_y1 - (randomImageHeight / 2)) + "px")
  randomImage.style.zIndex = "10";
  document.body.appendChild(randomImage);
  randomImage.setAttribute("onError", "cancelImage(this)");

  console.log(randomImage.offsetHeight)

  if (randomImage.offsetHeight == 16) {
    randomImage.style.display = "none"
  }
}

// draws

function draw() {

  var d_x1 = random(canvasWidth)
  var d_y1 = random(canvasHeight)

  while (isInsideX(d_x1, d_y1)) {
    console.log("randomizing")
    d_x1 = random(canvasWidth)
    d_y1 = random(canvasHeight)
  }

  var drawing_options = ["image"]
  var drawing_option = drawing_options[Math.floor(Math.random() * drawing_options.length)];

  if (drawing_option == "image") {

    randomImage(d_x1, d_y1)
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

