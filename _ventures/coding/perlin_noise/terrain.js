var scl = 20;
var w = 1600;
var h = 1000;

//~ PROJECT
var projname = "terrain_try";
var nFramesInLoop = 10;
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
  cnv = createCanvas(480, 270, WEBGL);
  cnv.parent("p5-canvas");

  noiseSeed(44);
  if (bEnableExport) {
    frameRate(frame_rate);
  }
  fr = createP("");

  bRecording = false;
  nElapsedFrames = 0;

  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
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
    flying -= 0.05;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -300, 50);
        xoff += 0.05;
      }
      yoff += 0.05;
    }

    background(0);
    stroke(255);
    noFill();

    rotateX(PI / 3);
    translate(-w / 2, -h / 2);

    for (var y = 0; y < rows - 1; y++) {
      //* CHANGE MODE
      beginShape(LINES);

      for (var x = 0; x < cols; x++) {
        vertex(x * scl, y * scl, terrain[x][y]);
        vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }

      endShape();
    }
  }
  if (bEnableExport) {
    fr.html("FPS: " + floor(frameRate()) + " percent: " + percentCompleteFraction);
  } else {
    fr.html("FPS: " + floor(frameRate()));
  }
}
