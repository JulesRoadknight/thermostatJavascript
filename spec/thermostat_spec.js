describe("thermostat", function() {

  it("starts at 20 degrees", function() {
    var thermostat = new Thermostat
    expect(thermostat.temp).toEqual(20);
  });

  it("increases when up is called", function() {
    var thermostat = new Thermostat
    thermostat.up()
    expect(thermostat.temp).toEqual(21);
  });

  it("decreases when down is called", function() {
    var thermostat = new Thermostat
    thermostat.down()
    expect(thermostat.temp).toEqual(19);
  });

  it("has a min temp of 10", function() {
    var thermostat = new Thermostat
    expect(thermostat.min).toEqual(10);
  });

  it("cannot go below 10", function() {
    var thermostat = new Thermostat
    // expect(thermostat.down(11)).toThrowError();
    expect(() => {thermostat.down(11)}).toThrow()
  });

  // it("has max temp of 25 if power saving", function() {
  //   var thermostat = new Thermostat
  //   thermostat.powerSaving = true
  //   expect(thermostat.max).toEqual(25);
  // });

});
