import { Selector } from 'testcafe';

const sliderHandle = Selector('.ui-slider-handle');

fixture`Mouse options`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Set an estimate', async t => {
    await t
        .click('#tried-test-cafe')
        .drag(sliderHandle, 10, 0, {
            offsetX:   10,
            offsetY:   10,
            speed:     0.01,
            modifiers: {
                shift: true,
            },
        });
});
