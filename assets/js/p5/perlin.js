let myp5 = new p5((sketch) => {
  var xoff = 0;

  sketch.setup = () => {
    sketch.createCanvas(400, 400);
    // sketch.parent("perlin-canvas");
  };

  sketch.draw = () => {
    sketch.background(51);
    // var x = random(width);
    var x = sketch.map(sketch.noise(xoff), 0, 1, 0, sketch.width);
    xoff += 0.02;
    sketch.ellipse(x, 200, 24, 24);
  };
}, 'perlin-canvas');