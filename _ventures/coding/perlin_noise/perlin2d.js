let myp51 = new p5((sketch) => {
  var inc = 0.1;
  sketch.setup = () => {
    sketch.createCanvas(200, 200);
    sketch.pixelDensity(1);
  };

  sketch.draw = () => {
    sketch.loadPixels();
    var yoff = 0;
    for (var y = 0; y < sketch.height; y++) {
      var xoff = 0;
      for (var x = 0; x < sketch.width; x++) {
        var index = (x + (y * sketch.width)) * 4;
        var r = sketch.noise(xoff, yoff) * 255;
        sketch.pixels[index + 0] = r;
        sketch.pixels[index + 1] = r;
        sketch.pixels[index + 2] = r;
        sketch.pixels[index + 3] = 255;
        xoff += inc;
      }
      yoff += inc;
    }
    sketch.updatePixels();
  };
}, "perlin-canvas");
