// let myp5 = new p5((sketch) => {
//   var xoff1 = 0;
//   var xoff2 = 100;

//   sketch.setup = () => {
//     sketch.createCanvas(400, 400);
//     noiseSeed(44);
//     // sketch.parent("perlin-canvas");
//   };

//   sketch.draw = () => {
//     sketch.background(51);
//     // var x = random(width);
//     var x = sketch.map(sketch.noise(xoff1), 0, 1, 0, sketch.width);
//     var y = sketch.map(sketch.noise(xoff2), 0, 1, 0, sketch.height);
//     xoff1 += 0.02;
//     xoff2 += 0.03;
//     sketch.ellipse(x, y, 24, 24);
//   };
// }, 'perlin-canvas');

let myp51 = new p5((sketch) => {
  var start = 0;
  var inc = 0.01;
  sketch.setup = () => {
    sketch.createCanvas(400, 400);
    // sketch.parent("perlin-canvas");
  };
  
  sketch.draw = () => {
    sketch.background(51);
    sketch.stroke(255);
    sketch.noFill();
    sketch.beginShape();
    var xoff = start;
    for (var x = 0; x < sketch.width; x++){
      sketch.stroke(255);
      var n = sketch.map(sketch.noise(xoff), 0, 1, 0, sketch.height);
      var s = sketch.map(sketch.sin(xoff), -1, 1, -50, 50);
      var y = n + s;
      // var y = sketch.noise(xoff) * 100 + sketch.sin(xoff) * (sketch.height/2) + sketch.height/2;
      sketch.vertex(x, y);
      xoff += inc;
    }
    // sketch.noLoop();
    sketch.endShape();
    start += inc;
    // sketch.ellipse(x, y, 24, 24);
  };
}, 'perlin-canvas1');