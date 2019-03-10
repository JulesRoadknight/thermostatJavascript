describe("bowling", function() {

  beforeEach(function(){
    bowling = new Bowling
  })

  it("keeps score", function() {
    expect(bowling.score).toEqual([]);
  });

  it("tracks rolls", function() {
    expect(bowling.roll).toEqual(1);
  });

  it("tracks frames", function() {
    expect(bowling.frame).toEqual(1);
  });

  it("has a maximum number of rolls", function() {
    expect(bowling.rollMax).toEqual(20);
  });

  it("has a maximum number of rolls", function() {
    expect(bowling.frameMax).toEqual(10);
  });

  it("has a scoring function", function() {
    bowling.addScore(5)
    expect(bowling.score).toContain(5);
  });

  it("has a scoring function", function() {
    bowling.addScore(5)
    bowling.addScore(1)
    bowling.addScore(3)
    expect(bowling.score).toContain(5);
    expect(bowling.score).toContain(1);
    expect(bowling.score).toContain(3);
  });

  it("addScore increases roll by one", function() {
    bowling.addScore(5)
    expect(bowling.roll).toEqual(2);
  });

  it("addScore increases roll by two if strike is scored", function() {
    bowling.addScore('strike')
    expect(bowling.roll).toEqual(3);
  });

  it("rollMax increased by 1 if roll 19 is a strike", function() {
    bowling.roll = 19
    bowling.addScore('strike')
    expect(bowling.rollMax).toEqual(21);
  });

  it("ends the game when the turn limit is exceeded", function() {
    bowling.roll = 20
    bowling.addScore(5)
    expect(bowling.status).toEqual('Game Over');
  });

  it("ends the game when the turn limit is exceeded", function() {
    bowling.roll = 19
    bowling.addScore('strike')
    bowling.addScore(4)
    bowling.addScore(4)
    expect(bowling.status).toEqual('Game Over');
  });

});
