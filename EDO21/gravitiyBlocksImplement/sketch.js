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

  var canvasDiv = document.getElementById('canvas_div');
  var canvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
  canvas.parent("canvas_div");
  background("#FFDB38");
  engine = Engine.create();
  world = engine.world;

  var canvasMouse = Mouse.create(canvas.elt)
  canvasMouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, { mouse: canvasMouse })
  World.add(world, mConstraint)

  var options = {
    isStatic: true
  };
  ground = Bodies.rectangle(width / 2, height, width, 1, options);
  wallL = Bodies.rectangle(0, height / 2, 1, height, options)
  wallR = Bodies.rectangle(width, height / 2, 1, height, options)

  World.add(world, ground);
  World.add(world, wallR);
  World.add(world, wallL);

}

function Box(x, y, w, h) {
  var options = {
    friction: 5,
    density: 5,
    restitution: 0.1
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  Matter.Body.rotate(this.body, random(360))
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(blockImg, 0, 0, this.w, this.h);
    pop();
  };
}


function draw() {
  background("#FFDB38");
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

}

setInterval(function () {
  boxes.push(new Box(random(0 + (100 * (height / 800) / 2), width - (100 * (height / 800) / 2)), -(200 * (height / 800)), 100 * (height / 800), 200 * (height / 800)));
}, 3000);