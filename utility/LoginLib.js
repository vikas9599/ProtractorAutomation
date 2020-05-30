var OpenWebsite = async function(URL) {
  await browser.get(URL);
};

var MaxmizeScreen = async function() {
  var width = 1920;
  var height = 1080;
  await browser.driver
    .manage()
    .window()
    .setSize(width, height);
};

var UserLogin = async function(email, pass) {
  var emlFld = element(by.model("user.email"));
  var psd = element(by.model("user.password"));
  await emlFld.sendKeys(email);
  await psd.sendKeys(pass);
};

var ClickLogin = async function() {
  var lgBtn = element(by.id("img-login"));
  await lgBtn.click();
};

module.exports = { OpenWebsite, UserLogin, ClickLogin, MaxmizeScreen };
