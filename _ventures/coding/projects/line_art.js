//~ PROJECT
let projname = "line_art";
let nFramesInLoop = 300;
let bEnableExport = true; //! TURN ON OR OFF

//! Adjust FRAME RATE
let frame_rate = 4;

var fr;
let cnv;

var nElapsedFrames;
var bRecording;

//* DRAW VARIABLES
let x;
let y;
let speedX;
let speedY;

function setup() {
  cnv = createCanvas(300, 300);
  cnv.parent("canvas");
  noLoop();
  bRecording = false;
  background(0);
  nElapsedFrames = 0;

  //   randomSeed(1234);
  if (bEnableExport) {
    frameRate(frame_rate);
    nElapsedFrames = 0;
  }
  fr = createP("");

  x = 100;
  y = 0;
  speedX = 2;
  speedY = -4;
}

function keyTyped() {
  if (bEnableExport) {
    if (key === "f" || key === "F") {
      bRecording = true;
      nElapsedFrames = 0
      loop();
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
    var frameOutputFilename = projname + "_frame_" + nf(nElapsedFrames, 4) + ".jpg";
    print("Saving image: " + frameOutputFilename);
    saveCanvas(cnv, frameOutputFilename, "jpg");
    nElapsedFrames++;
    if (nElapsedFrames >= nFramesInLoop) {
      bRecording = false;
    }
  }

  function renderDrawing(percent) {
    const redVal = map(x, 100, width, 0, 255);
    const greenVal = map(y, 0, height, 0, 255);

    translate(x, x);
    const rot = map(y, 0, height, 0, TWO_PI);
    rotate(rot);
    stroke(redVal, greenVal, 255);
    strokeWeight(0.5);
    line(-150, 0, 150, 0);

    x += speedX;
    y += speedY;
    if (x > width || x < 0) {
      speedX = -speedX;
    }
    if (y > height || y < 0) {
      speedY = -speedY;
    }

    if(bEnableExport){
        if(percent >= 0.9){
            noLoop();
        }
    }
  }

  if (bEnableExport) {
    fr.html( "FPS: " + floor(frameRate()) + " percent: " + percentCompleteFraction + "<br>Frame: " + frameCount);
  } else {
    fr.html("FPS: " + floor(frameRate()));
  }
}
