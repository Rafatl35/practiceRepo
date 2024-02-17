const fruits = [
    {name: 'Apple', price: 50},
    {name: 'Orange', price: 60},
    {name: 'Banana', price: 10},
    {name: 'Mango', price: 30}
];

function totalprice(fruits){
    let total = 0;
    for(const fruit of fruits){
        total = total + fruit.price;
    }
    return total;
}
const totalsum = totalprice(fruits);
console.log('Sum of all fruits price:', totalsum);