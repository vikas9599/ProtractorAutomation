var Login = function() {
  var emlFld = element(by.model("user.email"));
  var psd = element(by.model("user.pass"));
  var lgBtn = element(by.model("yourName"));

  this.OpenWebURL = async function(url) {
    await browser.get(url);
  };
  this.LoginUser = async function(email, pass) {
    await emlFld.sendKeys(name);
    await psd.sendKeys(pass);
  };

  this.ClickLogin = async function() {
    await lgBtn.click();
  };
};

module.exports = new Login();
