const { fetchTodo, fetchTodos } = require('../functions');

//first method
test('Check a single todo way one', () => {
    fetchTodo(1).then( (todo) => {
        expect(todo.id).toBe(1);
    });
});

//second method
test('Check a single todo way two', async () => {
    const todo = await fetchTodo(1);
    expect(todo.id).toBe(1);
});

