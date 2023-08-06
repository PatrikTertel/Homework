const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");

(async function () {
  let driver = new Builder().forBrowser("chrome").build();
  await driver.manage().window().setRect({ width: 1500, height: 900 });
  await driver.get("https://chromedriver.chromium.org/home");
  const dropDownMenu = await driver.findElement(
    By.xpath(
      `//*[@id="WDxLfe"]/ul/li[13]/div[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]`,
    ),
  );
  await dropDownMenu.click();
  const mobileEmulationButton = await driver.findElement(
    By.xpath(`//*[@id="WDxLfe"]/ul/li[13]/div[2]/ul/li[10]/div/div/a`),
  );
  await mobileEmulationButton.click();
  expect(await driver.getCurrentUrl()).to.include("mobile-emulation");
  await driver.quit();
})();
