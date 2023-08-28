import indexFile from './index';
import { Selector } from 'testcafe';
import XPathSelector from '../xpath-selector';

const dataSet = require('./data2.json');
const firstCheckbox  = XPathSelector('//input[@type="checkbox"]');
const secondCheckbox = XPathSelector('//input[@type="checkbox"]').nth(1);
const developerName = XPathSelector('//*[@id="developer-name"]');
const interfaceSelector = XPathSelector('//*[@id="preferred-interface"]');
const interFaceOptions = interfaceSelector.find('option');
const sliderHandle = Selector('#slider').child();
const rateValue    = Selector('.slider-value').nth(1);

fixture `Testing to run previous test script`
    .page `./`;

dataSet.forEach(data => {
    test(`Enter '${data.name}'`, async t => {
    let result = data.OS.toLowerCase();
    const OSSelector = Selector('#'+result);

        await t
            .typeText(developerName, data.name)
            .click(firstCheckbox)
            .click(secondCheckbox)
            .click('#tried-test-cafe')
            .dragToElement(sliderHandle, rateValue, { offsetX: 10,offsetY:10,destinationOffsetX: 0,destinationOffsetY: -25,speed:0.1})
            .typeText('#comments', data.comment)
            .click(OSSelector)
            .click(interfaceSelector)
            .click(interFaceOptions.withText(data.dropdown))
            .click('#submit-button')
            .expect(Selector('#article-header').textContent).eql(data.resultText);
    });
});
