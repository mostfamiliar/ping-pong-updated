describe("pingPonger", function() {
  it("will replace numbers divisible by 3 with ping", function() {
    expect(pingPonger(3)).to.eql([1,2,'ping'])
  });
  it("will replace numbers divisible by 5 with pong", function() {
    expect(pingPonger(5)).to.eql([1,2,'ping',4,'pong'])
  });
  it("will replace numbers divisible by 3 and 5 with ping pong", function() {
    expect(pingPonger(15)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong'])
  });
  it("will leave numbers not divisible by 3 or 5 intact", function() {
    expect(pingPonger(4)).eql([1,2,'ping',4])
  });
});
describe("pingpongValidator", function() {
  it("will return true if input is numerical", function() {
    expect(pingpongValidator(3)).to.equal(true)
  });
});
