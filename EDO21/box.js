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
