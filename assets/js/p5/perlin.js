var xoff = 0;

function setup(){
    canvas = createCanvas(400, 400);
    canvas.parent("perlin-canvas");
}

function draw(){
    background(51);
    // var x = random(width);
    var x = map(noise(xoff), 0, 1, 0, width);
    xoff += 0.02;
    ellipse(x, 200, 24, 24);
}
