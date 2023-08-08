const { Key } = require('webdriverio');

class Search {

    get searchButton() {
        return $('.DocSearch.DocSearch-Button');
    }

    async clickSearchButton() {
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }

    get searchField() {
        return $('//*[@id="docsearch-input"]');
    }

    async inputSearchField(inputValue) {
        await this.searchField.waitForDisplayed();
        await this.searchField.setValue(inputValue)
        await browser.pause(2000)
        await browser.keys(Key.Enter)
    }
}

module.exports = new Search();