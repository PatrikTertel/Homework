const { expect } = require("chai");

describe(`change language`, function () {
  it("", async () => {
    await browser.url(`https://webdriver.io/`);
    await $('//*[@id="__docusaurus"]//a[@href="#"]').click();
    await $(
      '//*[@id="__docusaurus"]//ul[@class="dropdown__menu"]/li[2]/a',
    ).click();
    expect(await browser.getUrl()).to.equal(`https://webdriver.io/de/`);
  });
});
