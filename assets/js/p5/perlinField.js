var inc = 0.2;
var scl = 10;
var cols, rows;
var fr;
var two_pi = 6.28318530718;
var zoff = 0;
var particles = [];
var flowfield;

setup = () => {
  createCanvas(200, 200);
  // cnv.parent("perlin-canvas");
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 10; i++) {
    particles[i] = new Particle();
  }
};

draw = () => {
  background(255);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * two_pi;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.1);
      flowfield[index] = v;
      xoff += inc;
      // fill(sketch.random(255));
      // fill(r);
      // rect(x * scl, y * scl, scl, scl);
      stroke(0, 50);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      strokeWeight(1);
      line(0, 0, scl, 0);
      pop();
    }
    yoff += inc;
    zoff += 0.0005;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }
  fr.html(floor(frameRate()));
};
