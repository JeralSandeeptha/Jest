const axios = require('axios');

const sum = (num1, num2) => {
    return num1 + num2;
}

const sub = (num2, num1) => {
    if (num1 > num2) {
        return 'First number should be greater than second number';
    }
    return num2 - num1;
}

const fetchTodo = async (id) => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return result.data;
}

const fetchTodos = () => {
    const results = axios.get('https://jsonplaceholder.typicode.com/todos');
    return results.data;
}

module.exports = {
    sum,
    sub,
    fetchTodo,
    fetchTodos
};