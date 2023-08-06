const { expect } = require("chai");

describe(`Stack Overflow click`, function () {
  it("", async () => {
    await browser.url(`https://webdriver.io/`);
    await $(`//a[contains(text(), "Stack Overflow")]`).scrollIntoView();
    await $(`//a[contains(text(), "Stack Overflow")]`).click();
    await browser.switchWindow(
      `https://stackoverflow.com/questions/tagged/webdriver-io`,
    );
    expect(await browser.getUrl()).to.equal(
      `https://stackoverflow.com/questions/tagged/webdriver-io`,
    );
  });
});
