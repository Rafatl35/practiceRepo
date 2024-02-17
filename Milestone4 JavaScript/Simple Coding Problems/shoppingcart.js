const fruits = [
    {name: 'Apple', price: 50, quantity: 2},
    {name: 'Orange', price: 60, quantity: 4},
    {name: 'Banana', price: 10, quantity: 1},
    {name: 'Mango', price: 30, quantity: 3}
];

function cartTotal(fruits){
    let total = 0;
    for(const fruit of fruits){
        // total = total + fruit.price;
        const thisProduct = fruit.price * fruit.quantity;
        total = total + thisProduct;
    }
    return total;
}
const shoppingCost = cartTotal(fruits);
console.log('tota cost:', shoppingCost);