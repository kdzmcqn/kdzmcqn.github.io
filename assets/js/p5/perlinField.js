var inc = 0.4;
var scl = 20;
var cols, rows;
var two_pi = 6.28318530718;
var zoff = 0;
var flowfield;
var particles = [];
var fr;

var myNickname = "andro";
var nFramesInLoop = 200;
var bEnableExport = false;
// var frame_rate = 4;

var nElapsedFrames;
var bRecording;
var cnv;
function setup() {
  cnv = createCanvas(1200, 675);
  cnv.parent("perlin-canvas");
  // frameRate(frame_rate);
  bRecording = false;
  nElapsedFrames = 0;
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 2000; i++) {
    particles[i] = new Particle();
  }
  background(255);
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
  // Compute a percentage (0...1) representing where we are in the loop.
  var percentCompleteFraction = 0;
  if (bRecording) {
    percentCompleteFraction = float(nElapsedFrames) / float(nFramesInLoop);
  } else {
    percentCompleteFraction =
      float(frameCount % nFramesInLoop) / float(nFramesInLoop);
  }

  // Render the design, based on that percentage.
  // This function renderMyDesign() is the one for you to change.
  renderMyDesign(percentCompleteFraction);

  // If we're recording the output, save the frame to a file.
  // Note that the output images may be 2x large if you have a Retina mac.
  // You can compile these frames into an animated GIF using a tool like:
  if (bRecording && bEnableExport) {
    var frameOutputFilename = myNickname + "_frame_" + nf(nElapsedFrames, 4) + ".jpg";
    print("Saving output image: " + frameOutputFilename);
    saveCanvas(cnv, frameOutputFilename, "jpg");
    nElapsedFrames++;
    if (nElapsedFrames >= nFramesInLoop) {
      bRecording = false;
      noLoop();
    }
  }
  function renderMyDesign(percent) {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + (y * cols);
        var angle = noise(xoff, yoff, zoff) * two_pi * 3;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(5);
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
      // if (percentCompleteFraction == 0.9) {
        // noLoop();
      // }
    }
    fr.html("FPS: " + floor(frameRate()));
    // fr.html("FPS: " + floor(frameRate()) + " percent: " + percent);
  }
}
