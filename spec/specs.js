describe("pingPonger", function() {
  it("will replace numbers divisible by 3 with ping", function() {
    expect(pingPonger(3)).to.eql([1,2,'ping'])
  });
  it("will replace numbers divisible by 5 with pong", function() {
    expect(pingPonger(5)).to.eq(["1,2,ping,4,pong"])
  });
  it("will replace numbers divisible by 3 and 5 with ping pong", function() {
    expect(pingPonger(30)).to.equal(["1","2","pingpong"])
  });
  it("will leave numbers not divisible by 3 or 5 intact", function() {
    expect(pingPonger(17)).equal(17)
  });
});
