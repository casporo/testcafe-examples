import { Selector } from 'testcafe';
import XPathSelector from '../xpath-selector';

const dataSet = require('./data.json');

fixture `Data-Driven Tests`
    .page `https://devexpress.github.io/testcafe/example/`;

dataSet.forEach(data => {
    test(`Enter '${data.name}'`, async t => {
    const firstCheckbox  = XPathSelector('//input[@type="checkbox"]');
    const developerName = XPathSelector('//*[@id="developer-name"]');
        await t
            .typeText(developerName, data.name)
            .click(firstCheckbox)
            .click('#tried-test-cafe')
            .typeText('#comments', data.comment)
            .click('#submit-button')
            .expect(Selector('#article-header').textContent).eql(data.resultText);
    });
});
