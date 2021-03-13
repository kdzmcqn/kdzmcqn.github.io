var inc = 0.08;
var scl = 60;
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
  // cnv = createCanvas(720, 405); //~ GCD : 45 = 3 * 3 * 5
  cnv = createCanvas(960, 540); //~ GCD : 60 = 2 * 2 * 3 * 5
  // cnv = createCanvas(500, 500); //~ test size
  // cnv = createCanvas(1200, 675); //~ GCD : 75 = 3 * 5 * 5
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
  for (var i = 0; i < 1; i++) {
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
        textSize(12);
        push();
        text(index, x * scl, (y * scl) + 12);
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
      // if (percentCompleteFraction == 0.9) {
      // noLoop();
      // }
    }
  }
  if (bEnableExport) {
    fr.html("FPS: " + floor(frameRate()) + " percent: " + floor(percentCompleteFraction));
  } else {
    fr.html("FPS: " + floor(frameRate()) + " Frame: " + frameCount);
  }
}
