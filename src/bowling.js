function Bowling() {
  this.score = []
  this.roll = 1
  this.frame = 1
  this.rollMax = 20
  this.frameMax = 10
};


Bowling.prototype.addScore = function(pins) {
  this.score.push(pins)
  bowling.checkLast(pins)
  if (pins == 'strike' && this.roll != 19) {
    this.roll += 2
  } else {
    this.roll ++
  }
};

Bowling.prototype.checkLast = function(pins) {
  if (this.roll == 19 && pins == 'strike') {
    this.rollMax = 21
  }
};
