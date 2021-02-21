let myp51 = new p5((s) => {
  var inc = 0.2;
  var scl = 10;
  var cols, rows;
  var fr;
  var two_pi = 6.28318530718;
  var zoff = 0;
  s.setup = () => {
    s.createCanvas(200, 200);
    cols = s.floor(s.width / scl);
    rows = s.floor(s.height / scl);
    fr = s.createP('');
  };

  s.draw = () => {
    s.background(255);
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        // var index = (x + y * s.width) * 4;
        var angle = s.noise(xoff, yoff, zoff) * two_pi;
        var v = p5.Vector.fromAngle(angle);
        xoff += inc;
        // sketch.fill(sketch.random(255));
        // sketch.fill(r);
        // sketch.rect(x * scl, y * scl, scl, scl);
        s.stroke(0);
        s.push(); 
        s.translate(x * scl, y * scl);
        s.rotate(v.heading());
        s.line(0, 0, scl, 0);
        s.pop();
      }
      yoff += inc;
      zoff += 0.0005;
    }
    fr.html(s.floor(s.frameRate()));
  };
}, "perlin-canvas");