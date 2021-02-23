let gifLength = 180;
let canvas;

var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
};

function setup() {
  var cnv = createCanvas(600, 400);
  canvas = cnv.canvas;

  capturer.start();
}

function draw() {
  background(0);

  move();
  bounce();
  display();

  //   let secondsElapsed = frameCount/gifLength;

  if (frameCount < gifLength) {
    capturer.capture(canvas);
  } else if (frameCount == gifLength) {
    capturer.stop();
  }
}

function move() {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}

function bounce() {
  if (ball.x > width - 12 || ball.x < 12) {
    ball.xspeed *= -1;
  }
  if (ball.y > height - 12 || ball.y < 12) {
    ball.yspeed *= -1;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);
}
