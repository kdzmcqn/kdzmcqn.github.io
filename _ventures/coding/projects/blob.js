var angle_inc;
var cnv;
var t = 0;
var speed = 0.1;
var chaos = 25;

//~ PROJECT
var projname = "blob_try";
var nFramesInLoop = 50;
var bEnableExport = false; //! TURN ON OR OFF

//! Adjust FRAME RATE
var frame_rate = 4;

var fr;
var cnv;
var cols, rows;
var terrain = [];
var flying = 0;

var nElapsedFrames;
var bRecording;

function setup() {
  cnv = createCanvas(500, 500);
  cnv.parent("p5-canvas");
  angle_inc = PI / 60;

  noiseSeed(44);
  if (bEnableExport) {
    frameRate(frame_rate);
  }
  fr = createP("");

  bRecording = false;
  nElapsedFrames = 0;
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

  renderDrawing(percentCompleteFraction);

  if (bRecording && bEnableExport) {
    var frameOutputFilename =
      projname + "_frame_" + nf(nElapsedFrames, 4) + ".jpg";
    print("Saving image: " + frameOutputFilename);
    saveCanvas(cnv, frameOutputFilename, "jpg");
    nElapsedFrames++;
    if (nElapsedFrames >= nFramesInLoop) {
      bRecording = false;
      noLoop();
    }
  }

  function renderDrawing() {
    background(0);

    translate(width / 2, height / 2);

    var radius = 150;
    var color_no;
    
    colorMode(HSB, 50);
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle_inc) {
      var offset = map( noise(cos(a), sin(a), t * speed), 0, 1, -25 - chaos, 25 + chaos); 
      var s = map(sin(a * 11), -1, 1, -25, 25);
      var r = radius + offset + s;
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x, y);
      // ellipse(x, y, 4, 4);
      color_no = offset;
      fill(color_no, 16, 25);
      stroke(color_no, 16, 25);
    }
    t += 0.5;
    endShape(CLOSE);
  }
  if (bEnableExport) {
    fr.html("FPS: " + floor(frameRate()) + " percent: " + percentCompleteFraction);
  } else {
    fr.html("FPS: " + floor(frameRate()));
  }
}
