var lg = require("../utility/LoginLib");
var util = require("../utility/Utility");
var URL = "https://www.google.com:3011/#!/";

describe("Website Should Open", () => {
  it("Open Webiste URL", async function () {
    lg.OpenWebsite(URL);
    lg.MaxmizeScreen();

    var title = await browser.getTitle();
    var expected = "Expected title of web";
    util.VerifyTitle(title, expected);
  });

  it("User Should be Enter Username & Password", async function () {
    lg.UserLogin("vikas@gmail.com", "zxcvbnm");
  });

  it("User Should be Logged IN ", async function () {
    lg.ClickLogin();
    util.addWait(5000);
    var title = await browser.getTitle();
    var expected = "Expected Title";
    util.VerifyTitle(title, expected);
  });
});
