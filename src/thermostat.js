function Thermostat() {
  this.temp = 20
  this.min = 10
  this.max
  // if(powerSaving == true) {
  //   this.max = 25;
  // }
  // else {
  //   this.max = 32;
  // }
};

Thermostat.prototype.up = function(degrees = 1) {
  this.temp += degrees
};

Thermostat.prototype.down = function(degrees = 1) {
  if (this.temp - degrees < 10) {
    throw "Y'all fucked up"
  }
  this.temp -= degrees
};

// var thermostat = {
//   temp: 20
// };


// Airport.prototype.land = function(plane) {
//   this.planes.push(plane)
// };
