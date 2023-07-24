const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
const { Key } = require("selenium-webdriver"); //не совсем понял для чего тут это прописывать, но так работает, если объяснишь будет круто

(async function () {
  let driver = new Builder().forBrowser("chrome").build();
  await driver.manage().window().setRect({ width: 1500, height: 900 });
  await driver.get("https://chromedriver.chromium.org/home");
  const searchButton = await driver.findElement(
    By.xpath(`//div[@class="RBEWZc"]/div/span/span`),
  );
  await searchButton.click();
  await driver.wait(
    until.elementLocated(By.xpath('//div[@class="Xb9hP"]/input', 10000)),
  );
  const searchInput = await driver.findElement(
    By.xpath('//div[@class="Xb9hP"]/input'),
  );
  await searchInput.sendKeys("driver", Key.RETURN);
  await driver.wait(
    until.elementLocated(By.xpath('//div[@class="lZsZxe"]/div[1]', 10000)),
  );
  const firstResult = await driver.findElement(
    By.xpath('//div[@class="lZsZxe"]/div[1]'),
  );
  await firstResult.getText();
  expect(await firstResult.getText()).to.include("driver");
  await driver.quit();
})();
