const {  } = require('../functions');

//In truthiness functions 
// 👉 toBeNull()
// 👉 toBeUndefined()
// 👉 toBeDefined()
// 👉 toBeTruthy()
// 👉 toBeFalsy()

//can check nullable values
test('To be truthiness', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

//can check zero values
test('To be zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});