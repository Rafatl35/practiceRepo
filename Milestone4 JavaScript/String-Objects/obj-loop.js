const mobile = {
    brand: 'xiaomi',
    price: 30000,
    coor: 'black',
    camera: '64mp',
    isNew: true
}
// for of : array
// for in : object
// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key, mobile[key])
}