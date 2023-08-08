class Header {
    get apiButton() {
        return $(`.navbar__item.navbar__link[href='/docs/api']`);
    }

    async clickApiButton() {
        await this.apiButton.waitForClickable();
        await this.apiButton.click();
    }
    
    get blogButton() {
        return $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[4]');
    }

    async clickBlogButton() {
        await this.blogButton.waitForClickable();
        await this.blogButton.click();
    }

    get languageList() {
        return $('//a[@href="#"]');
    }

    async clickLanguageButton() {
        await this.languageList.waitForClickable();
        await this.languageList.click();
    }

    get deutschButton() {
        return $('//a[@href="/de/"]');
    }

    async clickDeutschButton() {
        await this.deutschButton.waitForClickable();
        await this.deutschButton.click();
    }
}

module.exports = new Header();