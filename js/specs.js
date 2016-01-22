describe("pingPong", function() {
  it("will replace numbers divisible by 3 with ping", function() {
    expect(pingpong(6)).to.equal("ping")
  });
  it("will replace numbers divisible by 5 with pong", function() {
    expect(pingpong(10)).to.equal("pong")
  }
  it("will replace numbers divisible by 3 and 15 with ping pong" function() {
    expect(pingpong(30)).to.equal("ping pong")
  });
  it("will produce new results when a new number is entered" function() {
    expect(pingpong(15, 5)).to.equal("ping pong, pong")
  });
}
