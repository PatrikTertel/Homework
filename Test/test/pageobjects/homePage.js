const BasePage = require('./basePage')

class HomePage extends BasePage {

    get protocolsList() {
        return $('.menu__link.menu__link--sublist[href="/docs/api/protocols"]');
    }

    async clickProtocolList() {
        await this.protocolsList.waitForClickable();
        await this.protocolsList.click();
    }
}

module.exports = new HomePage();