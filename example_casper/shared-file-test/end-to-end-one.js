import { Helper } from './helper';

fixture`End to End Test`;

const helper = new Helper();

test('Fill form', async () => {
     await helper
        .navigateTo('http://devexpress.github.io/testcafe/example/')
        .typeName('John')
        .firstCheckBox()
        .submit()
        .checkName('John');

});
