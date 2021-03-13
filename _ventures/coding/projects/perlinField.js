var inc = 0.08;
var scl = 30;
var cols, rows;
var two_pi = 6.28318530718;
var zoff = 0;
var flowfield;
var particles = [];
var fr;
var myNickname = "andro";
var nFramesInLoop = 140;
var bEnableExport = false;
var frame_rate = 2;
var nElapsedFrames;
var bRecording;
var cnv;
function setup() {
  cnv = createCanvas(960, 540); //~ GCD : 60 = 2 * 2 * 3 * 5
  cnv.parent("perlin-canvas");
  if (bEnableExport){
    frameRate(frame_rate);
  }
  bRecording = false;
  nElapsedFrames = 0;
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }
  background(0);
}
function keyTyped() {
  if (bEnableExport) {
    if (key === "f" || key === "F") {
      bRecording = true;
      nElapsedFrames = 0;
    }
  }
}
function draw() {
  var percentCompleteFraction = 0;
  if (bRecording) {
    percentCompleteFraction = float(nElapsedFrames) / float(nFramesInLoop);
  } else {
    percentCompleteFraction =
      float(frameCount % nFramesInLoop) / float(nFramesInLoop);
  }
  renderMyDesign(percentCompleteFraction);
  if (bRecording && bEnableExport) {
    var frameOutputFilename =
      myNickname + "_frame_" + nf(nElapsedFrames, 4) + ".jpg";
    print("Saving output image: " + frameOutputFilename);
    saveCanvas(cnv, frameOutputFilename, "jpg");
    nElapsedFrames++;
    if (nElapsedFrames >= nFramesInLoop) {
      bRecording = false;
      noLoop();
    }
  }
  colorMode(HSB, 675, 255, 255);
  colorMode(HSB, 2);
  function renderMyDesign(percentCompleteFraction) {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + (y * cols);
        var angle = noise(xoff, yoff, zoff) * two_pi;
        var v = p5.Vector.fromAngle(angle);
        var v_mag = 4
        v.setMag(v_mag);
        flowfield[index] = v;
        xoff += inc;
        v.normalize();
        var hue  = abs(v.y) + 0.8;
        var br = abs(v.x + v.y) - 0.8;
        fill(hue, 2, br, 0.6);
        stroke(hue, 2, br + 0.8, 0.6);
        strokeWeight(1);
        push();
        rect(x * scl, y * scl, scl, scl);
        translate(x * scl, y * scl);
        rotate(v.heading());
        line(0 ,0, scl, 0);
        pop();
      }
      yoff += inc;
      zoff += 0.0007;
    }
    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }
  }
  if (bEnableExport) {
    fr.html("FPS: " + floor(frameRate()) + " percent: " + floor(percentCompleteFraction));
  } else {
    fr.html("FPS: " + floor(frameRate()) + " Frame: " + frameCount);
  }
}
