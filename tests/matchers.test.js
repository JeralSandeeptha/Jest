const { sum, sub } = require('../functions');

//In macthers functions 
// 👉 toBe()
// 👉 toEqual()

//This is a simple test case
test('Testing sum function', () => {
    const result = sum(1, 2);
    expect(result).toBe(3); 
})

//This is a testing group
describe('Testing an expective value', () => {
    //1️⃣ toBe()
    test('Testing sum function', () => {
        const result = sum(1, 2);
        expect(result).toBe(3); 
    })

    // 2️⃣ to Equal
    test('Teting sub function', () => {
        const result = sub(4, 1);
        expect(result).toEqual(3);
    });
});

