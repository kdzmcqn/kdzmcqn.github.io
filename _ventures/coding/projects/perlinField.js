const inc = 0.05;
const scl = 20;
let cols, rows;
var zoff = 0;
var flowfield;
var particles = [];
var fr;
let myNickname = "andro";
let nFramesInLoop = 140;
var bEnableExport = false;
let frame_rate = 2;
var nElapsedFrames;
var bRecording;
let cnv;
function setup() {
  cnv = createCanvas(960, 540); //~ GCD : 60 = 2 * 2 * 3 * 5
  cnv.parent("perlin-canvas");
  background(0);
  if (bEnableExport){
    frameRate(frame_rate);
  }
  bRecording = false;
  nElapsedFrames = 0;
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 100; i++) {
    particles[i] = new Particle();
  }
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
  function renderMyDesign() {
    // let tw = 640 / 4;
    // let th = 360 / 4;
    // translate(tw, th);
    var yoff = 0;
    background(0, 0.5);
    for (var y = 6; y < 21; y++) {
      var xoff = 0;
      for (var x = 8; x < 40; x++) {
        var index = (x + (y * cols));
        var angle = noise(xoff, yoff, zoff) * TWO_PI * 3;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        v.normalize();
        var hue  = abs(v.y) + 0.8;
        var br = abs(v.x + v.y) - 0.8;
        fill(hue, 2, br, 0.6);
        stroke(hue, 2, br + 0.8, 0.6);
        strokeWeight(1);
        push();
        // text(index, x * scl, y * scl);
        rect(x * scl, y * scl, scl, scl);
        translate(x * scl, y * scl);
        rotate(v.heading());
        line(0 ,0, scl, 0);
        pop();
      }
      yoff += inc;
      zoff += 0.0001;
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
