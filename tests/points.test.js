const { sub, sum } = require('../functions');

// 👉 Can see all the expect functions through this site
//https://jestjs.io/docs/expect

// 👉 we can skip a test
test.skip('Testing sum function', () => {
    const result = sum(1, 2);
    expect(result).toBe(3); 
});

// 👉 we can skip test groups
describe.skip('Testing an expective value', () => {
    //toBe
    test('Testing sum function', () => {
        const result = sum(1, 2);
        expect(result).toBe(3); 
    });

    //to Equal
    test('Teting sub function', () => {
        const result = sub(4, 1);
        expect(result).toEqual(3);
    });
});

// 👉 we can use regex. this is a regex for ignore case sensitivity
// 👉 We can covert opposite functionality using not keyword 
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});