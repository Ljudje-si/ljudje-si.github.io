
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