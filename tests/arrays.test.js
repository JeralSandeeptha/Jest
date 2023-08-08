//In string functions 
// 👉 toContain()

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];
  
test('the shopping list has milk on it', () => {
    //find if contains in a array directly
    expect(shoppingList).toContain('milk');
    //create an object and then find
    expect(new Set(shoppingList)).toContain('milk');
});
