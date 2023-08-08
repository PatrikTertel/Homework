const BasePage = require('./basePage')

class ApiPage extends BasePage {

    get protocolsList() {
        return $('.menu__link.menu__link--sublist[href="/docs/api/protocols"]');
    }

    async clickProtocolList() {
        await this.protocolsList.waitForClickable();
        await this.protocolsList.click();
    }

    get editButton() {
        return $('.theme-edit-this-page');
    }

    async clickEditButton() {
        await this.editButton.waitForClickable();
        await this.editButton.click();
    }

    async scrollToEditButton(){
        await this.editButton.scrollIntoView();
    }


}

module.exports = new ApiPage();