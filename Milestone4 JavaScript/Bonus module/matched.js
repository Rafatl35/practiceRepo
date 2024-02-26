const numbers = [43, 23, 45,98,45];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);
}

const products=[
    {id: 1, name:'walton phone 1', price: 19000},
    {id: 2, name:'walton laptop 2', price: 29000},
    {id: 3, name:'walton tab 3', price: 39000},
    {id: 4, name:'walton phone 4', price: 49000},
    {id: 5, name:'walton laptop 5', price: 59000},
    {id: 6, name:'walton phone 6', price: 69000},
    {id: 7, name:'walton tab 7', price: 79000},
    {id: 8, name:'walton phone 8', price: 89000},
    {id: 9, name:'walton laptop 9', price: 99000}
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(product, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);