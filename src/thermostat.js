function Thermostat() {
  this.temp = 20
  this.min = 10
  this.powerSaving = true
  this.powerSaveOn = 25
  this.powerSaveOff = 32
};


Thermostat.prototype.up = function(degrees = 1) {
  if ((this.powerSaving == true && this.temp + degrees > this.powerSaveOn) ||
  (this.powerSaving == false && this.temp + degrees > this.powerSaveOff)){
    throw("Max temp exceeded")
  } else {
    this.temp += degrees
  }

};

Thermostat.prototype.down = function(degrees = 1) {
  if (this.temp - degrees < 10) {
    throw "It's already cold you miser."
  }
  this.temp -= degrees
};

Thermostat.prototype.toggle = function() {
  if (this.powerSaving == true) {
    this.powerSaving = false
  }
  else {
    this.powerSaving = true
  }
};

Thermostat.prototype.reset = function() {
  this.temp = 20
};

Thermostat.prototype.usage = function() {
  if (this.temp < 18) {
    return "low-usage"
  } else if(this.temp < 25){
    return "medium-usage"
  } else {
    return "high-usage"
  }
};
