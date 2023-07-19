import { Selector } from 'testcafe';
import XPathSelector from '../xpath-selector';

const dataSet = require('./data.json');

fixture `Data-Driven Tests`
    .page `https://devexpress.github.io/testcafe/example/`;

dataSet.forEach(data => {
    test(`Enter '${data.name}'`, async t => {
    const firstCheckbox  = XPathSelector('//input[@type="checkbox"]');
        await t
            .typeText('#developer-name', data.name)
            .click('#tried-test-cafe')
            .typeText('#comments', data.comment)
            .click(firstCheckbox)
            .click('#submit-button')
            .expect(Selector('#article-header').textContent).eql(data.resultText);
    });
});
