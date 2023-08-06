const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");

(async function () {
  let driver = new Builder().forBrowser("chrome").build();
  await driver.manage().window().setRect({ width: 1500, height: 900 });
  await driver.get("https://chromedriver.chromium.org/home");
  const mainPageTitle = await driver.findElement(
    By.xpath(`//*[@id="h.p_ID_13"]/span`),
  );
  const chromeExtensionsButton = await driver.findElement(
    By.xpath(`//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a`),
  );
  expect(await mainPageTitle.getText()).to.equal("ChromeDriver");
  await chromeExtensionsButton.click();
  const extentionsPageTitle = await driver.findElement(
    By.xpath(`//*[@id="h.p_ID_13"]/span`),
  );
  await driver.executeScript(
    "arguments[0].style.border='3px solid red'",
    extentionsPageTitle,
  );
  expect(await extentionsPageTitle.getText()).to.equal("Chrome Extensions");
  await driver.sleep(2000);
  await driver.quit();
})();
