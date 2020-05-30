var addWait = async function(time) {
  await browser.sleep(time);
};

var VerifyText = async function(actual, expected) {
  expect(actual).toEqual(expected);
};

var VerifyTitle = async function(actual, expected) {
  expect(actual).toEqual(expected);
};

module.exports = { addWait, VerifyText, VerifyTitle };
