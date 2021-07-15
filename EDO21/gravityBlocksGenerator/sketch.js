//Recording set-up
let capturer;
let btn;
function record() {
  capturer = new CCapture({
    format: "webm",
    framerate: 60
  });
  capturer.start();
  btn.textContent = "Stop recording";
  btn.onclick = e => {
    capturer.stop();
    capturer.save();
    capturer = null;
    btn.textContent = "Start recording";
    btn.onclick = record;
  };
}

// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

var engine;
var world;
var boxes = [];

//Drawing set-up
var ground;
var wall_L
var wall_R

var mConstraint

var blockImg

var canvas_width
var canvas_height

function preload() {
  blockImg = loadImage('block.png')
}

function setup() {
  var canvas = createCanvas(1, 1);
  background("#FFDB38");
  engine = Engine.create();
  world = engine.world;

  var canvasMouse = Mouse.create(canvas.elt)
  canvasMouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, { mouse: canvasMouse })
  World.add(world, mConstraint)

  frameRate(60)
  btn = document.createElement("button");
  btn.classList.add("record_button");
  btn.textContent = "start recording";
  document.body.appendChild(btn);
  btn.onclick = record;

}

function mousePressed() {
  if (keyIsDown(16)) {
    boxes.push(new Box(mouseX, mouseY, 100 * (height / 800), 200 * (height / 800)));
  }
}

function keyPressed() {
  if (keyCode === 83) {
    value = 255;
    saveCanvas('myCanvas', 'jpg');
  }
}

function canvasSizeInput(w, h) {
  canvas_width = parseInt(w)
  canvas_height = parseInt(h)
  resizeCanvas(canvas_width, canvas_height);

  var options = {
    isStatic: true
  };
  console.log(width)
  console.log(height)
  ground = Bodies.rectangle(width / 2, height, width, 1, options);
  wallL = Bodies.rectangle(0, height / 2, 1, height, options)
  wallR = Bodies.rectangle(width, height / 2, 1, height, options)

  World.add(world, ground);
  World.add(world, wallR);
  World.add(world, wallL);

  document.getElementById("canvas_setup").style.display = "none"
  btn.style.display = "block"

}

function draw() {
  background("#FFDB38");
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  if (capturer) {
    capturer.capture(document.getElementById("defaultCanvas0"));
  }

}