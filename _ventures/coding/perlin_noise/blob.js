var angle_inc;
var cnv;
var t = 0;
var speed = 0.1;
var chaos = 25;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("p5-canvas");
  angle_inc = PI / 60;
}

function draw() {
  background(0);

  translate(width / 2, height / 2);

  var radius = 150;

  noFill();
  stroke(255);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle_inc) {
    var offset = map(noise(cos(a), sin(a), t * speed), 0, 1, -25 - chaos, 25 + chaos);
    var s = map(sin(a * 6), -1, 1, -25, 25);
    var r = radius + offset + s;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    // ellipse(x, y, 4, 4);
  }
  t += 0.5;
  endShape(CLOSE);
}
