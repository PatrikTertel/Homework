const { expect } = require("chai");
const search = require('../pageobjects/components/search');

describe(`search field`, function () {
  it("search result should open browser page", async () => {
    await browser.url(`https://webdriver.io/`);
    await search.clickSearchButton();
    await search.inputSearchField(`browser`)
    expect(await browser.getUrl()).to.equal(`https://webdriver.io/docs/api/browser/`);
    
  });
});
