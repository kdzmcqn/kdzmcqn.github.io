var inc = 0.2;
var scl = 15;
var cols, rows;
var two_pi = 6.28318530718;
var zoff = 0;
var flowfield;
var particles = [];
var fr;

function setup() {
  // createCanvas(500, 500);
  cnv = createCanvas(500, 500);
  cnv.parent("perlin-canvas");
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
  }
  background(255);
}

function draw() {
  // if (frameCount === 1) {
  //   capturer.start();
  // }

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * two_pi * 3;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(4);
      flowfield[index] = v;
      xoff += inc;
      // fill(random(255));
      // fill(r);
      // stroke(0, 50);

      // rect(x * scl, y * scl, scl, scl);
      // push();
      // strokeWeight(1);
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;
    zoff += 0.0005;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  fr.html("FPS: " + floor(frameRate()));
  // console.log(frameRate());
  // function render(){
  // if (frameCount < 60) {
  //   capturer.capture(cnv)
  // } else if (frameCount === 60) {
  //   capturer.save();
  //   capturer.stop();
  // }
  // }
}
