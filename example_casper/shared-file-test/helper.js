import { Selector, t } from 'testcafe';
import XPathSelector from '../xpath-selector';

export class Helper {
    constructor () {
        this.queue = Promise.resolve();
        this.developerName = XPathSelector('//*[@id="developer-name"]');
        this.FirstCheckBox = XPathSelector('//input[@type="checkbox"]');
        this.submitButton  = Selector('#submit-button');
        this.articleHeader = Selector('#article-header');
    }

    _chain (callback) {
        this.queue = this.queue.then(callback);

        return this;
    }

    then (callback) {
        return callback(this.queue);
    }

    navigateTo (url) {
        return this._chain(async () => await t.navigateTo(url));
    }

    typeName (name) {
        return this._chain(async () => await t.typeText(this.developerName, name));
    }

    firstCheckBox () {
            return this._chain(async () => await t.click(this.FirstCheckBox));
    }

    submit () {
        return this._chain(async () => await t.click(this.submitButton));
    }

    checkName (name) {
        return this._chain(async () => await t.expect(this.articleHeader.textContent).contains(name));
    }
}
