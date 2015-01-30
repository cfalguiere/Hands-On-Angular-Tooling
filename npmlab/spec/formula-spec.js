var formula = require("../index.js");

describe("Formula", function () {
  it("should compute the area of the square", function () {
    var area = formula.squareArea(5);
    expect(area).toBe(25);
  });
});
