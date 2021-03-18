var scl = 20;
var w = 1600;
var h = 1000;
//* GCD = 2*2*2*5*5 = 200
//~ PROJECT
var projname = "lncolor";
var nFramesInLoop = 250;
var bEnableExport = true; //! TURN ON OR OFF

//! Adjust FRAME RATE
var frame_rate = 2;

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

  noiseSeed(42);
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
    flying -= 0.02;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
          let val = map(noise(xoff, yoff), 0, 1, -320, 60);
          terrain[x][y] = val;
          xoff += 0.08;
        }
        yoff += 0.08;
    }
    
    background(0);
    rotateX(PI / 3);
    rotateZ(PI / 3);
    translate(-w / 2, -h / 2);

    
    colorMode(RGB);
    let from_sea = color(255, 0, 0);
    let to_sea = color(0, 0, 255);
    let from_land = color(0, 0, 255);
    let to_lowland = color(0, 255, 255);
    let to_midland = color(0, 255, 0);
    let to_highland = color(255, 255, 0);
    
    to_sea.setAlpha(100);
    to_lowland.setAlpha(100);
    to_midland.setAlpha(100);
    to_highland.setAlpha(100);
    let c;
    noFill();
    rect(0, 0, w, h);
    for (var y = 0; y < rows - 1; y++) {
        //* CHANGE MODE
        
        beginShape(LINES);
        for (var x = 0; x < cols; x++) {
            if (terrain[x][y] >= -320 && terrain[x][y] <= -250) {
                let below_sea = map(terrain[x][y], -320, -250, 0, 1);
                c = lerpColor(from_sea, to_sea, below_sea);
            } else if (terrain[x][y] >= -250 && terrain[x][y] <= -100) {
                let above_sea = map(terrain[x][y], -250, -100, 0, 1);
                c = lerpColor(from_land, to_lowland, above_sea);
            } else if (terrain[x][y] >= -100 && terrain[x][y] <= 0) {
                let mid = map(terrain[x][y], -100, 0, 0, 1);
                c = lerpColor(to_lowland, to_midland, mid);
            } else if (terrain[x][y] >= 0 && terrain[x][y] <= 60) {
                let high = map(terrain[x][y], 0, 60, 0, 1);
                c = lerpColor(to_midland, to_highland, high);
            }
            stroke(c);
            vertex(x * scl, y * scl, terrain[x][y]);
        vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        
    }
    endShape();
    }
}
  if (bEnableExport) {
      fr.html(
          "FPS: " + floor(frameRate()) + " percent: " + percentCompleteFraction
    );
  } else {
    fr.html("FPS: " + floor(frameRate()));
  }
}
