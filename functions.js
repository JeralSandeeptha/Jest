const sum = (num1, num2) => {
    return num1 + num2;
}

const sub = (num2, num1) => {
    if (num1 > num2) {
        return 'First number should be greater than second number';
    }
    return num2 - num1;
}

module.exports = {
    sum,
    sub
};