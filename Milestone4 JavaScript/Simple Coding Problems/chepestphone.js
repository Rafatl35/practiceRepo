const phones = [
    {name: 'Sumsung', price: 30000, camara: '12mp', color: 'black'},
    {name: 'Oppo', price: 32000, camara: '18mp', color: 'Silver'},
    {name: 'Xoami', price: 40000, camara: '22mp', color: 'White'},
    {name: 'Iphone', price: 130000, camara: '12mp', color: 'black'},
    {name: 'Walton', price: 20000, camara: '12mp', color: 'black'},
];

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(phones);
console.log('Chepest phone is: ', cheap);