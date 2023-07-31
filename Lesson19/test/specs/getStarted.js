const { expect } = require("chai");

describe(`get started click`, function () {
  it("", async () => {
    await browser.url(`https://webdriver.io/`);
    await $(
      '//*[@id="docusaurus_skipToContent_fallback"]//div[@class="buttons_pzbO"]//a[1]',
    ).click();
    expect(await browser.getUrl()).to.equal(
      `https://webdriver.io/docs/gettingstarted`,
    );
  });
});
