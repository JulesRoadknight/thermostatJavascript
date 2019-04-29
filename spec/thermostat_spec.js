describe("thermostat", function() {

  beforeEach(function(){
    thermostat = new Thermostat
  })

  it("starts at 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("increases when up is called", function() {
    thermostat.up()
    expect(thermostat.temp).toEqual(21);
  });

  it("decreases when down is called", function() {
    thermostat.down()
    expect(thermostat.temp).toEqual(19);
  });

  it("has a min temp of 10", function() {
    expect(thermostat.min).toEqual(10);
  });

  it("cannot go below 10", function() {
    // expect(thermostat.down(11)).toThrowError();
    // for some reason, this fixes that Actual error
    expect(() => {thermostat.down(11)}).toThrow()
  });

  it("has max temp of 25 if power saving", function() {
    thermostat.up(5)
    expect(() => {thermostat.up()}).toThrow()
  });

  it("has max temp of 32 if not power saving", function() {
    thermostat.powerSaving = false
    thermostat.up(12)
    expect(() => {thermostat.up()}).toThrow()
  });

  it("powerSaving is true by default", function() {
    expect(thermostat.powerSaving).toBe(true)
  });

  it("drops the temperature to 25 if temperature is above 25 and power saving is turned on", function() {
    thermostat.toggle();
    thermostat.up(10);
    thermostat.toggle();
    expect(thermostat.temp).toBe(25)
  });

  it("Reset function sets temp to 20", function() {
    thermostat.up(5)
    thermostat.reset()
    expect(thermostat.temp).toBe(20)
  });

  it("Temp < 18 to be low-usage", function() {
    thermostat.down(3)
    expect(thermostat.usage()).toBe("low-usage")
  });

  it("Temp > 18 and < 25 to be medium-usage", function() {
    expect(thermostat.usage()).toBe("medium-usage")
  });

  it("Temp >= 25 to be high-usage", function() {
    thermostat.up(5)
    expect(thermostat.usage()).toBe("high-usage")
  });

});
