var meta_primary_color;
function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.prevPos = this.pos.copy();
  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    var field_index_length = vectors.length - 1;
    this.applyForce(force, index, field_index_length);
  };
  this.applyForce = function (force, index, field_index_length) {
    // try {
    //   if (index??field_index_length) {
    //   let vec_br = abs(force.x + force.y);
    //   this.vel.mult(vec_br);
    // }
    // } catch {
    //   console.log("index no: " + index + " max: "+ field_index_length);
    // }
    this.acc.add(force);
    let vvx = abs(this.vel.x);
    let vvy = abs(this.vel.y);
    if (vvx < 0.2 && vvy < 0.2) {
      this.vel.add(0.5, 0.5);
    }
  };
  this.show = function () {
    setMetaColor = color('#ffff95');
    setMetaColor.setAlpha(3);
    stroke(setMetaColor);
    strokeWeight(3);
    // ellipse(this.pos.x, this.pos.y, 4, 4);
    // line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    point(this.pos.x, this.pos.y);
    this.updatePrev();
  };

  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > (width)) {
      this.pos.x = 0;
      // this.vel.mult(-1,1);
      // this.pos.y = this.prevPos.y;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      // this.vel.mult(-1,1);
      // this.pos.y = this.prevPos.y;
      this.updatePrev();
    }
    if (this.pos.y > (height)) {
      // this.vel.mult(1,-1);
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      // this.vel.mult(1,-1);
      this.pos.y = height;
      this.updatePrev();
    }
  };
}
