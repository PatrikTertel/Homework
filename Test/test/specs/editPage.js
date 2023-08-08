const { expect } = require("chai");
const header = require('../pageobjects/components/header');
const apiPage = require("../pageobjects/apiPage");

describe(`Page edit`, function () {
  it("edit button shoul open github repository", async () => {
    await apiPage.navigate(`https://webdriver.io/`)
    await header.clickApiButton()
    await apiPage.clickProtocolList()
    await apiPage.scrollToEditButton()
    await apiPage.clickEditButton()
    await browser.switchWindow(
      `https://github.com/`,
    );

    expect(await browser.getUrl()).to.contain(
      `github`,
    );
  });
});
