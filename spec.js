describe("Test Suite 1", () => {
  it("Test case 1", function() {
    browser.get("https://www.protractortest.org/#/");
    var title = browser.getTitle();
    //   console.log("Website title is ", title);
    expect(title).toEqual("Protractor - end-to-end testing for AngularJS");
  });
});

describe("Test Suite 2", () => {
  it("Sum Test", function() {
    x = 20;
    y = 30;
    z = x - y;
    console.log("Test Output", z);

    expect(z).toEqual(50);
  });
  it("Minus Test ", function() {
    x = 20;
    y = 30;
    z = x - y;
    console.log("Test Output", z);
    expect(z).toEqual(-10);
  });
  it("Multiply Test", function() {
    x = 20;
    y = 30;
    z = x * y;
    console.log("Test Output", z);
    expect(z).toEqual(600);
  });
});

describe("Test Suite 3", () => {
  it("Division Test", function() {
    x = 20;
    y = 30;
    z = x + y;
    console.log("Test Output", z);
    expect(z).toEqual(50);
  });
  it("Test Case 2", function() {
    x = 20;
    y = 30;
    z = x + y;
    expect(z).toEqual(50);
  });
  it("Test Case 3", function() {
    x = 20;
    y = 30;
    z = x + y;
    expect(z).toEqual(50);
  });
});
