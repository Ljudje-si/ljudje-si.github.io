
// animated random box

if (drawing_option == "box") {
    var newAnimatedObj = { type: "box", posX: d_x1, posY: d_y1, strokeR: random(255), strokeG: random(255), strokeB: random(255), fillR: random(255), fillG: random(255), fillB: random(255), width: random(50), height: random(50), depth: random(50) }
    animatedObjects.push(newAnimatedObj);
  }

  animatedObjects.forEach(item => {
    if (item.type == "box") {
      translate(item.posX, item.posY)
      stroke(item.strokeR, item.strokeG, item.strokeB)
      fill(item.fillR, item.fillG, item.fillB)
      box(item.width, item.height, item.depth)
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      translate()
    }
  })


  translate()

// blob

  if (drawing_option == "blob") {

    console.log("blob")

    var lc_num = 8
    var blob_rad = 100
    var points = [];
    var lc_x = d_x1
    var lc_y = d_y1
    var lc_center = createVector(lc_x, lc_y);
    points[0] = lc_center

    for (var i = 1; i < lc_num; i++) {

      var lc_x = random(lc_center.x + 10, lc_center.x + blob_rad)
      var lc_y = random(lc_center.y + 10, lc_center.y + blob_rad)
      while (isInsideX(lc_x, lc_y)) {
        var lc_x = random(lc_center.x + 10, lc_center.x + blob_rad)
        var lc_y = random(lc_center.y + 10, lc_center.y + blob_rad)
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