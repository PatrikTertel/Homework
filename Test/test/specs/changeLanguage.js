const { expect } = require("chai");
const header = require('../pageobjects/components/header');
const apiPage = require("../pageobjects/apiPage");

describe(`change language`, function () {
  it("should redirect to deutsch page version", async () => {
    await browser.url(`https://webdriver.io/`);
    await header.clickLanguageButton()
    await browser.pause(2000)
    await header.clickDeutschButton()
    expect(await browser.getUrl()).to.equal(`https://webdriver.io/de/`);
  });
});